//V16 DEV
//Bug fixes and achievements.
//Battery based reworks.
//Hints

console.log("Welcome to Terminus.JS");

hints();
function hints(force = 0) {
    const list = [
        "You can generate points by calling update().",
        "Power mult = power / 10",
        "help() can update its contents based on the things you have purchased.",
        "You can change your difficulty by calling difficultyset(number)",
        "You can get more hints by calling hints().",
    ];
    console.log(list[Math.round(Math.random() * list.length)]);
}

function github() {
    console.log("https://github.com/rando-idiot/Terminus.JS");
}

function credits() {
    console.log(
        "Developer: @rando.idiot on discord.",
        "\nMajor contributor: @.bleb1k on discord.",
        "\nCheck us out!",
    );
}

function discord() {
    console.log(
        "You can find me and other people who either hate this game or enjoy it here:",
    );
    console.log("Discord.gg/kYyEQ2hjPs");
}

const DEBUG_MODE = false;

//The object for determining how many points you make from any given update.
let game = {
    unlocks: {
        begin: false,
        index: false,
        doctype: false,
        configyml: false,
        push1: false,
        push2: false,
        infshop: false,
    },
    infstage: false,
    points: 0,
    steponeadd: 0,
    steptwomult: 1,
    stepthreemult: 1,
    stepfouradd: 1,
    basegain: 1,
    upgradebonus: 1,
    upgpriceboost: 0,
    upgstage: 0,
    updateloop: 1,
    power: 10,
    powerpoints: 1, //Hahah PP
    indebted: 1,
    difficulty: 1,
    maxbattery: 15,
    rechargerate: 1,
    antipower: 10,
};

function pointsset(set) {
    if (DEBUG_MODE) {
        game.points = set;
    } else {
        console.log("Nice try.");
    }
}

help();

function help() {
    if (game.unlocks.infshop == 1) {
        console.log(
            "infshop().............Shows infinitley purchasable items.",
        );
    }
    if (DEBUG_MODE) {
        console.log("pointsset(set)....Sets your points.");
    }
    console.log("help()................Shows this.");
    console.log("shop()................Shows the available purchasable items.");
    console.log(
        "update()..............Increases points. Equivalent of clicking in a clicker game.",
    );
    console.log("charge()..............Gain mult.");
    console.log("difficultyset(number).Change your difficulty.");
    console.log("github()..............Shows the github repo link.");
    console.log("credits().............Shows the credits.");
    console.log(
        "discord().............Gives a link to the terminus.js discord.",
    );
}
function difficultyset(number) {
    game.difficulty = number;
    console.log("Set difficulty to ", number);
    console.log(
        "Can be changed at any time, but you wouldn't do that, would you?",
    );
}

function charge() {
    if (game.power == game.maxbattery) {
        console.log("Full charge.");
    } else {
        game.power = game.power + game.rechargerate;
        console.log("Current battery: ", game.power);
    }
}

function update() {
    if (game.power > 0) {
        game.powerpoints = game.power / game.antipower;
        game.power = game.power - 1;
    } else {
        console.log("No power.");
    }

    if (game.points < 0) {
        game.indebted = 1;
    }
    game.points = game.points +
        (game.basegain +
                game.steponeadd * game.steptwomult *
                    game.stepthreemult +
                game.stepfouradd * game.powerpoints) /
            game.difficulty;
    checkAchievements();
    if (game.indebted == 1) {
        if (game.points < 0) {
            game.points = 0;
            game.indebted = 0;
        } else if (game.indebted == 1) {
            game.indebted = 0;
            console.log("You got out of debt!");
        }
    }
    console.log("you have ", game.points, " points");
}
function shop() {
    console.log("You have ", game.points, " points\n");
    if (!game.unlocks.begin) {
        console.log("The beginning......$5....begin();");
    }
    if (!game.unlocks.index) {
        console.log("index.html.........$20...index();");
    }
    if (!game.unlocks.doctype) {
        console.log("DOCTYPE............$50...doctype();");
    }
    if (!game.unlocks.configyml) {
        console.log("config.yml.........$100..configYML();");
    }
    if (!game.unlocks.push1) {
        console.log("git push 1.........$500..push1();");
    }
    if (!game.unlocks.push2) {
        console.log("git push 2.........$5000..push2();");
    }
    console.log("WIP................$0....N/A");
}

function begin() {
    if (game.unlocks.begin) return console.log("You already began.");
    if (game.indebted) return console.log("Cannot afford!");

    game.unlocks.begin = true;
    game.basegain = 10;
    game.points -= 5 * game.difficulty;
    console.log("Began!\n");

    console.log("You have ", game.points, " points"); // Shop just shown this, i think this is unnecessary
}

function index() {
    if (game.unlocks.index) {
        return console.log("You already created index.html");
    }
    if (game.indebted) return console.log("Cannot afford!");

    game.unlocks.index = 1;
    game.steptwomult += 0.5;
    game.points -= 20 * game.difficulty;
    console.log("Created index.html!\n");

    console.log("You have ", game.points, " points");
}

function doctype() {
    if (game.unlocks.doctype) {
        return console.log(
            "You- YOU ALREADY ADDED <!DOCTYPE HTML> YOU DONT NEED TO PUT IT EVERY TIME YOU ADD <BODY> STOP PLEASE",
        );
    }
    if (game.indebted) return console.log("Cannot afford!");

    game.unlocks.doctype = true;
    game.stepthreemult += 0.5;
    game.points -= 50 * game.difficulty;
    console.log("Added <!DOCTYPE HTML>!");
    console.log("You have", game.points, "points");
}

function configyml() {
    if (game.unlocks.configyml) {
        return console.log("You already created config.yml");
    }
    if (game.indebted) return console.log("Cannot afford!");

    game.unlocks.configyml = true;
    game.stepfourmult *= 2;
    game.points -= 100 * game.difficulty;
    console.log("Created config.yml!");
    console.log("You have", game.points, "points");
}

function push1() {
    if (game.upgstage !== 0) {
        return console.log("how?");
    }
    if (game.infstage !== 0) {
        return console.log("dude stop buying stuff you already bought lol");
    }
    if (game.indebted) {
        return console.log("you are brokies :3");
    }

    game.infstage = 1;
    game.upgstage = 1;
    game.points -= 500 * game.difficulty;
    console.log("You've unlocked the infshop. Check help() for details.");
    console.log("You have", game.points, "points");
}
function push2() {
    if (game.infstage !== 1) {
        return console.log("You haven't unlocked infinite upgrades yet");
    }
    if (game.indebted) {
        return console.log("Come back when you're a little bit richer");
    }
    if (game.upgstage !== 1) {
        return console.log("Buy the previous push first!");
    }

    game.upgstage = 2;
    game.points -= 5000 * game.difficulty;
    console.log("You have", game.points, "points");
}

function infshop() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }

    console.log("See code comments for upgrade descriptions");

    if (game.infstage === 1) {
        console.log("Step one Upgrade.......$5+....stepone();");
        console.log("Increases step 1 addition");
        console.log("Step two Upgrade.......$25+...steptwo();");
        console.log("Increases step 2 multiplier");
        console.log("Step three Upgrade.....$25+...stepthree();");
        console.log("Increases step 3 multiplier");
        console.log("Step four Upgrade......$2+....stepfour();");
        console.log("Increases step 4 addition");
    }

    if (game.infstage === 2) {
        console.log("Step one Upgrade 2....$20+.....stepone2();");
        console.log("Increases step 1 addition but better");
        console.log("Step two Upgrade 2....$100+....steptwo2();");
        console.log("Increases step 2 mult but better");
        console.log("Step three Upgrade 3..$100+....stepthree2();");
        console.log("Increases step 3 mult but better");
        console.log("Step four Upgrade 4...$8+......stepfour2();");
        console.log("Increases step 4 addition but better");
        console.log("Max battery Upgrade............maxpowerup();");
        console.log("Increases the maximum battery.");
    }

    console.log("Base increment Upgrade.$500+...baseup();");
    console.log("Increases the base that is then multiplied etc etc");
    console.log("Upgrade bonus..........$100+..upgbonus();");
    console.log(
        "Increases how much upgrades upgrade stuff OTHER THAN ITSELF.",
    );
    console.log("hello world!...........$0....helloworld();");
    console.log("Prints 'Hello world!' in console.");
}

function stepone() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }

    if (game.upgstage !== 1) {
        return console.log("Lol you leveled up too much krill issue.");
    }

    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 5 + game.upgpriceboost * game.difficulty;
    game.steponeadd += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepone();");
    console.log("You have", game.points, "points");
}

function steptwo() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }

    if (game.upgstage !== 1) {
        return console.log("Lol you leveled up too much krill issue.");
    }

    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 25 + game.upgpriceboost * game.difficulty;
    game.steptwomult += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased steptwo();");
    console.log("You have", game.points, "points");
}

function stepthree() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }

    if (game.upgstage !== 1) {
        return console.log("Lol you leveled up too much krill issue.");
    }

    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 25 + game.upgpriceboost * game.difficulty;
    game.stepthreemult += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepthree();");
    console.log("You have", game.points, "points");
}

function stepfour() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }

    if (game.upgstage !== 1) {
        return console.log("Lol you leveled up too much krill issue.");
    }

    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 2 + game.upgpriceboost * game.difficulty;
    game.stepfouradd += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepfour();");
    console.log("You have", game.points, "points");
}
function baseup() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }

    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 500 + game.upgpriceboost * game.difficulty;
    game.basegain += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased baseup();");
    console.log("You have", game.points, "points");
}

function upgbonus() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }
    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 100 + game.upgpriceboost * game.difficulty;
    game.upgradebonus += 0.1;
    game.upgpriceboost += 1;

    console.log("purchased upgradebonus();");
    console.log("You have", game.points, "points");
}

function helloworld() {
    console.log("Hello world!");
}

function stepone2() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }
    if (game.upgstage < 2) {
        return console.log("You are too low level.");
    }
    if (game.upgstage > 2) {
        return console.log("Lol you leveled up too much krill issue.");
    }
    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 20 + game.upgpriceboost * game.difficulty;
    game.steponeadd += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepone();");
    console.log("You have", game.points, "points");
}

function steptwo2() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }
    if (game.upgstage < 2) {
        return console.log("You are too low level.");
    }
    if (game.upgstage > 2) {
        return console.log("Lol you leveled up too much krill issue.");
    }
    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 100 + game.upgpriceboost * game.difficulty;
    game.steptwomult += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased steptwo();");
    console.log("You have", game.points, "points");
}

function stepthree2() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }
    if (game.upgstage < 2) {
        return console.log("You are too low level.");
    }
    if (game.upgstage > 2) {
        return console.log("Lol you leveled up too much krill issue.");
    }
    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 100 + game.upgpriceboost * game.difficulty;
    game.stepthreemult += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepthree();");
    console.log("You have", game.points, "points");
}

function stepfour2() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }
    if (game.upgstage < 2) {
        return console.log("You are too low level.");
    }
    if (game.upgstage > 2) {
        return console.log("Lol you leveled up too much krill issue.");
    }
    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 8 + game.upgpriceboost * game.difficulty;
    game.stepfouradd += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepfour();");
    console.log("You have", game.points, "points");
}

function maxpowerup() {
    if (!game.unlocks.infshop) {
        return console.log("You have not unlocked infinite upgrades.");
    }
    if (game.upgstage < 2) {
        return console.log("You have not leveled up enough");
    }
    if (game.indebted) {
        return console.log("You don't have enough money");
    }

    game.points -= 800 + game.upgpriceboost * game.difficulty;
    game.stepfouradd += game.upgradebonus;
    game.maxbattery += 1;

    console.log("purchased maxpowerup();");
    console.log("You have", game.points, "points");
}

// STUPID FUCKING IDEA
const achievements = [
    {
        id: 1,
        name: "Well, it's a start.",
        description: "Earn your first point.",
        criteria: () => game.points >= 1,
        achieved: false,
    },
    {
        id: 2,
        name: "Broke ass",
        description: "Collect 100 points.",
        criteria: () => game.points >= 100,
        achieved: false,
    },
    {
        id: 3,
        name: "Full battery",
        description: "Reach full power.",
        criteria: () => game.power === 15,
        achieved: false,
    },
    {
        id: 4,
        name: "Overcharged",
        description: "Get a power value over the default maximum.",
        criteria: () => game.power > 15,
        achieved: false,
    },
];

function checkAchievements() {
    achievements.forEach((achievement) => {
        if (!achievement.achieved && achievement.criteria()) {
            achievement.achieved = true;
            console.log(
                `You got: ${achievement.name} - ${achievement.description}`,
            );
        }
    });
}
