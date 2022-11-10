// imports 
const { FlawedComponent } = require("@arnavk-09/flawed");

// Nav Bar Component 
class Navbar extends FlawedComponent {
    // Giving Name To Component
    constructor() {
        super({
            name: 'Navbar'
        });
    };

    // Component Content 
    view() {
        return (
            `
            <header>
            <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
            <div class="container">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="/favicon.png" alt="Logo" width="36" height="36" class="d-inline-block align-text-top">
              Flawed
            </a>
          </div>
    
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
    
    
            <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="/" class="nav-link active">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/docs" class="nav-link active">
                        Docs
                    </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link active">
                        Report A Bug
                    </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link active">
                        Github
                    </a>
                </li>
            </ul>
            </div>   
            </nav>
            </header>
            <br> 
            `
        );
    };
};

// exporting 
module.exports = Navbar;