import HomePage from '../pages/home-page'
describe('Test1', () => {
    it('testing', async () => {
        await HomePage.home();
        console.log("I am from TC")
    });
    
});
