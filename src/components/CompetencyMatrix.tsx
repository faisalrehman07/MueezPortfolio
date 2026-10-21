import React, { useState, useMemo } from 'react';
import { candidateData } from '../data/candidate';
import { 
  Users, 
  FileSpreadsheet, 
  ShieldCheck, 
  GraduationCap, 
  Landmark, 
  TrendingUp,
  CheckCircle2, 
  Search, 
  Check, 
  Layers
} from 'lucide-react';

export const CompetencyMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<typeof candidateData.skills[0] | null>(candidateData.skills[0]);

  const filteredSkills = useMemo(() => {
    return candidateData.skills.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch = 
        searchQuery === '' ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.context.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'hr':
        return <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'analytics':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'operations':
        return <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'mba':
        return <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'banking':
        return <Landmark className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'revenue':
        return <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Category Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 bg-slate-50 dark:bg-slate-900/80 p-3.5 rounded-3xl border border-slate-200 dark:border-slate-800">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {candidateData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                const first = cat.id === 'all' 
                  ? candidateData.skills[0] 
                  : candidateData.skills.find(s => s.category === cat.id);
                if (first) setSelectedSkill(first);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search input for recruiters */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search competencies..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>
      </div>

      {/* Structured Competencies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => {
          const isSelected = selectedSkill?.name === skill.name;
          return (
            <div
              key={idx}
              onClick={() => setSelectedSkill(skill)}
              className={`p-5 rounded-3xl cursor-pointer transition-all border text-left flex flex-col justify-between shadow-2xs ${
                isSelected
                  ? 'bg-blue-50/70 dark:bg-slate-900 border-blue-500 shadow-sm'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    {getCategoryIcon(skill.category)}
                    {skill.categoryLabel}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    {skill.proficiency}%
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Practical Context Footnote */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 font-medium flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{skill.context}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Competency Deep-Dive Inspection Card */}
      {selectedSkill && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-blue-500/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-5 animate-in fade-in duration-200">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-600/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 uppercase">
                {selectedSkill.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">• Verified MBA Competency</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              {selectedSkill.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedSkill.description}
            </p>
          </div>

          <div className="sm:text-right shrink-0 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-mono font-semibold">Operational Application:</span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block mt-0.5 max-w-xs">
              {selectedSkill.context}
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
