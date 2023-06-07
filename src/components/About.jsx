import React from "react";
import Faq from "react-faq-component";
import Button from '@mui/joy/Button';
import { useNavigate } from "react-router-dom";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What does Spotify Clone do?",
            content: `Spofity clone as the name suggests connects to spotify api in order to emulate 
            actual spotify services.You need to open the actual spotify web player. Please click on the open spotify web player button
            shown in the welcome screen. Assuming you have both actual spotify app and the clone app open side by side, we are good to test it.`,
        },
        {
            title: "Why do i need to open actual spotify web player?",
            content:
                "I have not developed my own Web player in this app. Hence we need actual web player else my application will crash during runtime.",
        },
        {
            title: "What does the spotify search feature do?",
            content: `Spotify search feature is connected directly to the spotify search api. You type in a name of the artist you like 
            and it fetches you some of their albums. I have limited the query string size in order to have a faster loading and limit cluttering on screen. `,
        },
        {
            title: "Where can i read more about the project?",
            content: <p>Please go through my github readme link:<a href="https://github.com/Vignesh-shenoy-10/clarity-test/tree/master#readme">Click here to learn more</a></p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function About() {
    const navigate = useNavigate();
    const takemeBack = () => {
        navigate('/');
    }
  return (
    <div>
    <Faq
        data={data}
        styles={styles}
        config={config}
    />
     <Button style={{marginLeft:"10px",marginTop:"10px"}} onClick={takemeBack} >
                Take me there
              </Button>
</div>
  )
}
