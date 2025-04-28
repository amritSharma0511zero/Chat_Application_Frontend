import React, { useState } from "react";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout");
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandle = (e) => {
    e.preventDefault();

    const conversationUser = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]));
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="w-1/4 h-screen bg-gray-200 p-4 border-r border-gray-200 flex flex-col justify-between">
      <div className="">
        <form onSubmit={searchHandle}>
          <div className="flex w-full items-center rounded-lg">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white text-sm px-3 rounded-md ml-1"
            >
              click me
            </button>
          </div>
        </form>

        <div className="mt-2 divider my-0 py-0 h-1 bg-gray-500"></div>
        <OtherUsers />
      </div>

      <div className="sticky bottom-0 bg-gray-200 p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
