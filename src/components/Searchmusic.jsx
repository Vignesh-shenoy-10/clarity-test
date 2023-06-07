import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { Container,InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function Searchmusic() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);
  //I had to initialize my state as array else the app would throw .map is not a function
  const [accessToken, setAccessToken] = useState("")
  const client_id = "f0a2ae45569c4ce391a727db63f01a8d";
  const client_secret = "b1156ef31a424b30a57dd057eb926fd2"

  useEffect(()=>{
    //Im trying to get accesstoken when the application loads 
    var authParams = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
      }
    
      fetch('https://accounts.spotify.com/api/token',authParams)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  },[])

  function back(){
    navigate('/')
  }
  


  async function search() {
    console.log("search for " + searchInput);
    //Get request using search to get artist ID
    var searchParams = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    // Get req with Artist ID grab all the albums from that artist
    console.log("Artist ID is" + artistID);
    var returnedalbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        setAlbums(data.items);
      });
      console.log(albums)
    
  }
  return (<div>
    <Container style={{marginTop:"10px"}}>
        <InputGroup className="mb-3" size="lg">
            <FormControl
            placeholder="Search for artist"
            type="input"
            onKeyDown={event => {
                if(event.key === "Enter") {
                  search()
                  console.log("Pressed Enter key")
                }
              }}
              onChange={event => setSearchInput(event.target.value)}
              />
              <Button onClick={search}>
                Search
              </Button>
               <Button style={{marginLeft:"10px"}} onClick={back} >
                Back 
              </Button>
        </InputGroup>
        <p>Integrated Spotify search API to fetch albums based on artist ID</p>

    </Container>
    <Container>
        <Row>
            {albums.map((album) => {
                console.log(album)
                return (
                    <Card style={{ width: "10rem",margin: "10px" }}>
                    <Card.Img src={album.images[0].url}/>
                    <Card.Body>
                        <Card.Title>{album.name}</Card.Title>
                    </Card.Body>
                </Card>
               
                )
            })}
       
        
        </Row>
        
    </Container>
    </div>)
}
