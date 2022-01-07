import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React, { useEffect , useState} from 'react';
import Pusher from "pusher-js";
import axios from 'axios';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(res=>{
      setMessages(res.data);
    });
    
  }, []);

  useEffect(() => {
    const pusher = new Pusher('f694a9fcf4a7011bc16d', {
    cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
    // alert(JSON.stringify(newMessage));
    setMessages([...messages, newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className='app-body'>
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
