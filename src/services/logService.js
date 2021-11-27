//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

function init() {
  // TODO: Uncomment for log Service before production deployment.
  // Sentry.init({
  //   dsn: 'https://bc2f27a10bf640d5bb0af8be53d57365@o1071144.ingest.sentry.io/6079029',
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
