import './App.css';
import './components/header/header';
import Header from './components/header/header';
import './components/introduccion/intro';
import Introduccion from './components/introduccion/intro';



//Dentro del div importamos todos los componentes a utilizar
function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <h1 className='titulo'>React Developer Junior</h1>
      <Introduccion/>
    </div>
  );
}

export default App;
