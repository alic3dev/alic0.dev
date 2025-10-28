import type react from "react";

import styles from "@components/footer.module.scss";

export function Footer(): react.ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_item}>
        {
          "© [copyleft|copyright]->{alic0dev(2025)}:[all_rights_reserved|all_lefts_reserved]"
        }
      </div>
    </footer>
  );
}
