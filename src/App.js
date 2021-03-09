import logo from './logo.svg';
import './App.css';
import Jeep from './Jeep'
import Toyota from './Toyota'
import Honda from './Honda'

function App() {
  return (
    <div className="App">
           <Jeep startingCount={20000}/>
           <Toyota startingCount={15000}/>
           <Honda startingCount={10000}/>

    </div>
  );
}

export default App;
