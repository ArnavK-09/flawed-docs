// imports
const { FlawedComponent } = require("@arnavk-09/flawed");

// UseComponentFunctionPreview Component
class FlawedSiteStructured extends FlawedComponent {
  // Giving Name To Component
  constructor() {
    super({
      name: "FlawedSiteStructured",
    });
  }

  // Component Content
  view() {
    return `
              <!-- Title -->
              <a style="color: black; text-decoration: underline;" href="https://github.com/ArnavK-09/flawed-docs" target="_blank">
                  <h3>#Structured Flawed Site</h3>
              </a>
              <!-- Description -->
              <mark>
                 Well Structured Flawed Site Guide Below!
              </mark>

              <br><br>

              <div style="padding: 7px">
                <ol>
                    <li><pre>index.js</pre> - Flawed Client and start project</li>
                    <li><pre>components/</pre> - All components file here</li>
                    <li><pre>screens/</pre> - All Screens (pages) here</li>
                    <li><pre>static/</pre> - Static website files here</li>
                    <li><pre>head.js</pre> - Flawed Site meta head file</li>
                </ol>

                <em>
                    <strong>
                        You can view full app 
                        <a href="https://github.com/ArnavK-09/flawed-docs" target="_blank" class="active">
                             here
                        </a>
                    </strong>
                </em>
              </div>
              `;
  }
}

// exporting
module.exports = FlawedSiteStructured;
