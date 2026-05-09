import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage("");
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    //validate the form data
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value,
    );
    setErrorMessage(message);
    if (message) return;
    //Sign / Sign up

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("signup user object", user);
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/D5603AQG9Bq0K78LFaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718470350037?e=1779926400&v=beta&t=gveUUC_qmNSM-IqceDrEmI_-lA7ffFsIR7reZHFz_AQ",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signin user object", user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
        alt="Netflix"
        className="absolute"
      />
      <form
        className="absolute p-12 bg-black w-3/12 mx-auto my-[10%] right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={nameRef}
            className="p-4 my-4 w-full rounded-sm bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        <span className="text-red-500 text-sm">{errorMessage}</span>
        <button
          className="p-4 my-2 bg-red-600 w-full rounded-md"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span
          className="my-4 cursor-pointer text-sm"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a User? Sign In"}
        </span>
      </form>
    </div>
  );
};

export default Login;
