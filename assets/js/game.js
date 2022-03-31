//Add RANDOMNESS TO HEALTH AND DAMAGE VALUES

// var playerName
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
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
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
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
      enemyHealth = randomNumber(40, 60);

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
      // if player has health and is not at the last robot in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm(
          "the fight is over, visit the store before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("Your robot has kicked it. GAMER OVER NERD");
      break;
    }
  }
  endGame();
};

var endGame = function () {
  window.alert("the game has ended. lets see how you did!");

  if (playerHealth > 0) {
    window.alert(
      "You survied... this time. Your final score is " + playerMoney + "."
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

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch case to carry out actions
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert(
          "refilling" + playerName + "'s health by 20 for 7 dollars."
        );

        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You broke bitch. Come back when you have more money.");
      }
      break;
    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7) {
        window.alert(
          "Upgrading " + playerName + "'s Attack by 6 for 7 dollars"
        );

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You broke bitch. Come back when you have more money.");
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("you didn't choose a valid option. Try again.");
      shop();
      break;
  }
};

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

startGame();
