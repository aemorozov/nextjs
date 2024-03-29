import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contact", path: "/contacts" },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="logo"
        />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link
            href={path}
            key={id}
            legacyBehavior
          >
            <a className={pathname === path ? styles.active : ""}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
