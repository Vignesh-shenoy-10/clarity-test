import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";



export default function Navbar({ navBackground }) {

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
    <Container navBackground={navBackground}>
      <div className="search__bar">
        <FaSearch />
        <input type="input" placeholder="Artists, songs, or podcasts"
        onKeyDown={event => {
          if(event.key === "Enter") {
            search()
            console.log("Pressed Enter key")
          }
        }}
        onChange={event => setSearchInput(event.target.value)}
        
        />
        {/* <InputGroup >
          <FormControl 
          placeholder="Artists, songs, or podcasts"
          type="input"
          onKeyDown={event => {
            if(event.key === "Enter") {
              console.log("Pressed enter key")
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
          />
        </InputGroup> */}
        {console.log(searchInput)}
        
      </div>
      <div className="avatar">
        <a href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
`;