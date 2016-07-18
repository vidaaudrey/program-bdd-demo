const Zombie = require('zombie');
const browser = new Zombie();

// browser, visit will be available in the step definition
function World() {
  this.browser = browser;

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
}

module.exports = function () {
  this.World = World;
};
