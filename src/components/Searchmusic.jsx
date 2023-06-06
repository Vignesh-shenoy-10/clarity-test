import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { useState, useEffect } from "react";

export default function Searchmusic() {
    const [searchInput,setSearchInput] = useState("");
  const [albums,setAlbums] = useState("");

  const [{ token,userInfo }] = useStateProvider();

  async function search() {
    console.log("search for " + searchInput)
    //Get request using search to get artist ID
    var searchParams = {
      method : 'GET',
      headers: {
        'Content-type' : 'application/json',
        'Authorization' : 'Bearer ' + token
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput +'&type=artist',searchParams)
    .then(response => response.json())
    .then(data => { return data.artists.items[0].id })
    // Get req with Artist ID grab all the albums from that artist
    console.log("Artist ID is" + artistID)
    var albums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParams)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setAlbums(data.items)
    })
    console.log(albums)
  }
  return (
    <div>Searchmusic</div>
  )
}
