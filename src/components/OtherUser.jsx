import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {

  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store=>store.user);

  const handleSelected = (user) => {
    dispatch(setSelectedUser(user));            
  }
  return (
    <div onClick={()=>handleSelected(user)} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
      selectedUser?._id === user?._id ? "bg-purple-200" : "hover:bg-gray-100"
    }`}>
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
        <img
          src={user?.profilePhoto}
          alt="User"
          className="w-full h-full object-cover "
        />
      </div>
      <div>
        <p className="font-medium text-gray-800">{user?.fullName}</p>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </div>
  );
};

export default OtherUser;
