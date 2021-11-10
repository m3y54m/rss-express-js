let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://virgool.io/feed/@virgool');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();