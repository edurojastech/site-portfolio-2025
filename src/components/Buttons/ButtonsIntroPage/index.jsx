/* eslint-disable react/prop-types */
import "./css/index.css";
export default function ButtonsIntro ({
  onDownloadCv, 
  targetModal = "#exampleModal",
  targetModalFormacao = "#modalFormacao"
}) {
  return (
    <div className="about__buttons mt-4">
      <button data-bs-toggle="modal" data-bs-target={targetModal}>Sobre o Eduardo</button>
      
      <button onClick={onDownloadCv}>Ver Currículo</button>
      
      <a href="https://eduardorojas.com.br/contato/" target="_blank">
        <button>Contato</button>
      </a>
      
      <button data-bs-toggle="modal" data-bs-target={targetModalFormacao}>Formação</button>
    </div>
  )
}