describe('Test', () => {
    it('Testcase1', async() => {
        await browser.url('/');
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns'); // wdio assertion cpmes as part of wdio 
        // await expect(browser).toEqual('Practice E-Commerce Site – SDET Unicorns'); // Jest assertion cpmes as part of wdio
    });
});