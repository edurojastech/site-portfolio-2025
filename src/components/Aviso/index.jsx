// import avisoIcon from "../../assets/images/aviso.png"
import "./css/style.css"
import homeIcon from "../../assets/icons/home_white.png"
import pcIcon from "../../assets/icons/pc.png"
import { Link } from "react-router-dom"

export default function NavBarFooter() {
  return(
    <footer>
      <Link to="/" className="text-white txt-none-decoration link">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>

      <Link to="/projetos" className="text-white txt-none-decoration link">
        <img src={pcIcon} alt="Projetos" />
        <span>Projetos</span>
      </Link>
    </footer>
  )
}