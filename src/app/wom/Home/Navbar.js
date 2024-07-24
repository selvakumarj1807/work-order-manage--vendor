import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const innernav = document.querySelector(".inner-nav");
    if (showNav === true) {
      innernav.style.left = "0px";
    } else {
      innernav.style.left = "-300px";
    }
  }, [showNav]);

  const handleClick = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="navbar">
      <div
        aria-hidden="true"
        onClick={handleClick}
        className={`${showNav ? "hamburger1" : "hamburger"}`}
      />
      <div className="logo">
        <img src="https://i-cdn.apsgo.com/cdn/ixIr4Z6kjFikqy9QhPW73k3UW79bxY0sqbhUJikM.webp" style={{width:'50px', height:'50px'}} alt="" />        <nav className="menu">
          <ul className="inner-nav">
            {/* <li><a href="#hub">Hub</a></li>
                  <li><a href="#mint">Mint</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#socials">Socials</a></li> */}
          </ul>
        </nav>
      </div>
      <div className="button">
        <NavLink to="/vendor/signin" style={{padding:'20px'}}>Login as a Vendor ?</NavLink>
        {/* <NavLink style={{marginLeft:'30px', padding:'20px'}} to="/session/signup">Joining as a User ?</NavLink> */}
      </div>
    </div>
  );
}
