
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseStudyView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>UX Case Study • Retrieval-Based Chatbot</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tighter">
              Conversational AI <br/>
              <span className="text-primary">Banking Assistant</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              Bridging the gap between clients and service providers using Rasa-driven intent classification and retrieval logic.
            </p>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-700 p-4 transform hover:rotate-1 transition-transform duration-500 overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-[32px] overflow-hidden">
                <img 
                  alt="Banking App Interface" 
                  className="w-full h-auto" 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <div className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Role', val: 'Software Dev Intern' },
              { label: 'Duration', val: '20 Weeks' },
              { label: 'Core Framework', val: 'Python, NLP, SQL' },
              { label: 'Action Accuracy', val: '90.2%' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className="font-bold text-lg text-slate-900 dark:text-white leading-tight">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem & Goal */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <h3 className="text-2xl font-bold mb-4 text-primary">Conclusion</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Chatbots are essential in the banking industry for filling communication gaps. Our implementation focused on a <strong>Retrieval-Based</strong> model where accuracy relies heavily on robust intent identification.
          </p>
        </div>
        <div className="p-10 rounded-3xl bg-primary text-white">
          <h3 className="text-2xl font-bold mb-4">Core Focus</h3>
          <ul className="space-y-4 font-medium opacity-90">
            <li className="flex items-center gap-2"><span className="material-icons-round text-sm">check_circle</span> Intent Identification Capability</li>
            <li className="flex items-center gap-2"><span className="material-icons-round text-sm">check_circle</span> Retrieval Based Logic</li>
            <li className="flex items-center gap-2"><span className="material-icons-round text-sm">check_circle</span> Seamless Backend Integration</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyView;
