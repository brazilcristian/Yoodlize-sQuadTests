module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        yoodlizelogin: {
            selector: '//span[contains(text(), "Log in")]',
            locateStrategy: 'xpath'
        },
        inputEmail: 'input[name="email"]',
        inputPassword: 'input[name="password"]',
        submitBtn: 'button[type="submit"]',
        inputText: 'input[type="text"]',
        clickTitle: { selector: '(//div[@id="card-title"])[2]', locateStrategy: 'xpath' },
        clickCalendar: { selector: '(//form//input)[1]', locateStrategy: 'xpath' },
        startDate: { selector: '(//form//input)[1]', locateStrategy: 'xpath' },
        endDate: { selector: '(//form//input)[2]', locateStrategy: 'xpath' },
        btnRequest: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        btnNext: 'button[class="Meetup-button-1IEeC Meetup-btnPrimary-3Fc0g btn btn-default"]',

        yoodlizesignup: { selector: '//span[contains(text(), "Sign up")]', locateStrategy: 'xpath' },
        submitBtn: 'button[type="submit"]',
        btnSignUp: { selector: '//span[contains(text(), "Sign up with Email")]' , locateStrategy: 'xpath'},
        inputEmail: 'input[name="email"]',
        inputPassword: 'input[name="password"]',
        inputFirstName: 'input[name="firstName"]',
        inputLastName: 'input[name="lastName"]',
        selectMonth: 'select[name="month"]',
        selectDay: 'select[name="day"]',
        selectYear: 'select[name="year"]',
        submitBtn: 'button[type="submit"]',
        myProfile: 'img[class="sc-hrWEMg buEeUU"]',
        editProfile: { selector: '//span[contains(text(), "Edit Profile")]', locateStrategy: 'xpath'},
        selectGender: 'select[name="gender"]',
        inputText: 'textarea[name="info"]',
        inputLocation: 'input[name=location]',
        profilePhoto: { selector: '//span[contains(text(), "Profile Photo")]', locateStrategy: 'xpath'},
        uploadPhoto: 'input[type=file',
        filePhoto: { selector: '(/Users/cristian/Desktop/DevmountainClassWork/Yoodlize-sQuadTests/Yoodlize/${eu.jpg})', locateStrategy: 'xpath'},






    }
}