import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.main_navbar}>
            <ul>
                <Link href='/' legacyBehavior><a><li>Home</li></a></Link>
                <Link href='/about' legacyBehavior><a><li>About</li></a></Link>
                <Link href='/blog' legacyBehavior><a><li>Blog</li></a></Link>
                <Link href='/contact' legacyBehavior><a><li>Contact</li></a></Link>
            </ul>
        </nav>
    )
}

export default Navbar