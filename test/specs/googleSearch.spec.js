//Running only this spec , we should type the next command
//npx wdio run wdio.conf.js --spec ./test/specs/googleSearch.spec.js

//To install correctly allure report , we should configure typing
//sudo chown -R $USER /usr/local/lib/node_modules/
//sudo chown -R $USER /usr/local/bin/
//sudo chown -R $USER /usr/local/share/
//and then executing npm install -g allure-commandline --save-dev


//To watch Allure Report we must install alldependencies previously 
//Then we must execute our tests/suites
//Then execute: npx allure generate allure-results --clean -o allure-report
//then execute: allure open
//And we'll see our report :D
describe('Demo Tests', function() {
  it('My first Test', async()=>{
      browser.url('https://google.com')
      await $('[name="q"]').setValue('WebdriverIO')
      browser.keys('Enter')
      browser.pause(20000)
    

  })


})