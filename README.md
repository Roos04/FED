# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Roos Klaassen

  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  Apple: https://www.apple.com/nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  <p>Home pagina apple</p> 
  <img src="images/apple_homepagina.png" width="375px" alt="home pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  <p>iPhone pagina</p>
  <img src="images/apple_iphone.png" width="375px" alt="iphone pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  - Tekst word niet gelezen alleen interactieve elementen
  - Ineteractieve elementen werd goed voorgelezen en werd verteld wat je er mee kan
  - Duidelijke volgorde

  #### Muis en Toetsenbord 
  - Met de tap functie, krijgen knoppen een blauwe rand ook knoppen die al blauw zijn dit is niet duidelijk
  - Logische volgorde 
  - Iphone specificaties tabel gaat verticaal ipv horzontaal
  - footnote is ook klikbaar door op enter te drukken


  #### Motoriek (shocks, elastiekjes)
  - Was geen obstakel, kon de website gewoon gebruiken zoals normaal


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  - kleurenblind, contrast blijft goed met verschillende vormen van kleurenblindheid heb ik dit getest: Ortitanapia, Protanopia, Peuteranopie
- bril, grote tekst is nog wel leesbaar kleine tekst valt weg. Afbeeldingen zijn nog wel zichtbaar maar niet in detail. Footer is niet te lezen.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="images/breakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">

  ### scroll iphones: 
  <img src="images/Apple-scrol-iphone.jpg" width="375px" alt="apple scrol iphone">

  ### footer: 
  <img src="images/Apple-footer.jpg" width="375px" alt="apple footer">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Heb deze week de HTML gemaakt voor de homepagina en heb hier ook meteen de eerste CSS voor geschreven. De breakdown schets heeft me veel geholpen om de HTML te schrijven voor de homepagina. Had wel erg moeite met de plaatjes, om die goed te zetten. Daarnaast gebruik ik nog custom properties, weet namelijk niet of dit moet.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Katrina     | Danisha         | Splinter    | Roos        |
  | ---            | ---                | ---          | ---              |
  | css selectors  | link button             | z-index    | plaatjes makkelijk positioneren en vergroten   |
  |fonts | spans | list bewerken|custom properties gebruiken?|



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - De afbeeldingen hebben om het object een groot vlak zwart of wit, het best kan ik de afbeeldingen bijsnijden zodat alleen het object op de afbeelding staat.
  - Custom properties moet ik gebruiken in mijn css. Dit doe ik door een eigenschap aan te maken in de :root. Dit doe je door -- en dan de naar waarover de eigenschap gaat. Vervolgens kan je de eignschap aanroepen met “var”.

</details>



## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  Hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Deze week ben ik aan de gang geweest met de navigatie bar. Ik heb hier gebruik gemaakt van de huiswerk opdracht, aan de hand van deze code lukte het mij om dit om te zetten voor de Apple site. Daarnaast ben ik verder gegaan om de HTML te schrijven voor de tweede pagina. Het grid voor de 4 verschillende iphone vond ik erg lastig om mee te beginnen. Ik heb er daarom voor gekozen om eerst een klein deel van het grid te maken en dit na te maken. Daarnaast liep vast hoe ik de footer moest maken met de uitklap functie en het lukt mij niet om de iphones te laten scrollen.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Splinter      | Danisha          | Katrina    | Roos       |
  | ---            | ---                | ---          | ---              |
  | Niet aanwezig  | hulp nodig met css             | css kort opschrijven     |details summary voor footer|
  |  |  | |scroll in css|
  |             |                 |           | scroll iphones werkt niet wat doe ik verkeert?              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - De student assistent heeft een 1 keer voor gedaan hoe je een detail en summary maakt in html. Ik begreep dit en ga ik verder mee voor me hele footer. 
  - om de ul stond een section waardoor de section ging scrollen en niet de ul zelf de section heb ik hiervoor weg gehaald. Daarnaast heb ik een 	z-index: -1 moeten toevoegen anders waren de plaatjes van de li's zichtbaar in me naviagtie als je die uitklapte. De uitwerking in css:
  <img src="images/css-apple-scrol-iphone.jpg" width="375px" alt="apple scroll code css">


</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  De screenreader werkte goed, de afbeeldingen werden niet voorgelezen maar dit lag aan de instellingen van de screenreader zelf. 


  #### Muis en Toetsenbord 
  Met de tab toets door de website heen werkte erg goed, het enige wat niet werd meegenomen is de scrollbar op de iphone pagina. Hier moeten nog linkjes van worden gemaakt, zodat ze wel tab baar zijn. Wat verbeterd is de kleur van  het interactieveelement wat getapt is op dat moment. Eerst was dit blauw en was het niet goed te zien bij de blauwe knoppen. De rode kleur is wel goed zichtbaar dit is dus een goede verbetering.


  #### Motoriek (shocks, elastiekjes)
  Met elastiekjes werkt helemaal prima, dat zorgt niet voor problemen. 


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Met de wazigheidsbril is het contrast prima en de titels zijn te lezen, maar de kleine tekst niet. Het contrast is dus wel goed. Met de kleurenblindheidsbril is alles prima te lezen, enkel worden de kleuren wat geler. Dit zorgt nergens op de hele website voor problemen, het is nu goed hoe het is. 

</details>




## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Ik ben lekker bezig om me website af te maken. Heb ervoor gekozen om het bij deze content te houden en me te gaan foccussen op de content die er nu staat op de twee pagina's. Dit het ik in overleg gedaan met Robert. Deze week heb ik me vooral bezig gehouden om zoveel mogelijk content responive te maken, zoals de footer, content blokken op de homepagina en iphone pagina en ben ik verder gegaan met het grid voor de 4 verschillende iphones. 

  ### Agenda voor meeting
  Deze week hebben we niet met het hele groepje bij elkaar gezeten, maar konden we in de les zelfstandig werken en vragen stelen aan Robert en de student-assistenten.

  | Roos        |
  | ---              |
  | footer details en summury positioneren|
  | content blokken responsive |



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Heb hier uitendelijk voor de les zelf een oplossing voor gevonden. Ik heb dit opgelost door een @media Rule gezet op de footer en het vervolgens in een grid gezet waardoor de verschillende blokjes footer naast elkaar en onder elkaar gingen staan.
  - Ik wist niet hoe ik de content blokken responsive kon maken, omdat aleen het plaatje laast de tekst kwam te staan. De tekst en het plaatje zaten samen allebei in de zelfe section waardoor ze geen eigen contener hadden om het vervolgens te flexbloxen. Hiervoor kreeg ik de tip om de section nog een keer op te delen in nog een section waarin alle tekst stond. Kijk hieronder voor de HTML die ik heb aangepast:
    <img src="images/code-blokken-responsive-html.png" width="375px" alt="code blokken responsive html">


</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="images/Apple-eind.jpg" width="375px" alt="uitomst opdracht FED">


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb geleerd om met Media Queries te werken. Ik had hier voorheen nog niet mee gewerkt, maar dit ging eigenlijk best wel goed om zo de site responisive te maken. 

  <img src="images/Apple-responsive-footer-nav.jpg" width="375px" alt="responsive footer en navigatie>


  ### Dit was lastig/Is niet gelukt:
  Wat erg lastig was was het maken van het grid voor de 4 verschillende iphones. Ik heb een klein deel gemaakt van dit grid, de rest is mij helaas niet gelukt.

  <img src="images/Aplle-nietgelukt.jpg" width="375px" alt="grid 4 iphones">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  1. Apple site content: https://www.apple.com/nl/
  2. Navigatie html css en JS:  https://codepen.io/shooft/live/GRxXboQ 
  3. Scrol bar iPhone pagina html en css:  https://codepen.io/shooft/pen/qBZPdGm?editors=1100 
  4. Grid iphones html en css: https://codepen.io/robertspier/pen/oNyPEmv?editors=0100
  5. Footer details en summary css: https://codepen.io/robertspier/pen/NWMapEM?editors=0110 
  6. Footer details en summary responsive css en JS: https://codepen.io/robertspier/pen/GRGzYEG?editors=0110

</details>