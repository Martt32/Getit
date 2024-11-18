import logo from './assets/Logo.png';
import './App.css';
import './main.css'
function App() {
  return (
    <div className="App">
      <div className='bubbles'>
        <span style={{ '--i':'11' }}></span>
        <span style={{ '--i':'12' }}></span>
        <span style={{ '--i':'24' }}></span>
        <span style={{ '--i':'10' }}></span>
        <span style={{ '--i':'14' }}></span>
        <span style={{ '--i':'23' }}></span>
        <span style={{ '--i':'18' }}></span>
        <span style={{ '--i':'16' }}></span>
        <span style={{ '--i':'19' }}></span>
        <span style={{ '--i':'20' }}></span>
        <span style={{ '--i':'22' }}></span>
        <span style={{ '--i':'25' }}></span>
        <span style={{ '--i':'18' }}></span>
        <span style={{ '--i':'21' }}></span>
        <span style={{ '--i':'15' }}></span>
        <span style={{ '--i':'13' }}></span>
        <span style={{ '--i':'26' }}></span>
        <span style={{ '--i':'17' }}></span>
        <span style={{ '--i':'13' }}></span>
        <span style={{ '--i':'28' }}></span>
        <span style={{ '--i':'11' }}></span>
        <span style={{ '--i':'12' }}></span>
        <span style={{ '--i':'24' }}></span>
        <span style={{ '--i':'10' }}></span>
        <span style={{ '--i':'14' }}></span>
        <span style={{ '--i':'23' }}></span>
        <span style={{ '--i':'18' }}></span>
        <span style={{ '--i':'16' }}></span>
        <span style={{ '--i':'19' }}></span>
        <span style={{ '--i':'20' }}></span>
        <span style={{ '--i':'22' }}></span>
        <span style={{ '--i':'25' }}></span>
        <span style={{ '--i':'18' }}></span>
        <span style={{ '--i':'21' }}></span>
        <span style={{ '--i':'15' }}></span>
        <span style={{ '--i':'13' }}></span>
        <span style={{ '--i':'26' }}></span>
        <span style={{ '--i':'17' }}></span>
        <span style={{ '--i':'13' }}></span>
        <span style={{ '--i':'28' }}></span>
      </div>
      <div className="App-header flex flex-col justify-center items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='font-bold text-2xl text-orange-400'>
          Your online store to get all you need
        </p>
        <p className='font-bold text-2xl text-white p-2'>
          Coming soon...
        </p>
      </div>
    </div>
  );
}

export default App;
