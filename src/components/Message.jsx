import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { authUser } = useSelector((store) => store.user);
  const { selectedUser } = useSelector((store) => store.user);
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isSender = message?.senderId === authUser?._id;
  const user = isSender ? authUser : selectedUser;

  return (
    <div
      ref={scroll}
      className={`flex ${isSender ? "justify-end" : "justify-start"} px-4 py-2`}
    >
      <div className="flex items-start space-x-3 max-w-[80%]">
        {!isSender && (
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-00">
            <img
              src={user?.profilePhoto}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className={`flex flex-col ${isSender ? "items-end" : "items-start"}`}
        >
          {/* <span className="text-sm text-gray-500 font-medium mb-1">
            {user?.fullName}
          </span> */}

          <div
            className={`rounded-2xl px-4 py-2 shadow-md ${
              isSender ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900"
            }`}
          >
            <p className="text-base break-words">{message?.message}</p>
          </div>
        </div>

        {isSender && (
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
            <img
              src={user?.profilePhoto}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
