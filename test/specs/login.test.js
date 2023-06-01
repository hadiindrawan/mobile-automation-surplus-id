const wdio = require('webdriverio');
const assert = require('assert')
const { touchAnywhere } = require('../helper/touch.helper');
const pages = require('../pages/login.pages');
const { loginDatas } = require('../data/login.data');

module.exports = () => 
describe("Login", () => {

    loginDatas.forEach(data => {
        it(data.cases.name, async () => {
            // Clear autocomplete input to show the target elements with helper touch anywhere
            await browser.pause(1000);
            await touchAnywhere()
            await browser.pause(500);

            const inputEmail = await $(pages.emailInputEl)
            await inputEmail.setValue(data.email)

            const inputPassword = await $(pages.passwordInputEl)
            await inputPassword.setValue(data.password)

            const sumbitDataBtn = await $(pages.btnSubmitLoginEl)
            await sumbitDataBtn.click()

            if (data.cases.type != 'redirect') {
                const messageLogin = await $(data.cases.type == 'snackbar' ? pages.messageEl : pages.errorMsgInputEl)
                const msgText = await messageLogin.getText()
                assert.equal(msgText, data.cases.message)
            } else {
                const usersEl = await $(data.cases.type)
                const usersElDisplayed = await usersEl.isDisplayed()
                assert.equal(usersElDisplayed, true)
            }

        })
    })

    afterEach(async () => {
        await browser.pause(1000);
        await browser.reloadSession()
    })
})