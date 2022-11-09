// Imports 
const { FlawedClient } = require('@arnavk-09/flawed');
const MetaHead = require('./components/MetaHead');
const MainScreen = require('./screens/MainScreen');
const Navbar = require('./components/Navbar');
const Hero = require('./components/Hero');

// Init Flawed App 
const app = new FlawedClient({
    port: 3000
});

// Adding Screens To App 
app.setScreens([new MainScreen()]);

// Setup Head 
app.setHead(new MetaHead());

// Register Components 
app.registerComponents([new Navbar(), new Hero()]);

// Setup 404 Page 
app.set404Content(`404 Page!`);

// Starting Flawed App 
app.start();

exports.app = app