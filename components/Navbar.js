import Link from "next/link"
import Image from "next/image"

import styles from "../styles/Navbar.module.css"

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext" />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/" className={styles.link_items_link}>
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link_items_link}>
                        <p>Sobre</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}