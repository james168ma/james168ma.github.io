import styles from './navItem.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function NavItem({ text, link, selected, subItem, target }) {
  const inner = (
    selected ? (
      <>
        {!subItem && <span className={styles.mark} />}
        <span className={styles.linkText + " " + styles.selectedLinkText}>{text}</span>
      </>
    ) : (
      <span className={styles.linkText}>{text}</span>
  ))

  const aLink = (
    target ? (
      <a className={styles.navLink} target={target}>
        {inner}
      </a>
    ) : (
      <a className={styles.navLink}>
        {inner}
      </a>
    )
  )

  return (
    <li className={styles.navItem}>
      <Link href={link}>
        {aLink}
      </Link>
    </li>
  )
}
