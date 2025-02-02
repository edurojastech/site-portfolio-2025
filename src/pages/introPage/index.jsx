/* eslint-disable react/no-unknown-property */
import "animate.css";
import "./css/index.css";
import logoER from "../../assets/logoEdu.svg";
import avatar from "../../assets/images/avatar.svg"
import cv from "../../assets/curriculo/cv_eduardo_rojas_pt.pdf";
import AboutDescription from "../../components/AboutDescription";
import Aviso from "../../components/Aviso";
import ButtonsIntro from "../../components/Buttons/ButtonsIntroPage";

export default function IntroPage() {
  function downloadFile(url) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <main className="main">
      <div className="about hideMobile introbg">
        <div className="about__itens">
          <img
            width={360}
            src={logoER}
            alt="Eduardo Rojas | Programador FrontEnd"
          />
          <h1 className="about__title">Programador Front-End</h1>
          <ButtonsIntro onDownloadCv={() =>downloadFile(cv)}/>
        </div>
      </div>

      <div className="hero text-white">
        <img src={avatar} alt="Eduardo Rojas" className="avatar"/> 
        <br />         
        <div className="hero__titles">
          <h5>Posso ajudar sua empresa</h5>
          <h6 style={{ fontSize: 40, fontWeight: 'bold'}}>
            A transformar ideias <span style={{ color: "#0CA88E"}}>em realidade</span>
          </h6>
        </div>
        <div className="about__itens showMobile">
          <img
            className="logoER"
            src={logoER}
            alt="Eduardo Rojas | Programador FrontEnd"
          />
          <h1 className="about__title">Programador Front-End</h1>
          <ButtonsIntro onDownloadCv={() =>downloadFile(cv)}/>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ backgroundColor: "#0ca88e73"}}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="fs-5 text-blue-dark" id="exampleModalLabel">
                Quem é Eduardo Rojas?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AboutDescription />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-custom-dark"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Aviso />
    </main>
  );
}
