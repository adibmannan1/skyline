// import { useContext, useEffect, useState } from "react";
// import apiRequest from "../lib/apiRequest"
// import {format} from 'timeago.js'
// import { SocketContext } from "../context/SocketContext";

// const Chats = ({currentUser, chats, chatCloser}) => {
//     const [chat, setChat] = useState(null);
//     const { currentUser } = useContext(AuthContext);
//     const { socket } = useContext(SocketContext);
  
//     const messageEndRef = useRef();
  
//     const decrease = useNotificationStore((state) => state.decrease);
  
//     useEffect(() => {
//       messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [chat]);
  
//     const handleOpenChat = async (id, receiver) => {
//       try {
//         const res = await apiRequest("/chats/" + id);
//         if (!res.data.seenBy.includes(currentUser.id)) {
//           decrease();
//         }
//         setChat({ ...res.data, receiver });
//       } catch (err) {
//         console.log(err);
//       }
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       const formData = new FormData(e.target);
//       const text = formData.get("text");
  
//       if (!text) return;
//       try {
//         const res = await apiRequest.post("/messages/" + chat.id, { text });
//         setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
//         e.target.reset();
//         socket.emit("sendMessage", {
//           receiverId: chat.receiver.id,
//           data: res.data,
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     };
  
//     useEffect(() => {
//       const read = async () => {
//         try {
//           await apiRequest.put("/chats/read/" + chat.id);
//         } catch (err) {
//           console.log(err);
//         }
//       };
  
//       if (chat && socket) {
//         socket.on("getMessage", (data) => {
//           if (chat.id === data.chatId) {
//             setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
//             read();
//           }
//         });
//       }
//       return () => {
//         socket.off("getMessage");
//       };
//     }, [socket, chat]);
    



    
//   return (
    
//     <div className="relative h-full">
//       <div className="h-full pb-16">

//         <div className="top-chat-header flex justify-between items-center">
//           <h1 className="text-xl font-bold text-[#0D263B] py-4 rounded-lg inline-block">Chats</h1>
//           <button className="rounded-full flex justify-center items-center text-[#5a1827] bg-[#ff416a] w-7 h-7" onClick={chatCloser}>
//           <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512">
//             <path fill="#5a1827" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
//           </svg>
//         </button>
//         </div>

//         <div className="all-chat-container flex flex-col h-full gap-4 overflow-y-scroll custom-scroll">
//             {
//               chats?.map((c, index) => (
//                 <div className="chat-indicator flex w-full items-center cursor-pointer" key={c.id} onClick={() => chatOpenHandler(index, c, c.receiver.id)}>
//                   <img src={c.receiver.avatar || "/dummydp.png"} alt="profile picture" className="w-11 h-11 object-cover rounded-full mr-2"/>
//                   <div className="texts flex flex-col">
//                     <h1 className="text-black text-lg font-bold">{c.receiver.username}</h1>
//                     <p className={`${c.seenBy.includes(currentUser.id) || chat?.id == c.id ? 'text-gray-500' : 'text-gray-900 font-semibold'}`}>{c.lastMessage}</p>
//                   </div>
//                 </div>
//               ))
//             }
//         </div>
//       </div>

//     <div className={`single-chat w-full h-full absolute bg-white top-0 ${chatOpen ? 'right-0' : '-right-[110%]'} pt-3 custom-transition`}>
//       <div className="chat-header flex justify-between items-center">
//         <div className="user-chat-container flex items-center gap-2">
//           <img src={chats[activeIndex].receiver.avatar || "/dummydp.png"} alt="" className="w-11 h-11 object-cover rounded-full"/>
//           <h1 className="text-xl font-bold text-[#0D263B]">{chats[activeIndex].receiver.username}</h1>
//         </div>
//           <img src="/exit.png" alt="exit icon" className="w-6 h-6 cursor-pointer"  onClick={() => setChatOpen(false)}/>
//       </div>
      
//         {/* Chat Messages */}
//       <div className="flex flex-col gap-2 mt-4 chat-mobile-height sm:h-[315px] overflow-y-auto custom-scroll">

//         {pastMessages.messages?.map((message, index) => (
//           <div key={message.id} className={`${message.senderId === currentUser.id ? 'message-div' : 'own-message-div'} `}>
//             <p className={`message ${message.userId === currentUser.id ? 'own-message' : ''}`}>{message.text}</p>
//             <p className={`hours ${message.userId === currentUser.id ? 'ml-auto' : 'mr-auto'}`}>{format(message.createdAt)}</p>
//           </div>
//         ))}
//         <div className="message-div">
//           <p className="message">Previous chat message</p>
//         </div>

//       </div>
      
//         {/* Bottom Section for Typing and Sending Messages */}
//       <form className="mt-4 flex items-center" onSubmit={sendMessage}>
//         <textarea
//         name="text"
//           className="h-[40px] custom-scroll flex-1 px-3 py-2 bg-gray-100 rounded focus:outline-none text-[#0061E0] font-bold placeholder:font-medium placeholder:text-gray-400"
//           placeholder={`Talk to ${currentUser.name}`}
//         />
//         <button type="submit"
//           className="ml-3 px-4 py-2 bg-[#0061E0] rounded text-white hover:bg-[#0e305d] ease-in-out duration-200"
          
//         >
//           <img src="/send2.png" alt="send icon" className="w-5 h-5"/>
//         </button>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Chats