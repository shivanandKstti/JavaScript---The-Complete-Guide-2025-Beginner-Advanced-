const   ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const enteredValue = prompt('Maximum life for you and the monster.', '100');
let chosenMaxLife = parseInt(enteredValue);
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

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        reset();
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        reset();
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have a draw!');
        reset();
    }
}

function attackMonster(attackMode) {
    let maxDamage;
    if (attackMode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    endRound();
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
    endRound();
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttachHandler);
healBtn.addEventListener('click', healPlayerHandler);