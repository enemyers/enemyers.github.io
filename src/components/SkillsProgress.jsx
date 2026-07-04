import React from 'react';

const SkillsProgress = ({ skills }) => {
  return (
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm">{skill.level}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-4">
            <div
              className="h-4 rounded-full transition-all duration-1000"
              style={{
                width: `${skill.level}%`,
                background: 'linear-gradient(90deg, #6366f1 0%, #a21caf 40%, #ec4899 80%, #6366f1 100%)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;
