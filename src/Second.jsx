function StudentProfile() {
  return (
    <div>
      <h1>Welcome to My React Component</h1>

      <h2>About Me</h2>

      <p>
        My name is Tagwa and I am an IT student.
      </p>

      <img
        src="https://via.placeholder.com/200"
        alt="Profile"
      />

      <h3>My Skills</h3>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <h3>Contact Me</h3>

      <input type="text" placeholder="Enter your name" />
      <br />
      <br />

      <button>Submit</button>

      <p>
        Visit my favorite website:
        <a href="https://react.dev"> React</a>
      </p>
    </div>
  );
}

export default StudentProfile;