import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { NewChatForm } from 'react-chat-engine';

export const Admin = () => {
  return (
    <ChatEngine
      projectID="dadafced-0499-4582-a48b-e012981d0e3c"
      userName="trees"
      userSecret="qwerty1234"
      renderIceBreaker={chat => {
        <div></div>;
      }}
      height="100vh"
      width="200vh"
      //renderNewChatForm={(creds) => {}}
    />
  );
};
