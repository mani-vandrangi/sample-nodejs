'use strict';

function logSample() {
  console.log('worker');
}

setInterval(logSample, 10000);
