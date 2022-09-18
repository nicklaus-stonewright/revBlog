import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <h2>Navbar</h2>
      <div class="dropdown">
        <button class="dropbtn icon-height">Talks</button>
        <div class="dropdown-content">
          {/* <a href="#">How to add a Ticket</a> */}
          <div className="icon" onClick={() => navigate("#")}>
            How to add a Talk post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
