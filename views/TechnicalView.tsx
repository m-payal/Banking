
import React, { useState } from 'react';

interface PhaseDetail {
  howDone: string;
  flow: string;
  tools: string[];
  difficulties: string;
}

interface RoadmapItem {
  phase: string;
  details: string;
  status: string;
  icon: string;
  extendedDetails: PhaseDetail;
}

const TechnicalView: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const roadmapData: RoadmapItem[] = [
    {
      phase: "Phase 1: Research & Requirement Analysis",
      details: "Literature survey of existing banking bots and definition of SRS.",
      status: "Completed",
      icon: "search",
      extendedDetails: {
        howDone: "Conducted extensive primary and secondary research on conversational agents in banking. Analyzed Jarvis and other Intelligent Assistant systems.",
        flow: "Literature Survey -> Problem Definition -> SRS Documentation -> Feasibility Study.",
        tools: ["Google Scholar", "IEEE Xplore", "Microsoft Word", "Notion"],
        difficulties: "Defining clear boundaries for the project scope while ensuring high security compliance for banking data."
      }
    },
    {
      phase: "Phase 2: NLU Pipeline & Core Development",
      details: "Implementation of Rasa NLU for intent classification and entity extraction.",
      status: "Completed",
      icon: "code",
      extendedDetails: {
        howDone: "Built the NLU pipeline using Rasa Open Source. Trained the model on domain-specific banking intents like balance inquiries and card services.",
        flow: "Intent Design -> Training Data Collection -> Pipeline Configuration -> Model Training.",
        tools: ["Rasa Open Source", "Python 3.7", "Flask", "MySQL"],
        difficulties: "Managing context in long-running conversations and ensuring high confidence scores across similar banking intents."
      }
    },
    {
      phase: "Phase 3: LLM Integration (BERT & Gemini)",
      details: "Enhancing retrieval logic with semantic matching and generative reasoning.",
      status: "Enhanced",
      icon: "auto_awesome",
      extendedDetails: {
        howDone: "Integrated BERT for semantic string comparison and Gemini for Natural Language Generation in fallback scenarios.",
        flow: "Rasa Fallback -> BERT Check -> Gemini Call -> UI Rendering.",
        tools: ["BERT", "Google Gemini API", "PyTorch", "Hugging Face"],
        difficulties: "Balancing the latency of LLM calls with the real-time requirements of a responsive chat interface."
      }
    },
    {
      phase: "Phase 4: Future Work & Complex Tasks",
      details: "Automating loan pre-approvals and human-level emotional connection.",
      status: "In Progress",
      icon: "rocket_launch",
      extendedDetails: {
        howDone: "Developing custom action scripts for complex logic like loan eligibility prediction based on user credit data.",
        flow: "User Query -> Data Fetch -> Eligibility Engine -> Generative Explanation.",
        tools: ["Python Pandas", "scikit-learn", "AI Agents"],
        difficulties: "Ensuring explainability of AI-driven loan decisions to meet regulatory transparency requirements."
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-32">
      <header className="max-w-3xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
          Technical Specification
        </div>
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">Architecture & <span className="text-primary">Roadmap</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          A deep dive into the system requirements, development lifecycle, and the transition from retrieval-based models to LLM-enhanced intelligence.
        </p>
      </header>

      {/* Development Roadmap */}
      <section className="space-y-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-icons-round">timeline</span>
          </div>
          <h2 className="text-3xl font-bold">Interactive Project Roadmap</h2>
        </div>
        
        <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-6 pl-12 space-y-8">
          {roadmapData.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[61px] top-0 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-primary group-hover:scale-125 transition-transform z-10"></div>
              <button 
                onClick={() => setSelectedPhase(selectedPhase === i ? null : i)}
                className={`w-full text-left p-8 bg-white dark:bg-slate-900 border ${selectedPhase === i ? 'border-primary ring-2 ring-primary/10 shadow-lg' : 'border-slate-100 dark:border-slate-800 shadow-sm'} rounded-3xl transition-all group-hover:shadow-md cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-lg">{item.phase}</h4>
                  <div className="flex items-center gap-3">
                    <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${item.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-primary/10 text-primary'}`}>
                      {item.status}
                    </span>
                    <span className="material-icons-round text-slate-400 text-sm">
                      {selectedPhase === i ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {item.details}
                </p>

                {/* Extended Details (Accordion) */}
                {selectedPhase === i && (
                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-[10px] font-black uppercase text-primary tracking-widest mb-2">How it was done</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.extendedDetails.howDone}</p>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black uppercase text-primary tracking-widest mb-2">Flow Chart Path</h5>
                        <p className="text-xs font-mono p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-slate-500">
                          {item.extendedDetails.flow}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-[10px] font-black uppercase text-primary tracking-widest mb-2">Tools Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {item.extendedDetails.tools.map((tool, ti) => (
                            <span key={ti} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black uppercase text-amber-500 tracking-widest mb-2">Difficulties Faced</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-2 border-amber-500 pl-4">
                          {item.extendedDetails.difficulties}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Agile SDLC Section */}
      <section className="bg-slate-50 dark:bg-slate-950 p-12 rounded-[48px] border border-slate-100 dark:border-slate-800 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <span className="material-icons-round text-[240px]">sync</span>
        </div>
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold">3.5 Agile Life Cycle</h2>
          <div className="relative aspect-square max-w-sm mx-auto flex items-center justify-center">
            <div className="w-full h-full border-8 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-black text-primary mb-2">AGILE</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Iterative & Incremental</p>
            </div>
            {[
              { label: 'Plan', angle: 0 },
              { label: 'Design', angle: 60 },
              { label: 'Develop', angle: 120 },
              { label: 'Test', angle: 180 },
              { label: 'Release', angle: 240 },
              { label: 'Feedback', angle: 300 }
            ].map((step, i) => (
              <div 
                key={i}
                className="absolute w-16 h-16 bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center text-[10px] font-black uppercase transition-all hover:scale-110 hover:border-primary"
                style={{
                  transform: `rotate(${step.angle}deg) translateY(-140px) rotate(-${step.angle}deg)`
                }}
              >
                {step.label}
              </div>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Project tasks were divided into various time boxes. This approach helped in minimizing error possibilities and allowed regular adaptation to changing circumstances.
          </p>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg">
            <span className="material-icons-round">inventory_2</span>
          </div>
          <h2 className="text-3xl font-bold">Modernized Stack & Requirements</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Hardware Requirements</h4>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><span className="material-icons-round text-primary text-sm">processor</span> Dual Core 1.6GHz+</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-primary text-sm">memory</span> 8GB RAM Minimum</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-primary text-sm">storage</span> 1TB HDD / SSD</li>
            </ul>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Core Frameworks</h4>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><span className="material-icons-round text-indigo-500 text-sm">terminal</span> Python 3.7+</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-indigo-500 text-sm">psychology</span> Rasa Open Source</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-indigo-500 text-sm">lan</span> Flask WSGI</li>
            </ul>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Database Layers</h4>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><span className="material-icons-round text-emerald-500 text-sm">storage</span> MySQL (Credentials)</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-emerald-500 text-sm">folder</span> CSV (FAQ Dataset)</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-emerald-500 text-sm">cloud_sync</span> API Persistence</li>
            </ul>
          </div>

          <div className="p-8 bg-primary text-white rounded-3xl space-y-4 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
            <h4 className="text-[10px] font-black uppercase text-white/60 tracking-widest">LLM Integration</h4>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><span className="material-icons-round text-white text-sm">hub</span> BERT Semantic Search</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-white text-sm">bolt</span> Gemini 3 Flash</li>
              <li className="flex items-center gap-2"><span className="material-icons-round text-white text-sm">auto_fix_high</span> Contextual NLG</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dynamic Application Logic */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Dynamic Application Logic</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            While the original architecture focused on retrieval-based intents, we have evolved the logic to use <strong>Hybrid Intelligence</strong>. The system first checks for high-confidence intent matches via Rasa/BERT, and falls back to a Gemini-powered conversational chain if the query requires generative reasoning.
          </p>
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <h5 className="font-bold text-sm mb-4">Handling Uncertain Inputs</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">1</span>
                Accept user message
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">2</span>
                Identify underlying intent
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-primary">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px]">3</span>
                Check BERT Semantic Match
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">4</span>
                Respond via LLM if Retrieval fails
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-[48px] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
          <div className="relative text-center space-y-6">
            <span className="material-icons-round text-7xl text-primary mb-4">model_training</span>
            <h4 className="text-xl font-bold">LLM Orchestration</h4>
            <p className="text-xs text-slate-500 font-medium">
              Moving beyond predefined actions to dynamic query resolution. BERT provides the "What", Gemini provides the "How".
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
              <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Model Confidence</div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[94%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalView;
