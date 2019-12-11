import { Request, Response } from 'express';

class IndexControllers {

	public Index(req: Request, res: Response) {
		res.status(200).render('index');
	}
}

const indexControllers = new IndexControllers();
export default indexControllers;
