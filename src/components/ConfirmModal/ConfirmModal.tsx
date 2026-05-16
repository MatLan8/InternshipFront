import styles from "./ConfirmModal.module.css";

interface ConfirmModalProps {
  onCancel: () => void;
  onConfirm: () => void;
  isShown: boolean;
  itemIdentifier: string;
}

function ConfirmModal({
  onCancel,
  onConfirm,
  isShown,
  itemIdentifier,
}: ConfirmModalProps) {
  if (!isShown) return null;

  return (
    <div className={styles.Overlay} onClick={onCancel}>
      <div className={styles.Container}>
        <span className={styles.Title}>
          Are you sure you want to delete item: {itemIdentifier}?
        </span>
        <div className={styles.ButtonContainer}>
          <div className={styles.CancelButton} onClick={onCancel}>
            Cancel
          </div>
          <div className={styles.ConfirmButton} onClick={() => onConfirm()}>
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
