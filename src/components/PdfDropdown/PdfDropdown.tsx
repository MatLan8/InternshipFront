import { useState } from "react";
import styles from "./PdfDropdown.module.css";
import { FaChevronDown } from "react-icons/fa";
import { ExportType } from "../../constants/ExportType";

type PdfDropdownProps = {
  onExport: (templateType: number) => void;
};

function PdfDropdown({ onExport }: PdfDropdownProps) {
  const [open, setOpen] = useState(false);

  const handleExport = (templateType: number) => {
    onExport(templateType);
    setOpen(false);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.HeaderContainer} onClick={() => setOpen(!open)}>
          <span className={styles.Title}>Export PDF</span>
          <FaChevronDown
            className={`${styles.Icon} ${open ? styles.IconOpen : ""}`}
            size={18}
          />
        </div>
        <div
          className={`${styles.ContentContainer} ${open ? styles.ContentOpen : ""}`}
        >
          <div className={styles.divider} />
          <div
            className={styles.Item}
            onClick={() => handleExport(ExportType.Simple)}
          >
            Simple view
          </div>
          <div
            className={styles.Item}
            onClick={() => handleExport(ExportType.User)}
          >
            User view
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfDropdown;
