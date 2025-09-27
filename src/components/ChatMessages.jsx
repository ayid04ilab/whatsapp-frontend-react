import React, {useRef, useEffect} from 'react';
import { messagesData } from '../data/messagesData';
import Chat from '../components/Chat';


const ChatMessages = ({ selectedChat }) => {
  const messages = messagesData[selectedChat] || [];
  const bottomRef = useRef(null); 
  useEffect(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, [messages]);

  return (
    <>
      <div 
          className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100">
        {messages.map((msg, index) => (
            <Chat
            key={index}
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))}
        <div ref={bottomRef} />
      </div>
    </>
  );
};

export default ChatMessages;
