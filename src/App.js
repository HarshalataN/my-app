import logo from './logo.svg';
import './App.css';
import Sub from './component/Sub/Sub';
import Add from './component/Add/Add';

function App() {
  return (
    <div>
      <h1>Hello</h1>
         <p>This is para</p>
       <Add a='2' b='2'></Add>
       <Sub a='2' b='2'/>  
    </div>
  );
}

export default App;
