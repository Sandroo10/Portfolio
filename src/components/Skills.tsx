const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: '/svgs/react.svg' },
        { name: 'HTML5', icon: '/svgs/html5.svg' },
        { name: 'CSS3', icon: '/svgs/css3.svg' },
        { name: 'JavaScript', icon: '/svgs/js.svg' },
        { name: 'TypeScript', icon: '/svgs/ts.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: '.NET', icon: '/svgs/dotnet.svg' },
        { name: 'Node.js', icon: '/svgs/nodejs.svg' },
        { name: 'C#', icon: '/svgs/csharp.svg' },
        { name: 'Firebase', icon: '/svgs/firebase.svg' },
        { name: `Supabase`, icon: `/svgs/supabase.svg`}
      ]
    },
    {
      title: 'Tools & Database',
      skills: [
        { name: 'Git', icon: '/svgs/git.svg' },
        { name: 'MongoDB', icon: '/svgs/mongodb.svg' },
        { name: 'SQL', icon: '/svgs/sql.svg' },
        { name: 'GitHub', icon: '/svgs/github.svg' },
        { name: 'PostgreSQL', icon: '/svgs/postgresql.svg' },
        { name: 'AWS', icon: '/svgs/aws.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">My Tech Stack</p>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-center text-foreground mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 bg-background rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border bordernew w-48"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`w-48 h-48 mb-2 transition
                        ${
                          ['.NET', 'C#', 'Node.js', 'GitHub', `AWS`].includes(skill.name)
                            ? 'dark:invert dark:brightness-0'
                            : ''
                        }`}
                    />
                    <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['Responsive Design', 'API Integration', 'Version Control', 'Problem Solving', 'Team Collaboration'].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Skills;

