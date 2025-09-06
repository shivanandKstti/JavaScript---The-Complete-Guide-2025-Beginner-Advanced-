const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}
/**
 * 
 * @param {*} operator 
 * @param {*} resultBeforeCalc 
 * @param {*} calcNumber 
 */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResuult(calculationType){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let matchOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        matchOperator = '+';
    } else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        matchOperator = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        matchOperator = '*';
    }   else if(calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        matchOperator = '/';
    }
    createAndWriteOutput(matchOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}

/**
 * 
 */
function add(){
    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult =  currentResult + enteredNumber;
    // createAndWriteOutput('+', initialResult, enteredNumber);
    // writeToLog('ADD', initialResult, enteredNumber, currentResult);
    calculateResuult('ADD');    
}

function subtract(){
    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult =  currentResult - enteredNumber;
    // createAndWriteOutput('-', initialResult, enteredNumber);
    // writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
    calculateResuult('SUBTRACT');
}

function multiply(){
    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult =  currentResult * enteredNumber;
    // createAndWriteOutput('*', initialResult, enteredNumber);
    // writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
    calculateResuult('MULTIPLY');
}

function divide(){
    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult =  currentResult / enteredNumber;
    // createAndWriteOutput('/', initialResult, enteredNumber);
    // writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
    calculateResuult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
