import { FC } from 'react'
import styles from './Modal.module.css';
import { useModal } from '../hooks/useModal';

type Props = {
  children: React.ReactNode
}
export const Modal: FC<Props> = ({ children }) => {
  const { dialogRef, handleShowModal, handleCloseModal } = useModal();

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