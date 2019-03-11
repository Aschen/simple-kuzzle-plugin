const {
  Kuzzle,
  WebSocket
} = require('kuzzle-sdk');

const kuzzle = new Kuzzle(new WebSocket('localhost', { port: 7512 }));

kuzzle.on('networkError', error => {
  console.error(`Network Error: ${error.message}`);
});

(async () => {

  try {
    await kuzzle.connect()
    const request = {
      controller: 'simple-plugin/marvelController',
      action: 'createHero'
    };

    const response = await kuzzle.query(request);

    console.log(response);
  } catch (error) {
    console.error(error.message);
  } finally {
    kuzzle.disconnect()
  }
})()
