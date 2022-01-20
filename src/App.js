import charizard from './charizard.png';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const makeButtons = [0,1,2,'abc','do stuff','1213','a12','dfa'].map(x=><button>{x}</button>)
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        {/* <img src='https://m.media-amazon.com/images/I/51nVRfG47ZS._AC_SL1300_.jpg' className="App-logo" alt="logo" /> */}
        <img src={charizard} alt='picture of the best pokemon ever made' className="App-logo"/>
        <a href='http://github.com/i-am-jabrield'>Heres a link to my github!</a>
        <h1>
          Welcome to my Codeathon 2022 project!
        </h1>
        {makeButtons}
      </header>
      <Navbar type='footer'/>
    </div>
  );
}

export default App;
