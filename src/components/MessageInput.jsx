import React, { useState, useRef, useEffect } from 'react';
import RoundedBtn from "./Common/RoundedBtn";
import { messagesData } from "../data/messagesData";
import { MdSend } from "react-icons/md";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { cs2 } from "../assets/whatsapp";
// import { getTime } from "../logic/whatsapp";

const MessageInput = () => {
  const [message, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  

   const getTime = () => {
      return new Date()
        .toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
        .toLocaleLowerCase();
    };
  
  const addMessage = (msg) => {
    const newMessages = [...message, msg];
    setMessages(newMessages);
  };
  
  const handleEmojiClick = () => {
    inputRef.current.value += "🔥";
    inputRef.current.focus();
  };

  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  const handleImgUpload = () => {
      addMessage({
        img: cs2,
        time: getTime(),
        sent: true,
      });
    };

  const handleInputSubmit = () => {
      if (inputRef.current.value.length > 0) {
        addMessage({
          msg: inputRef.current.value,
          time: getTime(),
          sent: true,
        });
        inputRef.current.value = "";
        inputRef.current.focus();
        setTyping(false);
      }
    }; 
  
    useEffect(() => {
      const listener = (e) => {
        if (e.code === "Enter") handleInputSubmit();
      };
  
      document.addEventListener("keydown", listener);
      return () => document.removeEventListener("keydown", listener);
    });

  return (
    <>
    {/* Bottom section */}
    <div className="flex items-center bg-[#202d33] w-full h-[70px] p-2">
    {/* Emoji btn */}
    <span className="mr-2">
      <RoundedBtn icon={<BiHappy />} onClick={handleEmojiClick} />
    </span>
    

    {/* Upload btn */}
    <span className="me-2">
      <RoundedBtn icon={<AiOutlinePaperClip />} onClick={handleImgUpload} />
    </span>

    {/* Input bar */}
    <input
      type="text"
      placeholder="Type a message"
      className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 m-1 px-3 placeholder:text-sm placeholder:text-[#8796a1]"
      onChange={handleInputChange}
      ref={inputRef}
    />

    {/* Mic/Send btn */}
    <span className="ml-2">
      {typing ? (
        <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} />
      ) : (
        <RoundedBtn icon={<BsFillMicFill />} />
      )}
    </span>
  </div>
  </>
  );
};

export default MessageInput;
