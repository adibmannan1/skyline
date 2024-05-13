import { useState } from "react";

const Chats = ({user, chatCloser}) => {
    const [message, setMessage] = useState('');
    const [chatOpen, setChatOpen] = useState(false);
    const messageList = [
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },
    {
        username: "John Doe",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        message: "Lorem ipsum dolor sit amet"
    },

]
  return (
    
    <div className="relative h-full">
      <div className="h-full pb-16">

        <div className="top-chat-header flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#0D263B] py-4 rounded-lg inline-block">Chats</h1>
          <button className="rounded-full flex justify-center items-center text-[#5a1827] bg-[#ff416a] w-7 h-7" onClick={chatCloser}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512">
            <path fill="#5a1827" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
          </svg>
        </button>
        </div>

        <div className="all-chat-container flex flex-col h-full gap-4 overflow-y-scroll custom-scroll">
            {
              messageList.map(message => (
                <div className="message-indicator flex w-full items-center cursor-pointer" key={message.message} onClick={() => setChatOpen(true)}>
                  <img src={message.img} alt="profile picture" className="w-11 h-11 object-cover rounded-full mr-2"/>
                  <div className="texts flex flex-col">
                    <h1 className="text-black text-lg">{message.username}</h1>
                    <p>{message.message}</p>
                  </div>
                </div>
              ))
            }
        </div>
      </div>

    <div className={`single-chat w-full h-full absolute bg-white top-0 ${chatOpen ? 'right-0' : '-right-[110%]'} pt-3 custom-transition`}>
      <div className="chat-header flex justify-between items-center">
        <div className="user-chat-container flex items-center gap-2">
          <img src={user.img} alt="" className="w-11 h-11 object-cover rounded-full"/>
          <h1 className="text-xl font-bold text-[#0D263B]">{user.name}</h1>
        </div>
          <img src="/exit.png" alt="exit icon" className="w-6 h-6 cursor-pointer"  onClick={() => setChatOpen(false)}/>
      </div>
      
        {/* Chat Messages */}
      <div className="flex flex-col gap-2 mt-4 chat-mobile-height sm:h-[320px] overflow-y-auto custom-scroll">
        <p className="message">Previous chat message</p>
        <p className="message own">Your chat message</p>
        <p className="message">Another chat message</p>
        <p className="message own">Your chat message</p>
        <p className="message">Previous chat message</p>
        <p className="message own">Your chat message</p>
        <p className="message">Another chat messa ge</p>
        <p className="message own">Your chat message</p>
        <p className="message">Previous chat message</p>
        <p className="message own">Your chat message</p>
        <p className="message">Another chat message</p>
        <p className="message own">Your chat message</p>
        <p className="message">Previous chat message</p>
      </div>
      
        {/* Bottom Section for Typing and Sending Messages */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="flex-1 px-3 py-2 bg-gray-100 rounded focus:outline-none text-[#0061E0] font-bold placeholder:font-medium placeholder:text-gray-400"
          placeholder={`Talk to ${user.name}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="ml-3 px-4 py-2 bg-[#0061E0] rounded text-white hover:bg-[#0e305d] ease-in-out duration-200"
          onClick={() => {
            setMessage('');
          }}
        >
          <img src="/send2.png" alt="send icon" className="w-5 h-5"/>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Chats