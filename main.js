import inquirer from "inquirer";
// ENEMY VARIABLE:
let enemies = ["Skeleton", "Zombie", "Warrior", "Assasin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
// PLAYER VARIABLE: 
let heroHealth = 100;
let attckDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
// WHILE LOOP CONDITION:
let gameRunning = true;
console.log("Welcome to Deadzone");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared # \n`);
    while (enemyHealth > 0) {
        console.log(`Your Health is: ${heroHealth}`);
        console.log(`${enemy} Health is: ${enemyHealth}`);
        let options = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "What you want to do?",
                choices: ["1. Attack", "2. Take Health Potion", "3. Run"],
            },
        ]);
        if (options.ans === "1. Attack") {
            let attckDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attckDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero}`);
            if (heroHealth < 1) {
                console.log("You have taken to much damage. You are too week to continue.");
                break;
            }
        }
        else if (options.ans === "2. Take Health Potion") {
            if (numHealthPotion > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotion--;
                console.log(`You use health potion for ${healthPotionHealAmount}`);
                console.log(`You now have ${heroHealth} health`);
                console.log(`You have ${numHealthPotion} health potions left.`);
            }
            else {
                console.log(`You have no health potion left. For a chance to get health potion defeat an enemy.`);
            }
        }
        else if (options.ans === "3. Run") {
            console.log(`You run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(`You are out from battle. You are too weak`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`You have ${heroHealth} health`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log(`Enemy give you health potion.`);
        console.log(`Your health is ${heroHealth}`);
        console.log(`Your health potion is ${numHealthPotion}`);
    }
    let userOption = await inquirer.prompt([
        {
            name: "ans",
            type: "list",
            message: "what would you like to do now",
            choices: ["1. Continue", "2. Exit"],
        },
    ]);
    if (userOption.ans === "1. Continue") {
        console.log(`You are continue on your adventure`);
    }
    else {
        console.log(`You successfully exit from DeadZone`);
        break;
    }
    console.log("Thank You for playing.\n");
}
