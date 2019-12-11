import { Router } from 'express';
import gameController from '../Controllers/gamesController';

class GamesRouter {

    public router = Router();

    constructor() {
        this.ConfigRoute();
    }

    private ConfigRoute() {
        this.router.get('/games', gameController.GetGames);
    }
}

const gamesRouter = new GamesRouter();
export default gamesRouter.router;
