var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose."
  );
  // if player chooses fight, then FIGHT
  if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // Check ENEMY health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // ENEMY Attacks
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // Check PLAYER health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died! You're bad at this.");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //if player chooses SKIP
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm SKIP
    var confirmSkip = window.confirm(
      "Are you sure you'd like to quit? It'll cost ya."
    );

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ", the coward, has chosen to skip the fight.");
      // subtract player money
      playerMoney = playerMoney - 2;
    }

    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

fight();
