//V14 DEV BRANCH
//to be perfectly honest i have no idea what i did so 🤷 also yes i did just use an emoji in code shut up.






console.log("Welcome to Terminus.JS");




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

// function _0x137c(_0x5e2a47,_0x3cc315){var _0x4e2d3e=_0x4e2d();return _0x137c=function(_0x137cfc,_0x20a1dd){_0x137cfc=_0x137cfc-0x6a;var _0xb267e9=_0x4e2d3e[_0x137cfc];return _0xb267e9;},_0x137c(_0x5e2a47,_0x3cc315);}(function(_0x50462d,_0x251dcb){var _0x257f1c=_0x137c,_0x33b226=_0x50462d();while(!![]){try{var _0x2875f0=-parseInt(_0x257f1c(0x70))/0x1+-parseInt(_0x257f1c(0x6f))/0x2+parseInt(_0x257f1c(0x6b))/0x3+parseInt(_0x257f1c(0x6a))/0x4+-parseInt(_0x257f1c(0x6d))/0x5*(-parseInt(_0x257f1c(0x6e))/0x6)+parseInt(_0x257f1c(0x6c))/0x7+-parseInt(_0x257f1c(0x71))/0x8;if(_0x2875f0===_0x251dcb)break;else _0x33b226['push'](_0x33b226['shift']());}catch(_0x4343ac){_0x33b226['push'](_0x33b226['shift']());}}}(_0x4e2d,0x8cfba));function _0x4e2d(){var _0x18b50b=['3168053gurDts','38315BNUrlz','858lOwYPR','6718BvOcmd','404684uUZQEr','14187144LulRTP','Peter\x20Alert','475800HaCVBf','3274692LJKBXW'];_0x4e2d=function(){return _0x18b50b;};return _0x4e2d();}function peteralert(){var _0x2e83cc=_0x137c;console['log'](_0x2e83cc(0x72));}

//The letiables for determining how many points you make from any given update.
let basegain = 1;
let steponeadd = 0;
let steptwomult = 1;
let stepthreemult = 1;
let stepfouradd = 1;
let points = 0;
let upgbonuslet = 1
let upgpriceboost = 0;
let upgstage = 0;
let infunlock = 0;
let updateloop = 1;
let power = 10;
let powerpoints = 1; //Hahah PP
let debtflag = 1;
var difficulty = 1;

help();

function help() {
console.log("help()................Shows this.");
console.log("shop()................Shows the available purchasable items.");
console.log("update()..............Increases points. Equivalent of clicking in a clicker game.");
console.log("charge()..............Gain mult.")
console.log("difficultyset(number).Change your difficulty.");
if (infunlock == 1) {
console.log("infshop().Shows infinitley purchasable items.");
}

}
function difficultyset(number) {
    difficulty = number;
    console.log("Set difficulty to ", number);
    console.log("Can be changed at any time, but you wouldn't do that, would you?")
}

function charge() {
    if (power >= 10) {
        if (power <= 14) {
        power = 15;
        }
    }
    else if (power == 15){
        console.log("Fully charged");
    }
    else if (power <= 9) {
        if (power <= 6) {
        power = 10;
        }
    }
    else if (power <= 5) {
        power = 10;
    }
}



function update() {
    if (power == 15) {
        powerpoints = 1.5
        console.log("Full power. * 1.5 bonus");
    }
    else if (power >= 10) {
        powerpoints = 1
    }
    else if (power >= 6) {
        powerpoints = 0.5
        console.log("Low Power.");
    }
    else if (power == 0) {
        powerpoints = 0;
        console.log("No power. Recharge to regain points.")
    }
    if (points < 0) {
        debtflag = 1;
    }
    points = points + (basegain + steponeadd * steptwomult * stepthreemult + stepfouradd * powerpoints) / difficulty;
    if (debtflag = 1) {
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
        }

    

    let doctypebought = 0;
    function doctype() {
        if (doctypebought = 0) {
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

    }

    function push1() {
        if (upgstage == 0) {
        if (infunlock == 0) {
            if (points >= 0) {
                infunlock = 1;
                upgstage = 1;
                points = points - 500 * difficulty;
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
    }




function infshop() {
    if (infunlock == 1) {
    console.log("See code comments for upgrade descriptions")
    if (upgstage == 1) {
    console.log("Step one Upgrade.......$5+....stepone();"); //console.log("Increases step 1 addition")
    console.log("Step two Upgrade.......$25+...steptwo();"); //console.log("Increases step 2 mult")
    console.log("Step three Upgrade.....$25+...stepthree();"); //console.log("Increases step 3 mult")
    console.log("Step four Upgrade......$2+....stepfour();"); //console.log("Increases step 4 addition")
    }
    if (upgstage == 2) {
        console.log("Step one Upgrade 2....$20+.....stepone2();"); //Increases step 1 addition but better
        console.log("Step two Upgrade 2....$100+....steptwo2();"); //Increases step 2 mult but better
        console.log("Step three Upgrade 3..$100+....stepthree2();"); //Increases step 3 mult but better
        console.log("Step four Upgrade 4...$8+......stepfour2();"); //Increases step 4 addition but better

    }
    console.log("Base increment Upgrade.$500+...baseup();"); //Increases the base that is then multiplied etc etc
    console.log("Upgrade bonus..........$100+..upgbonus();"); //Increases how much upgrades upgrade stuff OTHER THAN ITSELF. THIS IS NOT EXPONENTIAL. YET. IDK GIMME AN ISSUE REPORT IF ITS UNFUN OR SMTH.
    console.log("hello world!...........$0....helloworld();"); //Prints "Hello world!" in console as many times as you have purchased upgbonus();
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
    steponeadd = steponeadd + upgbonuslet;
    console.log("purchased stepone();")
    upgpriceboost = upgpriceboost + 1;
    }
    else {
      console.log("ERROR CODE 85BB65");
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


function steptwo() {
    if (infunlock == 1) {
    if (upgstage == 1) {
    if (points >= 0) {
        points = points - 25 - upgpriceboost * difficulty;
        steptwomult = steptwomult + upgbonuslet;
        console.log("purchased steptwo();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("ERROR CODE 85BB65");

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

function stepthree() {
    if (infunlock == 1) {
    if (upgstage == 1) {
    if (points >= 0) {
        points = points - 25 - upgpriceboost * difficulty;
        stepthreemult = stepthreemult + upgbonuslet;
        console.log("purchased stepthree();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("ERROR CODE 85BB65");
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

function stepfour() {
    if (infunlock == 1) {
    if (upgstage == 1) {
    if (points >= 0) {
        points = points - 2 - upgpriceboost * difficulty;
        stepfouraddition = stepfouraddition + upgbonuslet;
        console.log("purchased stepfour();");
        upgpriceboost = upgpriceboost + 1;
    }
    
    else {
        console.log("ERROR CODE 85BB65");
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
        basegain = basegain + upgbonuslet;
        console.log("purchased baseup();");
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("ERROR CODE 85BB65");

    }
}
else {
 console.log("You have not unlocked infinite upgrades.");
 }
}

function upgbonus() {
    if (infunlock == 1) {
    if (points >= 0) {
        points = points - 100 - upgpriceboost * difficulty;
        upgbonuslet = upgbonuslet + 0.1;
        console.log("purchased upgbonus();");
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("ERROR CODE 85BB65");
    }

}
else {
     console.log("You have not unlocked infinite upgrades.");
}
}

function helloworld() {
    console.log("hello world");
    let helloworld = prompt("Hello World?")
    if (helloworld=="Hello World") {
       prompt("Yay!");
    }
    else {
        prompt("Monster.");
    }
}


function stepone2() {
    if (infunlock == 1) {
    if (upgstage == 2)  {
    if (points >= 0) {
        points = points - 20 - upgpriceboost * difficulty;
    steponeadd = steponeadd + upgbonuslet;
    console.log("purchased stepone();")
    upgpriceboost = upgpriceboost + 1;
    }
    else {
      console.log("ERROR CODE 85BB65");
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




function steptwo2() {
    if (infunlock == 1) {
    if (upgstage == 2) {
    if (points >= 0) {
        points = points - 100 - upgpriceboost * difficulty;
        steptwomult = steptwomult + upgbonuslet;
        console.log("purchased steptwo();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("ERROR CODE 85BB65");

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

function stepthree2() {
    if (infunlock == 1) {
    if (upgstage == 2) {
    if (points >= 0) {
        points = points - 100 - upgpriceboost * difficulty;
        stepthreemult = stepthreemult + upgbonuslet;
        console.log("purchased stepthree();")
        upgpriceboost = upgpriceboost + 1;
    }
    else {
        console.log("ERROR CODE 85BB65");
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

function stepfour2() {
    if (infunlock == 1) {
    if (upgstage == 2) {
    if (points >= 0) {
        points = points - 8 - upgpriceboost * difficulty;
        stepfouraddition = stepfouraddition + upgbonuslet;
        console.log("purchased stepfour();");
        upgpriceboost = upgpriceboost + 1;
    }
    
    else {
        console.log("ERROR CODE 85BB65");
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