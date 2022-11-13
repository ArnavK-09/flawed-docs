// imports
const { FlawedScreen, UseComponent } = require("@arnavk-09/flawed");
const app = require("../app");

// Creating Main Screen
class MainScreen extends FlawedScreen {
  // Giving ID To Screen
  constructor() {
    super({
      route: "main", //  index route
    });
  }

  // Screen Content
  render() {
    return {
      page: `
                ${UseComponent("navbar", app.app)}
                <section>
                ${UseComponent("hero", app.app)}
                </section>
            `,
    };
  }
}

// exporting
module.exports = MainScreen;
