import "./css/index.css";
import logoER from "../../assets/logoEdu.svg";
import cv from "../../assets/curriculo/cv_eduardo_rojas_pt.pdf"

export default function IntroPage() {
  const urlCv = "../../assets/curriculo/cv_eduardo_rojas_pt.pdf"
  function downloadFile(url) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank"
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <main className="main">
      <div className="about hideMobile">
        <div className="about__itens">
          <img 
            width={300}
            src={logoER} 
            alt="Eduardo Rojas | Programador FrontEnd" 
          />
          <h1 className="about__title">Programador Front-End</h1>

          <div className="about__buttons">
            <button>Sobre o Eduardo</button>
            <button onClick={() => downloadFile(cv)}>
              Baixar Currículo
            </button>
          </div>

        </div>
      </div>
      <div className="hero">
        <div className="about__itens showMobile">
          <img 
            width={300}
            src={logoER} 
            alt="Eduardo Rojas | Programador FrontEnd" 
          />
          <h1 className="about__title">Programador Front-End</h1>

          <div className="about__buttons">
            <button>Sobre o Eduardo</button>
            <button onClick={() => downloadFile(cv)}>
              Baixar Currículo
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}
