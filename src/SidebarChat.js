import React from 'react';
import "./SidebarChat.css";
import { Avatar } from '@mui/material';
import { Message } from '@mui/icons-material';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar src="https://cdn.vox-cdn.com/thumbor/WmL8_VpInoIW7gzRroUp06oiKUI=/0x564:1988x3056/1200x800/filters:focal(861x1516:1179x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/60042713/image1.1528905658.jpeg"/>
            <div className='sidebarChat-info'>
                <h2>Dc community of bengal</h2>
                <p>{Message.message}</p>
            </div>
        </div>
    )
};
export default SidebarChat
