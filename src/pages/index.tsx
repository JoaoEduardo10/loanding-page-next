import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { Welcome } from '../components/Welcome';

export default function Home() {
	return (
		<>
			<Header />
			<Welcome />
			<Features />
		</>
	);
}
