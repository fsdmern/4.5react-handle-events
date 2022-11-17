import './App.css';
import Form from './components/Form';
import LoginControl from './components/logincontrol/LoginControl';
import Mailbox from './components/mailbox/Mailbox';
import Toggle from './components/Toggle';

function App() {
  const messages = ['React','HTML','Re: CSS','Java Script','NodeJS']
  return (
    <div>
      <h1>Learning React Events</h1>
      <Form />
      <Toggle />
      <LoginControl />
      <Mailbox unreadMessages={messages}/>
    </div>
  );
}

export default App;
