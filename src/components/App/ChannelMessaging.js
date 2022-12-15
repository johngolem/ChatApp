import React, {useState} from 'react';
import {ChatEngine, getOrCreateChat} from 'react-chat-engine';

const ChannelMessaging = () => {
   
    const[username, setUsername] = useState('');
    
    function implementingChannelChat(creds){
        getOrCreateChat(
            creds,
            {is_channel_chat: true, usernames:[username]},
            () => setUsername('')
        )
    };

    const displayChatInterface = (creds) => {
        return (
            <div>
                <input
                    type="text"
                    placeholder='Find username'
                    value={username} 
                    onChange = {(e) => setUsername(e.target.value)}
                />

               
                <button onClick={() => implementingChannelChat(creds)}>
                    Create Chat
                </button>

            </div>
        )
    };

    return(
        <ChatEngine
			projectID='40296037-f0b7-449f-8a04-b9cfdedab617'
			userName='SerikTheCzar'
			userSecret='123'
			height='100vh'
			displayNewChatInterface={(creds) => displayChatInterface(creds)}
            renderConnectionBar={(chat) => {}}
			
			
		/>
    )
};

export default ChannelMessaging; 