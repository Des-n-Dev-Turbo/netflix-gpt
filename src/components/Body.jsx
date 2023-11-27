/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@utils/firebase';
import { addUser, removeUser } from '@store/userSlice';
import router from '@routes';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObj = { accessToken: user.accessToken, name: user.displayName, uid: user.uid, email: user.email };
        dispatch(addUser(userObj));
      } else {
        dispatch(removeUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <RouterProvider router={router} />;
};

export default Body;
