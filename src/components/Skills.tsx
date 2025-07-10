const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
        { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', icon: '🎨', color: 'from-blue-500 to-purple-500' },
        { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-800' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: '.NET', icon: '🔷', color: 'from-purple-400 to-purple-600' },
        { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
        { name: 'C#', icon: '💎', color: 'from-purple-500 to-indigo-500' }
      ]
    },
    {
      title: 'Tools & Database',
      skills: [
        { name: 'Git', icon: '📝', color: 'from-red-400 to-red-600' },
        { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
        { name: 'SQL', icon: '🗄️', color: 'from-blue-500 to-indigo-500' },
        { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' }
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

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border bordernew cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-xl text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 group-hover:w-full`}
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
};

export default Skills;