/*https://codepen.io/shooft/live/GRxXboQ*/


/******************************/
/* menu openen de MENU button */
/******************************/

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}


/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}


/* https://codepen.io/robertspier/pen/GRGzYEG?editors=0110*/

// Gebruik selectorAll ipv Selector om alle details in een variabele te stoppen, een array wordt dit.
const details = document.querySelectorAll('footer section:first-of-type details');

// Luister naar het groter of kleiner worden van je scherm
window.addEventListener('resize', onResize);


// Als je schermgrootte verandert:
function onResize(e) {

	// Kijk of het scherm groter is dan 700 pixels
	if(window.innerWidth > 1056) {
		
		// if so, doe dan voor elk detail:
		details.forEach(detail => {
			
			// het attribuut open = true
			detail.open = true;
		})
	} else {
		details.forEach(detail => {
			// en andersom als ie kleiner is doen we false, dus dicht
			detail.open = false;
		})
	}
}

// Voer 'm altijd uit als de pagina is geladen zodat ie gelijk openklapt op desktop
window.addEventListener('DOMContentLoaded', onResize)
