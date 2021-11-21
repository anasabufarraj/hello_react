//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

// TODO: Uncomment lines for log Service before production deployment.

function init() {
  // Sentry.init({
  //   dsn: 'https://912776ff1dbb4f54a317916e7f337b16@o1071144.ingest.sentry.io/6067889',
  //   integrations: [new Integrations.BrowserTracing()],
  //
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });
}

function log(err) {
  // Sentry.captureException(err);
}

const logService = {
  init,
  log,
};

export default logService;
