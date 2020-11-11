
function testEventLoop() {
    console.log("before setTimeout");
    setTimeout(() => console.log("after real Timeout"), 5000)
    console.log("after calling setTimeout");
}

console.log("before testEventLoop");
testEventLoop();
console.log("after testEventLoop");

