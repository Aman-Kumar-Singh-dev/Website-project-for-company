"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { clsx } from "clsx";
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(styles.navbar, scrolled && styles.scrolled)}>
      <div className={clsx("container", styles.navContainer)}>
        <Link href="/" className={styles.logo}>
          UnityScale
        </Link>
        
        <div className={clsx(styles.navLinks, mobileMenuOpen && styles.open)}>
          <Link href="/work" onClick={() => setMobileMenuOpen(false)}>Work</Link>
          <Link href="/team" onClick={() => setMobileMenuOpen(false)}>Team</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>

        <Link href="/contact" className={styles.navCta}>
          Start Scaling
        </Link>

        {/* Mobile menu toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={clsx(styles.hamburger, mobileMenuOpen && styles.active)}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
