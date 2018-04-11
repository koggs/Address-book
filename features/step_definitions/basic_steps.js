const { After, Given, Then, When } = require('cucumber')


After(async function() {
  return await this.closeHomePage()
})

Given("I visit the site", async function() {
    return await this.openHomePage()
});

Then("I should see {string}", async function(content) {
  return await this.pageHasTextContent(content)
});

When('I click {string}', async function(string) {
  return await this.clickOnAddContactBtn()
});

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content)
});

Then('I should have {int} contact in my address Address book', function(int) {
  return 'pending';
});

Then('I should not see {string}', function (string) {
  return 'pending';
});
