import { useChat } from 'context/ChatContext';
import { useEffect } from 'react';
import { getChats, ChatEngine } from 'react-chat-engine';
import { useResolved } from 'hooks';
import { ChatList } from 'components/ChatList';
import { RailHeader } from 'components/RailHeader';

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

export const Chat = () => {
  const { myChats, setMyChats, selectedChat, chatConfig } = useChat();

  useEffect(() => {
    console.log('your chats: ', myChats);
  }, [myChats]);

  const chatsResolved = useResolved(myChats);
  return (
    <>
      {/* <div style={{ position: 'relative', height: '750px' }}> */}
      <MainContainer responsive height="750px" width="200vh">
        <Sidebar position="left" scrollable>
          <ConversationHeader style={{ backgroundColor: '#fff' }}>
            {/* <Avatar img src="avatar" alt="my avatar" /> */}
            <ConversationHeader.Content>
              <div className="conversation-header">
                <RailHeader />
                {chatsResolved ? (
                  <>
                    {!!myChats.length ? (
                      <div className="chat-list-container">
                        <ChatList />
                      </div>
                    ) : (
                      <div className="chat-list-container no-chats-yet">
                        <h3>No Chats Yet</h3>
                      </div>
                    )}
                    <button
                      className="create-chat-button"
                      // onClick={createChatClick}
                    >
                      Create Chat
                    </button>
                  </>
                ) : (
                  <div className="chats-loading">
                    {/* <Loader active size="huge" /> */}
                  </div>
                )}
              </div>
            </ConversationHeader.Content>
          </ConversationHeader>
          {/* <ConversationList>
            <div>
              <p>get my chats</p>
            </div>
          </ConversationList> */}
        </Sidebar>

        <ChatContainer
          onConnect={() => {
            getChats(chatConfig, setMyChats);
          }}
        >
          <MessageList>
            <p>message list</p>
          </MessageList>
          <MessageInput
          // value={currentMessage}
          // // onChange={handleChange}
          // onSend={handleSend}
          // // attachButton={false}
          // placeholder="Type here..."
          />
        </ChatContainer>
      </MainContainer>

      {!!chatConfig && (
        <ChatEngine
          hideUI={true}
          height="100vh"
          width="200vh"
          userName={chatConfig.userName}
          projectID={chatConfig.projectID}
          userSecret={chatConfig.userSecret}
          onConnect={() => {
            getChats(chatConfig, setMyChats);
            console.log(chatConfig.userSecret);
          }}
        />
      )}
    </>
  );
};
export default Chat;
