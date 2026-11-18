"use client";

import { useEffect, useRef } from "react";
import styles from "./TemporaryPrayerBanner.module.css";

export function TemporaryPrayerBanner() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return (
    <>
      <button
        type="button"
        className={styles.reopen}
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        <strong>Important Notice</strong>
        <span>Jumu&rsquo;ah location change &middot; Nov 20 &amp; 27</span>
        <span className={styles.viewDetails}>View details &rarr;</span>
      </button>
      <dialog ref={dialogRef} className={styles.notice} aria-labelledby="prayer-update-title" aria-describedby="prayer-update-details">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Important Prayer Update</p>
          <button type="button" className={styles.close} aria-label="Close prayer update" onClick={() => dialogRef.current?.close()}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h2 id="prayer-update-title" className={styles.title}>Temporary Jumu&rsquo;ah Location</h2>
        <p className={styles.schedule}>November 20 &amp; 27, 2026<br />Khutbah at 1:00 PM</p>
        <div id="prayer-update-details">
          <p className={styles.venue}>Holiday Inn Express &mdash; Ballantyne</p>
          <p className={styles.address}>15139 Ballancroft Pkwy<br />Charlotte, NC 28277</p>
          <p className={styles.explanation}>Our usual venue on Providence Rd W is unavailable during the holiday season. Friday Jumu&rsquo;ah only.</p>
        </div>
        <a className={styles.directions} href="https://www.google.com/maps/dir/?api=1&destination=15139%20Ballancroft%20Pkwy%2C%20Charlotte%2C%20NC%2028277" target="_blank" rel="noopener noreferrer" aria-label="Get directions to the temporary venue (opens in a new tab)">Get Directions</a>
      </dialog>
    </>
  );
}
