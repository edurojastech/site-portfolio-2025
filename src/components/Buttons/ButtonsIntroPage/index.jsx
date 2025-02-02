/* eslint-disable react/prop-types */
export default function ButtonsIntro ({onDownloadCv, targetModal = "#exampleModal"}) {
  return (
    <div className="about__buttons mt-4" style={{ height: 80}}>
      <button data-bs-toggle="modal" data-bs-target={targetModal}>Sobre o Eduardo</button>
      <button onClick={onDownloadCv}>Ver Currículo</button>
    </div>
  )
}