import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Welcome({ user }) {
  console.log(user); //email,displayName,photoURL

  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <h1>Welcome</h1>
      <h2>{user.displayName || user.email}</h2>
      {user.photoURL && (
        <img src={user.photoURL} alt="profile picture of logged-in user" />
      )}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

//user.displayname ||user.email will show your gmail display
//if {user.photoURL is there &&=show the <img src}
