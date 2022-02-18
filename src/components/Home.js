import { useAuthContext } from "../context/AuthContext";

function Home() {
  const { user, logout } = useAuthContext();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <>
      <div>Welcome user {user.email}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
