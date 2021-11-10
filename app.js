// Express HTTP server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Handlebars template engine for displaying variables in a HTML page
const exphbs = require("express-handlebars");

// Configure "Handlebars" as a template engine for Express
app.engine(
  "handlebars",
  exphbs({
    layoutsDir: __dirname + "/views",
    defaultLayout: "index",
  })
);
app.set("view engine", "handlebars");

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
