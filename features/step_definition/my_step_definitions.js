const URL = 'http://google.com';

const mySteps = function() {
  this.Given(/^I am on Google home page$/, function(callback) {
    return this.visit(URL, callback);
  });

  this.Then(/^I should see "(.*)" as the page title$/, function(title, callback) {
    const pageTitle = this.browser.text('title');
    if (title === pageTitle) {
      callback();
    } else {
      callback(new Error("Expected to be on page with title " + title));
    }
  });

  this.When(/^I input the keywords and start search$/, function(callback) {
    this.browser.fill('q', 'coursera')
      .pressButton('input[type=submit]', callback);
  });

  this.Then(/^I should see the search results$/, function(callback) {
    this.browser.assert.success();
    callback();
  });
};

module.exports = mySteps;
