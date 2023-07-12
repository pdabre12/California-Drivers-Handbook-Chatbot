import logo from './logo.svg';
import './App.css';
import Chatbot from './components/Chatbot';
import Chat from './components/Chat';
function App() {
  return (
    <div className="App">
      <div className="heading">
        DMV-GPT
      </div>  
      <Chat />
    </div>
  );
}

export default App;
