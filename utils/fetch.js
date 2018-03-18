const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: 'https://www.stw-bremen.de/de/essen-trinken/uni-mensa',
  transform: body => cheerio.load(body),
};

async function fetch() {
  try {
    return await rp(options);
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = fetch;
