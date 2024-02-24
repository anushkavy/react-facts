import Logo from "../Images/reactjs-icon.png";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="reactLogo" className="nav--icon"></img>
        <h1 className="nav--logotext blue"> ReactFacts</h1>
      </div>

      <h4 className="nav--title grey-white">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
