const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const sectionsPath = path.join(__dirname, "../templates/sections");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
hbs.registerPartials(sectionsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    articleArray: [
      {
        head: "React",
        title: "Using state",
        description:
          "Here you will learn how to properly use the state hook in React. The article gives good visuals on how to change state based on specific events.",
        URL: "https://daveceddia.com/visual-guide-to-state-in-react/",
      },
      {
        head: "JavaScript",
        title: "Async JavaScript",
        description:
          "This article explains the core concepts of Asynchronous JavaScript. Core conecpts like the call stack and execution context are discussed.",
        URL: "https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff",
      },
      {
        head: "CSS",
        title: "CSS Media Queries",
        description:
          "At first, one of the most challenging parts of CSS is writing media queries to make your site responsive. This article walks you through writing effective media queries.",
        URL: "https://css-tricks.com/a-complete-guide-to-css-media-queries/",
      },
      {
        head: "Imposter Syndrome",
        title: "Avoiding Imposter Syndrome",
        description:
          "This article identifies the warning signs of imposter syndrome; this is something that many developers experience in their careers.",
        URL: "https://blog.hubspot.com/marketing/impostor-syndrome-tips",
      },
      {
        head: "React",
        title: "Optimizing Performance",
        description:
          "This article is split into two parts and goes into detail about optimizing the performance of react apps. Learn how to avoid unnecessary re-renders and much more!",
        URL: "https://piyushsinha.tech/series/optimizing-react?ck_subscriber_id=887757136&utm_campaign=Frontend%2BWeekly&utm_medium=web&utm_source=Frontend_Weekly_311",
      },
      {
        head: "Git",
        title: "Basic Git Commands",
        description:
          "Here, you will find a list of commonly used git commands. As a developer, it is crucial to understand how to use git in order to share code with other developers.",
        URL: "https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html",
      },
    ],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    toolboxArray: [
      {
        title: "CSS",
        icon: "devicon-css3-plain",
      },
      {
        title: "Sass",
        icon: "devicon-sass-original",
      },
      {
        title: "HTML",
        icon: "devicon-html5-plain",
      },
      {
        title: "JavaScript",
        icon: "devicon-javascript-plain",
      },
      {
        title: "Handlebars",
        icon: "devicon-handlebars-plain",
      },
      {
        title: "Express",
        icon: "devicon-express-original",
      },
      {
        title: "Git",
        icon: "devicon-git-plain",
      },
      {
        title: "npm",
        icon: "devicon-npm-original-wordmark",
      },
      {
        title: "React",
        icon: "devicon-react-original",
      },
      {
        title: "Redux",
        icon: "devicon-redux-original",
      },
      {
        title: "Github",
        icon: "devicon-github-original",
      },
      {
        title: "Heroku",
        icon: "devicon-heroku-original",
      },
    ],
  });
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/articles", (req, res) => {
  res.render("articles", {
    articleArray: [
      {
        head: "React",
        title: "Using state",
        description:
          "Here you will learn how to properly use the state hook in React. The article gives good visuals on how to change state based on specific events.",
        URL: "https://daveceddia.com/visual-guide-to-state-in-react/",
      },
      {
        head: "JavaScript",
        title: "Async JavaScript",
        description:
          "This article explains the core concepts of Asynchronous JavaScript. Core conecpts like the call stack and execution context are discussed.",
        URL: "https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff",
      },
      {
        head: "CSS",
        title: "CSS Media Queries",
        description:
          "At first, one of the most challenging parts of CSS is writing media queries to make your site responsive. This article walks you through writing effective media queries.",
        URL: "https://css-tricks.com/a-complete-guide-to-css-media-queries/",
      },
      {
        head: "Imposter Syndrome",
        title: "Avoiding Imposter Syndrome",
        description:
          "This article identifies the warning signs of imposter syndrome; this is something that many developers experience in their careers.",
        URL: "https://blog.hubspot.com/marketing/impostor-syndrome-tips",
      },
      {
        head: "React",
        title: "Optimizing Performance",
        description:
          "This article is split into two parts and goes into detail about optimizing the performance of react apps. Learn how to avoid unnecessary re-renders and much more!",
        URL: "https://piyushsinha.tech/series/optimizing-react?ck_subscriber_id=887757136&utm_campaign=Frontend%2BWeekly&utm_medium=web&utm_source=Frontend_Weekly_311",
      },
      {
        head: "Git",
        title: "Basic Git Commands",
        description:
          "Here, you will find a list of commonly used git commands. As a developer, it is crucial to understand how to use git in order to share code with other developers.",
        URL: "https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html",
      },
    ],
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/thanks", (req, res) => {
  res.render("thanks");
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
