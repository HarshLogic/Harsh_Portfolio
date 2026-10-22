"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * High-performance decoupled cursor system:
 * - Primary Dot: tracks pointer directly with 0ms latency.
 * - Outer Ring: floats independently using an RAF lerp physics loop (smooth trailing lag).
 * - Zero React state re-renders during mousemove.
 * - Completely disabled on touch devices and reduced-motion environments.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Mutable coordinates without re-triggering component renders
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef(null);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // 1. Check touch device or reduced-motion preferences
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const onPointerMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current.x = x;
      mousePos.current.y = y;

      if (!isVisible.current) {
        isVisible.current = true;
        // Seed initial ring position so it doesn't fly across the viewport on first enter
        ringPos.current.x = x;
        ringPos.current.y = y;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Move primary dot DIRECTLY with 0ms latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      // Check clickable targets for hover expansion
      const target = e.target;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("clickable");

        if (isClickable !== isHovered.current) {
          isHovered.current = isClickable;
          if (ringRef.current) {
            if (isClickable) {
              ringRef.current.classList.add("scale-150", "bg-cinematic-ice/15", "border-cinematic-ice/70");
              ringRef.current.classList.remove("border-cinematic-ice/40");
            } else {
              ringRef.current.classList.remove("scale-150", "bg-cinematic-ice/15", "border-cinematic-ice/70");
              ringRef.current.classList.add("border-cinematic-ice/40");
            }
          }
        }
      }
    };

    const onPointerLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onPointerEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    document.addEventListener("mouseenter", onPointerEnter);

    // Independent trailing physics animation loop for outer ring (0.12 lerp factor)
    const renderRing = () => {
      if (isVisible.current && ringRef.current) {
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(renderRing);
    };

    rafId.current = requestAnimationFrame(renderRing);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      document.removeEventListener("mouseenter", onPointerEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* 1. Primary Direct Dot (Instant pointer tracking) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cinematic-ice pointer-events-none z-[9999] opacity-0 will-change-transform shadow-[0_0_8px_rgba(145,183,255,0.8)]"
        aria-hidden="true"
      />

      {/* 2. Trailing Outer Ring (Independent smooth lag) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-cinematic-ice/40 pointer-events-none z-[9998] opacity-0 will-change-transform transition-[width,height,background-color,border-color,transform] duration-200 ease-out"
        aria-hidden="true"
      />
    </>
  );
}
