import { Contact } from '../components/Contact';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Welcome } from '../components/Welcome';

export default function Home() {
	return (
		<>
			<Header />
			<Welcome />
			<Features />
			<Contact />
			<Footer />
		</>
	);
}