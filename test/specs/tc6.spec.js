describe('Test', () => {
    it('Testcase6', async() => {
        await browser.url('/');
        // await browser.pause(3000)
        await browser.waitUntil(async ()=>{
            const homeText = await $('#zak-primary-nav li').getText();
            console.log("HOMETEXT", homeText)
            return homeText === 'Home'
        },{timeout:10000, timeoutMsg:"Home is not found in #zak-primary-nav li"});
    });
    

});