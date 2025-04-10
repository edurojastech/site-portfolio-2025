/* eslint-disable react/no-unknown-property */
import "animate.css";
import "./css/index.css";
import logoER from "../../assets/logoEdu.svg";
import avatar from "../../assets/images/avatar.svg";
import cv from "../../assets/curriculo/cv_eduardo_rojas_pt.pdf";
import digitandoGif from "../../assets/images/digitando.gif";
import ButtonsIntro from "../../components/Buttons/ButtonsIntroPage";
import ModalProfile from "../../components/Modals/ModalProfile";
import ModalFormacao from "../../components/Modals/ModalFormacao";
import { RootLayout } from "../../layouts/root";

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
    <RootLayout>
      <main className="main">
        <div className="about hideMobile introbg">
          <div className="about__itens">
            <img
              src={digitandoGif}
              alt="codificando"
              className="gif-digitando"
            />
            <img
              width={300}
              src={logoER}
              alt="Eduardo Rojas | Programador FrontEnd"
            />
            <h1 className="about__title">Programador Front-End</h1>
            <ButtonsIntro onDownloadCv={() => downloadFile(cv)} />
          </div>
        </div>

        <div className="hero text-white">
          <img src={avatar} alt="Eduardo Rojas" className="avatar" />
          <br />
          <div className="hero__titles">
            <h5>Posso ajudar sua empresa</h5>
            <h6 style={{ fontSize: 40, fontWeight: "bold" }}>
              A transformar ideias{" "}
              <span style={{ color: "#0CA88E" }}>em realidade</span>
            </h6>
          </div>
          <div className="about__itens showMobile">
            <img
              className="logoER"
              src={logoER}
              alt="Eduardo Rojas | Programador FrontEnd"
            />
            <h1 className="about__title">Programador Front-End</h1>
            <ButtonsIntro onDownloadCv={() => downloadFile(cv)} />
          </div>
        </div>

        <ModalProfile />
        <ModalFormacao />
        {/* <Aviso /> */}
      </main>
    </RootLayout>
  );
}
