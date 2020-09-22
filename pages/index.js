import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Nike - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<img src="/img/logos/logo.svg" alt="Logo" />
				<nav className={styles.header__nav}>
					<ul className={styles.header__nav__ul}>
						<li className={styles.header__nav__ul__li}>
							<Link href="/">
								<a>What's New</a>
							</Link>
						</li>
						<li className={styles.header__nav__ul__li}>
							<Link href="/">
								<a>Men</a>
							</Link>
						</li>
						<li className={styles.header__nav__ul__li}>
							<Link href="/">
								<a>Women</a>
							</Link>
						</li>
						<li className={styles.header__nav__ul__li}>
							<Link href="/">
								<a>Kids</a>
							</Link>
						</li>
						<li className={styles.header__nav__ul__li}>
							<Link href="/">
								<a>Personalize</a>
							</Link>
						</li>
						<li className={styles.header__nav__ul__li}>
							<Link href="/">
								<a>Collections</a>
							</Link>
						</li>
						<li className={styles.header__nav__ul__li}>
							<Link href="/">
								<a>Sales</a>
							</Link>
						</li>
						<li className={styles.header__nav__ul__li}>
							<button></button>
						</li>
					</ul>
				</nav>
				<button></button>
			</header>
			<section className={styles.hero}>
				<img
					className={styles.hero__leftShoe}
					src="/img/shoes/shoe-left-hero.png"
					alt="Shoe"
				/>
			</section>
		</>
	)
}
