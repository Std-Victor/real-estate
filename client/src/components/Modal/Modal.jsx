import { useCallback, useEffect, useMemo, useRef } from "react";
import styles from "./Modal.module.scss";

export default function Modal({ open, locked, onClose, children, ...props }) {
  const modalRef = useRef(null);

  const dialogClasses = useMemo(() => {
    const _arr = [styles["modal"]];
    if (!open) _arr.push(styles["modal--closing"]);

    return _arr.join(" ");
  }, [open]);

  const onCancel = useCallback(
      (e) => {
        e.preventDefault();
        if (!locked) onClose();
      },
      [locked, onClose]
  );

  const onClick = useCallback(
      ({ target }) => {
        const { current: el } = modalRef;
        if (target === el && !locked) onClose();
      },
      [locked, onClose]
  );

  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open) el.close();
  }, [open]);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) el.showModal();
  }, [open]);

  return (
      <dialog
          ref={modalRef}
          className={dialogClasses}
          onCancel={onCancel}
          onClick={onClick}
          onAnimationEnd={onAnimEnd}
      >
        <div className={styles["modal__container"]}>{children}</div>
      </dialog>
  );
}
