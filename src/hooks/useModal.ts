import { useRef } from "react";

export const useModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleShowModal = () => dialogRef.current?.showModal();
  const handleCloseModal = () => dialogRef.current?.close();

  return { dialogRef, handleShowModal, handleCloseModal };
}
