import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import { chatsData } from "../data/whatsapp";
import { ImFolderDownload } from "react-icons/im";

function Chats({ filter, setSelectedContact, selectedContact }) {
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;
    setChats(newChats);
  }, [filter]);

  return (
    // Chats main container
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-full">
      {/* Archived container */}
      <div className="flex justify-between items-center w-full min-h-[55px] px-3 hover:bg-[#202d33]">
        <div className="flex justify-around items-center w-[150px]">
          <span className="text-emerald-500 text-lg">
            <ImFolderDownload />
          </span>
          <h1 className="text-white">Archived</h1>
        </div>
        <p className="text-emerald-500 text-xs font-light">7</p>
      </div>

      {/* Chats */}
      {chats.map((chat, i) => (
        <Chat
          key={i}
          pp={chat.pp}
          contact={chat.contact}
          msg={chat.msg}
          time={chat.time}
          unreadMsgs={chat.unreadMsgs}
          active={selectedContact === chat.contact}
          onSelect={setSelectedContact}
        />
      ))}
    </div>
  );
}

export default Chats;
