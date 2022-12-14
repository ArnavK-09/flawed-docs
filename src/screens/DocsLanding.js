// imports
const { FlawedScreen, UseComponent } = require("@arnavk-09/flawed");
const app = require("../app");

// Creating Main Screen
class DocsLanding extends FlawedScreen {
  // Giving ID To Screen
  constructor() {
    super({
      route: "docs",
    });
  }

  // Screen Content
  render() {
    // classes data
    let FlawedClientData = {
      name: "FlawedClient",
      paramsType: "Object",
      description: "The main client of your Flawed site! That Wil Init.",
      params: [
        {
          name: "port",
          required: true,
          type: "number",
          description: "The port on which Flawed will serve",
        },
      ],
      functions: [
        {
          name: "start()",
          description: "Starts The Server!",
          params: "None",
        },
        {
          name: "set404Content()",
          description: "Customize your 404 page",
          params:
            'new404: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">string</a>',
        },
        {
          name: "setHead()",
          description: "Customize your site's Head",
          params: 'customHead: <a href="#FlawedHead">FlawedHead</a>',
        },
        {
          name: "setScreens()",
          description: "Add your pages to site",
          params: 'screens: Array<<a href="#FlawedScreen">FlawedScreen</a>>',
        },
        {
          name: " registerComponents()",
          description: "Register your components to app to use it dynamically",
          params:
            'componentsList: Array<<a href="#FlawedComponent">FlawedComponent</a>>',
        },
      ],
    };
    let FlawedScreenData = {
      name: "FlawedScreen",
      paramsType: "Object",
      description: "Define a page in your site",
      params: [
        {
          name: "route",
          required: true,
          type: "string",
          description: "Route of the page",
        },
      ],
      functions: [
        {
          name: "render",
          description: "Override this function and return page content",
          params: "None",
        },
      ],
    };
    let FlawedComponentData = {
      name: "FlawedComponent",
      description: "Define a dynamic component for your site",
      paramsType: "Object",
      params: [
        {
          name: "name",
          required: true,
          type: "string",
          description: "Name of the component (not case sensitive)",
        },
      ],
      functions: [
        {
          name: "view",
          description: "Override this function and return component body",
          params: "props?: any",
        },
      ],
    };
    let FlawedHeadData = {
      name: "FlawedHead",
      description: "Define head for your site",
      paramsType: "Object",
      params: [
        {
          name: "head",
          required: true,
          type: "string",
          description: "String of head of your site to be there",
        },
        {
          name: "favicon",
          required: false,
          type: "string",
          description: "Enter Favicon url (static files url also aloud)",
        },
      ],
      functions: [
        {
          name: "None",
          params: "None",
          description: "None",
        },
      ],
    };

    return {
      page: `
                ${UseComponent("Navbar", app.app)}
                <section class="docs container col-xxl-8 px-4 py-10">
                    ${UseComponent("DocsTOC", app.app)}

                    <h1>Classes:-</h1><br>

                    <!-- Flawed Client -->
                    <div id="FlawedClient">
                        ${UseComponent(
                          "ClassPreview",
                          app.app,
                          FlawedClientData
                        )}
                    </div>
                    <!-- Flawed Screen -->
                    <div id="FlawedScreen">
                        ${UseComponent(
                          "ClassPreview",
                          app.app,
                          FlawedScreenData
                        )}
                    </div>
                    <!-- Flawed Component -->
                    <div id="FlawedComponent">
                        ${UseComponent(
                          "ClassPreview",
                          app.app,
                          FlawedComponentData
                        )}
                    </div>
                    <!-- Flawed Head -->
                    <div id="FlawedHead">
                        ${UseComponent("ClassPreview", app.app, FlawedHeadData)}
                    </div>

                    <br><br>

                    <h1> Functions:- </h1><br>
                    
                    <!-- UseComponent -->
                    <div id="UseComponent">
                        ${UseComponent("UseComponentFunctionPreview", app.app)}
                    </div>
                    
                    <br><br>
                    <hr>

                    <h1> More:- </h1><br>
                    
                    <!-- Structured FlawdedSite -->
                    <div id="StructuredFlawdedSite">
                        ${UseComponent("FlawedSiteStructured", app.app)}
                    </div>
                    
                    <hr>
                </section>
            `,
    };
  }
}

// exporting
module.exports = DocsLanding;
