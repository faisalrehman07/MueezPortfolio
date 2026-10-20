import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  FileSpreadsheet, 
  Landmark,
  Users,
  Building2
} from 'lucide-react';


export const ExecutiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'banking' | 'hr' | 'revenue' | 'excel'>('banking');
  const [ticketFilter, setTicketFilter] = useState<'all' | 'escalated' | 'resolved'>('all');

  const bankingCases = [
    {
      id: 'ACC-9842',
      account: 'High-Value Account Review',
      type: 'Executive Dispute & Remediation',
      status: 'Resolved',
      accuracy: '100%',
      qa: '10/10',
      time: '18m response (SLA: < 60m)',
      tag: 'De-escalation',
      priority: 'high',
    },
    {
      id: 'ACC-9843',
      account: 'Enterprise Client Operations',
      type: 'Billing & Protection Plan Audit',
      status: 'Resolved',
      accuracy: '100%',
      qa: '10/10',
      time: '24m response (SLA: < 60m)',
      tag: 'Compliance',
      priority: 'medium',
    },
    {
      id: 'ACC-9844',
      account: 'US Retail Process Account',
      type: 'Documentation & Regulatory Policy',
      status: 'In Audit',
      accuracy: '100%',
      qa: '10/10',
      time: 'Active SLA: 32m left',
      tag: 'Policy Adherence',
      priority: 'high',
    },
  ];

  const filteredCases = bankingCases.filter(t => {
    if (ticketFilter === 'all') return true;
    if (ticketFilter === 'escalated') return t.priority === 'high';
    if (ticketFilter === 'resolved') return t.status === 'Resolved';
    return true;
  });

  return (
    <div className="w-full rounded-2xl glass-panel border border-slate-700/80 p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
      
      {/* Subtle Corporate Lighting */}
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-slate-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Cockpit Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-700 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-slate-600 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-200 tracking-wide uppercase flex items-center gap-1.5 ml-2">
            <Landmark className="w-3.5 h-3.5 text-blue-400" />
            MBA Operations & Executive Cockpit
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-950/70 text-blue-300 border border-blue-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Active Process: US Retail Account
          </span>
        </div>
      </div>

      {/* Navigation Tabs for Banking & HR Views */}
      <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 mb-5">
        <button
          onClick={() => setActiveTab('banking')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'banking'
              ? 'bg-blue-600 text-white shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Landmark className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Banking & SLA</span>
        </button>

        <button
          onClick={() => setActiveTab('hr')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'hr'
              ? 'bg-blue-600 text-white shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Users className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Corporate HR</span>
        </button>

        <button
          onClick={() => setActiveTab('revenue')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'revenue'
              ? 'bg-blue-600 text-white shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Revenue & Sales</span>
        </button>

        <button
          onClick={() => setActiveTab('excel')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'excel'
              ? 'bg-blue-600 text-white shadow-md font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Excel MIS</span>
        </button>
      </div>

      {/* Tab 1: Banking & SLA Management */}
      {activeTab === 'banking' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">Account Queue & Client Resolution</p>
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                100% SLA Adherence • 10/10 QA Accuracy
              </h4>
            </div>
            <div className="flex gap-1 text-[10px] font-mono">
              <button 
                onClick={() => setTicketFilter('all')}
                className={`px-2 py-0.5 rounded ${ticketFilter === 'all' ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'text-slate-400'}`}
              >
                All
              </button>
              <button 
                onClick={() => setTicketFilter('escalated')}
                className={`px-2 py-0.5 rounded ${ticketFilter === 'escalated' ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'text-slate-400'}`}
              >
                High Risk
              </button>
              <button 
                onClick={() => setTicketFilter('resolved')}
                className={`px-2 py-0.5 rounded ${ticketFilter === 'resolved' ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/40' : 'text-slate-400'}`}
              >
                Resolved
              </button>
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredCases.map((c) => (
              <div 
                key={c.id}
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-start gap-2.5">
                  <div className={`p-1.5 rounded-lg mt-0.5 ${
                    c.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {c.status === 'Resolved' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-white">{c.id}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {c.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">{c.type}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-right">
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center sm:justify-end gap-1">
                      <ShieldCheck className="w-3 h-3" /> Audit Score: {c.qa}
                    </span>
                    <span className="text-[10px] text-slate-400 block">{c.time}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    c.status === 'Resolved' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-blue-950 text-blue-300 border border-blue-500/30'
                  }`}>
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Contractual SLA Compliance:
            </span>
            <span className="font-mono font-bold text-emerald-400">100% Target Maintained</span>
          </div>
        </div>
      )}

      {/* Tab 2: Corporate HR & Talent Operations */}
      {activeTab === 'hr' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">MBA Human Resource Management</p>
              <h4 className="text-sm sm:text-base font-bold text-white">People Operations & Team Mentoring</h4>
            </div>
            <div className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold">
              HR Specialization
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">Associate Onboarding & Training</div>
              <div className="text-base font-bold text-white font-mono mt-1">Lead Track</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-blue-500 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Reliance Trends Department Track</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">Conflict De-escalation & Mediation</div>
              <div className="text-base font-bold text-emerald-400 font-mono mt-1">10 / 10</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-400 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Zero negative escalations</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">Written Comprehension & Policy</div>
              <div className="text-base font-bold text-blue-400 font-mono mt-1">Accelerated</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-blue-400 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Promoted in &lt; 6 months</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">HR Talent Frameworks</div>
              <div className="text-base font-bold text-slate-200 font-mono mt-1">MBA Rigor</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-slate-400 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Jain University MBA Specialization</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Proven ability to guide incoming associates, align floor teams with corporate standards, and facilitate structured communication.</span>
          </div>
        </div>
      )}

      {/* Tab 3: Sales Impact ($60K+) */}
      {activeTab === 'revenue' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Commercial & Financial Performance</p>
              <h4 className="text-sm sm:text-base font-bold text-white">$60,000 Consultative Volume</h4>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold">
              [24]7.ai Sales
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Client Needs Discovery & Conversion</span>
              <span className="font-mono font-bold text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> High-Performance
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>Peak Season Volume Delivered</span>
                <span className="font-mono text-white font-bold">$60,000 converted</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-400 h-full w-[92%] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-[11px]">
              <div>
                <span className="text-slate-400 block">Reliance Trends Monthly Target:</span>
                <span className="font-bold text-emerald-400">+90% Overachievement</span>
              </div>
              <div>
                <span className="text-slate-400 block">Client Retention Ratio:</span>
                <span className="font-bold text-white">95% Sustained</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white font-semibold">Consultative Advisory Method:</strong> Identifying buyer priorities in real time, communicating institutional value, and executing recommendations that drive transaction metrics.
          </div>
        </div>
      )}

      {/* Tab 4: Excel CRM & MIS Reporting */}
      {activeTab === 'excel' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Financial & Operational Analytics</p>
              <h4 className="text-sm sm:text-base font-bold text-white">Microsoft Excel Dashboards & MIS Logs</h4>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30">
              Audit Compliance
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-[11px] font-mono">
              <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-2 px-3">Operational Metric</th>
                  <th className="py-2 px-3">Filter Logic</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3 text-right">Variance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 font-semibold text-white">High-Complexity Accounts</td>
                  <td className="py-2 px-3 text-slate-400">Daily triage queue</td>
                  <td className="py-2 px-3 text-blue-400">15 cases/day avg</td>
                  <td className="py-2 px-3 text-right text-emerald-400">On Target</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 font-semibold text-white">SLA Breaches</td>
                  <td className="py-2 px-3 text-slate-400">Pre-alert timers</td>
                  <td className="py-2 px-3 text-emerald-400">0 breaches</td>
                  <td className="py-2 px-3 text-right text-emerald-400">100% SLA</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 font-semibold text-white">QA Compliance Index</td>
                  <td className="py-2 px-3 text-slate-400">Audit audits</td>
                  <td className="py-2 px-3 text-white">10 / 10</td>
                  <td className="py-2 px-3 text-right text-emerald-400">+0.0 Deviation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Constructs structured Microsoft Excel tracking sheets with pivot filters and status charts to maintain data integrity, executive reporting clarity, and audit readiness.
          </p>
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-blue-400" />
          Targeting: Corporate Banking, HR Leadership & Strategic Operations
        </span>
        <span className="text-slate-400">Verified Professional Experience</span>
      </div>
    </div>
  );
};
