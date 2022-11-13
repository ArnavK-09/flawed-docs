// imports
const { FlawedComponent } = require("@arnavk-09/flawed");

// UseComponentFunctionPreview Component
class UseComponentFunctionPreview extends FlawedComponent {
  // Giving Name To Component
  constructor() {
    super({
      name: "UseComponentFunctionPreview",
    });
  }

  // Component Content
  view() {
    return `
              <!-- Title -->
              <a style="color: black; text-decoration: underline;" href="https://github.com/ArnavK-09/flawed/blob/main/src/utils/UseComponent.ts" target="_blank">
                  <h3>#UseComponent</h3>
              </a>
              <!-- Description -->
              <mark>
                  Use ths function to use any component dynamically
              </mark>

              <br><br>

              <div style="padding: 7px">
              

              <!-- Params Of Class -->
              <h4> Params:- </h4>
              <table class="table table-dark">
                  <thead>
                  <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Required</th>
                      <th scope="col">Description</th>
                  </tr>
                  </thead>
                  <tbody class="classTableData">
                      <tr>
                          <td>name</td>
                          <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">string</a></td>
                          <td>true</td>
                          <td>Name of the component you want to use</td>
                      </tr>
                      <tr>
                          <td>app</td>
                          <td><a href="#FlawedClient">FlawedClient</a></td>
                          <td>true</td>
                          <td>Pass the Flawed Client here</td>
                      </tr>
                      <tr>
                          <td>props</td>
                          <td>any</a></td>
                          <td>false</td>
                          <td>Pass the props for component</td>
                      </tr>
                  </tbody>
            </table>
              </div>
              `;
  }
}

// exporting
module.exports = UseComponentFunctionPreview;
