import { Router } from 'express';
import indexController from '../Controllers/indexConrtrollers';

class IndexRouter {

    public router = Router();

    constructor() {
        this.ConfigRoute();
    }

    private ConfigRoute() {
        this.router.get('/', indexController.Index);
    }
}

const indexRouter = new IndexRouter();
export default indexRouter.router;
