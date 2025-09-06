const   ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

function attackMonster(attackMode) {
    let maxDamage;
    if (attackMode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
     const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0) {
        alert('You won!');
    }
    else if (currentPlayerHealth <= 0) {
        alert('You lost!');
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have a draw!');
    }
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

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttachHandler);