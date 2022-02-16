
export default function Welcome({user}){
    console.log(user)//email,displayName,photoURL
    return (
        <>
    <h1>Welcome</h1>
    <h2>{user.displayName || user.email}</h2>
   {user.photoURL && <img src={user.photoURL} alt="profile picture of logged-in user" />}
    </>
    )
}

//user.displayname ||user.email will show your gmail display
//if {user.photoURL is there &&=show the <img src}