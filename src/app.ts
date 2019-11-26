import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Connection } from 'typeorm';
import * as path from 'path';
import * as routes from './routes';

export interface IDeps {
  connection: Connection;
}

function depsMiddleware(deps: IDeps) {
  return (req, res, next) => {
    req.deps = deps;
    next();
  };
}

export function configure(deps: IDeps): express.Application {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(depsMiddleware(deps));
  app.set( "views", path.join( __dirname, "views" ) );
  app.set( "view engine", "ejs" );

  app.use('/customers', routes.customers);

  app.get('/', (req, res) => {
    res.render('index');
  });

  return app;
}
