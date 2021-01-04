// Calculate border Height
let mainHeight = document.querySelector("main");
let sectionHeight = document.querySelector("section:first-of-type");
let mainHeightCalculate = mainHeight.offsetHeight - sectionHeight.offsetHeight;
// Hoogte doorgeven aan Property
document.documentElement.style.setProperty("--v-height", mainHeightCalculate + 'px');
document.documentElement.style.setProperty("--v-top", sectionHeight.offsetHeight + 'px');

console.log(mainHeightCalculate);

// Menu in en uit laten klappen
let button = document.querySelector("header nav ul li:last-of-type button");
button.addEventListener("click", ShowVMenu);
function ShowVMenu(){
	let showMenu = document.querySelector("header nav ul li:nth-of-type(3) ul");
	showMenu.classList.toggle("menuShow");
	// Knop icon veranderen
  button.classList.toggle("exit");
}

// Submenu in en uit laten klappen
let button2 = document.querySelector("header nav ul li:nth-of-type(3) ul li:nth-of-type(2)");
button2.addEventListener("click", ShowVMenu2);
function ShowVMenu2(){
	let menuShowGameInfo = document.querySelector("header nav ul li:nth-of-type(3) ul li:nth-of-type(2) ul");
	menuShowGameInfo.classList.toggle("menuShowGameInfo");
}

// Submenu in en uit laten klappen
let button3 = document.querySelector("header nav ul li:nth-of-type(3) ul li:nth-of-type(5)");
button3.addEventListener("click", ShowVMenu3);
function ShowVMenu3(){
	let menuShowGameSupport = document.querySelector("header nav ul li:nth-of-type(3) ul li:nth-of-type(5) ul");
	menuShowGameSupport.classList.toggle("menuShowGameSupport");
}

// Submenu in en uit laten klappen
let button4 = document.querySelector("header nav ul li:nth-of-type(3) ul li:nth-of-type(6)");
button4.addEventListener("click", ShowVMenu4);
function ShowVMenu4(){
	let menuShowGameSocial = document.querySelector("header nav ul li:nth-of-type(3) ul li:nth-of-type(6) ul");
	menuShowGameSocial.classList.toggle("menuShowGameSocial");
}

// Object met agents en bijhorende content
let agent = [
    {
        agent: "./assets/images/agents/V_AGENTS_587x900_Jett.png",
        role: "DUELIST",
        biography: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        ability1Img: "./assets/images/agents/TX_Jett_Q.png",
        ability1Name: "Q - UPDRAFT",
        ability1Video: "./assets/images/agents/Jett_Q_v001_web.mp4",
        ability1Text: "INSTANTLY propel Jett high into the air.",
        ability2Img: "./assets/images/agents/TX_Jett_E.png",
        ability2Name: "E - TAILWIND",
        ability2Video: "./assets/images/agents/Jett_E_v001_web.mp4",
        ability2Text: "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.",
        ability3Img: "./assets/images/agents/TX_Jett_C.png",
        ability3Name: "C - CLOUDBURST",
        ability3Video: "./assets/images/agents/Jett_C_v001_web.mp4",
        ability3Text: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
        ability4Img: "./assets/images/agents/TX_Jett_X.png",
        ability4Name: "X - BLADE STORM",
        ability4Video: "./assets/images/agents/Jett_X_v001_web.mp4",
        ability4Text: "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target"
        },
    {
        agent: "./assets/images/agents/V_AGENTS_587x900_Omen.png",
        role: "CONTROLLER",
        biography: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        ability1Img: "./assets/images/agents/TX_Omen_Q.png",
        ability1Name: "Q - PARANOIA",
        ability1Video: "./assets/images/agents/Omen_Q_v001_web.mp4",
        ability1Text: "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.",
        ability2Img: "./assets/images/agents/TX_Omen_E.png",
        ability2Name: "E - DARK COVER",
        ability2Video: "./assets/images/agents/Omen_E_v001_web.mp4",
        ability2Text: "EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the market closer.",
        ability3Img: "./assets/images/agents/TX_Omen_C.png",
        ability3Name: "C - SHROUDED STEP",
        ability3Video: "./assets/images/agents/Omen_C_v001_web.mp4",
        ability3Text: "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
        ability4Img: "./assets/images/agents/TX_Omen_X.png",
        ability4Name: "X - FROM THE SHADOWS",
        ability4Video: "./assets/images/agents/Omen_X_v001_web.mp4",
        ability4Text: "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport."
        }
      ];

// Ophalen welke agent is geselecteerd
let selectAgent = document.querySelectorAll("section:first-of-type div ul li h2");
  for(let i = 0; i < selectAgent.length; i++){
  selectAgent[i].addEventListener("click", change);
  }

// Content naar agent aanpassen
function change(e) {
let selectedAgent = e.target.textContent;
console.log(selectedAgent);
let wo;

// agent nummer meegeven en alt aanpassen
if (selectedAgent == "JETT") {
  document.querySelector("section:first-of-type img").alt = "Jett";
  wo = 0;
} else if (selectedAgent == "OMEN") {
  document.querySelector("section:first-of-type img").alt = "Omen";
  wo = 1;
}
document.querySelector("section:first-of-type img").src = agent[wo].agent;
document.querySelector("section:nth-of-type(2) p:first-of-type").innerHTML = agent[wo].role;
document.querySelector("section:nth-of-type(2) p:last-of-type").innerHTML = agent[wo].biography;
document.querySelector("section:nth-of-type(3) video").src = agent[wo].ability1Video;
document.querySelector("section:nth-of-type(3) ul li:first-of-type img").src = agent[wo].ability1Img;
document.querySelector("section:nth-of-type(3) ul li:nth-of-type(2) img").src = agent[wo].ability2Img;
document.querySelector("section:nth-of-type(3) ul li:nth-of-type(3) img").src = agent[wo].ability3Img;
document.querySelector("section:nth-of-type(3) ul li:last-of-type img").src = agent[wo].ability4Img;
document.querySelector("section:nth-of-type(3) h3").innerHTML = agent[wo].ability1Name;
document.querySelector("section:nth-of-type(3) p").innerHTML = agent[wo].ability1Text;
}

// Ability selecteren
let selectAgentAbility = document.querySelectorAll("section:nth-of-type(3) ul li");
  for(let i = 0; i < selectAgentAbility.length; i++){
  selectAgentAbility[i].addEventListener("click", changeAbility);
  }

// Ability content weizigen
function changeAbility(e) {
let selectedAgentAbility = e.target.alt;
console.log(selectedAgentAbility);
let abili = document.querySelector("section:nth-of-type(3) video");
let abiliName = document.querySelector("section:nth-of-type(3) h3");
let abiliText = document.querySelector("section:nth-of-type(3) p");
let val;
// Agent ophalen
if (document.querySelector("section:first-of-type img").alt == "Jett") {
  val = "0";
} else if (document.querySelector("section:first-of-type img").alt == "Omen") {
  val = "1";
}
// Ability content weizigen
if (selectedAgentAbility == "Q") {
  abili.src = agent[val].ability1Video;
  abiliName.innerHTML = agent[val].ability1Name;
  abiliText.innerHTML = agent[val].ability1Text;
} else if (selectedAgentAbility == "E") {
  abili.src = agent[val].ability2Video;
  abiliName.innerHTML = agent[val].ability2Name;
  abiliText.innerHTML = agent[val].ability2Text;
} else if (selectedAgentAbility == "C") {
  abili.src = agent[val].ability3Video;
  abiliName.innerHTML = agent[val].ability3Name;
  abiliText.innerHTML = agent[val].ability3Text;
} else if (selectedAgentAbility == "X") {
  abili.src = agent[val].ability4Video;
  abiliName.innerHTML = agent[val].ability4Name;
  abiliText.innerHTML = agent[val].ability4Text;
}
}
