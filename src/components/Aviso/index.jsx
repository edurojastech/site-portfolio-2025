import avisoIcon from "../../assets/images/aviso.png"
import "./css/style.css"
export default function Aviso() {
  return(
    <footer className="py-1">
      <img src={avisoIcon} alt="" />
      <span>Site em desenvolvimento!</span>
      <img src={avisoIcon} alt="" />
    </footer>
  )
}