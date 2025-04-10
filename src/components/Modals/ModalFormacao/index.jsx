/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import "./styles/index.css";

export default function ModalFormacao() {
  return (
    <div
      className="modal fade"
      id="modalFormacao"
      tabindex="-1"
      aria-labelledby="modalFormacao"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="fs-5 text-blue-dark" id="modalFormacao">
              Formação  & Idiomas
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            FORMAÇÃO DO EDUARDO
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
