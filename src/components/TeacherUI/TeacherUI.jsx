import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { NewChatForm } from 'react-chat-engine';

export const TeacherUI = () => {
return <ChatEngine
projectID='40296037-f0b7-449f-8a04-b9cfdedab617'
userName='SerikTheCzar'
userSecret='123'
renderIceBreaker={(chat) => {<div></div>}}
height='100vh'
width='200vh'
//renderNewChatForm={(creds) => {}}

/>
};
