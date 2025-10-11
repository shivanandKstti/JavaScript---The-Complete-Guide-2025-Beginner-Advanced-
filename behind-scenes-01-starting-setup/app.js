let name = 'Shiva';

function greet() {
    let age = 30;
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet();
// javascript engine and what thet do..
/**
 * JavaScript Engine: A JavaScript engine is a program or interpreter that executes JavaScript code. It reads the code, parses it, and converts it into machine code that the computer's processor can execute. Popular JavaScript engines include V8 (used in Google Chrome and Node.js), SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari).
 * 
 * Key Functions of a JavaScript Engine:
 * 
 * 1. Parsing: The engine reads the JavaScript code and breaks it down into a structure called the Abstract Syntax Tree (AST). This helps the engine understand the code's syntax and semantics.
 * 
 * 2. Compilation: Modern JavaScript engines use Just-In-Time (JIT) compilation to convert JavaScript code into machine code at runtime. 
 * This improves performance by optimizing frequently executed code.
 * 
 * 3. Execution: The engine executes the compiled machine code, managing memory allocation, garbage collection, and handling asynchronous
 *  operations (like callbacks and promises).
 * 4. Optimization: JavaScript engines continuously monitor the performance of the code being executed and apply various optimization techniques 
 * to improve speed and efficiency.
 * 5. Memory Management: The engine handles memory allocation for variables and objects, and it also performs garbage collection to free up memory 
 * that is no longer needed.
 * 6. Event Loop: The engine manages the event loop, which allows JavaScript to perform non-blocking operations by handling events and executing 
 * callback functions asynchronously.
 * Overall, a JavaScript engine is a crucial component that enables the execution of JavaScript code in web browsers and server environments, 
 * ensuring that applications run smoothly and efficiently.
 */

/**
 * How code Gets Executed in JavaScript Engine
 * 1. Loading: The JavaScript engine loads the JavaScript code, which can be embedded in HTML files or included as separate .js files.
 * 2. Parsing: The engine parses the code to create an Abstract Syntax Tree (AST), which represents the structure of the code.
 * 3. Compilation: The engine compiles the AST into machine code using Just-In-Time (JIT) compilation techniques.
 * 4. Execution: The compiled machine code is executed by the engine, which manages memory allocation, garbage collection, and asynchronous operations.
 * 5. Optimization: The engine continuously monitors the performance of the code and applies optimizations to improve execution speed.
 * 6. Event Loop: The engine manages the event loop to handle asynchronous events and callbacks, allowing non-blocking operations.
 * 7. Completion: Once the code has been executed, the engine cleans up any resources and memory that are no longer needed.
 * Overall, the JavaScript engine ensures that the code runs efficiently and effectively in the browser or server environment.
 */