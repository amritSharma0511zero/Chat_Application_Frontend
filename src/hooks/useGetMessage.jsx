import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const useGetMessage = () => {
    const {selectedUser} = useSelector(store => store.user);

    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMessage = async() => {
            try {
                axios.defaults.withCredentials=true;
                const res = await axios.get(`https://chat-application-backend-bxvv.onrender.com/api/v1/message/${selectedUser?._id}`);
                dispatch(setMessages(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessage();
    },[selectedUser]);
}

export default useGetMessage