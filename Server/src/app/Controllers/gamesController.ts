import { Request, Response } from 'express';
import { Games } from '../Models/gamesModel';
import mysql from '../Configurations/db';

class GamesControllers {

	public async GetGames(req: Request, res: Response) {
		const result = await mysql.query("SELECT * FROM games");
		console.log(result.values);
		if (result.values != null) return res.status(200).json(result);
		else return res.status(200).json({ result: "No Hay Roles Creados" });
	}

}

const gamesControllers = new GamesControllers();
export default gamesControllers;
