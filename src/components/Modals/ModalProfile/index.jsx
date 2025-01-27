/* eslint-disable react/prop-types */
import './styles/index.css'

export default function ModalProfile ({ hideModal = true, fadeIn }) {
  return (
    <div className={`modal`}>
      <div className={`modal__item animate__animated ${fadeIn} ${hideModal ? 'hideModal' : ''}`}>
        MODAL
      </div>
    </div>
  )
}