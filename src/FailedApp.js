import { useMultiChatLogic } from "react-chat-engine-advanced";

const projectId = "40296037-f0b7-449f-8a04-b9cfdedab617";
const username = "SerikTheCzar";
const secret = "123";
function App() {
	const chatProps = useMultiChatLogic(projectId, username, secret);
  
	return (
	  <>
		<MultiChatSocket {...chatProps} />
  
		<MultiChatWindow 
		  chats={chatProps.chats}
		  messages={chatProps.messages}
		  activeChatId={chatProps.activeChatId}
		  username={chatProps.username}
		  peopleToInvite={chatProps.peopleToInvite}
		  hasMoreChats={chatProps.hasMoreChats}
		  hasMoreMessages={chatProps.hasMoreMessages}
		  onChatFormSubmit={chatProps.onChatFormSubmit}
		  onChatCardClick={chatProps.onChatCardClick}
		  onChatLoaderShow={chatProps.onChatLoaderShow}
		  onMessageLoaderShow={chatProps.onMessageLoaderShow}
		  onMessageLoaderHide={chatProps.onMessageLoaderHide}
		  onBottomMessageShow={chatProps.onBottomMessageShow}
		  onBottomMessageHide={chatProps.onBottomMessageHide}
		  onMessageFormSubmit={chatProps.onMessageFormSubmit}
		  onInvitePersonClick={chatProps.onInvitePersonClick}
		  onRemovePersonClick={chatProps.onRemovePersonClick}
		  onDeleteChatClick={chatProps.onDeleteChatClick}
		  style={{ height: '100vh' }} 
		/>
	  </>
	);
  }
  
  export default App;