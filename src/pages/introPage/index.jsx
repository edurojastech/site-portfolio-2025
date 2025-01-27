/* eslint-disable react/no-unknown-property */
import "animate.css";
import "./css/index.css";
import logoER from "../../assets/logoEdu.svg";
import cv from "../../assets/curriculo/cv_eduardo_rojas_pt.pdf";
import { useState } from "react";

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
      <div className="about hideMobile">
        <div className="about__itens">
          <img
            width={300}
            src={logoER}
            alt="Eduardo Rojas | Programador FrontEnd"
          />
          <h1 className="about__title">Programador Front-End</h1>

          <div className="about__buttons">
            <button 
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sobre o Eduardo
            </button>
            <button onClick={() => downloadFile(cv)}>Ver Currículo</button>
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
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // style={{ border: '1px solid red' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
