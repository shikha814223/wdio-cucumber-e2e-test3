import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect as expectChai } from 'chai';

//var expect = require('chai').expect
Given(/^Google page is opened$/, function () {
  browser.url("https://www.google.com");
  browser.pause(1000);
});

When(/^Search with (.*)$/, async function (SearchItem) {
  console.log(`>>------------------------------ SearchItem : ${SearchItem}`);
  let ele = await $(`[name=q]`);
  await ele.click;
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $("<h3>");
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (ExpextedURL) {
  console.log(`Expected UR :${ExpextedURL}`);
  let url = await browser.getUrl()
  expectChai(url).to.equal(ExpextedURL)
});
