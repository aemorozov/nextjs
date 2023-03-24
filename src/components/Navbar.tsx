import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contact', path: '/contacts/contact'}
]

const Navbar = () => {

    const { pathname } = useRouter()

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                text logo
            </div>
            <div className={styles.links}>
                { navigation.map(({ id, title, path }) => (
                    <Link href={ path } key={ id } legacyBehavior >
                        <a className={ pathname === path ? styles.active : '' }>{ title }</a>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar