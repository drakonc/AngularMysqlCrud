import { Server } from './app/app';

async function Main() {
	const app = new Server(3000);
	await app.Run();
}

Main();
