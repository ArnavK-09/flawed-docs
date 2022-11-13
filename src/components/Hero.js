// imports
const { FlawedComponent } = require("@arnavk-09/flawed");

// Hero Component
class Hero extends FlawedComponent {
  // Giving Name To Component
  constructor() {
    super({
      name: "Hero",
    });
  }

  // Component Content
  view() {
    return `
            <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src="/favicon.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Flawed - Javascript/Typescript Html Framework</h1>
                <p class="lead"> Quicky Framework Which Support Dynamic Components, Full Access To Routes, Simple AF (Fast), Automatically Beatuifies Code, Handler All Things Yourself, Logs Everything, Classes Based, Compatible With ECM & CJS, Out Of The Box Head Component, Supports Static Files, Automatic Favicon Picking</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a href="https://www.npmjs.com/package/@arnavk-09/flawed" target="_blank"><button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Download</button></a>
                  <a href="/docs"><button type="button" class="btn btn-outline-secondary btn-lg px-4">Docs</button></a>
                </div>
              </div>
            </div>
          </div>
            `;
  }
}

// exporting
module.exports = Hero;
