import '../style/Hero.css'
import reactLogo from "../assets/R.jpg"


function App() {
  return (
    <div className="main-container">
      <div className='container'>
        <img src={reactLogo} alt="Profile" className='profile-image' />
        <div className='text'>
            <h1>Hi, I am Ed Joshua </h1>
            <h2>A Web Developer</h2>
            <a href="#" className="cta-button highlight-text">Hire me!</a>
        </div>
      </div>
    </div>
  );
}

export default App;
