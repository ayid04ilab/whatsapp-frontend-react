import {
  cs1,
  cs2,
  chat1,
  chat2,
  chat3,
  chat4,
  chat5,
  chat6,
  chat7,
  chat8,
  chat9,
  chat10,
  chat11,
  chat12,
  chat13,
  food
} from "../assets/whatsapp"; // Importing images
import { MdSend, MdSearch } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import React, { useState, useRef, useEffect } from 'react';
import RoundedBtn from "./Common/RoundedBtn";
import { messagesData } from "../data/messagesData";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import Chat from "../components/Chat";
import EmojiPicker from 'emoji-picker-react'; // Import emoji picker
import { chatsData } from "../data/chatsData";


const ChatWindow = ({ selectedChat }) => {
  const images = [cs1, cs2, chat1, chat2, chat3, chat4, chat5, chat6, chat7, chat8, chat9, chat10, chat11, chat12, chat13, food];
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const [showImageModal, setShowImageModal] = useState(false); // State to show or hide the modal
  const [activeDropdown, setActiveDropdown] = useState(null); // 'search' | 'menu' | null

  const ImageModal = ({ images, onSelectImage }) => {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
        <div className="bg-white p-4 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="cursor-pointer" onClick={() => onSelectImage(image)}>
                <img src={image} alt={`img-${index}`} className="w-20 h-20 object-cover rounded-md" />
              </div>
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setShowImageModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const contact = messagesData.find(item => item.contact === selectedChat);
    setMessages(contact ? contact.messages : []);
  }, [selectedChat]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getTime = () => {
    return new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).toLowerCase();
  };

  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleEmojiSelect = (emojiData) => {
    const emoji = emojiData.emoji; // Extract the emoji string from the emoji object
    inputRef.current.value += emoji; // Add selected emoji to input
    inputRef.current.focus();  // Focus the input after emoji is added
    setEmojiPickerVisible(false); // Hide emoji picker after selection
    handleInputChange();  // Update input change handler
};

  const handleEmojiClick = () => {
    setEmojiPickerVisible(!emojiPickerVisible); // Toggle emoji picker visibility
  };

  const handleInputChange = () => {
    setTyping(inputRef.current.value.length > 0);
  };

  const handleImgUpload = (image) => {
    addMessage({
      img: image,  // Adding the selected image to the message
      time: getTime(),
      sent: true,
    });
    setShowImageModal(false);  // Close the modal after sending the image
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
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Contact nav */}
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3 relative">
        <div className="flex items-center">
          <img
            src={selectedChat
              ? (chatsData.find(chat => chat.contact === selectedChat)?.pp || cs1)
              : cs1}
            alt="profile_picture"
            className="rounded-full w-[45px] h-[45px] mr-5"
          />
          <div className="flex flex-col">
            <h3 className="text-white font-medium m-0">{selectedChat}</h3>
            <p className="text-[#8796a1] text-xs m-0">online</p>
          </div>
        </div>

        <div className="relative flex justify-between items-center w-[85px]">
          <div onClick={() => setActiveDropdown(prev => prev === "search" ? null : "search")}>
            <RoundedBtn icon={<MdSearch />} />
          </div>
          <div onClick={() => setActiveDropdown(prev => prev === "menu" ? null : "menu")}>
            <RoundedBtn icon={<HiDotsVertical />} />
          </div>

          {/* Search Dropdown */}
          {activeDropdown === "search" && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#2e3b41] text-sm text-white shadow-lg rounded-lg p-2 z-10">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full bg-[#1f2a30] text-sm text-white p-2 rounded focus:outline-none"
              />
            </div>
          )}

          {/* Menu Dropdown */}
          {activeDropdown === "menu" && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#2e3b41] text-sm text-white shadow-lg rounded-lg p-2 z-10">
              <ul className="space-y-1">
                <li className="hover:bg-[#3c4b51] p-2 rounded cursor-pointer">Delete Chat</li>
                <li className="hover:bg-[#3c4b51] p-2 rounded cursor-pointer">Archive Chat</li>
                <li className="hover:bg-[#3c4b51] p-2 rounded cursor-pointer">Mute Notifications</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Messages section */}
      <div className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-full px-6 py-2">
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

      {/* Bottom Input Section */}
      <div className="flex items-center bg-[#202d33] w-full h-[70px] p-2">
        <span className="mr-2">
          <RoundedBtn icon={<BiHappy />} onClick={handleEmojiClick} />
        </span>
        {emojiPickerVisible && (
  <div className="absolute bottom-[70px] z-10">
    <EmojiPicker 
      onEmojiClick={handleEmojiSelect} 
      pickerStyle={{
        backgroundColor: "#1f2a30",  // Dark background
        color: "#fff",                // Light text color
        borderRadius: "8px",          // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow for floating effect
      }} 
    />
  </div>
)}
        <span>{selectedEmoji && <span>{selectedEmoji}</span>}</span> {/* Display selected emoji */}
        <span className="me-2">
          <RoundedBtn icon={<AiOutlinePaperClip />}  onClick={() => setShowImageModal(true)} />
        </span>
            {showImageModal && (
              <ImageModal images={images} onSelectImage={handleImgUpload} />
            )}
        <input
          type="text"
          placeholder="Type a message"
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-full px-3 py-2 placeholder:text-sm placeholder:text-[#8796a1]"
          onChange={handleInputChange}
          ref={inputRef}
        />
        <span className="ml-2">
          {typing ? (
            <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} />
          ) : (
            <RoundedBtn icon={<BsFillMicFill />} />
          )}
        </span>
      </div>
    </div>
  );
};

export default ChatWindow;
