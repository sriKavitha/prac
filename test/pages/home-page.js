class HomePage{

    async home(){
          await browser.url('/');
    }
}
export default new HomePage();