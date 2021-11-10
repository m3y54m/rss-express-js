// Express HTTP server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// Pug template engine for displaying variables in a HTML page
const pug = require("pug");
// Set "Pug" as a template engine for Express
app.set("view engine", "pug");
// RSS Parser
const Parser = require("rss-parser");
const parser = new Parser();

app.get("/", async (req, res) => {

  let feed = await parser.parseURL("https://virgool.io/feed/@virgool");
  var feedItems = [];

  feed.items.forEach((item) => {
    feedItems.push({
      title: item.title,
      link: item.link,
    });
  });

  // The template for index page is in "views/index.pug"
  res.render("index", {
    feedItems: feedItems,
  });
});

// Run Express server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
