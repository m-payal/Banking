
import React from 'react';

const UserFlowsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-32">
      <header className="max-w-3xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
          Detailed Logic Paths
        </div>
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">System Architecture & <span className="text-primary">Logic</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          Visualizing the internal mechanics of the Rasa framework and how the application processes raw text into actionable banking services.
        </p>
      </header>

      {/* System Architecture */}
      <section className="space-y-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
            <span className="material-icons-round text-sm">hub</span>
          </div>
          <h2 className="text-2xl font-bold">System Architecture (Rasa Core & NLU)</h2>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-10 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12">
            {/* Rasa NLU Block */}
            <div className="flex-1 p-8 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 relative">
              <div className="absolute top-4 left-4 text-[10px] font-black text-indigo-400 uppercase tracking-widest">Rasa NLU</div>
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-sm font-bold border-l-4 border-indigo-500">
                  Intent Classification
                  <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase">User Input Analysis</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-sm font-bold border-l-4 border-indigo-500">
                  Entity Extraction
                  <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase">Parameter Parsing</p>
                </div>
              </div>
            </div>

            {/* Central Connector */}
            <div className="flex flex-col items-center justify-center text-slate-300">
              <span className="material-icons-round text-4xl hidden lg:block">arrow_forward</span>
              <span className="material-icons-round text-4xl lg:hidden">arrow_downward</span>
            </div>

            {/* Rasa Core Block */}
            <div className="flex-1 p-8 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 relative">
              <div className="absolute top-4 left-4 text-[10px] font-black text-emerald-400 uppercase tracking-widest">Rasa Core</div>
              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-[10px] font-black text-center uppercase border border-emerald-100 dark:border-emerald-800">Action Mask</div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-[10px] font-black text-center uppercase border border-emerald-100 dark:border-emerald-800">Recurrent NN</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-sm font-bold border-l-4 border-emerald-500">
                  Renormalization
                  <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase">State Probability Update</p>
                </div>
                <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg text-sm font-bold text-center">
                  Sample Action
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-500 font-medium italic text-center">
            Integration point: The model predicts the next best action based on conversation history and current intent scores.
          </p>
        </div>
      </section>

      {/* Application Logic Modules */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <span className="material-icons-round text-primary">account_tree</span>
          Application Logic Modules
        </h2>
        <div className="grid lg:grid-cols-4 gap-6">
          {[
            { title: 'NLU Toolkit', desc: 'Classification and extraction using supervised learning.', color: 'border-indigo-500' },
            { title: 'Dialog Mgmt', desc: 'Handles conversational state using core models and action sets.', color: 'border-emerald-500' },
            { title: 'FAQ Retrieval', desc: 'Scraped CSV-based system for static query resolution.', color: 'border-primary' },
            { title: 'Doc Search', desc: 'Document and Webpage search module for deep inquiries.', color: 'border-amber-500' }
          ].map((module, i) => (
            <div key={i} className={`p-8 bg-white dark:bg-slate-900 rounded-3xl border-t-4 ${module.color} shadow-sm space-y-4`}>
              <h4 className="font-bold text-lg">{module.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{module.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Flow Diagram (Decision Path) */}
      <section className="space-y-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
            <span className="material-icons-round text-sm">schema</span>
          </div>
          <h2 className="text-2xl font-bold">Decision-Making Data Flow</h2>
        </div>
        <div className="relative p-12 bg-slate-50 dark:bg-slate-950 rounded-[48px] border border-slate-100 dark:border-slate-800">
          <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
            {/* Start Node */}
            <div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center font-black uppercase text-[10px] tracking-widest shadow-xl ring-4 ring-white dark:ring-slate-900">Start</div>
            <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

            {/* Processing Block */}
            <div className="w-full max-w-sm p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-800 font-bold text-sm">
              Data Extraction (BeautifulSoup) & Preprocessing (Pandas)
            </div>
            <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

            {/* Input Node */}
            <div className="w-full max-w-xs p-5 bg-primary text-white rounded-2xl text-center font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
              <span className="material-icons-round text-sm">message</span>
              Accept User Message
            </div>
            <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

            {/* Intent Decision Node */}
            <div className="relative w-40 h-40 bg-white dark:bg-slate-900 border-2 border-primary rotate-45 flex items-center justify-center shadow-xl group hover:scale-105 transition-transform">
              <div className="-rotate-45 text-center px-4">
                <p className="text-[10px] font-black uppercase text-primary mb-1">Intent Match?</p>
                <p className="text-xs font-bold leading-tight">Question Intent Threshold</p>
              </div>
            </div>

            {/* Branches */}
            <div className="flex w-full justify-center items-start gap-12 lg:gap-32">
              {/* YES Branch */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-0.5 bg-emerald-500"></div>
                <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">Yes</div>
                <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl text-center max-w-[200px] shadow-sm">
                  <span className="material-icons-round text-emerald-500 mb-2">auto_awesome</span>
                  <p className="text-xs font-bold">Call BERT Model to answer</p>
                </div>
              </div>

              {/* NO Branch */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-0.5 bg-amber-500"></div>
                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4">No</div>
                <div className="p-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/30 rounded-2xl text-center max-w-[200px] shadow-sm">
                  <span className="material-icons-round text-amber-500 mb-2">settings</span>
                  <p className="text-xs font-bold">Call Predefined Actions (Rasa Core)</p>
                </div>
              </div>
            </div>

            <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
            {/* End Node */}
            <div className="w-full max-w-xs p-5 bg-slate-900 text-white rounded-2xl text-center font-bold text-sm shadow-xl">
              Response to the User
            </div>
          </div>
        </div>
      </section>

      {/* Sequence & Logic Interaction */}
      <section className="space-y-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
            <span className="material-icons-round text-sm">sync_alt</span>
          </div>
          <h2 className="text-2xl font-bold">Sequence & Logic Interaction</h2>
        </div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><span className="material-icons-round text-slate-400">person</span></div>
              <p className="text-xs font-black uppercase tracking-widest">User</p>
            </div>
            <div className="flex-1 w-full flex flex-col gap-6 md:gap-8">
              {/* Line 1 */}
              <div className="relative w-full">
                <div className="h-0.5 w-full bg-slate-100 dark:bg-slate-800" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="max-w-[70%] md:max-w-[60%] px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-lg border border-primary/20 text-center truncate z-10">
                    Input Message
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>

              {/* Line 2 */}
              <div className="relative w-full">
                <div className="h-0.5 w-full bg-slate-100 dark:bg-slate-800" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="max-w-[70%] md:max-w-[60%] px-3 py-1 bg-indigo-50/50 text-indigo-500 text-[10px] font-black uppercase rounded-lg border border-indigo-100 text-center truncate z-10">
                    Compare Strings (DB)
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center"><span className="material-icons-round">smart_toy</span></div>
              <p className="text-xs font-black uppercase tracking-widest">Chatbot</p>
            </div>
          </div>
          <p className="text-center text-xs font-medium text-slate-500 px-12 pb-8">
            The chatbot database stores training samples and pre-extracted FAQ content. Upon input, a string comparison and intent lookup are performed simultaneously to determine the highest confidence path.
          </p>
        </div>
      </section>

      {/* Voice-to-Text Integration */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-primary/5 dark:bg-primary/10 p-12 rounded-[48px] border border-primary/10 shadow-inner">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
            <span className="material-icons-round text-3xl">mic</span>
          </div>
          <h3 className="text-3xl font-bold">Voice-to-Text Integration</h3>
          <ol className="space-y-4 text-slate-600 dark:text-slate-400 font-medium list-decimal list-inside">
            <li>User clicks on the microphone icon provided on the UI.</li>
            <li>The system triggers the Web Speech API recognition process.</li>
            <li>Captured audio is converted to a text string in real-time.</li>
            <li>The text is automatically inserted into the chat buffer and processed as a standard text input.</li>
          </ol>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none rounded-3xl"></div>
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[0, 0.2, 0.4, 0.6, 0.4, 0.2, 0.1].map((delay, i) => (
                <div key={i} className="w-1 h-12 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }}></div>
              ))}
            </div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Automatic Conversion Active</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserFlowsView;
