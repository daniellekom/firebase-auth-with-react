//create a scenes folder w files inside
//in index.js import {broswer router}
//get route info for app.js from reactrouter.com
//wrap <BrowserRouter> directions from reactrouter.com
//create a scenes folder w login/sign/welcome and fill in
//in app.js import login/signup/welcome && create routes
//import use state in app.js to get user
//inside welcome route do turnery for app.js

//create a form in signup and login page (copy paste from 1 to the other)
//create a label for signup.js
//what do we want to do on react for form on signup? import usestate
//create const for email and password and add onchange and value
//onchange is what lets you plug in the "todd" in email 
//create a handleFormsubmit w preventdefault so it wont reload in signup.js
//add onsubmit={handleFormSubmit} on form element so form will work and not just reload
//create a firebase authentication and create file connectauth.js and paste in code from firebase
//type export in connectauth.js on the bottom
//import {app} from ../connectAuth in signup.js then in login.js
//import {getAuth, createUser..} to signup.js and login.js
//under handleformsubmit in signup.js remove alert and replace w  type const auth =getAuth(app);
//under that createuserwemailandpassword(auth,email,password)
//.then(result =>{set user and navigate to home}) .catch(alert)
//add {setUser} in function and in .then in signup.js from app.js the parent
//add it in app.js in route path for signup add setuser=setuser
//add useNavigate next to Link in signup.js and add it as a component const navigate=useNavigate() in signup.js
//add navigate('/') to the .then in signup
//add googleauthprovider in sign up.js +const provider =new google...()
//create a button called sign in w google on signup.js
//make an onclick so button will work on signup.js
//create a function for onclick handle googlelogin in signup.js
//in signup.js move up const auth = getAuth(app) so we can reuse it


//NOTES FOR JON HTML
//add useEffect in app.js in import usestate
//add useEffect in component function APP in app.js
//USE REACT BOOTSTRAP TO GET CARDS,CAROUSEL etc

//README.md right click preview and delete everything in read me and keep
//new info plugged in w jon from the new preview
