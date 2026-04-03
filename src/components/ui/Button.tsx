import styles from './Button.module.css';
import Link from 'next/link';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
}

export default function Button({ children, href, variant = 'primary', className, onClick, showArrow = false }: ButtonProps) {
  const rootClass = clsx(styles.btn, styles[variant], className);
  
  const content = (
    <>
      <span className={styles.btnText}>{children}</span>
      {showArrow && <ArrowRight className={styles.icon} size={18} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={rootClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={rootClass} onClick={onClick}>
      {content}
    </button>
  );
}
