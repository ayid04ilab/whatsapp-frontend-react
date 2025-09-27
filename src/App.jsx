import React, { useState, useEffect } from 'react';
import LoadingScreen from "./components/LoadingScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';
import LoginPage from './components/Login';
import { BsWhatsapp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * 11) + 7; // 7 to 17
        setProgress((prev) => Math.min(prev + increment, 100));
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex justify-center items-center bg-[#111a21] h-screen">
        {/* Sidebar */}
        <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-full h-full">
          <Sidebar setSelectedChat={setSelectedChat} selectedChat={selectedChat} />
        </div>
        {/* ChatWindow */}
        <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-full h-full">
          {selectedChat ? (
            <ChatWindow selectedChat={selectedChat} />
          ) : (
            <div className="flex flex-col justify-center items-center bg-[#111a21] w-full h-full">
              {/* WhatsApp Icon */}
                    <span className="text-[#3d464a] text-6xl my-12">
                      <BsWhatsapp />
                    </span>
                    <span className='text-[#c1c6c9]'>
                    Select a chat
                    </span>

                    {/* Text */}
                              <div className="flex items-end text-[#687782] m-3">
                                {/* Lock */}
                                <span className="flex justify-baseline text-sm p-3">
                                   <div><FaLock /> </div> <div>End-to-end encrypted</div>
                                </span>
                    
                               
                              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
