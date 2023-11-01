import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const emailVerify = async () => {
    if (user) {
      try {
        await sendEmailVerification(auth.currentUser);
        alert("Email verification email sent");
      } catch (err) {
        alert("Error sending email verification");
        console.error("Error sending email verification", err);
      }
    }
  };
  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent");
    } catch (err) {
      alert("Error sending password reset email");
      console.error("Error sending password reset email", error);
    }
  };

  const verificationStatus = () => {
    if (user) {
      return user.emailVerified;
    }
    return false;
  };
  const updateUserProfile = async (displayName, photoURL) => {
    if (user) {
      try {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        setUser({ ...user, displayName, photoURL });
      } catch (err) {
        console.error("Error updating user profile", err);
      }
    }
  };

  // const googleSignIn =()=>{
  //   const googleAuthProvider = new GoogleAuthProvider()
  //   return signInWithPopup(auth, googleAuthProvider)
  // }
  // console.log(user.accessToken);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        logIn,
        logOut,
        emailVerify,
        forgotPassword,
        verificationStatus,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
