//Game state
// BUG: Fight/Skip Prompt

var fightOrSkip = function () {
  //ask player if they want to fight or skip using fightOrSkip function
  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  //Conditional recursive function
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLocaleLowerCase();

  if (promptFight === "skip") {
    var confirmSkip = window.confirm(
      "Are you sure you'd like to quit? It will cost $10."
    );

    if (confirmSkip) {
      window.alert(
        playerInfo.name + " has decided to skip this fight. Goodbye!"
      );
      playerInfo.playerMoney = playerInfo.money - 10;
      // if player wants to leave, return true
      return true;
    }
  }
  //if player wants to stay, return false
  return false;
};

// fight function
var fight = function (enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;

  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(
          enemy.name + " still has " + enemy.health + " health left."
        );
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove player's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(
          playerInfo.name + " still has " + playerInfo.health + " health left."
        );
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

// function to start a new game
var startGame = function () {
  //reset player stats (from player object)
  playerInfo.reset();

  // run fight function to start game
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // Round Alert
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);
      // if player has health and is not at the last robot in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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

  if (playerInfo.health > 0) {
    window.alert(
      "You survied... this time. Your final score is " + playerInfo.money + "."
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

// shop function
var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );

  // use switch case to carry out actions
  shopOptionPrompt = parseInt(shopOptionPrompt);
  switch (shopOptionPrompt) {
    case 1:
      //from player obj
      playerInfo.refillHealth();
      break;

    case 2:
      //from player obj
      playerInfo.upgradeAttack();
      break;

    case 3:
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("you didn't choose a valid option. Try again.");
      shop();
      break;
  }
};

//
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// function to set name
var getPlayerName = function () {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("what is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

// Player Object
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("you broke bitch. Come back when you have the money.");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("you broke bitch. Come back when you have the money.");
    }
  },
};

//Enemy Array
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

startGame();
