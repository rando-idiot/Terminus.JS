//V16 DEV
//Bug fixes and achievements.
//Battery based reworks.
//Hints

console.log("Welcome to Terminus.JS");

console.log(hints());
function hints(force = 0) {
    const list = [
        "You can generate points by calling update().",
        "Power mult = power / 10",
        "help() can update its contents based on the things you have purchased.",
        "You can change your difficulty by calling difficultyset(number)",
        "You can get more hints by calling hints().",
    ];
    return list[Math.floor(Math.random() * list.length)];
}

function github() {
    return "https://github.com/rando-idiot/Terminus.JS";
}

function credits() {
    return [
        "Developer: @rando.idiot on discord.",
        "Major contributor: @.bleb1k on discord.",
        "Check us out!",
    ].join("\n");
}

function discord() {
    return [
        "You can find me and other people who either hate this game or enjoy it here:",
        "Discord.gg/kYyEQ2hjPs",
    ].join("\n");
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
    infstage: 0,
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
        return game.points = set;
    }
    return "Nice try.";
}

function help() {
    const list = [
        "help()................Shows this.",
        "shop()................Shows the available purchasable items.",
        "update()..............Increases points. Equivalent of clicking in a clicker game.",
        "charge()..............Gain power.",
        "difficultyset(number).Change your difficulty.",
        "github()..............Shows the github repo link.",
        "credits().............Shows the credits.",
        "discord().............Gives a link to the terminus.js discord.",
        "hints()...............Shows a hint.",
        "checkAchievements()...Shows your current achievements.",
    ];
    if (game.unlocks.infshop) {
        list.push("infshop().............Shows infinitley purchasable items.");
    }
    if (DEBUG_MODE) list.push("pointsset(set)....Sets your points.");
    return list.join("\n");
}
console.log(help());

function difficultyset(number) {
    game.difficulty = number;
    return `Set difficulty to ${number}\n` +
        "Can be changed at any time, but you wouldn't do that, would you?"; // why is this line there?
}

function charge() {
    if (game.power == game.maxbattery) return "Full charge.";

    game.power = game.power + game.rechargerate;
    return "Current battery: " + game.power;
}

function update() {
    if (game.power <= 0) return "No power.";
    game.powerpoints = game.power / game.antipower;
    game.power = game.power - 1;

    if (game.points < 0) game.indebted = true; // why is this here? should be it's own function
    game.points = game.points +
        (game.basegain +
                game.steponeadd * game.steptwomult *
                    game.stepthreemult +
                game.stepfouradd * game.powerpoints) /
            game.difficulty;
    if (game.indebted && game.points >= 0) {
        game.indebted = 0;
        console.log("You got out of debt!");
    }

    checkAchievements();

    return `You have ${game.points} points`;
}

function shop() {
    const list = [
        `You have ${game.points} points`,
        `begin(): $${game.unlocks.begin ? 0 : 5}.........The beginning`,
        `index(): $${game.unlocks.index ? 0 : 20}........index.html`,
        `doctype(): $${game.unlocks.doctype ? 0 : 50}......<!DOCTYPE HTML>`,
        `configyml(): $${game.unlocks.configyml ? 0 : 100}...config.yml`,
        `push1(): $${game.unlocks.push1 ? 0 : 500}........git push 1`,
        `push2(): $${game.unlocks.push2 ? 0 : 5000}.......git push 2`,
    ];

    return list.join("\n");
}

function begin() {
    if (game.unlocks.begin) return "You already began.";
    if (game.indebted) return "Cannot afford!";

    game.unlocks.begin = true;
    game.basegain = 10;
    game.points -= 5 * game.difficulty;
    console.log("Began!\n");

    return `You have ${game.points} points`; // Shop just shown this, i think this is unnecessary
}

function index() {
    if (game.unlocks.index) return "You already created index.html";
    if (game.indebted) return "Cannot afford!";

    game.unlocks.index = 1;
    game.steptwomult += 0.5;
    game.points -= 20 * game.difficulty;
    console.log("Created index.html!\n");

    return `You have ${game.points} points`;
}

function doctype() {
    if (game.unlocks.doctype) {
        return "You- YOU ALREADY ADDED <!DOCTYPE HTML> YOU DONT NEED TO PUT IT EVERY TIME YOU ADD <BODY> STOP PLEASE";
    }
    if (game.indebted) return "Cannot afford!";

    game.unlocks.doctype = true;
    game.stepthreemult += 0.5;
    game.points -= 50 * game.difficulty;
    console.log("Added <!DOCTYPE HTML>!");

    return `You have ${game.points} points`;
}

function configyml() {
    if (game.unlocks.configyml) return "You already created config.yml";
    if (game.indebted) return "Cannot afford!";

    game.unlocks.configyml = true;
    game.stepfourmult *= 2;
    game.points -= 100 * game.difficulty;
    console.log("Created config.yml!");

    return `You have ${game.points} points`;
}

function push1() {
    if (game.upgstage !== 0) return "how?";
    if (game.infstage !== 0) {
        return "dude stop buying stuff you already bought lol";
    }
    if (game.indebted) return "you are brokies :3";

    game.unlocks.infshop = true;
    game.infstage = 1;
    game.upgstage = 1;
    game.points -= 500 * game.difficulty;
    console.log("You've unlocked the infshop. Check help() for details.");

    return `You have ${game.points} points`;
}

function push2() {
    if (game.infstage !== 1) {
        return "You haven't unlocked infinite upgrades yet";
    }
    if (game.indebted) return "Come back when you're a little bit richer";
    if (game.upgstage !== 1) return "Buy the previous push first!";

    game.upgstage = 2;
    game.points -= 5000 * game.difficulty;
    return `You have ${game.points} points`;
}

function infshop() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }

    let list = game.infstage === 1
        ? [ // todo: Export cost calculations
            `stepone(): $${
                5 + game.upgpriceboost * game.difficulty
            }............Increases step 1 addition`,
            `steptwo(): $${
                25 + game.upgpriceboost * game.difficulty
            }...........Increases step 2 multiplier`,
            `stepthree(): $${
                25 + game.upgpriceboost * game.difficulty
            }.........Increases step 3 multiplier`,
            `stepfour(): $${
                2 + game.upgpriceboost * game.difficulty
            }...........Increases step 4 addition`,
        ]
        : [
            `stepone2(): $${
                20 + game.upgpriceboost * game.difficulty
            }..........Increases step 1 addition`,
            `steptwo2(): $${
                100 + game.upgpriceboost * game.difficulty
            }.........Increases step 2 multiplier`,
            `stepthree2(): $${
                100 + game.upgpriceboost * game.difficulty
            }.......Increases step 3 multiplier`,
            `stepfour2(): $${
                8 + game.upgpriceboost * game.difficulty
            }..........Increases step 4 addition`,
            `maxpowerup(): $${
                800 + game.upgpriceboost * game.difficulty
            }.......Increases the maximum battery.`,
        ];
    list = [
        `Stage ${game.infstage} upgrades`,
        ...list,
        `baseup(): $${
            500 + game.upgpriceboost * game.difficulty
        }...........Increases the base that is then multiplied etc etc`,
        `upgbonus(): $${
            100 + game.upgpriceboost * game.difficulty
        }..........Increases how much upgrades upgrade stuff OTHER THAN ITSELF.`,
        `helloworld(): $0...........Prints 'Hello world!' in console.`,
    ];
    console.log("See code comments for upgrade descriptions"); // should this be here?

    return list.join("\n");
}

function stepone() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage !== 1) return "Lol you leveled up too much krill issue.";
    if (game.indebted) return "You don't have enough money";

    game.points -= 5 + game.upgpriceboost * game.difficulty;
    game.steponeadd += game.upgradebonus;
    game.upgpriceboost += 1;
    console.log("purchased stepone();");

    return `You have ${game.points} points`;
}

function steptwo() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage !== 1) return "Lol you leveled up too much krill issue.";
    if (game.indebted) return "You don't have enough money";

    game.points -= 25 + game.upgpriceboost * game.difficulty;
    game.steptwomult += game.upgradebonus;
    game.upgpriceboost += 1;
    console.log("purchased steptwo();");

    return `You have ${game.points} points`;
}

function stepthree() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage !== 1) return "Lol you leveled up too much krill issue.";
    if (game.indebted) return "You don't have enough money";

    game.points -= 25 + game.upgpriceboost * game.difficulty;
    game.stepthreemult += game.upgradebonus;
    game.upgpriceboost += 1;
    console.log("purchased stepthree();");

    return `You have ${game.points} points`;
}

function stepfour() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage !== 1) {
        return "Lol you leveled up too much krill issue.";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 2 + game.upgpriceboost * game.difficulty;
    game.stepfouradd += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepfour();");
    return `You have ${game.points} points`;
}

function baseup() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 500 + game.upgpriceboost * game.difficulty;
    game.basegain += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased baseup();");
    return `You have ${game.points} points`;
}

function upgbonus() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 100 + game.upgpriceboost * game.difficulty;
    game.upgradebonus += 0.1;
    game.upgpriceboost += 1;

    console.log("purchased upgradebonus();");
    return `You have ${game.points} points`;
}

function helloworld() {
    console.log("Hello world!");
}

function stepone2() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage < 2) {
        return "You are too low level.";
    }
    if (game.upgstage > 2) {
        return "Lol you leveled up too much krill issue.";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 20 + game.upgpriceboost * game.difficulty;
    game.steponeadd += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepone();");
    return `You have ${game.points} points`;
}

function steptwo2() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage < 2) {
        return "You are too low level.";
    }
    if (game.upgstage > 2) {
        return "Lol you leveled up too much krill issue.";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 100 + game.upgpriceboost * game.difficulty;
    game.steptwomult += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased steptwo();");
    return `You have ${game.points} points`;
}

function stepthree2() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage < 2) {
        return "You are too low level.";
    }
    if (game.upgstage > 2) {
        return "Lol you leveled up too much krill issue.";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 100 + game.upgpriceboost * game.difficulty;
    game.stepthreemult += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepthree();");
    return `You have ${game.points} points`;
}

function stepfour2() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage < 2) {
        return "You are too low level.";
    }
    if (game.upgstage > 2) {
        return "Lol you leveled up too much krill issue.";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 8 + game.upgpriceboost * game.difficulty;
    game.stepfouradd += game.upgradebonus;
    game.upgpriceboost += 1;

    console.log("purchased stepfour();");
    return `You have ${game.points} points`;
}

function maxpowerup() {
    if (!game.unlocks.infshop) {
        return "You have not unlocked infinite upgrades.";
    }
    if (game.upgstage < 2) {
        return "You have not leveled up enough";
    }
    if (game.indebted) {
        return "You don't have enough money";
    }

    game.points -= 800 + game.upgpriceboost * game.difficulty;
    game.stepfouradd += game.upgradebonus;
    game.maxbattery += 1;

    console.log("purchased maxpowerup();");
    return `You have ${game.points} points`;
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
        criteria: () => game.power == 15,
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
