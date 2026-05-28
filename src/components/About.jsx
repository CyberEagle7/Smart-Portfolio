import { useState } from "react";

function About() {
  const [show, setShow] = useState(true);

  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide About" : "Show About"}
      </button>

      {show && (
        <p>
          I am learning web development and building projects for my resume and
          GitHub.
        </p>
      )}
    </section>
  );
}

export default About;