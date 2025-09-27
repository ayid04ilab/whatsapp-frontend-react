import React from 'react';

const Chat = ({key, msg, time, isLink, img, sent }) => {
  return (
    <div key={key}
      className={`flex w-full px-4 mx-2 my-1 ${sent ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`relative rounded-2xl px-3 py-2 max-w-[80%] shadow-md ${
          sent ? 'bg-emerald-600 text-white' : 'bg-[#2a3942] text-white'
        }`}
      >
        {/* If there's an image */}
        {img ? (
          <div className="relative">
            <img
              src={img}
              alt="chat_image"
              className="rounded-xl max-w-xs object-cover"
            />
            <span className="absolute bottom-1 right-2 text-[10px] text-gray-300">
              {time}
            </span>
          </div>
        ) : (
          // Text message (with optional link)
          <div className="flex flex-col gap-1">
            {isLink ? (
              <a
                href={msg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 underline break-words"
              >
                {msg}
              </a>
            ) : (
              <p className="break-words m-1">{msg}</p>
            )}
            <span className="text-[10px] text-gray-300 text-right">{time}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
