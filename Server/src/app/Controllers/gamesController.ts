import { Request, Response } from 'express';
import mysql from '../Configurations/db2';

class GamesControllers {

	public async GetGames(req: Request, res: Response) {
		await mysql.query("SELECT * FROM games", (error, results, fields) => {
			if (error) throw error;
			if (results != []) return res.status(200).json(results);
			else return res.status(200).json({ result: "No Hay Juegos Creados" });
		});

	}

}

const gamesControllers = new GamesControllers();
export default gamesControllers;
