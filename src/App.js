import "./App.css";
import chatgptlogo from "./assets/chatgptLogo.svg";
import chatgpt from "./assets/chatgpt.svg";
import message from "./assets/message.svg";
import addicon from "./assets/add-30.png";
import  home from './assets/home.svg';
import  saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersidetop">
            <img src={chatgpt} alt="logo" className="logo" />
            <span className="brand">chatGpt</span>{" "}
          </div>
          <button className="midbtn">
            <img className="btnchat" alt="" src={addicon} />
            NewChat
          </button>

          <div className="uppersidebottom">
            <button className="query">
              <img src={message} alt="" className="" />
              what is programming?
            </button>
            <button className="query">
              <img src={message} alt="" className="" />
              what is programming?
            </button>
          </div>
        </div>

        <div className="lowerside">

          <div className="listitem"> <img src={home} alt="" className="homeimg"/>Home</div>
          <div className="listitem"> <img src={saved} alt="" className="savedimg"/>Saved</div>

          <div className="listitem"> <img src={rocket} alt="" className="settingimg"/>Setting</div>

        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
