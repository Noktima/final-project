import './App.css';
import Header from './components/Header/Header';
import Styles from './App.css'
import Main from './components/Main/Main';





function App() {
  return (
    <div className="App">
      <div id='header'>
          <Header />
      </div>
      <div id='main'>
      <Main />
      </div>
    </div>
  );
}

export default App;
