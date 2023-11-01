import React, { useState, useEffect } from "react";
import Card from "../Container/Card";
import { useAuth } from "../../context/AuthContext";

const VerifyForm = () => {
  const { user, emailVerify, verificationStatus } = useAuth();
  const [isVerificationEmailSent, setIsVerificationEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkVerificationStatus = async () => {
      if (user) {
        const isVerified = await verificationStatus();
        setIsLoading(false);
        if (isVerified) {
          setIsVerificationEmailSent(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    checkVerificationStatus();
  }, [user,emailVerify, verificationStatus]);

  const handleResendVerificationEmail = async () => {
    if (user) {
      await emailVerify();
      setIsVerificationEmailSent(true);
    }
  };

  return (
    <Card>
      <h2 className="text-2xl text-gray-700 text-center font-semibold">
        Verify Email
      </h2>
      {isLoading ? (
        <div className="text-gray-600 text-center">
          <p>Loading verification status...</p>
          <p>Please wait while we check your email verification status.</p>
        </div>
      ) : user && user.emailVerified ? (
        <p className="text-center text-gray-600">
          Your email is verified.
          <br /> You can now access your account.
        </p>
      ) : (
        <div className="justify-between items-center mt-2">
          {isVerificationEmailSent ? (
            <p className="text-center text-gray-600">
              A verification email has been sent to your email address. Please
              check your inbox and spam folder.
            </p>
          ) : (
            <p className="text-gray-600">
              Your email is not verified. Click the button below to request a
              verification email.
            </p>
          )}
          <div className="flex justify-center">
            <button
              className="bg-gray-600 py-1.5 px-4 mt-3 rounded hover:bg-gray-700 font-semibold text-gray-50"
              onClick={handleResendVerificationEmail}
              disabled={isVerificationEmailSent}
            >
              {isVerificationEmailSent
                ? "Resend Verification Email"
                : "Send Verification Email"}
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default VerifyForm;
