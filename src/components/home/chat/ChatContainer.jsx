import React, { useState } from 'react';
import { FaMicrophone, FaMinus, FaPhone, FaVideo } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { IoMdPhotos } from "react-icons/io";
import { BiSolidSticker } from "react-icons/bi";
import { FaImage, FaGift } from 'react-icons/fa';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How's your day going so far?",
      time: "12:59",
      sender: "other",
    },
    {
      id: 2,
      text: "What's the best way to make a strong cup",
      time: "01:27",
      sender: "self",
    },
  ]);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = (e) => {
    if (e.key === 'Enter' && messageInput.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: messageInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: "self",
      }]);
      setMessageInput("");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-transparent pointer-events-none z-10 w-full fixed top-0">
        <div className="w-[70%] shadow fixed h-[400px] hide-scrollbar pointer-events-auto overflow-y-scroll bottom-0 right-[10%] md:w-[40%] lg:w-[30%] xl:w-[32%] rounded-t-[20px] bg-white">
          <div className="bg-white">
            <div className="flex items-center shadow-md p-2 justify-between">
              <div className="flex gap-3">
                <div className="h-[40px] w-[40px] rounded-full">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" className='rounded-full' alt="" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold">
                    Username
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Online
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <FaPhone className='text-purple-600' cursor={'pointer'} />
                <FaVideo className='text-purple-600' cursor={'pointer'} />
                <FaMinus className='text-purple-600' cursor={'pointer'} />
                <IoClose className='text-purple-600' cursor={'pointer'} />
              </div>
            </div>
            <div className="text-center p-4 border-b border-gray-300">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" className='w-[70px] h-[70px] rounded-full mx-auto' alt="" />
              <h4 className="text-1xl font-semibold">
                Username
              </h4>
              <p className="text-gray-500 text-sm">You aren't friends on Facebook</p>
              <p className="text-gray-500 text-sm">
                Lives in Wah, Pakistan
              </p>
              <p className="text-gray-500 text-sm">
                Goes to HITEC CAMBRIDGE
              </p>
            </div>
            <div className="message-screen bg-white relative overflow-y-scroll hide-scrollbar h-[300px] p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "self" ? "justify-end" : "justify-start"} mb-2`}
                >
                  <div
                    className={`max-w-[70%] p-2 rounded-lg ${
                      msg.sender === "self"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs text-right mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 p-2 flex items-center">
              <div className="flex items-center w-full">
                <div className="flex gap-2">
                  <FaMicrophone className="text-gray-500 cursor-pointer" />
                  <IoMdPhotos className="text-gray-500 cursor-pointer" />
                  <FaImage className="text-gray-500 cursor-pointer" />
                  <BiSolidSticker className="text-gray-500 cursor-pointer" />
                </div>
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleSendMessage}
                  className="flex-1 mx-2 p-2 border rounded-full focus:outline-none"
                  placeholder="Type a message..."
                />
                <div className="flex items-center">
                  <FaGift className="text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;