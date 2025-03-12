import { FC, useRef } from 'react'
import styles from './Modal.module.css';


export const Modal: FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleShowModal = () => dialogRef.current?.showModal();
  const handleCloseModal = () => dialogRef.current?.close();

  return (
    <>
      <button className={styles.modal__open} onClick={handleShowModal}>モーダルを開く</button>
      <dialog ref={dialogRef} className={styles.modal} autoFocus>
        <div className={styles.modal__content}>
          <p>モーダルの中身です</p>
          <button className={styles.modal__close} onClick={handleCloseModal}>閉じる</button>
        </div>
      </dialog>
    </>
  )
}