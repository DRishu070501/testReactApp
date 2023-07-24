import logo from './logo.svg';
import './App.css';
// import FormComponent from './FormComponent';
import FormComponent2 from './FormComponent2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, And welcome</h1>
        <FormComponent2 />
        <ToastContainer position="top-right" autoClose={3000} />
      </header>
    </div>
  );
}

export default App;
