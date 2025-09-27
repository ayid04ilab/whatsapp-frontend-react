import React, { useState } from 'react';
import RoundedBtn from "./Common/RoundedBtn";
import { FaSearch, FaEllipsisH } from 'react-icons/fa';
import { chatsData } from '../data/chatsData';
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { ImFolderDownload } from "react-icons/im";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";

const Sidebar = ({ user, selectedChat, setSelectedChat }) => {
  const [filter, setFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [archivedView, setArchivedView] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileModalOpen(prev => !prev);
  };
  

  const handleChatClick = (contact) => {
    setSelectedChat(contact);
  };

  const handleArchivedClick = () => {
    setArchivedView(!archivedView);
  };

  const navIcons = [MdPeopleAlt, TbCircleDashed, BsFillChatLeftTextFill, HiDotsVertical];

  const filteredChats = chatsData
    .filter(chat => chat.contact.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(chat => chat.archived === archivedView);

  return (
    <div className="flex flex-col border-r border-neutral-700 w-full h-screen text-white">
      {/* Profile nav */}
      <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
        <img src={user?.photoURL || pp} alt="profile" className="rounded-full w-[40px]" />
        <div className="flex justify-between w-[175px]">
          {navIcons.map((Icon, idx) => (
            <RoundedBtn key={idx} icon={<Icon />} />
          ))}
        </div>
      </div>

      {/* Search and filter */}
      <div className="flex justify-between items-center h-[60px] p-2">
        <input
          type="text"
          placeholder="Search or start a new chat"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
        />
        <button
          className={`text-2xl m-2 p-1 rounded-full ${
            filter
              ? "bg-emerald-500 text-white hover:bg-emerald-700"
              : "text-[#8796a1] hover:bg-[#3c454c]"
          }`}
          onClick={() => setFilter(!filter)}
        >
          <BiFilter />
        </button>
      </div>

      {/* Chats List */}
      <div className="flex flex-col overflow-y-scroll cursor-pointer h-full px-3">
        {/* Archived container */}
        <div
          className={`flex justify-between items-baseline w-full px-3 py-2 hover:bg-[#202d33] cursor-pointer ${
            archivedView ? "bg-[#202d33]" : ""
          }`}
          onClick={handleArchivedClick}
        >
          <div className="flex justify-around items-baseline w-[150px]">
            <span className="text-emerald-500 text-lg">
              <ImFolderDownload />
            </span>
            <h3 className="text-white p-0 m-0">Archived</h3>
          </div>
          <p className="text-emerald-500 text-xs font-light">
            {chatsData.filter(chat => chat.archived).length}
          </p>
        </div>

        {/* Chats */}
        {filteredChats.map((chat, index) => (
          <div
            key={index}
            onClick={() => handleChatClick(chat.contact)}
            className={`flex items-center space-x-4 cursor-pointer w-full h-[85px] px-3 ${
              selectedChat === chat.contact
                ? "bg-[#202d33]"
                : "hover:bg-[#202d33]"
            }`}
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full me-2">
              
              <img
                onClick={toggleProfileModal}
                src={chat.pp}
                alt="profile_picture"
                className="rounded-full w-[50px]"
              />
            </div>
            <div className="flex-1 border-t border-neutral-700 min-h-[70px]">
              <h4 className="font-semibold my-1">{chat.contact}</h4>
              <p className={`text-sm my-1 ${!chat.unreadMsgs ? "text-neutral-400" : ""}`}>{chat.msg}</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full text-xs py-2 border-t border-neutral-700">
              <p className="text-emerald-500">{chat.time}</p>
              {chat.unreadMsgs && (
                <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px] text-emerald-900">
                  {chat.unreadMsgs}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isProfileModalOpen && (
  <div
    className="fixed inset-0 z-50 top-0 left-10 flex items-center"
    onClick={toggleProfileModal}
  >
    <div
      className="relative bg-[#1a1a1a] bg-opacity-50 text-white h-[250px] rounded-2xl p-6 w-[90%] max-w-sm shadow-lg flex flex-col justify-center items-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={toggleProfileModal}
        className="absolute top-3 right-4 text-white text-2xl hover:text-red-500"
      >
        ×
      </button>

      {/* Profile Picture */}
      <img
        src={
          selectedChat
            ? (chatsData.find(chat => chat.contact === selectedChat)?.pp || cs1)
            : cs1
        }
        alt="profile"
        className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white/10"
      />

      {/* Contact Name */}
      <h2 className="text-lg font-semibold">{selectedChat}</h2>
    </div>
  </div>
)}

    </div>
   
  );
};

export default Sidebar;
