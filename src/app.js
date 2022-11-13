// Imports
const { FlawedClient } = require("@arnavk-09/flawed");

// Meta Head 
const MetaHead = require("./head");

// Screens
const MainScreen = require("./screens/MainScreen");
const DocsLanding = require("./screens/DocsLanding");

// Components
const Navbar = require("./components/Navbar");
const Hero = require("./components/Hero");
const DocsTOC = require("./components/DocsTOC");
const ClassPreview = require("./components/ClassPreview");
const UseComponentFunctionPreview = require("./components/UseComponentFunctionPreview");
const FlawedSiteStructured = require("./components/FlawedSiteStructured");

// Init Flawed App
const app = new FlawedClient({
  port: 3000,
});

// Adding Screens To App
app.setScreens([new MainScreen(), new DocsLanding()]);

// Setup Head
app.setHead(new MetaHead());

// Register Components
app.registerComponents([
  new Navbar(),
  new Hero(),
  new DocsTOC(),
  new ClassPreview(),
  new UseComponentFunctionPreview(),
  new FlawedSiteStructured(),
]);

// Setup 404 Page
app.set404Content(`404 Page!`);

// Starting Flawed App
app.start();

// exporting app
exports.app = app;
