import React, { useEffect } from "react";
import Login from "./Login";
import Spotify from "./spotify";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";




export default function Home() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    //getting the hash for access token 
    const hash = window.location.hash;
    console.log(token)
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
        //setting my token which i got after reducing the entire hash string
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return (<div>
    {token ? <Spotify /> : <Login />}
   
    </div>);
}