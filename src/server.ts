import * as app from './app';

export interface IConfig {
  port: number;
  deps: app.IDeps;
}

export function start(config: IConfig) {
  const server = app.configure(config.deps);

  server.listen(config.port, () => {
    // tslint:disable-next-line
    console.log(`Server started on http://localhost:${config.port}`);
  });
}
