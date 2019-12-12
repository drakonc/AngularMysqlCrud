import express, { Application } from 'express';
import exphbs from "express-handlebars";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//Importando Rutas
import indexRouter from './Router/indexRouter';
import gamesRouter from './Router/gamesRouter';
export class Server {

	public app: Application;
	public port?: number | string;

	constructor(port?: number | string) {
		this.port = port;
		this.app = express();
		this.Config();
		this.Middleware();
		this.Routes();
	}

	private Config(): void {
		this.app.set('port', this.port || process.env.PORT || 3000);
		this.app.set("views", path.join(__dirname, "Views"));
		this.app.engine(".hbs", exphbs({
			layoutsDir: path.join(this.app.get("views"), "Layouts"),
			partialsDir: path.join(this.app.get("views"), "Partials"),
			defaultLayout: "main",
			extname: ".hbs"
		}));
		this.app.set('view engine', '.hbs');
	}

	private Middleware() {
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	private Routes(): void {
		this.app.use(express.static(path.join(__dirname, 'Public')));
		this.app.use(indexRouter);
		this.app.use('/api', gamesRouter)
	}

	public async Run() {
		await this.app.listen(this.app.get('port'), () => {
			console.log(`Servidor Corriendo en el Puerto ${this.app.get('port')}`);
		});
	}

}
