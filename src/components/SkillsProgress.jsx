import React from 'react';

const SkillsProgress = ({ skills }) => {
  const levelLabel = (level) => {
    if (level >= 85) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    return 'Base';
  };

  return (
    <div className="space-y-5">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="font-medium text-slate-100">{skill.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                {levelLabel(skill.level)}
              </span>
              <span className="text-sm text-slate-300">{skill.level}%</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full transition-all duration-1000"
              style={{
                width: `${skill.level}%`,
                background: 'linear-gradient(90deg, #06b6d4 0%, #22d3ee 45%, #67e8f9 80%, #22d3ee 100%)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;
