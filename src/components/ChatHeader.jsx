import React from 'react';

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
        <div className="ml-4">
          <div className="text-xl font-semibold">John Doe</div>
          <div className="text-sm text-gray-400">Online</div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
