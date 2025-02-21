/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import AboutDescription from "../../AboutDescription";
import "./styles/index.css";

export default function ModalProfile() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="modalAbout"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="fs-5 text-blue-dark" id="modalAbout">
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
  );
}
