// Express HTTP server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Handlebars template engine for displaying variables in a HTML page
const exphbs = require("express-handlebars");

// Configure "Handlebars" as a template engine for Express
app.engine(
  "hbs",
  exphbs({
    layoutsDir: __dirname + "/views",
    defaultLayout: "index",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

// RSS Parser
const Parser = require("rss-parser");
const parser = new Parser();

// Virgool Username
const username = "virgool";

app.get("/", async (req, res) => {
  let feed = await parser.parseURL(`https://virgool.io/feed/@${username}`);

  let feedInfo = {
    url: feed.feedUrl,
    title: feed.title,
  };

  let feedItems = [];

  feed.items.forEach((item) => {
    feedItems.push({
      title: item.title,
      link: item.link,
      summary: item.summary,
      author: item.author,
      date: item.pubDate,
    });
  });

  // The template for index page is in "views/index.hbs"
  res.render("index", {
    feedItems: feedItems,
    feedInfo: feedInfo,
  });
});

// Run Express server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
