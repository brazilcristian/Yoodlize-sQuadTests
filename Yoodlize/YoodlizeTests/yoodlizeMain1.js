var yoodlizePageObjects = {}

/*
var yoodlizelogin = (pageObject, email, password, item, startDate, endDate) => {
    pageObject
        .click('@yoodlizelogin')
        .waitForElementVisible('@inputEmail')
        .click('@inputEmail')
        .setValue('@inputEmail', email)
        .click('@inputPassword')
        .setValue('@inputPassword', password)
        .click('@submitBtn')
        .waitForElementNotPresent('@inputEmail')
        //     .api.pause(15000)
        // pageObject
        .waitForElementVisible('@inputText')
        //     .click('@inputText')
        .setValue('@inputText', item)
        .waitForElementVisible('@clickTitle')
        .click('@clickTitle')
        .waitForElementVisible('@startDate')
        .click('@startDate')
        .setValue('@startDate', startDate)
        .click('@endDate')
        .setValue('@endDate', endDate)
        .click('@btnRequest')
*/


var yoodlizesignup = (pageObject, firstname, lastname, email, password, month, day, year, gender, location, text, photo) => {
    pageObject
        /*
        //   .click("@yoodlizesignup")
        //    .waitForElementVisible('@btnSignUp')
        // browser.windowMaximize()
        //    .click('@btnSignUp')
        //    .click('@inputFirstName')
        //    .setValue('@inputFirstName', firstname)
        //    .setValue('@inputLastName', lastname)
        //   .click('@inputEmail')
        //    .setValue('@inputEmail', email)
        //    .click('@inputPassword')
        //    .setValue('@inputPassword', password)
        //    .click('@selectMonth')
        //    .setValue('@selectMonth', month)
        //    .click('@selectDay')
        //    .setValue('@selectDay', day)
        //    .click('@selectYear')
        //  .setValue('@selectYear', year)
        //   .click('@submitBtn')
        */

        .click('@yoodlizelogin')
        .waitForElementVisible('@inputEmail')
        .click('@inputEmail')
        .setValue('@inputEmail', email)
        .click('@inputPassword')
        .setValue('@inputPassword', password)
        .click('@submitBtn')
        .waitForElementNotPresent('@myProfile')
        .click('@myProfile')
        .click('@editProfile')
        .click('@selectGender')
        .setValue('@selectGender', gender)
        .click('@inputLocation')
        .setValue('@inputLocation', location)
        .click('@inputText')
        .setValue('@inputText', text)
        .click('@profilePhoto')
        .click('@uploadPhoto')
        .waitForElementVisible('@uploadPhoto', 1000)
        .setValue('@uploadPhoto', require('path').resolve('@filePhoto'))


}

module.exports = {
    beforeEach: browser => {
        yoodlizePageObjects = browser.page.yoodlizePageObjects()
        yoodlizePageObjects.navigate()
            .api.maximizeWindow()
    },
    after: browser => {
        browser.end()
    },

    'Edti Profile': browser => {
        yoodlizesignup(yoodlizePageObjects, 'cristiansoares23@gmail.com', 'cristian23', 'Male', 'Salt Lake City', 'I love myself', 'eu')
    },

   /* 'Sign Up': browser => {
        yoodlizesignup(yoodlizePageObjects, 'Cristian', 'Gomes Soares', '234cristian.gomessoares@hotmail.com', 'cristian23', '10', '4', '1983')
    },*/


   /* 'Login and Renting an item': browser => {
        yoodlizelogin(yoodlizePageObjects, 'cristian.gomessoares@gmail.com', 'cristian23', 'dog\ue007', '02/20/2019', '02/23/2019')
    },*/



    // 'Login': browser => {
    //     yoodlizePageObjects
    // .click('@yoodlizelogin')

    //     browser
    //         .click('input[name="email"]')
    //         .setValue('input[name="email"]', 'cristian.gomessoares@gmail.com')
    //         .click('input[name="password"]')
    //         .setValue('input[name="password"]', 'cristian23')
    //         .click('button[type="submit"]')
    //         .expect.element('button[type="submit"]').to.not.be.visible.before(5000)

    // },
    // 'Search for Item': browser => {
    //     browser
    //         .click('input[type="text"]')
    //         .setValue('input[type="text"]', 'dog\uE007')
    //         .useXpath()
    //         .waitForElementVisible('(//div[@id="card-title"])[2]')
    //         .click('(//div[@id="card-title"])[2]')
    //         .waitForElementVisible('(//form//input)[1]')
    //         .click('(//form//input)[1]')
    //         .setValue('(//form//input)[1]', '02/20/2019')
    //         .setValue('(//form//input)[2]', '02/23/2019')
    //         .useCss()
    //         .click('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    //         .click('button[class="Meetup-button-1IEeC Meetup-btnPrimary-3Fc0g btn btn-default"]')
    //         .useXpath()
    //         .expect.element('(//div)[1]').text.to.contain('Get ready to rent with Sarah').before(5000)

    // }
}