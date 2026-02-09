
import React from 'react';

const ResultsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Methodology Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block">Methodology</span>
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">White Box Testing</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Internal structures of our ML Model and Web application were thoroughly tested. We identified internal errors and failures to ensure a smoother experience.
          </p>
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm"><span className="material-icons-round">analytics</span></div>
              <div>
                <h4 className="font-bold text-sm">Action Level Accuracy</h4>
                <p className="text-2xl font-black text-primary italic">0.902 (90.2%)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm"><span className="material-icons-round">task_alt</span></div>
              <div>
                <h4 className="font-bold text-sm">Action F1-Score</h4>
                <p className="text-2xl font-black text-primary italic">0.941</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-950 p-1 rounded-3xl shadow-2xl overflow-hidden border border-white/5">
           <img src="https://picsum.photos/seed/rasatest/800/600" className="opacity-80 rounded-[20px] grayscale hover:grayscale-0 transition-all duration-700" alt="Rasa Core Test Results" />
           <div className="p-6 text-[10px] font-mono text-emerald-400">
             <p>rasa.core.test - Evaluation Results on ACTION level:</p>
             <p>Correct: 31 / 35</p>
             <p>Accuracy: 0.902</p>
             <p>Precision: 1.000</p>
           </div>
        </div>
      </section>

      {/* Test Cases Table */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">6.2 Test Cases and Results</h2>
        <div className="overflow-x-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4">No.</th>
                <th className="px-6 py-4">Test Case Name</th>
                <th className="px-6 py-4">Purpose</th>
                <th className="px-6 py-4">Expected Output</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {[
                { no: 1, name: 'Webpage Loading', purpose: 'Performance', expected: 'Chatbot loads with page' },
                { no: 2, name: 'Understanding Capacity', purpose: 'Identification', expected: 'Handles typos (Mumbhai -> Mumbai)' },
                { no: 3, name: 'Input Matching', purpose: 'Validation', expected: 'Does not loop on wrong formats' },
                { no: 4, name: 'Wrong Inputs', purpose: 'Stability', expected: 'Bot should not crash on images/paste' },
                { no: 5, name: 'Record Chat', purpose: 'Database', expected: 'Transcribe saved to DB and sent to IDs' },
                { no: 6, name: 'Network Issues', purpose: 'Reliability', expected: 'Appropriate error on no internet' }
              ].map((row) => (
                <tr key={row.no} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-black text-primary">{row.no}</td>
                  <td className="px-6 py-4 font-bold">{row.name}</td>
                  <td className="px-6 py-4">{row.purpose}</td>
                  <td className="px-6 py-4 text-slate-500">{row.expected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ResultsView;
