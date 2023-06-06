// import { Link } from "react-router-dom";
// import React from "react";
// import Card from '@mui/joy/Card';


// function Welcome() {
//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <Link to="login">Click to view our login page</Link>
//       <Link to="search">Click to view our search page</Link>
     
//     </div>
//   );
// }

// export default Welcome;


import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';


export default function Welcome() {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/Login');
    }
    const navigateSearch = () => {
        navigate('/Search')
    }
   
  return (
    <center>
        <div>
        <h3 style={{marginTop:'10px'}}>Welcome to my application</h3>
    <Card variant="outlined" sx={{ width: 320, marginTop: 5 }}>
      <div>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          Spotify clone player
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
        style={{objectFit:'contain', objectPosition: 'center'}}
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body3">Spotify app</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick={navigateLogin}
          >
          Visit
        </Button>
    
      </CardContent>
    </Card>
    {/* second card */}

    <Card variant="outlined" sx={{ width: 320, marginTop: 5 }}>
      <div>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          Spotify search
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
        style={{objectFit:'contain', objectPosition: 'center'}}
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body3">Search API</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick={navigateSearch}
          >
          Visit
        </Button>
    
      </CardContent>
    </Card>

    </div>
    </center>
  );
}
