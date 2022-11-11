
// imports 
const { FlawedComponent } = require("@arnavk-09/flawed");

// Hero Component 
class ClassPreview extends FlawedComponent {
    // Giving Name To Component
    constructor() {
        super({
            name: 'ClassPreview'
        });
    };

    // Component Content 
    view(props) {
        // adding params to table
        let paramsContent = '';
        let p_i = 0;
        while(p_i < props.params.length) {
            paramsContent  = `${paramsContent}\n<tr><td>${props.params[p_i].name.toString()}</td><td>${props.params[p_i].type.toString()}</td><td>${props.params[p_i].required.toString()}</td><td>${props.params[p_i].description}</td></tr>\n`; 
            p_i++;
        }

        // adding functions to table
        let funcContent = '';
        let f_i = 0;
        while(f_i < props.functions.length) {
            funcContent  = `${funcContent}\n<tr><td>${props.functions[f_i].name.toString()}</td><td>${props.functions[f_i].params.toString()}</td><td>${props.functions[f_i].description.toString()}</td></tr>\n`; 
            f_i++;
        }

        return (
            `
            <div>
                <!-- Title -->
                <a style="color: black; text-decoration: underline;" href="https://github.com/ArnavK-09/flawed/blob/main/src/FlawedClient.ts" target="_blank">
                    <h3>#${props.name}</h3>
                </a>
                <!-- Class Description -->
                <mark>
                    ${props.description}
                </mark>

                <br><br>

                <div style="padding: 7px">
                

                <!-- Params Of Class -->
                <h4> Params (In ${props.paramsType}):- </h4>
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
                        ${paramsContent}
                    </tbody>
              </table>

                <!-- Functions Of Class -->
                <h4> Funtions:- </h4>
                <table class="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Params</th>
                        <th scope="col">Description</th>
                    </tr>
                    </thead>
                    <tbody class="classTableData">
                        ${funcContent}
                    </tbody>
            </table>
            </div>
            </div>
            <hr>
              `
        );
    };
};

// exporting 
module.exports = ClassPreview;