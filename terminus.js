//V16 DEV
//Bug fixes and achievements.
//Battery based reworks.
//Hints





console.log("Welcome to Terminus.JS");

hints();
function hints() {
    let x = Math.random() * 10
    x = Math.round(x);
    console.log("Fun fact:")
    if (x == 1) {
        console.log("Power mult = power / 10");
    } 
    if (x == 2) {
        console.log("help() can update its contents based on the things you have purchased.");
    }
    if (x == 3) {
        console.log("PLACEHOLDER");
    }
    if (x == 4) {
        console.log("PLACEHOLDER");
    }
    if (x == 5) {
        console.log("PLACEHOLDER");
    }
    if (x == 6) {
        console.log("PLACEHOLDER");
    }
    if (x == 7) {
        console.log("PLACEHOLDER");
    }
    if (x == 8) {
        console.log("PLACEHOLDER");
    }
    if (x == 9) {
        console.log("PLACEHOLDER");
    }
    if (x == 10) {
        console.log("PLACEHOLDER");
    }
    if (x == 0) {
        console.log("no.");
    }
}

function github() {
    console.log("https://github.com/rando-idiot/Terminus.JS");
}

function credits() {
    console.log("Developer: @rando.idiot on discord.");
    console.log("Major contributor: @.bleb1k on discord.");
    console.log("Check us out!");
}

function discord() {
    console.log("You can find me and other people who either hate this game or enjoy it here:");
    console.log("Discord.gg/kYyEQ2hjPs");
}


//The letiables for determining how many points you make from any given update.
let basegain = 1;
let steponeadd = 0;
let steptwomult = 1;
let stepthreemult = 1;
let stepfouradd = 1;
let points = 0;
let upgradebonus = 1
let upgpriceboost = 0;
let upgstage = 0;
let infunlock = 0;
let updateloop = 1;
let power = 10;
let powerpoints = 1; //Hahah PP
let debtflag = 1;
let difficulty = 1;
let maxbattery = 15;
let rechargerate = 1;
let antipower = 10;
const DEBUG_MODE = false;

function pointsset(set) {
    if (DEBUG_MODE) {
    points = set;
    }
    else {
        console.log("Nice try.");
    }
}

help();

function help() {
console.log("help()................Shows this.");
console.log("shop()................Shows the available purchasable items.");
console.log("update()..............Increases points. Equivalent of clicking in a clicker game.");
console.log("charge()..............Gain mult.")
console.log("difficultyset(number).Change your difficulty.");
console.log("github()..............Shows the github repo link.");
console.log("credits().............Shows the credits.");
console.log("discord().............Gives a link to the terminus.js discord.");
if (infunlock == 1) {
console.log("infshop().............Shows infinitley purchasable items.");
}
if (DEBUG_MODE) {
    console.log("pointsset(set)....Sets your points.");
}

}
function difficultyset(number) {
    difficulty = number;
    console.log("Set difficulty to ", number);
    console.log("Can be changed at any time, but you wouldn't do that, would you?")
}

function charge() {
if (power == maxbattery) {
    console.log("Full charge.");
}
else {
    power = power + rechargerate;
    console.log("Current battery: ", power);
}
}


function update() {
    if (power > 0) {
        powerpoints = power / antipower;
        power = power - 1;
    }
    else {
        console.log("No power.")
    }
    
    if (points < 0) {
        debtflag = 1;
    }
    points = points + (basegain + steponeadd * steptwomult * stepthreemult + stepfouradd * powerpoints) / difficulty;
    checkAchievements();
    if (debtflag == 1) {
        if (points < 0) {
            points = 0;
            debtflag = 0;
        }
        else if (debtflag == 1) {
            debtflag = 0
            console.log("You got out of debt!");
        }
    }
    console.log("you have ", points, " points");
    
}
function shop() {
    console.log("You have ", points, " points");
    if (beginbought == 0) {
    console.log("The beginning......$5....begin();");
    }
    if (indexbought == 0) {
    console.log("index.html.........$20...index();");
    }
    if (doctypebought == 0) {
    console.log("DOCTYPE............$50...doctype();");
    }
    if (configymlbought == 0) {
    console.log("config.yml.........$100..configYML();");
    }
    if (infunlock == 0) {
    console.log("git push 1.........$500..push1();");
    }
    if (infunlock == 1) {
    console.log("git push 2.........$5000..push2();");
    }
    console.log("WIP................$0....N/A");
    }

    let beginbought = 0;
    function begin() {
        if (beginbought == 0) {
            if (points >= 0) {
                beginbought = 1;
                basegain = 10;
                points = points - 5 * difficulty;
                console.log("Began!");
            }
            else {
                console.log("Cannot afford!");
            }
        }
        else {
            console.log("You already began.");
        }
        console.log("You have ", points, " points");
    }
    

    let indexbought = 0;
    function index() {
        if (indexbought == 0) {
            if (points >= 0) {
                indexbought = 1;
                steptwomult = steptwomult + 0.5;
                points = points - 20 * difficulty;
            }
            else {
                console.log("Cannot afford!");
            }
            }
            else {
            console.log("You already created index.html")
            }
            console.log("You have ", points, " points");
        }

    

    let doctypebought = 0;
    function doctype() {
        if (doctypebought == 0) {
            if (points >= 0) {
                doctypebought = 1;
                stepthreemult = stepthreemult + 0.5;
                points = points - 50 * difficulty;
            }
            else {
                console.log("Cannot affordies!");
            }
            
        }
        else {
                console.log("You- YOU ALREADY ADDED <!DOCTYPE HTML> YOU DONT NEED TO PUT IT EVERY TIME YOU ADD <BODY> STOP PLEASE");
            }
            console.log("You have ", points, " points");
    }

    let configymlbought = 0;
    function configyml() {
        if (configyml == 0) {
            if (points >= 0) {
                configymlbought = 1;
                stepfourmult = stepfourmult * 2;
                points = points - 100 * difficulty;
            }
            else {
                console.log("no pointies");
                }
        }
        else {
            console.log("You already bought this.");
        }
        console.log("You have ", points, " points");

    }

    function push1() {
        if (upgstage == 0) {
        if (infunlock == 0) {
            if (points >= 0) {
                infunlock = 1;
                upgstage = 1;
                points = points - 500 * difficulty;
                console.log("You've unlocked the infshop. Check help() for details.");
            }
            else {
                console.log("you are brokies :3")
            }
        }
        else {
            console.log("dude stop buying stuff you already bought lol");
        }
        
    }
    else {
        console.log("how?")
    }
    console.log("You have ", points, " points");
    }

    function push2() {
        if (infunlock == 1) {
            if (points >= 0) {
                if (upgstage == 1)  {
                    upgstage = 2;
                    points = points - 5000 * difficulty;
                }
                else {
                    console.log("buy the previous push first!");
                    }
                    }
            else {
                console.log("come back when you're a little bit richer");
            }
        }
        else {
        console.log("you havent unlocked infinite upgrades yet");
        }
        console.log("You have ", points, " points");
    }




function infshop() {
    
    if (infunlock == 1) {
    console.log("See code comments for upgrade descriptions")
    if (upgstage == 1) {
    console.log("Step one Upgrade.......$5+....stepone();"); console.log("Increases step 1 addition");
    console.log("Step two Upgrade.......$25+...steptwo();"); console.log("Increases step 2 multiplier");
    console.log("Step three Upgrade.....$25+...stepthree();"); console.log("Increases step 3 multiplier");
    console.log("Step four Upgrade......$2+....stepfour();"); console.log("Increases step 4 addition");
    }
    if (upgstage == 2) {
        console.log("Step one Upgrade 2....$20+.....stepone2();"); console.log("Increases step 1 addition but better")
        console.log("Step two Upgrade 2....$100+....steptwo2();"); console.log("Increases step 2 mult but better")
        console.log("Step three Upgrade 3..$100+....stepthree2();"); console.log("Increases step 3 mult but better")
        console.log("Step four Upgrade 4...$8+......stepfour2();"); console.log("Increases step 4 addition but better")
        console.log("Max battery Upgrade............maxpowerup();"); console.log("Increases the maximum battery.")

    }
    console.log("Base increment Upgrade.$500+...baseup();"); console.log("Increases the base that is then multiplied etc etc");
    console.log("Upgrade bonus..........$100+..upgbonus();"); console.log("Increases how much upgrades upgrade stuff OTHER THAN ITSELF.");
    console.log("hello world!...........$0....helloworld();"); console.log("Prints 'Hello world!' in console.");
    }
    else {
        console.log("You have not unlocked infinite upgrades.");
    }
    
}

function stepone() {
    if (infunlock == 1) {
    if (upgstage == 1)  {
    if (points >= 0) {
        points = points - 5 - upgpriceboost * difficulty;
    steponeadd = steponeadd + upgradebonus;
    console.log("purchased stepone();")
    upgpriceboost = upgpriceboost + 1;
    }
    else {
      console.log("You don't have enough money");
    }
    }
    else {
        console.log("Lol you leveled up too much krill issue.")

    }
}
else {
    console.log("You have not unlocked infinite upgrades.");
}
console.log("You have ", points, " points");
}


function steptwo() {
    if (infunlock == 1) {
    if (upgstage == 1) {
    if (points >= 0) {
        points = points - 25 - upgpriceboost * difficulty;
        steptwomult = steptwomult + upgradebonus;
        console.log("purchased steptwo();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("You don't have enough money");

    }
    }
    else {
        console.log("Lol you leveled up too much krill issue.")

    }
}
 else {
     console.log("You have not unlocked infinite upgrades.");
     }
     console.log("You have ", points, " points");
}

function stepthree() {
    if (infunlock == 1) {
    if (upgstage == 1) {
    if (points >= 0) {
        points = points - 25 - upgpriceboost * difficulty;
        stepthreemult = stepthreemult + upgradebonus;
        console.log("purchased stepthree();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("You don't have enough money");
    }
    }
    else {
        console.log("Lol you leveled up too much krill issue.")
    }
}
else {
     console.log("You have not unlocked infinite upgrades.");
}
console.log("You have ", points, " points");
}

function stepfour() {
    if (infunlock == 1) {
    if (upgstage == 1) {
    if (points >= 0) {
        points = points - 2 - upgpriceboost * difficulty;
        stepfouraddition = stepfouraddition + upgradebonus;
        console.log("purchased stepfour();");
        upgpriceboost = upgpriceboost + 1;
    }
    
    else {
        console.log("You don't have enough money");
    }
    }
    else {
         console.log("Lol you leveled up too much krill issue.")

    }
    }
    else {
         console.log("You have not unlocked infinite upgrades.");
    }
}

function baseup() {
    if (infunlock == 1) {
    if (points >= 0) {
        points = points - 500 - upgpriceboost * difficulty;
        basegain = basegain + upgradebonus;
        console.log("purchased baseup();");
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("You don't have enough money");

    }
}
else {
 console.log("You have not unlocked infinite upgrades.");
 }
 console.log("You have ", points, " points");
}

function upgbonus() {
    if (infunlock == 1) {
    if (points >= 0) {
        points = points - 100 - upgpriceboost * difficulty;
        upgradebonus = upgradebonus + 0.1;
        console.log("purchased upgradebonus();");
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("You don't have enough money");
    }

}
else {
     console.log("You have not unlocked infinite upgrades.");
}
console.log("You have ", points, " points");
}

function helloworld() {
    console.log("Hello world!");
}


function stepone2() {
    if (infunlock == 1) {
    if (upgstage == 2)  {
    if (points >= 0) {
        points = points - 20 - upgpriceboost * difficulty;
    steponeadd = steponeadd + upgradebonuslet;
    console.log("purchased stepone();")
    upgpriceboost = upgpriceboost + 1;
    }
    else {
      console.log("You don't have enough money");
    }
    }
    else if (upgstage < 2) {
        console.log("You are too low level.")
    }
    else {
        console.log("Lol you leveled up too much krill issue.")

    }
    }
    else {
      console.log("You have not unlocked infinite upgrades.");
    }
    console.log("You have ", points, " points");
    }




function steptwo2() {
    if (infunlock == 1) {
    if (upgstage == 2) {
    if (points >= 0) {
        points = points - 100 - upgpriceboost * difficulty;
        steptwomult = steptwomult + upgradebonuslet;
        console.log("purchased steptwo();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("You don't have enough money");

    }
    }
    else if (upgstage < 2) {
        console.log("You are too low level.")
    }
    else {
        console.log("Lol you leveled up too much krill issue.")

    }
    }
    else {
        console.log("You have not unlocked infinite upgrades.");
    }
    console.log("You have ", points, " points");
}

function stepthree2() {
    if (infunlock == 1) {
    if (upgstage == 2) {
    if (points >= 0) {
        points = points - 100 - upgpriceboost * difficulty;
        stepthreemult = stepthreemult + upgradebonuslet;
        console.log("purchased stepthree();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("You don't have enough money");
    }
    }
    else if (upgstage < 2) {
        console.log("You are too low level.")
    }
    else {
        console.log("Lol you leveled up too much krill issue.")
    }
    }
    else {
        console.log("You have not unlocked infinite upgrades.");
    }
    console.log("You have ", points, " points");
}

function stepfour2() {
    if (infunlock == 1) {
    if (upgstage == 2) {
    if (points >= 0) {
        points = points - 8 - upgpriceboost * difficulty;
        stepfouraddition = stepfouraddition + upgradebonuslet;
        console.log("purchased stepfour();");
        upgpriceboost = upgpriceboost + 1;
    }
    
    else {
        console.log("You don't have enough money");
    }
    }
    else if (upgstage < 2) {
        console.log("You are too low level.")
    }
    else {
         console.log("Lol you leveled up too much krill issue.")

    }
    }
    else {
        console.log("You have not unlocked infinite upgrades.");
    }
    console.log("You have ", points, " points");
}

function maxpowerup() {
    if (infunlock == 1) {
    if (upgstage >= 2) {
    if (points >= 0) {
        points = points - 800 - upgpriceboost * difficulty;
        stepfouraddition = stepfouraddition + upgradebonuslet;
        console.log("purchased maxpowerup();");
        maxbattery = maxbattery + 1; 
    }
    
    else {
        console.log("You don't have enough money");
    }
    }
    else {
         console.log("You have not leveled up enough");

    }
    }
    else {
        console.log("You have not unlocked infinite upgrades.");
    }
    console.log("You have ", points, " points");
}




// STUPID FUCKING IDEA
const achievements = [
    {
        id: 1,
        name: "Well, it's a start.",
        description: "Earn your first point.",
        criteria: () => points >= 1,
        achieved: false,
    },
    {
        id: 2,
        name: "Broke ass",
        description: "Collect 100 points.",
        criteria: () => points >= 100,
        achieved: false,
    },
    {
        id: 3,
        name: "Full battery",
        description: "Reach full power.",
        criteria: () => power === 15,
        achieved: false,
    },
    {
        id: 4,
        name: "Overcharged",
        description: "Get a power value over the default maximum.",
        criteria: () => power > 15,
        achieved: false,
    },

];


function checkAchievements() {
    achievements.forEach((achievement) => {
        if (!achievement.achieved && achievement.criteria()) {
            achievement.achieved = true; 
            console.log(`You got: ${achievement.name} - ${achievement.description}`);
        }
    });
}
