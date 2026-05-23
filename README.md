# Netflix-gpt app

- npx create-react-app
- npm install -D tailwindcss@3 && npx tailwindcss init
- and configure tailwind
- Routing of the app
- Header
- Login form
- Signup form
- useRef 
- Firebase setup
- deploying app on the production
- create signup user account in firebase
- implement signin user api
- created redux store with userSlice
- implemented signout
- update profile
- Bugfix : signup user displayname and profile picture update (dispatching action from login page)
- bugfix : if the user is not logged in redirect /browse to login page and vice-versa (by moving the onAuthStateChanged from body to header i.e inside the routeable content)
- unsubcribed to onAuthStateChanged callback
- add hardcoded values to the constants file
- register for TMDB API and create an app & get access token
- fetch data from TMDB now playing movies list API
- custom hooks for nowPlayingMovies
- create movieSlice and update store with movies data
- planning for Maincontainer and secondary container
- fetch data for trailer video
- customhook for trailer video and update store with trailer video
- embedded the youtube video and make it autoplay and mute
- added tailwind classes to make main container look like netflix
- build secondary component
- built movies list and movies card
- found out tmdb image cdn url
- made the browse page better
- create usePopularMovies hook (this all can be made into single hook)


# Features
- Login/Sign up page
    - sign-in / sign-up form
    - redirect to Browse page on successful authentication
- Browse page ( after authentication )
    - Header
    - Main Movie
        - trailer in background
        - Title and description
        - Movie suggestions
            - Movie lists * n

- NetflixGPT
    - Search bar
    - movie suggestions