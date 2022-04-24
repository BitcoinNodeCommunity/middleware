import {config} from 'dotenv';
import App from 'koa';
import morgan from 'koa-morgan';
import passport from 'koa-passport';
import cors from '@koa/cors';
import bodyParser from 'koa-body';

import {errorHandler, corsOptions} from '@runcitadel/utils';
import bitcoind from './routes/v1/bitcoind/info.js';
import address from './routes/v1/lnd/address.js';
import channel from './routes/v1/lnd/channel.js';
import info from './routes/v1/lnd/info.js';
import lightning from './routes/v1/lnd/lightning.js';
import transaction from './routes/v1/lnd/transaction.js';
import util from './routes/v1/lnd/util.js';
import wallet from './routes/v1/lnd/wallet.js';
import pages from './routes/v1/pages.js';
import ping from './routes/ping.js';

config();

const app = new App();

app.use(errorHandler);
// Handles CORS
app.use(cors(corsOptions));

app.use(
  bodyParser({
    parsedMethods: ['POST', 'DELETE', 'PUT'],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('combined'));

app.use(async (ctx, next) => {
  await next();
  ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  ctx.set('Pragma', 'no-cache');
  ctx.set('Expires', '0');
});

app.use(ping.routes());
app.use(bitcoind.routes());
app.use(address.routes());
app.use(channel.routes());
app.use(info.routes());
app.use(lightning.routes());
app.use(transaction.routes());
app.use(wallet.routes());
app.use(util.routes());
app.use(pages.routes());

export default app;
