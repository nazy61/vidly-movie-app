import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({ dsn: "https://1757f13ad0744abbae1a43f819f7b5c6@o386464.ingest.sentry.io/5221151" });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log,
};