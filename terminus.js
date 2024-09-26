//V14 DEV BRANCH
//to be perfectly honest i have no idea what i did so 🤷 also yes i did just use an emoji in code shut up.













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
var difficulty = 1;
help();

function help() {
console.log("help()....Shows this.");
console.log("shop()....Shows the available purchasable items.");
console.log("update()..Increases points. Equivalent of clicking in a clicker game.");
console.log("charge()..Gain mult.")
console.log("Use 'difficulty = #' with # as any number to determine your difficulty.");
if (infunlock == 1) {
console.log("infshop().Shows infinitley purchasable items.");
}

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
        let debtflag = 1;
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