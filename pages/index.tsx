import Head from "next/head";
import Image from "next/image";
import { PokemonTeamBuilder } from "../components/PokemonTeamBuilder";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>PokeTeam Maker</title>
				<meta name="description" content="Generate your pokemon team!" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className={styles.main}>
				<PokemonTeamBuilder />
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
