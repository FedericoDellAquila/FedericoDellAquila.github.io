import { logo } from "../../assets/";

export default function NavBar() {
  const sidemenu = document.getElementById("sidemenu");

  const handleOpenMenu = () => {
    if (!sidemenu) {
      console.log("Failed to find sidemenu");
      return;
    }

    sidemenu.style.right = "0";
  };

  const handleCloseMenu = () => {
    if (!sidemenu) {
      console.log("Failed to find sidemenu");
      return;
    }

    sidemenu.style.right = "-200px";
  };

  return (
    <nav>
      <img src={logo} className="logo" />
      <ul id="sidemenu">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <i className="fa-solid fa-times" onClick={handleCloseMenu}></i>
      </ul>
      <i className="fa-solid fa-bars" onClick={handleOpenMenu}></i>
    </nav>
  );
}
