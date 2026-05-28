function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills & Highlights</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Learning Journey</h3>
          <p>Building modern web projects and improving every day.</p>
        </div>

        <div className="skill-card">
          <h3>Tech Stack</h3>

          <div className="skill-tags">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3>Goals</h3>
          <p>Creating projects for Resume, GitHub and future internships.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;