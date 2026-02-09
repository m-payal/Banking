
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  BarChart, Bar, Cell
} from 'recharts';

const data = [
  { name: 'Mon', accuracy: 65 },
  { name: 'Tue', accuracy: 70 },
  { name: 'Wed', accuracy: 74 },
  { name: 'Thu', accuracy: 68 },
  { name: 'Fri', accuracy: 78 },
  { name: 'Sat', accuracy: 82 },
  { name: 'Sun', accuracy: 85 },
];

const intentData = [
  { name: 'Account Inquiries', value: 45 },
  { name: 'Card Services', value: 28 },
  { name: 'Fund Transfers', value: 16 },
  { name: 'Loan Apps', value: 9 },
  { name: 'Insurance', value: 2 },
];

const AnalyticsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <header className="flex flex-col md:row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
            Projects / <span className="text-slate-900 dark:text-white ml-2">Conversation Analytics</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold shadow-sm">
            <span className="material-icons-round text-sm">calendar_today</span>
            Last 7 Days
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-primary/20 flex items-center gap-2">
            <span className="material-icons-round text-sm">file_download</span>
            Export Report
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Conversations', val: '12,450', trend: '+12%', icon: 'chat', color: 'bg-primary' },
          { label: 'Avg. Confidence Score', val: '78%', trend: '+2.4%', icon: 'verified_user', color: 'bg-amber-500' },
          { label: 'Avg. Response Time', val: '1.2s', trend: '-0.2s', icon: 'timer', color: 'bg-indigo-500' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 ${kpi.color}/10 rounded-2xl`}>
                <span className={`material-icons-round ${kpi.color.replace('bg-', 'text-')}`}>{kpi.icon}</span>
              </div>
              <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight">
                {kpi.trend} ↑
              </span>
            </div>
            <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">{kpi.label}</h3>
            <p className="text-4xl font-extrabold tracking-tighter">{kpi.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Intent Categories */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-bold text-xl tracking-tight">Top Intent Categories</h2>
            <span className="material-icons-round text-slate-300 cursor-pointer">more_horiz</span>
          </div>
          <div className="space-y-8">
            {intentData.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
                  <span>{item.name}</span>
                  <span className="text-slate-400">{item.value}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${item.value}%`, opacity: 1 - (i * 0.15) }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy Line Chart */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-xl tracking-tight">Response Accuracy Over Time</h2>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Accuracy %
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#135bec" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 800 }}
                  labelStyle={{ display: 'none' }}
                />
                <Area type="monotone" dataKey="accuracy" stroke="#135bec" strokeWidth={4} fillOpacity={1} fill="url(#colorAcc)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-tight text-slate-400">Current Average</div>
            <div className="text-lg font-black text-primary">85.4%</div>
          </div>
        </div>
      </div>

      {/* Real-time Confidence Feed Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight">Real-time Confidence Feed</h2>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Live Updates</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <th className="px-8 py-5">User Query Preview</th>
                <th className="px-8 py-5">Predicted Intent</th>
                <th className="px-8 py-5">Confidence</th>
                <th className="px-8 py-5">Timestamp</th>
                <th className="px-8 py-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800 font-medium">
              {[
                { query: "Transfer $500 to my savings", intent: "Transfer Funds", conf: 92, time: "2m ago", status: "ok" },
                { query: "Card declined at grocery store", intent: "Card Issues", conf: 85, time: "5m ago", status: "ok" },
                { query: "Close my mortgage account", intent: "Close Account", conf: 42, time: "12m ago", status: "review" },
                { query: "Reset my banking password", intent: "Security", conf: 98, time: "18m ago", status: "ok" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-8 py-6 text-sm italic">"{row.query}"</td>
                  <td className="px-8 py-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight">
                      {row.intent}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${row.conf > 50 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${row.conf}%` }}></div>
                      </div>
                      <span className={`text-xs font-black ${row.conf > 50 ? 'text-emerald-600' : 'text-amber-600'}`}>{row.conf}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-xs text-slate-400 uppercase font-bold tracking-tight">{row.time}</td>
                  <td className="px-8 py-6">
                    <button className="text-primary hover:underline text-xs font-black uppercase tracking-widest">
                      {row.status === 'review' ? 'Review Manually' : 'View Log'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
