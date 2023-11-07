import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import {
  setUser,
  setLoading,
  setError,
  clearLoading,
  clearError,
} from "./authSlice";

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(setUser(user));
    dispatch(clearError());
    dispatch(clearLoading());
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(clearLoading());
  }
};

export const signupAction = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(setUser(user));
    dispatch(clearError());
    dispatch(clearLoading());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(clearLoading());
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    await signOut(auth);
    dispatch(setUser(null));
    dispatch(clearError());
    dispatch(clearLoading());
    localStorage.removeItem("user");
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(clearLoading());
  }
};

export const sendEmailVerificationAction = () => async (dispatch) => {
  try {
    await sendEmailVerification(auth.currentUser);
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const sendPasswordResetEmailAction = (email) => async (dispatch) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const updateUserProfileAction =
  (displayName, photoURL) => async (dispatch) => {
    try {
      const user = auth.currentUser;
      await updateProfile(user, { displayName, photoURL });
      dispatch(setUser({ ...user, displayName, photoURL }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

export const verificationStatusAction = () => async (dispatch) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await user.reload();
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
};

export const emailVerificationSent = () => {
  return { type: "EMAIL_VERIFICATION_SENT" };
};

export const passwordResetEmailSent = () => {
  return { type: "PASSWORD_RESET_EMAIL_SENT" };
};
