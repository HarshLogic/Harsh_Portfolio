"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Server, Database, Play, RotateCcw, CheckCircle2, Shield, Activity, Layers, ArrowRight } from "lucide-react";

export default function SystemArchitectureVisualizer() {
  const [activeTab, setActiveTab] = useState("queue"); // "queue" | "vm" | "ledger"

  // 1. Queue Simulator State
  const [queueDepth, setQueueDepth] = useState(140);
  const [processedCount, setProcessedCount] = useState(10450);
  const [workersActive, setWorkersActive] = useState([true, true, true, true, true]);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    if (!isProcessing) return;
    const interval = setInterval(() => {
      setProcessedCount((prev) => prev + 5);
      setQueueDepth((prev) => (prev > 10 ? prev - 5 : prev + 45));
    }, 1200);
    return () => clearInterval(interval);
  }, [isProcessing]);

  // 2. VM CPU Stepper State
  const vmInstructions = [
    { op: "LOAD_CONST", arg: "0x1A (Val: 25)", desc: "Push literal integer onto execution stack" },
    { op: "LOAD_CONST", arg: "0x2B (Val: 15)", desc: "Push literal integer onto execution stack" },
    { op: "ADD_I32", arg: "None", desc: "Pop top two words, compute sum 40, push result" },
    { op: "STORE_MEM", arg: "Addr: 0x08F4", desc: "Write 40 into virtual memory page via TLB" },
    { op: "LRU_TOUCH", arg: "Page #4", desc: "Update O(1) Doubly Linked List cache order" },
  ];
  const [stepIndex, setStepIndex] = useState(2);
  const [registers, setRegisters] = useState({
    PC: "0x0014",
    SP: "0x00FF",
    AX: "0x0028 (40)",
    BX: "0x000F (15)",
  });
  const [cachePages, setCachePages] = useState(["Page #4 (MRU)", "Page #1", "Page #7", "Page #2 (LRU)"]);

  const stepForward = () => {
    const next = (stepIndex + 1) % vmInstructions.length;
    setStepIndex(next);
    if (next === 2) {
      setRegisters({ PC: "0x0018", SP: "0x00FD", AX: "0x0028 (40)", BX: "0x000F (15)" });
      setCachePages(["Page #4 (MRU)", "Page #1", "Page #7", "Page #2 (LRU)"]);
    } else if (next === 3) {
      setRegisters({ PC: "0x001C", SP: "0x00FE", AX: "0x0028", BX: "0x0000" });
    } else {
      setRegisters({ PC: "0x0020", SP: "0x00FF", AX: "0x001A", BX: "0x002B" });
      setCachePages(["Page #8 (MRU)", "Page #4", "Page #1", "Page #7 (LRU)"]);
    }
  };

  return (
    <div id="architecture" className="w-full my-12 rounded-3xl bg-space-900 border border-space-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-space-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cinematic-ice/10 border border-cinematic-ice/20 text-cinematic-ice font-mono text-xs mb-2">
            <Activity size={13} />
            <span>Interactive Systems Architecture Inspector</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-sans font-semibold text-cinematic-ivory">
            Under-The-Hood Engineering Demonstrations
          </h3>
          <p className="text-xs sm:text-sm text-cinematic-silver mt-1">
            Toggle between live architectural simulations of queue concurrency, stack VM execution, and double-entry invariants.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center bg-space-950 p-1.5 rounded-xl border border-space-800">
          <button
            onClick={() => setActiveTab("queue")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === "queue"
                ? "bg-space-850 text-cinematic-ice border border-cinematic-ice/30 shadow-sm"
                : "text-cinematic-silver hover:text-cinematic-ivory"
            }`}
          >
            Worker Queue (10k/hr)
          </button>
          <button
            onClick={() => setActiveTab("vm")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === "vm"
                ? "bg-space-850 text-cinematic-ice border border-cinematic-ice/30 shadow-sm"
                : "text-cinematic-silver hover:text-cinematic-ivory"
            }`}
          >
            Stack VM & O(1) Cache
          </button>
          <button
            onClick={() => setActiveTab("ledger")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === "ledger"
                ? "bg-space-850 text-cinematic-ice border border-cinematic-ice/30 shadow-sm"
                : "text-cinematic-silver hover:text-cinematic-ivory"
            }`}
          >
            ACID Ledger (Bankify)
          </button>
        </div>
      </div>

      {/* Tab 1: BullMQ Worker Pipeline */}
      {activeTab === "queue" && (
        <div className="mt-6 space-y-6">
          {/* Metrics Status Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-space-950 border border-space-800">
              <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">Processed Logs</span>
              <span className="text-lg font-mono font-bold text-cinematic-ivory">{processedCount.toLocaleString()}</span>
              <span className="text-[10px] text-emerald-400 block font-mono">Elasticsearch indexed</span>
            </div>
            <div className="p-3.5 rounded-xl bg-space-950 border border-space-800">
              <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">Active Queue Depth</span>
              <span className="text-lg font-mono font-bold text-cinematic-ice">{queueDepth} jobs</span>
              <span className="text-[10px] text-cinematic-silver block font-mono">Redis BullMQ priority</span>
            </div>
            <div className="p-3.5 rounded-xl bg-space-950 border border-space-800">
              <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">Search Latency</span>
              <span className="text-lg font-mono font-bold text-emerald-400">&lt; 38 ms</span>
              <span className="text-[10px] text-cinematic-silver block font-mono">100k+ logs audit</span>
            </div>
            <div className="p-3.5 rounded-xl bg-space-950 border border-space-800">
              <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">Concurrency</span>
              <span className="text-lg font-mono font-bold text-cinematic-ivory">5 Worker Threads</span>
              <span className="text-[10px] text-emerald-400 block font-mono">0 thread deadlocks</span>
            </div>
          </div>

          {/* Visual Architecture Diagram */}
          <div className="p-5 rounded-2xl bg-space-950 border border-space-800 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Ingestion REST API */}
            <div className="flex-1 p-4 rounded-xl bg-space-900 border border-space-700/80 text-center w-full">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-cinematic-ivory font-semibold mb-1">
                <Server size={14} className="text-cinematic-ice" />
                <span>Next.js API Ingestion</span>
              </div>
              <p className="text-[11px] text-cinematic-silver font-mono">Validates CSV & 5k recipients in &lt;2s</p>
            </div>

            <ArrowRight size={20} className="text-cinematic-dim hidden md:block shrink-0" />

            {/* Redis & BullMQ Queue */}
            <div className="flex-1 p-4 rounded-xl bg-space-900 border border-cinematic-ice/40 text-center w-full shadow-glow-ice">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-cinematic-ice font-semibold mb-1">
                <Database size={14} />
                <span>Redis + BullMQ Queue</span>
              </div>
              <p className="text-[11px] text-cinematic-silver font-mono">{queueDepth} pending dispatch payloads</p>
            </div>

            <ArrowRight size={20} className="text-cinematic-dim hidden md:block shrink-0" />

            {/* 5 Worker Pool */}
            <div className="flex-1 p-4 rounded-xl bg-space-900 border border-space-700/80 text-center w-full">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-cinematic-ivory font-semibold mb-2">
                <Cpu size={14} className="text-emerald-400" />
                <span>5x Worker Thread Pool</span>
              </div>
              <div className="flex justify-center gap-1.5">
                {workersActive.map((active, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"
                    title={`Worker #${i + 1} healthy`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Controller Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <span className="text-xs font-mono text-cinematic-dim">
              Simulating batch processing at 10,000+ operations/hour capacity.
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQueueDepth((d) => d + 250)}
                className="px-3.5 py-1.5 rounded-lg bg-space-850 hover:bg-space-800 border border-space-700 text-xs font-mono text-cinematic-ivory transition-colors"
              >
                + Inject 250 Batch Emails
              </button>
              <button
                onClick={() => setIsProcessing(!isProcessing)}
                className="px-3.5 py-1.5 rounded-lg bg-cinematic-ice/10 border border-cinematic-ice/30 text-xs font-mono text-cinematic-ice hover:bg-cinematic-ice/20 transition-colors"
              >
                {isProcessing ? "Pause Queue Consumer" : "Resume Queue Consumer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Custom OS & Virtual Machine */}
      {activeTab === "vm" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Registers & State */}
            <div className="md:col-span-4 p-4 rounded-2xl bg-space-950 border border-space-800 space-y-3">
              <span className="text-xs font-mono text-cinematic-dim uppercase tracking-wider block">
                CPU Registers & Stack
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between p-2 rounded bg-space-900 border border-space-800">
                  <span className="text-cinematic-silver">PC (Program Counter):</span>
                  <span className="text-cinematic-ice font-bold">{registers.PC}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-space-900 border border-space-800">
                  <span className="text-cinematic-silver">SP (Stack Pointer):</span>
                  <span className="text-cinematic-ivory">{registers.SP}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-space-900 border border-space-800">
                  <span className="text-cinematic-silver">AX (Accumulator):</span>
                  <span className="text-emerald-400 font-bold">{registers.AX}</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-space-900 border border-space-800">
                  <span className="text-cinematic-silver">BX (General Reg):</span>
                  <span className="text-cinematic-ivory">{registers.BX}</span>
                </div>
              </div>
            </div>

            {/* Stepper & Execution Log */}
            <div className="md:col-span-8 p-4 rounded-2xl bg-space-950 border border-space-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cinematic-dim uppercase tracking-wider">
                    Fetch-Decode-Execute Micro-Cycle
                  </span>
                  <span className="text-[11px] font-mono text-cinematic-ice">Instruction #{stepIndex + 1} of 5</span>
                </div>

                <div className="space-y-2">
                  {vmInstructions.map((inst, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border font-mono text-xs flex items-center justify-between transition-all ${
                        idx === stepIndex
                          ? "bg-space-900 border-cinematic-ice text-cinematic-ivory shadow-glow-ice"
                          : "bg-space-950/60 border-space-850 text-cinematic-dim"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 text-right text-cinematic-dim">{idx}:</span>
                        <span className="font-bold text-cinematic-ice">{inst.op}</span>
                        <span className="text-cinematic-silver">{inst.arg}</span>
                      </div>
                      <span className="text-[11px] text-cinematic-dim hidden sm:inline">{inst.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* O(1) LRU Cache Row */}
              <div className="mt-4 pt-3 border-t border-space-850 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-cinematic-dim">LRU Cache:</span>
                  <div className="flex gap-1.5">
                    {cachePages.map((page, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          i === 0
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : i === cachePages.length - 1
                            ? "bg-rose-500/10 text-rose-300 border border-rose-500/20"
                            : "bg-space-900 text-cinematic-silver border border-space-800"
                        }`}
                      >
                        {page}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={stepForward}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cinematic-ivory text-space-950 text-xs font-mono font-medium hover:bg-cinematic-ice transition-colors"
                >
                  <Play size={12} />
                  <span>Step CPU</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Double-Entry ACID Ledger (Bankify) */}
      {activeTab === "ledger" && (
        <div className="mt-6 space-y-5">
          <div className="p-4 rounded-2xl bg-space-950 border border-space-800">
            <div className="flex items-center justify-between pb-3 border-b border-space-850">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-400" />
                <span className="text-xs font-mono text-cinematic-ivory font-semibold">
                  Atomic Transfer Transaction (Tx ID: #TX-9028-ACID)
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                MongoDB Two-Phase Session Verified
              </span>
            </div>

            {/* Invariant Equation */}
            <div className="my-4 p-3 rounded-xl bg-space-900/80 border border-space-800 text-center font-mono text-xs">
              <span className="text-cinematic-dim">Accounting Invariant: </span>
              <span className="text-emerald-400 font-bold">∑ DEBITS ($250.00) = ∑ CREDITS ($250.00)</span>
              <span className="text-cinematic-dim"> · Delta = $0.00 (Zero Drift)</span>
            </div>

            {/* Ledger Rows */}
            <div className="space-y-2 text-xs font-mono">
              <div className="grid grid-cols-12 p-2.5 rounded-lg bg-space-900 border border-space-800 items-center">
                <span className="col-span-3 text-cinematic-silver">Account A (Sender)</span>
                <span className="col-span-3 text-rose-400 font-bold">DEBIT -$250.00</span>
                <span className="col-span-3 text-cinematic-dim">Balance: $1,450.00</span>
                <span className="col-span-3 text-right text-emerald-400 text-[11px]">✓ Row Committed</span>
              </div>

              <div className="grid grid-cols-12 p-2.5 rounded-lg bg-space-900 border border-space-800 items-center">
                <span className="col-span-3 text-cinematic-silver">Account B (Receiver)</span>
                <span className="col-span-3 text-emerald-400 font-bold">CREDIT +$250.00</span>
                <span className="col-span-3 text-cinematic-dim">Balance: $3,200.00</span>
                <span className="col-span-3 text-right text-emerald-400 text-[11px]">✓ Row Committed</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-space-850 flex items-center justify-between text-[11px] font-mono text-cinematic-dim">
              <span>Idempotency-Key: c9b2f671-89a0-4c28 (Cached in Redis 24h)</span>
              <span className="text-cinematic-silver">Network Retry Safe: Yes</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
