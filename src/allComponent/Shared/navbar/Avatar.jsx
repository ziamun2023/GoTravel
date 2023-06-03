import React, { useContext } from 'react';
import avatar from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {
    const {user}=useContext(AuthContext)
    return (
   <img className='rounded-full' height='30' width="30" src={user && user.photoURL?user.photoURL:avatar} alt="" />
    );
};

export default Avatar;