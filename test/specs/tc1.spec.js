import allureReporter from '@wdio/allure-reporter';
// import allureReport from '@wdio/allure-reporter'
describe('Test', () => {
    it('Testcase-1', async() => {

        allureReporter.addSeverity('critical')
        allureReporter.addStory('mrmnyl-1023')
        allureReporter.addFeature("Navigation")
        await browser.url('/');
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    });
    it('Testcase-2', async() => {

        allureReporter.addSeverity('minor')
        allureReporter.addStory('mrmnyl-1024')
        allureReporter.addFeature("Title Verification")
        await browser.url('/');
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    });
    it('Testcase-3', async() => {

        allureReporter.addSeverity("normal")
        allureReporter.addStory('mrmnyl-1025')
        allureReporter.addFeature("Logo Verification")
        await browser.url('/');
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    });
});