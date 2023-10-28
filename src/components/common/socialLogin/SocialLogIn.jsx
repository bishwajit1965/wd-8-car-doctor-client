import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";

const SocialLogIn = () => {
  const { handleGoogleLogin } = useContext(AuthContext);

  // Redirect to the desired route
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSocialLogin = () => {
    handleGoogleLogin()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div className="flex justify-between items-center pb-4">
      <button onClick={handleGoogleSocialLogin} className="btn btn-circle">
        <FaGoogle />
      </button>
      <button className="btn btn-circle">
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogIn;
