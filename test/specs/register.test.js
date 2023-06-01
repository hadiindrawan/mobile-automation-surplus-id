const wdio = require('webdriverio');
const assert = require('assert')
const { touchAnywhere } = require('../helper/touch.helper');
const pages = require('../pages/register.pages');
const { registerDatas } = require('../data/registration.data');

describe("Register", () => {
    registerDatas.forEach(data => {
        it(data.cases.name, async () => {
            // Clear autocomplete input to show the target elements with helper touch anywhere
            await browser.pause(1000);
            await touchAnywhere()
            await browser.pause(1000);

            const goToRegisterPageBtn = await $(pages.btnCreateAccEl);
            await goToRegisterPageBtn.click();

            const inputName = await $(pages.nameInputEl)
            await inputName.setValue(data.name)

            const inputEmail = await $(pages.emailInputEl)
            await inputEmail.setValue(data.email)

            const inputPassword = await $(pages.passwordInputEl)
            await inputPassword.setValue(data.password)

            const inputConfirmPassword = await $(pages.confirmPasswordInputEl)
            await inputConfirmPassword.setValue(data.confirm_password)

            const sumbitDataBtn = await $(pages.btnSubmitRegisterEl)
            await sumbitDataBtn.click()

            const messageRegister = await $(data.cases.type == 'snackbar' ? pages.messageEl : pages.errorMsgInputEl)
            const msgText = await messageRegister.getText()

            assert.equal(msgText, data.cases.message)
        })
    })

    afterEach(async () => {
        await browser.pause(1000);
        await browser.reloadSession()
    })
})