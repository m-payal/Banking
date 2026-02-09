
import React from 'react';

const ErrorStatesView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-32">
      <header className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-3">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">UX Case Study</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
          Handling Uncertainty:<br/><span className="text-primary">Error States & Edge Cases</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          I redesigned the failure path into a guided clarification flow that keeps users within the banking ecosystem instead of hitting a dead end.
        </p>
      </header>

      {/* Comparison Grid */}
      <section className="grid lg:grid-cols-2 gap-12">
        {/* The Bad Way */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
              <span className="material-icons-round text-amber-500">warning</span>
              The Status Quo: Generic Failure
            </h3>
            <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Legacy Flow</span>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 rounded-[40px] p-12 flex flex-col items-center">
            <div className="w-full max-w-sm aspect-[9/16] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[48px] shadow-2xl p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><span className="material-icons-round text-slate-300">smart_toy</span></div>
                <div className="text-[10px] font-black uppercase text-slate-400">Legacy Bot</div>
              </div>
              <div className="self-end bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tr-none text-xs font-bold mb-6">Money</div>
              <div className="self-start bg-white dark:bg-slate-900 border border-amber-200 p-4 rounded-2xl rounded-tl-none text-xs font-bold shadow-sm">
                I'm sorry, I didn't understand that request. Please try rephrasing or type 'Help'.
              </div>
              <div className="mt-auto pt-8 border-t border-dashed border-slate-100 text-center">
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Intent Confidence</div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden"><div className="bg-amber-400 h-full w-[22%]"></div></div>
                <div className="text-[10px] font-bold text-amber-500 mt-1">22% Match (Hard Fail)</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Good Way */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
              <span className="material-icons-round text-primary">verified</span>
              The Solution: Guided Recovery
            </h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Intern Approach</span>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 rounded-[40px] p-12 flex flex-col items-center border border-primary/10">
            <div className="w-full max-w-sm aspect-[9/16] bg-white dark:bg-slate-950 border-2 border-primary/20 rounded-[48px] shadow-2xl p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg"><span className="material-icons-round text-sm">auto_awesome</span></div>
                <div className="text-[10px] font-black uppercase text-primary">Smart Assistant</div>
              </div>
              <div className="self-end bg-primary text-white p-4 rounded-2xl rounded-tr-none text-xs font-bold mb-6">Money</div>
              <div className="self-start bg-white dark:bg-slate-900 border border-slate-100 p-4 rounded-2xl rounded-tl-none text-xs font-bold mb-4 shadow-sm">
                I'm not exactly sure what you'd like to do. Would you like to:
              </div>
              <div className="space-y-2">
                {['Check Balance', 'Transfer Funds', 'Pay Bill'].map(opt => (
                  <button key={opt} className="w-full p-4 rounded-2xl border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest text-left flex justify-between items-center">
                    {opt} <span className="material-icons-round text-xs">chevron_right</span>
                  </button>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-dashed border-primary/10 text-center">
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Intent Confidence</div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden"><div className="bg-primary h-full w-[54%]"></div></div>
                <div className="text-[10px] font-bold text-primary mt-1">54% Match (Recovery Triggered)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Fallback Logic */}
      <section className="text-center space-y-16">
        <h2 className="text-4xl font-extrabold tracking-tight">Tiered Fallback Architecture</h2>
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[48px] p-16 flex flex-col md:row items-center justify-center gap-12 overflow-x-auto">
          <div className="flex flex-col items-center gap-4 min-w-[120px]">
            <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400"><span className="material-icons-round text-4xl">chat</span></div>
            <div className="text-[10px] font-black uppercase tracking-widest">User Input</div>
          </div>
          <div className="hidden md:block w-12 border-t-2 border-slate-100"></div>
          <div className="w-40 h-40 rounded-full bg-slate-950 border-4 border-primary flex flex-col items-center justify-center text-white shadow-2xl">
            <span className="text-[9px] font-black text-primary uppercase mb-1">NLU Engine</span>
            <span className="text-2xl font-black italic">Score?</span>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { label: '> 85% Confidence', desc: 'Direct Fulfillment', color: 'text-emerald-500 bg-emerald-50', icon: 'check' },
              { label: '65% - 85% Score', desc: 'Clarification Loop', color: 'text-primary bg-primary/10 ring-2 ring-primary/20', icon: 'sync' },
              { label: '< 65% Confidence', desc: 'Human Handoff', color: 'text-amber-500 bg-amber-50', icon: 'person' }
            ].map((path, i) => (
              <div key={i} className={`flex items-center gap-6 px-8 py-4 rounded-3xl ${path.color} min-w-[280px]`}>
                <span className="material-icons-round">{path.icon}</span>
                <div className="text-left">
                  <div className="font-black text-xs uppercase tracking-tight">{path.label}</div>
                  <div className="text-[10px] font-bold opacity-60">{path.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorStatesView;
