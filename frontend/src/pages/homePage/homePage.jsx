import "./homePage.css";

function HomePage() {
  return (
    <div className="container">
      <h1 className="heading1">About Codepadi</h1>
      <p>
        <strong>Codepadi</strong> is a volunteer-driven initiative that introduces computer coding
        to school students in a simple and engaging way.
      </p>

      <h2 className="heading2">Our Objectives</h2>
      <ul className="list">
        <li>Provide an opportunity for every child to learn computer coding.</li>
        <li>
          Introduce coding concepts to primary school students free of cost, using{" "}
          <strong>Scratch</strong> software.
        </li>
        <li>Offer free computer typing practice for school students.</li>
      </ul>

      <h2 className="heading2">How Codepadi Works</h2>
      <ul className="list">
        <li>Classes are conducted once a week for one hour in government schools or community centers.</li>
        <li>
          Students are divided into groups of three, where they learn and practice coding using laptops
          with guidance and encouragement.
        </li>
        <li>Appointed teachers supervise the classes.</li>
        <li>To motivate students, prizes and snacks are provided.</li>
      </ul>

      <h2 className="heading2">Contact Us</h2>
      <p>
        📱 <strong>Karthick Chandran</strong> – WhatsApp: +64211836339 –{" "}
        <a href="mailto:karthick_c83@hotmail.com" className="link">
          karthick_c83@hotmail.com
        </a>
      </p>
      <p>
        📞 <strong>Kamal Chandran</strong> – Phone: +919902934543 –{" "}
        <a href="mailto:kammailme@gmail.com" className="link">
          kammailme@gmail.com
        </a>
      </p>

      <h2 className="heading2">Supported By</h2>
      <ul className="list">
        <li>Headmasters of Government Primary and Middle Schools in Ithalaar.</li>
        <li>Village Head of Ithalaar.</li>
      </ul>

      <h2 className="heading2">Software Used</h2>
      <p>
        <strong>Scratch</strong>
      </p>
    </div>
  );
}


export default HomePage;