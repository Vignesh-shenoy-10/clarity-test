import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export default function Welcome() {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/Login');
    }
    const navigateSearch = () => {
        navigate('/Search')
    }
    const navigateDoc = () => {
        navigate('/About')
    }
    
   
  return (
    <center>
        <div>
        <div style={{display: `flex`, flexDirection: `row`, justifyContent: `center`}}>
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

    <Card variant="outlined" sx={{ width: 320, marginTop: 5,marginLeft:'10px' }}>
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

    <div style={{display: `flex`, flexDirection: `row`, justifyContent: `center`}}>
    <Card variant="outlined" sx={{ width: 320, marginTop: 5}}>
      <div>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          How to use this app?
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
        style={{objectFit:'contain', objectPosition: 'center'}}
          src="https://document360.com/wp-content/uploads/2022/01/how_to_create_technical_documentation.jpg"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body3">Documentation</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick={navigateDoc}
          >
          Visit
        </Button>
    
      </CardContent>
    </Card>

    <Card variant="outlined" sx={{ width: 320, marginTop: 5,marginLeft:'10px' }}>
      <div>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          Actual spotify app
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
        style={{objectFit:'contain', objectPosition: 'center'}}
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body3">Real spotify</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick={(e) => {
            e.preventDefault();
            window.open('https://open.spotify.com/')
            }}
          >
         Visit
        </Button>
    
      </CardContent>
    </Card>
    </div>
    <p><b>Please open real spotify in another tab simultaneously, in order to test my clone. 
        You can do so by clicking the visit button on the 4th card</b></p>
        <p><b>Github URL: <a href="https://github.com/Vignesh-shenoy-10/clarity-test/tree/master">Click here!</a></b></p>
    </div>
    </center>
  );
}
