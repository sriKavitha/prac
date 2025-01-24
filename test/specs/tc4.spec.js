// import path from 'path';

// describe('Test', () => {
 
//     it('Test2', () => {
//         console.log("dir name:",path.dirname(__filename)); // Works without additional setup
//     });

// });
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log("directory name:", path.dirname(__filename));