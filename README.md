# React UI - Spotify clone 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project is a part of assignment provided to me by clarity software. 
Technologies used:
1. React v18.2 - JS library
2. Axios - In order to integrate API calls
3. ContextAPI - For state management
4. MaterialUI - UI Library (Cards)
5. React-icons - For styled icons within this application.

## Deployment link:
https://vigneshclaritytest.netlify.app/

## What is the project about?

This mini project is a spotify clone. I'm using spotify web API.
Link - https://developer.spotify.com/documentation/web-api
I have also registered a new application under spotify dev space
Link - https://developer.spotify.com/
I have used assets that are licensed by spotify and are available to use via their Press center
[I Do not own any rights to the logos/media assets used in this application]
Link - https://newsroom.spotify.com/media-kit/logo-and-brand-assets/

The clone application sends requests to play a song, pause a song and choose the next song.
Play, Pause and Skip - These are the 3 Axios requests that demonstrate the use of REST API calls in this application.
Currently I have not integrated the search feature in the application.

## Login Flow
In order to login to the application, I have connected my spotify account to the developer page provided by spotify. 
I have copied the clientID needed in order to mimic my actual spotify player and logged in user details are retrieved 
from spotify via the Login API call. Along with the API call, We also need an access token which we send to spotify server in order to authenticate the user ( Authentication is handled by spotify, I'm merely using their login services through their API).


## Testing the application
In order to test this application. I need to open up and login to actual spotify application.
Link: https://open.spotify.com/ 
This opens up the web player in my browser.
I have not created my own web player in this application ( Creating that is possible but might take me some time to understand and develop it). 
Once I open up the actual spotify web player, I need to login to my local spotify clone application.
Now, since i have logged in to both the actual and clone applications, I'm able to mimic the web player from the clone application.

Known Behaviour - 
Be aware, If i close the actual web player ( Real spotify application), My clone app will simply throw a runtime error. 
This is because, clone app needs a dedicated web player and it constantly checks for it. 




