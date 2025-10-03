import "./homePage.css";

function HomePage({language}) {

  const renderEnglish = () => (
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
        <ul class="software">
          <li>
              <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">Scratch - Imagine, Program, Share (mit.edu) </a>
              </li>
          <li>
              <a href="https://code.org/en-US" target="_blank" rel="noopener noreferrer">Learn today, build a brighter tomorrow. | Code.org </a>
              </li>
          <li>
              <a href="https://www.typingclub.com/" target="_blank" rel="noopener noreferrer">Learn Touch Typing Free - TypingClub </a>
              </li>
        </ul>

      </p>
    </div>
  );

  const renderTamil = () => (
    <div className="container">
      <h1 className="heading1"> கோட்படி அறிமுகம்</h1>
      <p>
        <strong>கோட்படி</strong> பள்ளி மாணவர்களுக்கு எளிய முறையில் கம்ப்யூட்டர் கோடிங் அறிமுகப்படுத்துவதற்காக, தன்னார்வலர்களால் செயல்படுத்தப்படும் ஒரு தனியார் பயிற்ச்சிக்கூடம் . 
      </p>

      <h2 className="heading2">நோக்கம்</h2>
      <ul className="list">
        <li>அனைத்து குழந்தைகளுக்கும் கம்ப்யூட்டர்  கோடிங் அறிய வாய்ப்பளித்தல்.</li>
        <li>
          பள்ளி மாணவர்களுக்கு கட்டணமில்லாமல்  கிராட்ச் <strong>[SCRATCH]</strong>   மென்பொருள்  மூலம் கம்ப்யூட்டர்  கோடிங்  கருத்துக்களை  ஆரம்பப்பள்ளியில் அறிமுகப்படுத்துதல். 
        </li>
        <li>பள்ளி மாணவர்களுக்கு  கட்டணமில்லாமல் கம்ப்யூட்டர் தட்டச்சு பயிற்சி.</li>
      </ul>

      <h2 className="heading2">கோட்படி எப்படி  செயல்படுகிறது ? </h2>
      <ul className="list">
        <li>அரசு பள்ளியில் அல்லது சமூகக்கூடத்தில் வாரம் ஒரு நாள் ஒரு மணி நேரம் வகுப்பு நடைபெறும்.</li>
        <li>
          மூன்றுபேர் கொண்ட குழுவாக மாணவர்கள் பிரிக்கப்பட்டு , மடிக்கணினியில் கோடிங் செய்து பழக உதவியும்,ஊக்கமும் தரப்படும் . 
        </li>
        <li>நியமிக்கப்பட்ட ஆசிரியர்கள் வகுப்புகளை மேற்பார்வையிடுவார்கள்.</li>
        <li>மாணவர்களை ஊக்குவிக்கும் வகையில் பரிசுகளும் சிற்றுண்டிகளும் வழங்கப்படும்.</li>
      </ul>

      <h2 className="heading2">மேலும் விவரங்களுக்கு  அணுகவும் :

      </h2>
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
        <li>அரசு தொடக்கப்பள்ளி இத்தலார்</li>
        <li>இத்தலார் ஊர் தலைவர்.</li>
      </ul>

      <h2 className="heading2">மென்பொருள்</h2>
      <p>
        <ul class="software">
          <li>
              <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">Scratch - Imagine, Program, Share (mit.edu) </a>
              <br /></li>
          <li>
              <a href="https://code.org/en-US" target="_blank" rel="noopener noreferrer">Learn today, build a brighter tomorrow. | Code.org </a>
              <br /></li>
          <li>
              <a href="https://www.typingclub.com/" target="_blank" rel="noopener noreferrer">Learn Touch Typing Free - TypingClub </a>
              <br /></li>
        </ul>

      </p>
    </div>
  );


  return (
    <>{language=== "ENGLISH" ? renderEnglish() : renderTamil()}</>
  );
}


export default HomePage;