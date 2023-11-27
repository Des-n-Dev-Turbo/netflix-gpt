/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import cls from 'classnames';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import Header from './Header';
import { LoginSchema, SignUpSchema } from '@utils/validationSchema';
import { auth } from '@utils/firebase';
import { addUser } from '@store/userSlice';
import { NETFLIX_BG_IMG_URL } from '@utils/constants';

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(isSignIn ? LoginSchema : SignUpSchema),
  });
  const dispatch = useDispatch();

  const onFormChange = () => {
    setSignIn((prev) => !prev);
    setError(null);
    reset();
  };

  const onFormSubmit = (data, e) => {
    e.preventDefault();

    if (isSignIn) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log('User Successfully Logged In');
        })
        .catch((err) => {
          setError({ code: err.code, message: err.message });
        });
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          return updateProfile(user, {
            displayName: `${data.firstName} ${data.lastName}`,
          });
        })
        .then(() => {
          const currentUser = auth.currentUser;
          const userObj = {
            accessToken: currentUser.accessToken,
            name: currentUser.displayName,
            uid: currentUser.uid,
            email: currentUser.email,
          };
          dispatch(addUser(userObj));
          console.log('Successfully Updated profile');
        })
        .catch((err) => {
          setError({ code: err.code, message: err.message });
        });
    }

    reset();
  };

  return (
    <div>
      <Header />
      <img
        src={NETFLIX_BG_IMG_URL}
        alt="Netflix Background"
        className="absolute h-screen lg:w-screen object-cover brightness-50"
      />
      <form
        className="py-6 md:py-8 xl:py-12 px-8 md:px-12 xl:px-16 absolute w-[90%] md:w-[60%] xl:w-[30%]  text-white m-auto bg-gradient-to-br from-black via-black/60 to-black flex flex-col gap-4 my-[40%] lg:my-[10%] left-[50%] -translate-x-1/2  rounded-sm"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2 className="text-3xl mb-2 font-medium">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        {!isSignIn && (
          <>
            <div>
              <input
                type="text"
                className={cls('input', { 'border-b border-b-[#E87C01]': errors.firstName })}
                placeholder="First Name"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="font-extralight text-sm py-1 px-0.5 text-[#E87C01]">{errors?.firstName?.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                className={cls('input', { 'border-b border-b-[#E87C01]': errors.lastName })}
                placeholder="Last Name"
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="font-extralight text-sm py-1 px-0.5 text-[#E87C01]">{errors?.lastName?.message}</p>
              )}
            </div>
          </>
        )}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className={cls('input', { 'border-b border-b-[#E87C01]': errors.email })}
            {...register('email')}
          />
          {errors.email && (
            <p className="font-extralight text-sm py-1 px-0.5 text-[#E87C01]">{errors?.email?.message}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className={cls('input', { 'border-b border-b-[#E87C01]': errors.password })}
            {...register('password')}
          />
          {errors.password && (
            <p className="font-extralight text-sm py-1 px-0.5 text-[#E87C01]">{errors?.password?.message}</p>
          )}
        </div>
        {!isSignIn && (
          <div>
            <input
              type="password"
              placeholder="Re-Confirm Password"
              className={cls('input', { 'border-b border-b-[#E87C01]': errors.confirmPassword })}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="font-extralight text-sm py-1 px-0.5 text-[#E87C01]">{errors?.confirmPassword?.message}</p>
            )}
          </div>
        )}
        <button type="submit" className="w-full bg-[#E50914] px-5 py-3 rounded-md text-white mt-2">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        {error && <p className="font-extralight text-sm py-1 px-0.5 text-[#E87C01]">{error?.message}</p>}
        <p className="text-gray-400/80 font-extralight tracking-wider mt-2">
          {isSignIn ? 'New to Netflix? ' : 'Already have Netflix? '}
          <span className="text-white cursor-pointer" onClick={onFormChange}>
            {isSignIn ? 'Sign up' : 'Sign in'} now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
