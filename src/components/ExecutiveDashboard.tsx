import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  BarChart3, 
  FileSpreadsheet, 
  Sparkles,
  Mail
} from 'lucide-react';

export const ExecutiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'queue' | 'qa' | 'sales' | 'excel'>('queue');
  const [ticketFilter, setTicketFilter] = useState<'all' | 'escalated' | 'resolved'>('all');

  const tickets = [
    {
      id: 'BB-9842',
      account: 'Best Buy US Retail',
      type: 'Executive Escalation',
      status: 'Resolved',
      accuracy: '100%',
      qa: '10/10',
      time: '18m response (Target: < 60m)',
      tag: 'De-escalation',
      priority: 'high',
    },
    {
      id: 'BB-9843',
      account: 'Best Buy US Retail',
      type: 'Order Logistics & Review',
      status: 'Resolved',
      accuracy: '100%',
      qa: '10/10',
      time: '24m response (Target: < 60m)',
      tag: 'Complex Query',
      priority: 'medium',
    },
    {
      id: 'BB-9844',
      account: 'Best Buy US Retail',
      type: 'Billing & Protection Plan',
      status: 'In Audit',
      accuracy: '100%',
      qa: '10/10',
      time: 'Active SLA: 32m left',
      tag: 'Policy Compliance',
      priority: 'high',
    },
  ];

  const filteredTickets = tickets.filter(t => {
    if (ticketFilter === 'all') return true;
    if (ticketFilter === 'escalated') return t.priority === 'high';
    if (ticketFilter === 'resolved') return t.status === 'Resolved';
    return true;
  });

  return (
    <div className="w-full rounded-2xl glass-panel border border-slate-700/70 p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
      
      {/* Decorative Glow Elements */}
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Terminal / Dashboard Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-300 tracking-wide uppercase flex items-center gap-1.5 ml-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            CX Operations & SLA Command
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-950/70 text-sky-300 border border-sky-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            Live Process: Best Buy US
          </span>
        </div>
      </div>

      {/* Navigation Tabs for Operations View */}
      <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 mb-5">
        <button
          onClick={() => setActiveTab('queue')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'queue'
              ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Mail className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Queue & SLA</span>
        </button>

        <button
          onClick={() => setActiveTab('qa')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'qa'
              ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 hidden sm:inline" />
          <span>10/10 QA Score</span>
        </button>

        <button
          onClick={() => setActiveTab('sales')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'sales'
              ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5 hidden sm:inline" />
          <span>$60K Sales</span>
        </button>

        <button
          onClick={() => setActiveTab('excel')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'excel'
              ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Excel CRM</span>
        </button>
      </div>

      {/* Tab 1: Queue & SLA */}
      {activeTab === 'queue' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">Daily High-Complexity Email Queue</p>
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Avg. 15 Cases / Day • End-to-End Resolution
              </h4>
            </div>
            <div className="flex gap-1 text-[10px] font-mono">
              <button 
                onClick={() => setTicketFilter('all')}
                className={`px-2 py-0.5 rounded ${ticketFilter === 'all' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400'}`}
              >
                All
              </button>
              <button 
                onClick={() => setTicketFilter('escalated')}
                className={`px-2 py-0.5 rounded ${ticketFilter === 'escalated' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400'}`}
              >
                Escalations
              </button>
              <button 
                onClick={() => setTicketFilter('resolved')}
                className={`px-2 py-0.5 rounded ${ticketFilter === 'resolved' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400'}`}
              >
                Resolved
              </button>
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredTickets.map((ticket) => (
              <div 
                key={ticket.id}
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-start gap-2.5">
                  <div className={`p-1.5 rounded-lg mt-0.5 ${
                    ticket.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-sky-500/10 text-sky-400'
                  }`}>
                    {ticket.status === 'Resolved' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-200">{ticket.id}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {ticket.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">{ticket.type}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-right">
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center sm:justify-end gap-1">
                      <ShieldCheck className="w-3 h-3" /> QA: {ticket.qa} (100%)
                    </span>
                    <span className="text-[10px] text-slate-400 block">{ticket.time}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    ticket.status === 'Resolved' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-amber-950 text-amber-300 border border-amber-500/30'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              SLA Compliance Record:
            </span>
            <span className="font-mono font-bold text-emerald-400">100% Target Met</span>
          </div>
        </div>
      )}

      {/* Tab 2: Quality Assurance (10/10 QA) */}
      {activeTab === 'qa' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Quality Assurance Evaluation</p>
              <h4 className="text-sm sm:text-base font-bold text-white">Consistent 10 / 10 Scorecard</h4>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
              100% Accuracy
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">Written Tone & De-escalation</div>
              <div className="text-base font-bold text-amber-400 font-mono mt-1">10 / 10</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-amber-400 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">No negative re-openings</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">Process & Policy Adherence</div>
              <div className="text-base font-bold text-sky-400 font-mono mt-1">100%</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-sky-400 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Best Buy US standards</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">Written Comprehension</div>
              <div className="text-base font-bold text-emerald-400 font-mono mt-1">Superior</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-400 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Promotion earned in &lt; 6 mos</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">End-to-End Ownership</div>
              <div className="text-base font-bold text-purple-400 font-mono mt-1">100%</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-purple-400 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Root-cause case resolution</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Recognized by operations leadership for exceptional clarity and calming customer friction without vocal cues.</span>
          </div>
        </div>
      )}

      {/* Tab 3: Sales Impact ($60K+) */}
      {activeTab === 'sales' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Peak Season Digital Commerce</p>
              <h4 className="text-sm sm:text-base font-bold text-white">$60,000 Live-Chat Sales</h4>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
              [24]7.ai Sales Chat
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Conversational Conversion Rate</span>
              <span className="font-mono font-bold text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> High-Performing
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>Peak Season Volume</span>
                <span className="font-mono text-amber-400 font-semibold">$60,000 generated</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full w-[92%] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-[11px]">
              <div>
                <span className="text-slate-400 block">Reliance Trends Peak:</span>
                <span className="font-bold text-slate-100">+90% Quota Exceeded</span>
              </div>
              <div>
                <span className="text-slate-400 block">Customer Retention:</span>
                <span className="font-bold text-slate-100">95% Maintained</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-amber-400 font-semibold">Consultative Selling Method:</strong> Reading buyer hesitation through text alone and delivering tailored accessory recommendations that maximized transaction value.
          </div>
        </div>
      )}

      {/* Tab 4: Excel CRM & Operational Reporting */}
      {activeTab === 'excel' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Analytical Tools & Workflows</p>
              <h4 className="text-sm sm:text-base font-bold text-white">Excel Dashboards & Filtered Views</h4>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
              Operational Reporting
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-[11px] font-mono">
              <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-2 px-3">Metric / Field</th>
                  <th className="py-2 px-3">Filter Logic</th>
                  <th className="py-2 px-3">Current Status</th>
                  <th className="py-2 px-3 text-right">Variance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 font-semibold text-white">Daily Queue Volume</td>
                  <td className="py-2 px-3 text-slate-400">Low-vol / High-comp</td>
                  <td className="py-2 px-3 text-sky-400">15 cases/day avg</td>
                  <td className="py-2 px-3 text-right text-emerald-400">On Target</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 font-semibold text-white">SLA Breaches</td>
                  <td className="py-2 px-3 text-slate-400">Countdown alerts</td>
                  <td className="py-2 px-3 text-emerald-400">0 breaches</td>
                  <td className="py-2 px-3 text-right text-emerald-400">100% SLA</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 font-semibold text-white">QA Accuracy Index</td>
                  <td className="py-2 px-3 text-slate-400">Audit scores</td>
                  <td className="py-2 px-3 text-amber-400">10 / 10</td>
                  <td className="py-2 px-3 text-right text-emerald-400">+0.0 Deviation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Mueez builds structured Microsoft Excel tracking sheets with pivot filters and status charts to keep management reporting real-time, eliminating operational blind spots.
          </p>
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
          MBA Strategic Framework: Operational CX to Client Value
        </span>
        <span className="text-slate-400">Verified Professional Track Record</span>
      </div>
    </div>
  );
};
