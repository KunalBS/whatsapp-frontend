import React, {useState} from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Message } from '@mui/icons-material';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios'

function Chat({messages}) {

    const [input, setInput] = useState("")

    const sendMessage = async(e) =>{
    e.preventDefault();
    
    await axios.post('/messages/new',{
        message: input,
        name: 'clark kent',
        timestamp: "just now",
        received: false
    });

    setInput('');
    };
    return (
        <div className='chat'>
           <div className='chat-header'>
               <Avatar src="https://cdn.vox-cdn.com/thumbor/WmL8_VpInoIW7gzRroUp06oiKUI=/0x564:1988x3056/1200x800/filters:focal(861x1516:1179x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/60042713/image1.1528905658.jpeg"/>
            <div className='chat-headerInfo'>
                <h3>DC Community of Bengal</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chat-headerb'>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
           </div>
           <div className='chat-body'>
               { messages.map(message =>(
                   <p className={`chat-message ${message.received && "chat-reciever"}`}>

                   <span className='chat-name'>{message.name}</span> 
                    {message.message}
                
                    <span className='chat-timestamp'>
                        {message.timestamp}
                    </span>
                </p>
               ))}
                
           </div>
            <div className='chat-footer'>
                <MoodIcon/>
                <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='type a message' type="text"/>
                <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat
