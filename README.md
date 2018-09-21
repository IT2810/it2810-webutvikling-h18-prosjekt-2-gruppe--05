# IT2810 Prosjekt 2 - Gallery
Laget av: Eivind Solberg Rydningen, Anzhelika Silverstova, Kaja L. Solberg

## Innhold og funksjonalitet

Denne nettsiden er et utstillingsvindu der brukeren gjennom kategorivalg kan se ulike sammensetninger av bilder, tekst og lyd. For hver kategorikombinasjon finnes det fire ulike gallerivinduer, som viser fire versjoner av kategorikombinasjonen.

Ved valg av en ny kategori i én av medietypene, vil galleriet resettes til gallerivindu 1. Vi valgte å gjøre det sånn fordi vi mener at dette er mest intuitivt for brukeren.

## Teknologi
### React

React er et JavaScript-bibliotek som gjør det enklere å lage responsive og interaktive brukergrensesnitt. React innkapsler komponenter og lar hver komponent ha sin egen “state”. Komponentenes logikk skrives i JavaScript, noe som gjør at data kan flyte gjennom appen uten at “state” påvirker DOM. Komponentene har en render()-funksjon, som tar inn datainput og returnerer hva som skal vises, på best mulig måte. Største fordel med React at den består av såkalte komponenter som lar seg bli gjenbrukt. Man har et hierarki bestående av foreldre og barn der man kan sende ulike verdier fra den ene til den andre og trigge nødvendige endringer. I dette prosjektet skulle vi lage en enkel Single Page React App. Med App.js på toppen av hierarkiet og Gallery, Header og Categories som barn. Utstillings-komponentet består videre av tekst, bilde og audio-komponenter. Kategorier har også 3 radio buttons barn som hver representerer hver media-type.
JSX er en utvidelse av JS-språket som er brukt i React og gjør det mulig å returnere ønsket verdi på siden uten å måtte legge det inn i selve HTML-fil.

* [React] (https://reactjs.org/) JavaScript library used

### Ajax

I dette prosjektet måtte vi laste elementer på siden ved hjelp av AJAX. AJAX følger med React og lar deg etterspørre og motta data fra en server, etter at en applikasjon eller nettside er lastet inn. Det lar seg også sende data til en server i bakgrunnen, uten at brukeren merker det. Det som gjør AJAX bra for interaktive brukergrensesnitt, er at de ulike komponentene lastes uavhengig av hverandre, og at man dermed kan oppdatere én komponent i applikasjonen, uten at de resterende komponentene påvirkes.

#### Axios

Vi valgte å bruke Axios som tredjeparts JavaScript-bibliotek for å hente inn nødvendige svg- og json-data. Dette er et kjent og veletablert promise-basert bibliotek som virket relativt lett å ta i bruk og til og med for nybegynnere. Det at biblioteket er promise-basert lar oss skrive asynkron kode for å utføre XMLHTTP requests i tillegg håndterer det asynkrone feil. Asynkron model i motsetning til synkron går ut på at flere ting kan skje samtidig. Du kan bruke Axios for å gjøre dette både i nettleservinduet og i node.js.

* [Axios] (https://github.com/axios/axios) Promise based HTTP client for the browser and node.js
### HTML5 Audio-tag

Lasting av lydfil ble gjort med HTML5 Audio-taggen. For å laste inn lyd trenger man bare å spesifisere URLen man skal laste og så har Audio-taggen funksjonalitet som gjør det enkelt å laste inn filen med f.eks. this.Audio.load(), samt lignende funksjoner for play og pause. Audio-taggen støtter kontroll av lyd med play/pause, slider og volumkontroll, men i denne oppgaven var det mest intuitivt å bruke én knapp for start/stopp av lydfil.

### Storage

Lagring av benyttede filer på klienten kan være nyttig om brukeren vil for eksempel bla gjennom ulike kombinasjoner frem og tilbake. For å slippe å laste på nytt allerede benyttede filer for hver gang kan man benytte seg av caching. Det finnes ulike måter og implementasjoner for å gjøre dette. Vi har valgt å bruke web storage som lagrer data i klientens nettleser. Man kan enten lagre data lokalt som da vil bli husket av nettleseren for alltid til man sletter de manuelt eller per sesjon som betyr at lagret data vil bli slettet når man lukker nettleservindu. I vårt prosjekt brukte vi sessionStorage da det var lettere å følge progresjonen underveis.

### Git

For å samarbeide om kode med hverandre brukte vi Git. Git støtter mulighet for å lage Issues som er da nyttig for å bryte ned oppgaver og fordele de mellom utviklere samt holde oversikt over progresjon i prosjektet.

## Responsive web

Responsive web design er en måte å designe applikasjoner og nettsider på, slik at innholdet på en side lastes pent, uavhengig av størrelse på vinduet det lastes i. For å gjøre at designet ble responsivt, brukte vi viewport, media queries, skalerende bilder og flytende layout.

Viewport brukes for at nettsider i alle strørrelser skal kunne laste innholdet på smartest mulig måte, ved at skjermen fylles mest og best mulig.

Media queries brukes for å fortelle innholdet på siden hva det skal gjøre avhengig av ulike betingelser. Vi har valgt å bruke media queries for å definere tre ulike vindusstørrelser, som alle tre krever ulik oppførsel av sidens elementer.

## Testing

For å teste at siden er responsive, har vi brukt “inspiser” i Google Chrome og brukt responsive-funksjonen ved utvikling av hele appen. Der har vi sjekket layouten i iPhone 6/7/8 både liggende og stående, iPad, liggende og stående og et vanlig nettleservindu i Chrome. Om man tilføyd nye elementer inn på siden måtte vi sjekke hvordan de opptrådt i de ulike skjerm-formatene for så å tilpasse de fortløpende om de ikke tilfredsstilte kravene til responsiveness.

## Kilder
* [React] (https://reactjs.org/) React official documentation
* [W3Schools] (https://www.w3schools.com)
* [Ihatetomatoes] (https://www.youtube.com/watch?v=ZZS1irWSfxc&pbjreload=10) How to use localStorage with React

### Acknowledgments
* [Magnus Benoni] (https://magnusbenoni.com/radio-buttons-react/) How to Use Radio Buttons in React
