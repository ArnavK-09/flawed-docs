// imports 
const { FlawedScreen, UseComponent } = require('@arnavk-09/flawed');
const app = require('../app')

// Creating Main Screen 
class DocsLanding extends FlawedScreen {
    // Giving ID To Screen
    constructor() {
        super({
            route: 'docs', //  index route
        });
    };

    // Screen Content  
    render() {
        return {
            page: `
                ${UseComponent('Navbar', app.app)}
                <section class="docs container col-xxl-8 px-4 py-10">
                    ${UseComponent('DocsTOC', app.app)}
                    Content
                </section>
            `,
        };
    };
};

// exporting 
module.exports = DocsLanding;