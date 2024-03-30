import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const authenticated = localStorage.getItem("login");

  useEffect(() => {
    if (authenticated !== "success") {
      navigate("/signin");
    }
  }, []);

  function handleLogout() {
    localStorage.clear();
    alert("Anda Yakin Ingin Keluar ???");
    navigate("/loading");

    setTimeout(() => {
      window.location.href = "/signin";
    }, 2000);
  }

  const handleInstagramLink = () => {
    window.location.href = "https://www.instagram.com/blehhh.10/";
  };

  return (
    <div>
      <header>
        <nav>
          <ul class="navbar">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <button className="button" onClick={(event) => handleLogout(event)}>
            Log Out
          </button>
        </nav>
      </header>
      <br />
      <h1 className="welcome">Welcome ✋✋✋</h1>
      <br />
      <a
        href="https://www.instagram.com/blehhh.10/"
        onClick={handleInstagramLink}
      >
        <h3 className="teks">Visit To My Instagram Account</h3>
      </a>
      <br />
      <h3 className="follow">Please Follow 👌👌👌</h3>
      
    </div>
  );
};
export default Home;
