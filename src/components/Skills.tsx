import { useEffect, useState, useRef } from 'react';

const technicalSkills = [
  { name: 'Python', level: 85, category: 'Language' },
  { name: 'JavaScript', level: 80, category: 'Language' },
  { name: 'React.js', level: 78, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'MySQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 72, category: 'Database' },
  { name: 'Git', level: 82, category: 'Tool' },
  { name: 'AI/ML', level: 70, category: 'Specialization' },
];

const skillCategories = [
  { name: 'Languages', skills: ['Python', 'JavaScript'], icon: '💻' },
  { name: 'Frontend', skills: ['React.js', 'HTML/CSS'], icon: '🎨' },
  { name: 'Backend', skills: ['Node.js', 'REST APIs'], icon: '⚙️' },
  { name: 'Databases', skills: ['MySQL', 'MongoDB'], icon: '🗄️' },
  { name: 'Tools', skills: ['Git', 'VS Code'], icon: '🛠️' },
  { name: 'AI/ML', skills: ['Machine Learning', 'Data Analysis'], icon: '🤖' },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Expertise
            </span>
            <h2 className="section-heading mt-3">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              A blend of programming languages, frameworks, and tools that power my projects.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Skill Bars */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold mb-6">Proficiency Levels</h3>
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillCategories.map((category, index) => (
                <div
                  key={category.name}
                  className="p-4 bg-background rounded-xl shadow-soft card-hover text-center"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h4 className="font-semibold text-sm mb-2">{category.name}</h4>
                  <div className="space-y-1">
                    {category.skills.map((skill) => (
                      <p key={skill} className="text-xs text-muted-foreground">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
