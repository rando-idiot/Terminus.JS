//DEVELOPMENT BUILD V10
//Changelog:
//Added main shop
//Fixed some bugs
//Trying out some *theming* ;3
//I dont remember the rest










//code i stole from stack overflow
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
//End of code i stole from stack overflow

console.log("use info(); for, well, info. lol.");

//The variables for determining how many points you make from any given update.
var basegain = 1;
var steponeadd = 0;
var steptwomult = 1;
var stepthreemult = 1;
var stepfouradd = 1;
var points = 0;
var upgbonusvar = 1
var upgpriceboost = 0;
var upgstage = 0;
var infunlock = 0;
var updateloop = 1;


function info() {
    console.log("Note that this game is played entirely in the js console.");
    console.log("Use update(); to update your monies.");
    console.log("fyi some mechanics of this game rely on update(); being manyally used so no, this isn't an idle game.");\
    console.log("use shop(); to see the main shop");
    console.log("do infshop(); to view unlimitedly purchasable upgrades.");
}

function update() {
    if (points < 0) {
        var debtflag = 1;
    }
    points = basegain + steponeadd * steptwomult * stepthreemult + stepfouradd;
    if (debtflag = 1) {
        if (points < 0) {
            points = 0;
            debtflag = 0;
        }
        else {
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

    var beginbought = 0;
    function begin() {
        if (beginbought == 0) {
            if (points >= 0) {
                beginbought = 1;
                basegain = basegain + 9;
                points = points - 5;
            }
            else {
                console.log("Cannot afford!");
            }
        }
        else {
            console.log("You already began.");
        }
    }

    var indexbought = 0;
    function index() {
        if (indexbought == 0) {
            if (points >= 0) {
                indexbought = 1;
                steptwomult = steptwomult + 0.5;
                points = points - 20
            }
            else {
                console.log("Cannot afford!");
            }
            }
            else {
            console.log("You already created index.html")
            }
        }

    

    var doctypebought = 0;
    function doctype() {
        if (doctypebought = 0) {
            if (points >= 0) {
                doctypebought = 1;
                stepthreemult = stepthreemult + 0.5;
                points = points - 50;
            }
            else {
                console.log("Cannot affordies!");
            }
            
        }
        else {
                console.log("You- YOU ALREADY ADDED <!DOCTYPE HTML> YOU DONT NEED TO PUT IT EVERY TIME YOU ADD <BODY> STOP PLEASE");
            }
    }

    var configymlbought = 0;
    function configYML() {
        if (configyml == 0) {
            if (points >= 0) {
                configymlbought = 1;
                stepfourmult = stepfourmult * 2;
                points = points - 100;
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
                points = points - 500
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
                    points = points - 5000;
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
        points = points - 5 - upgpriceboost;
    steponeadd = steponeadd + upgbonusvar;
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
        points = points - 25 - upgpriceboost;
        steptwomult = steptwomult + upgbonusvar;
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
        points = points - 25 - upgpriceboost;
        stepthreemult = stepthreemult + upgbonusvar;
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
        points = points - 2 - upgpriceboost;
        stepfouraddition = stepfouraddition + upgbonusvar;
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
        points = points - 500 - upgpriceboost;
        basegain = basegain + upgbonusvar;
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
        points = points - 100 - upgpriceboost;
        upgbonusvar = upgbonusvar + 0.1;
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
    var helloworld = prompt("Hello World?")
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
        points = points - 20 - upgpriceboost;
    steponeadd = steponeadd + upgbonusvar;
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
        points = points - 100 - upgpriceboost;
        steptwomult = steptwomult + upgbonusvar;
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
        points = points - 100 - upgpriceboost;
        stepthreemult = stepthreemult + upgbonusvar;
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
        points = points - 8 - upgpriceboost;
        stepfouraddition = stepfouraddition + upgbonusvar;
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