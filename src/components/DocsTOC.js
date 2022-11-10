
  // imports 
  const { FlawedComponent } = require("@arnavk-09/flawed");

  // Hero Component 
  class DocsTOC extends FlawedComponent {
      // Giving Name To Component
      constructor() {
          super({
              name: 'DocsTOC'
          });
      };
  
      // Component Content 
      view() {
          return (
              `
              <br><br>
                <div class="docsTOC">
                
                <details>
                    <summary>Table Of Contents</summary>

                    <br>
                    <h5>Classes</h5>
                    <a class="active" href="#home">FlawedClient</a>
                    <a href="#news">FlawedScreen</a>

                    <hr>

                    <h5>Guide</h5>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </details>
                </div>
              `
          );
      };
  };
  
  // exporting 
  module.exports = DocsTOC;