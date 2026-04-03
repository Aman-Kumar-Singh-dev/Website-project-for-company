import Link from 'next/link';
import styles from './Footer.module.css';
import { clsx } from 'clsx';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>UnityScale</h2>
            <p className={styles.tagline}>A Growth-Focused Digital Agency</p>
          </div>
          <div className={styles.linksWrapper}>
            <div className={styles.linkGroup}>
              <h3>Quick Links</h3>
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/team">Team</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.linkGroup}>
              <h3>Services</h3>
              <Link href="/#services">Content Strategy</Link>
              <Link href="/#services">Social Media Growth</Link>
              <Link href="/#services">Lead Generation</Link>
              <Link href="/#services">Brand Positioning</Link>
            </div>
            <div className={styles.linkGroup}>
              <h3>Contact</h3>
              <a href="mailto:unityscale.agency@gmail.com" className={styles.withIcon}>
                unityscale.agency@gmail.com <ArrowUpRight size={14} />
              </a>
              <a href="tel:+918882463451">+91 8882463451</a>
              <span className={styles.address}>Surajpur / Gautam Buddha Nagar</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} UnityScale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
