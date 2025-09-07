const   ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const ATTACK_MODE = 'ATTACK';
const STRONG_ATTACK_MODE = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster.', '100');
let chosenMaxLife = parseInt(enteredValue);

let batteleLog = [];
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
    alert('You entered something wrong, default value of 100 was used.');
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
function endRound() {
    
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
        reset();
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        writeLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
        reset();
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have a draw!');
        writeLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMonsterHealth, currentPlayerHealth);
        reset();
    }
}

function attackMonster(attackMode) {
    let maxDamage;
    if (attackMode === ATTACK_MODE) {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === STRONG_ATTACK_MODE) {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    writeLog(
        attackMode === ATTACK_MODE ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK,
        maxDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    endRound();
}

function writeLog(event, value, monsterHealth, playerHealth) {
    // let logEntry = {
    //     event: event,
    //     value: value,
    //     finalMonsterHealth: monsterHealth,
    //     finalPlayerHealth: playerHealth
    // };  
    let logEntry;
    switch (event) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry = {
                event: event,
                value: value,
                target: 'MONSTER',
                finalMonsterHealth: currentMonsterHealth,
                finalPlayerHealth: currentPlayerHealth
            };
            batteleLog.push(logEntry);
            console.log(batteleLog);
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: event,
                value: value,
                target: 'MONSTER',
                finalMonsterHealth: currentMonsterHealth,
                finalPlayerHealth: currentPlayerHealth
            };
            batteleLog.push(logEntry);
            console.log(batteleLog);
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: event,   
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: currentMonsterHealth,
                finalPlayerHealth: currentPlayerHealth
            };
            batteleLog.push(logEntry);
            console.log(batteleLog);
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: event,   
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: currentMonsterHealth,
                finalPlayerHealth: currentPlayerHealth
            };
            batteleLog.push(logEntry);
            console.log(batteleLog);
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: event,
                value: value,
                finalMonsterHealth: currentMonsterHealth,
                finalPlayerHealth: currentPlayerHealth
            };
            batteleLog.push(logEntry);
            console.log(batteleLog);
            break;
    
        default:
            break;
    }
    // if(event === LOG_EVENT_PLAYER_ATTACK){
    //     logEntry = {
    //         event: event,
    //         value: value,
    //         target: 'MONSTER',
    //         finalMonsterHealth: currentMonsterHealth,
    //         finalPlayerHealth: currentPlayerHealth
    //     };
    //     batteleLog.push(logEntry);
    //     console.log(batteleLog);
    // } else if(event === LOG_EVENT_PLAYER_STRONG_ATTACK){
    //     logEntry = {
    //         event: event,
    //         value: value,
    //         target: 'MONSTER',
    //         finalMonsterHealth: currentMonsterHealth,
    //         finalPlayerHealth: currentPlayerHealth
    //     };
    //     batteleLog.push(logEntry);
    //     console.log(batteleLog);
    // } else if(event === LOG_EVENT_MONSTER_ATTACK){
    //     logEntry = {
    //         event: event,
    //         value: value,
    //         target: 'PLAYER',
    //         finalMonsterHealth: currentMonsterHealth,
    //         finalPlayerHealth: currentPlayerHealth
    //     };
    //     batteleLog.push(logEntry);
    //     console.log(batteleLog);
    // } else if(event === LOG_EVENT_PLAYER_HEAL){
    //     logEntry = {
    //         event: event,
    //         value: value,
    //         target: 'PLAYER',
    //         finalMonsterHealth: currentMonsterHealth,
    //         finalPlayerHealth: currentPlayerHealth
    //     };
    //     batteleLog.push(logEntry);
    //     console.log(batteleLog);
    // } else if(event === LOG_EVENT_GAME_OVER){
    //     logEntry = {
    //         event: event,
    //         value: value,
    //         finalMonsterHealth: currentMonsterHealth,
    //         finalPlayerHealth: currentPlayerHealth
    //     };
    //     batteleLog.push(logEntry);
    //     console.log(batteleLog);
    // }
}

adjustHealthBars(chosenMaxLife);
function attackHandler(){
   attackMonster('ATTACK');
}
function strongAttachHandler(){
    // const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    // currentMonsterHealth -= damage;
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentPlayerHealth -= playerDamage;
    // if (currentMonsterHealth <= 0) {
    //     alert('You won!');
    // }
    // else if (currentPlayerHealth <= 0) {
    //     alert('You lost!');
    // }
    // else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    //     alert('You have a draw!');
    // }
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler(){
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function printLogHandler(){
    console.log(batteleLog);
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttachHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);