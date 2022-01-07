import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <Avatar src="/images/me.jpg"/>
                <div className='sidebar-headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>

                </div>
            </div>
            <div className='sidebar-search'>
                <div className='sidebar-search-container'>
                    <SearchIcon/>
                    <input type="text" placeholder='search or start new chat'/>
                </div>
            </div>
            <div className='sidebar-chats'>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
