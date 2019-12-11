import { Request, Response } from 'express';

class GamesControllers {

	public GetGames(req: Request, res: Response) {
		res.status(200).json({mensaje: 'Api Games'});
	}
}

const gamesControllers = new GamesControllers();
export default gamesControllers;
