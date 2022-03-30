<<<<<<< HEAD
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
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

  // check enemy health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
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

  if (playerHealth <= 0) {
    window.alert(playerName + " has died! You're bad at this.");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

fight();
=======
// Add Play again feature
// wrap game logic in a startGame() function
// when player is defeated or there are no enenmies, call endGame() function that:
// 1. alerts the player's total stats
// 2. asks player to play again
// 3. if yes call startGame() to restart game

//Add Shop Feature after defeating enemy
// After player defeats or skips (and there are enemies remaining) ask players if they want to "shop."
// if NO continue as normal
// if YES, call shop() function
// In the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop.
// REFILL, subtract money points from player and increase health
// UPGRADE, subtract money points from player and increase attack power
// LEAVE, alert goodbye and exit function
// If any other invalid option, call shop() again

// var playerName
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
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

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
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

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of WHILE loop
}; // end of FIGHT function

// function to start a new game
var startGame = function () {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // run fight function to start game
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // Round Alert
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    } else {
      window.alert("Your robot has kicked it. GAMER OVER NERD");
      break;
    }
  }
  endGame();
};

var endGame = function () {
  if (playerHealth > 0) {
    window.alert(
      "You survied... this time. Your final score is" + playerMoney + "."
    );
  } else {
    window.alert(
      "Your tactics and guile have been measured and found wanting. You Lose."
    );
  }
  var playAgainConfirm = window.confirm("Would you like to try again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing! Come back soon!");
  }
};

startGame();
>>>>>>> develop
