import { FC, useRef } from 'react'
import styles from './Modal.module.css';

type Props = {
  children: React.ReactNode
}
export const Modal: FC<Props> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleShowModal = () => dialogRef.current?.showModal();
  const handleCloseModal = () => dialogRef.current?.close();

  return (
    <>
      <button className={styles.modal__open} onClick={handleShowModal}>モーダルを開く</button>
      <dialog ref={dialogRef} className={styles.modal} autoFocus>
        <div className={styles.modal__content}>
          {children}
          <button className={styles.modal__close} onClick={handleCloseModal}>閉じる</button>
        </div>
      </dialog>
    </>
  )
}