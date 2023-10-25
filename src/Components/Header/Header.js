import logo from "../../Assets/SchoolJournalLogo2.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
