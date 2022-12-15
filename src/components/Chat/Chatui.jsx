import React from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useChat } from 'context';
import { useEffect } from 'react';
import { getChats, ChatEngine } from 'react-chat-engine';

import {
  MainContainer,
  Sidebar,
  ConversationList,
  Conversation,
  Avatar,
  ChatContainer,
  ConversationHeader,
  MessageGroup,
  Message,
  MessageList,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

// function Chatui() {

export const Chatui = () => {
  const { myChats, setMyChats, selectedChat, chatConfig } = useChat();

  useEffect(() => {
    console.log('your chats: ', myChats);
  }, [myChats]);

  return (
    <>
      <div style={{ position: 'relative', height: '250px' }}>
        <MainContainer responsive>
          <Sidebar position="left" scrollable>
            <ConversationHeader style={{ backgroundColor: '#fff' }}>
              <Avatar img src="my image" alt="my avatar" />
              <ConversationHeader.Content>
                <p>Header</p>
              </ConversationHeader.Content>
            </ConversationHeader>
            <ConversationList>
              <div>
                <p>get my chats</p>
              </div>
            </ConversationList>
          </Sidebar>

          <ChatContainer>
            <MessageList>
              <div>
                <p>List of messages from selected chat</p>
              </div>
            </MessageList>
            <MessageInput
            // value={currentMessage}
            // onChange={handleChange}
            // onSend={handleSend}

            // attachButton={false}
            // placeholder="Type here..."
            />
          </ChatContainer>
        </MainContainer>
        ;
      </div>
    </>
  );
};

export default Chatui;
