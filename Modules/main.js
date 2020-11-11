import { name, draw } from './modules/square.js';
import hello from './modules/hello.js';
// import {default as hello} from './modules/hello.js';
// import { name as helloName, sayHello} from './modules/hello.js';


console.log(name)
console.log(hello.name)

async function buttonClick(){
    const dynamicModule = await import("./modules/dynamicModule.js")
    dynamicModule.helloFromDynamicModule();

}

const button = document.getElementById("testAsyncButton");
button.addEventListener("click", buttonClick)
