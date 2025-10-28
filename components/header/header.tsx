"use client";

import react from "react";
import Link from "next/link";

import styles from "@components/header/header.module.scss";

export function Header(): react.ReactElement {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation_header}>
        <div>
          <h1>
            <Link href="/">alic0</Link>
          </h1>
        </div>
      </nav>
    </header>
  );
}
