// Imports 
const { FlawedClient } = require('@arnavk-09/flawed');
const MetaHead = require('./components/MetaHead');
const MainScreen = require('./screens/MainScreen');
const DocsLanding = require('./screens/DocsLanding');
const Navbar = require('./components/Navbar');
const Hero = require('./components/Hero');
const DocsTOC = require('./components/DocsTOC');

// Init Flawed App 
const app = new FlawedClient({
    port: 3000
});

// Adding Screens To App 
app.setScreens([new MainScreen(), new DocsLanding()]);

// Setup Head 
app.setHead(new MetaHead());

// Register Components 
app.registerComponents([new Navbar(), new Hero(), new DocsTOC()]);

// Setup 404 Page 
app.set404Content(`404 Page!`);

// Starting Flawed App 
app.start();

exports.app = app