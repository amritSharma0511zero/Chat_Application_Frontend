import React, { use } from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";
const OtherUsers = () => {
  //this is costom hook
  useGetOtherUsers();

  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return;
  return (
    <div className="h-full overflow-y-auto px-2 space-y-2">
      {otherUsers?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
};

export default OtherUsers;
