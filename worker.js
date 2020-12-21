'use strict';

const axios = request('axios');

async function logSample() {
  console.log('worker');
  const response = await axios.get('http://sample-nodejs');
  console.log(response);
}

setInterval(logSample, 10000);
