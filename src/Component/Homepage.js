import React,{useEffect} from "react";
import GoogleLogin from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styling/home.css";
import {gapi} from "gapi-script"
//@material-ui/core; es7 redux snippet(rfc);
const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  useEffect(() =>{
    gapi.load("client: auth2", () => {
      gapi.auth2.init({clientId:"291688090734-8cm43jgpp07og23bs5k5337airfpvigh.apps.googleusercontent.com" })
      // console.log(isSignedIn)
    })
  },[])
  const dispatch = useDispatch(); // set user data/
  const login = (response) => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };
  // useEffect(() => {
  //     try {
  //       dispatch(setSignedIn(true));
  //       //dispatch(setUserData(response.profileObj))
  //     } catch (err) {
  //       console.log(err);
  //     }
  // }, []);

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }
  // const onSuccess = response => {
  //   console.log('SUCCESS', response);
  // };
  // const onFailure = response => {
  //   console.log('FAILED', response);
  // };
  // const onLogoutSuccess = () => {
  //   console.log('SUCESS LOG OUT');
  // };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login_message">
          <h2>🙅</h2>
          <h1>A Reader favourite place</h1>
          <p>
            we provide high quality resource for blog. sign up and read them.
          </p>
          <GoogleLogin
            clientId="291688090734-8cm43jgpp07og23bs5k5337airfpvigh.apps.googleusercontent.com" //attribute; render also;
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className = "login__button"
              >
                Login with google
              </button>
            )}
            // buttonText="Login"
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
          {console.log(isSignedIn)}
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
