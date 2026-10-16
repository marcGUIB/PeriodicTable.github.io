//This code manages the languages and creates all the strings used

let userLang = localStorage.getItem("language") || 0;


if (userLang == 0){
    userLang = navigator.language || navigator.userLanguage; 
}

localStorage.setItem("language", userLang);

let tdText1;
let tdText2;

let titleText; 
let gameTitleText;

let ElementsText = ["Características desconencidas", "Gases nobles", "Hidrógeno", "Metales alcalinos", "Metales alcalinoterris", "Metales de transición", "Metales postransicionales", "Metaloides", "No metales reactivos", "Lantánidos", "Lantánidos"]

let periodicTableInfoText;

let modoNocheText;

let infoTitleText;

let elementsInfo = [];

let gameButtonText;
let languageText;

let hideText;
let showText;

ChangeLanguage();

function ChangeLanguage(){
    elementsInfo = [
            "La información de estos elementos es desconocida", 
            "Los gases nobles son un grupo de elementos químicos con propiedades muy similares: por ejemplo, bajo condiciones normales, son gases monoatómicos, incoloros y presentan una reactividad muy baja. Se sitúan en el grupo 18 de la tabla periódica.",
            "El hidrógeno es el elemento químico de número atómico 1, representado por el símbolo H. Con una masa atómica de 1.0079",
            "Los metales alcalinos o simplemente alcalinos son estos seis elementos químicos: litio, sodio, potasio, rubidio, cesio y francio. Estos elementos, junto con el hidrógeno, constituyen el grupo 1 que se encuentra en el bloque-s de la tabla periódica.",
            "Los metales alcalinotérreos son un grupo de elementos que se encuentran situados en el grupo 2 de la tabla periódica y son los siguientes: berilio, magnesio, calcio, estroncio, bario y radio. Este último no siempre se considera, pues tiene un tiempo de vida media corto.",
            "Los metales de transición son aquellos elementos químicos que están situados en la parte central del sistema periódico, en el constante bloque d, cuya principal característica es la inclusión en su configuración electrónica del orbital d, parcialmente lleno de electrones.",
            "Los metales del bloque p se encuentran ubicados en la tabla periódica entre los metales de transición a su izquierda y los metaloides. A lo largo de la historia de la química han recibido diferentes nombres, como metales post-transición, metales pobres y otros metales.",
            "Como con los metales y los no metales, los semimetales comprenden una de las tres categorías de elementos químicos siguiendo una clasificación de acuerdo con las propiedades de enlace e ionización.",
            "Los no metales son elementos químicos que no son buenos conductores de la corriente eléctrica y el calor. Son muy débiles, por lo que no se pueden ni estirar ni convertir en una lámina.",
            "Los lantanoides o lantánidos son un grupo de elementos que forman parte del periodo 6 de la tabla periódica de los elementos. Estos elementos son llamados «tierras raras» debido a que se encuentran en forma de óxidos, y también, junto con los actínidos, forman los «elementos de transición interna».",
            "Los actinoides o actínidos son un grupo de elementos que forman parte del periodo 7 de la tabla periódica. Estos elementos, junto con los lantánidos, son llamados elementos de transición interna."
        ];

    ElementsText = ["Características desconencidas", "Gases nobles", "Hidrógeno", "Metales alcalinos", "Metales alcalinoterris", "Metales de transición", "Metales postransicionales", "Metaloides", "No metales reactivos", "Lantánidos", "Lantánidos"]
    tdText1 = "Numero = ";
    tdText2 = "\n\nConfiguración electronica = ";
    titleText = "Tabla periódica";
    gameTitleText = "Juego";
    modoNocheText = "Modo noche";
    modoDiaText = "Modo día";
    periodicTableInfoText = "La tabla periódica de los elementos es una disposición de los elementos químicos en forma de tabla, ordenados por su número atómico, por su configuración de electrones y sus propiedades químicas. Este ordenamiento muestra tendencias periódicas como elementos con comportamiento similar en la misma columna."
    infoTitleText = "Información:"
    gameButtonText = "Jugar";
    languageText = "English";
    hideText = "Ocultar"
    showText = "Mostrar"
    
    if (!String(userLang).includes("es")){
        elementsInfo = [
            "Information regarding these elements is unknown.",
            "Noble gases are a group of chemical elements with very similar properties: for example, under normal conditions, they are monatomic, colorless gases that exhibit very low reactivity. They are located in group 18 of the periodic table.",
            "Hydrogen is the chemical element with atomic number 1, represented by the symbol H. It has an atomic mass of 1.0079.",
            "Alkali metals—or simply 'alkalis'—consist of these six chemical elements: lithium, sodium, potassium, rubidium, cesium, and francium. Together with hydrogen, these elements make up group 1, which is found in the s-block of the periodic table.",
            "Alkaline earth metals are a group of elements located in group 2 of the periodic table; they include beryllium, magnesium, calcium, strontium, barium, and radium. The latter is not always included, as it has a short half-life.",
            "Transition metals are chemical elements located in the central part of the periodic table—the d-block—characterized by the presence of a partially filled d-orbital in their electron configuration.",
            "P-block metals are located in the periodic table between the transition metals (to their left) and the metalloids. Throughout the history of chemistry, they have been referred to by various names, such as post-transition metals, poor metals, or simply 'other metals'.",
            "Along with metals and nonmetals, semimetals (metalloids) constitute one of the three categories of chemical elements, classified according to their bonding and ionization properties.",
            "Nonmetals are chemical elements that are poor conductors of both electricity and heat. They are quite fragile, meaning they cannot be stretched into wires or hammered into sheets.",
            "Lanthanoids—or lanthanides—are a group of elements that are part of period 6 of the periodic table. These elements are called rare earths because they are found in the form of oxides; furthermore, together with the actinides, they make up the inner transition elements.",
            "The actinoids, or actinides, are a group of elements that are part of period 7 of the periodic table. These elements, along with the lanthanides, are known as inner transition elements."
        ];
        tdText1 = "Number = ";
        tdText2 = "\n\nElectron configuration = ";
        titleText = "Periodic table";
        gameTitleText = "Game";
    
        ElementsText = ["Unknown properties", "Noble gases", "Hydrogen", "Alkali metals", "Alkaline earth metals", "Transition metals", "Post-transition metals", "Metalloids", "Reactive nonmetals", "Lanthanides", "Lanthanides"];
        modoNocheText = "Dark mode";
        modoDiaText = "Light Mode";
        periodicTableInfoText = "The periodic table of elements is a tabular arrangement of chemical elements, ordered by their atomic number, electron configuration, and chemical properties. This arrangement reveals periodic trends, such as elements with similar behavior appearing in the same column."
        infoTitleText = "Information:"
        gameButtonText = "Play";
        languageText = "Español";
        hideText = "Hide"
        showText = "Show"
    }
    document.title = titleText;
}

const language = document.getElementById("language")
language.innerText = languageText;

language.addEventListener("click", ()=>{
    if (languageText == "Español"){
        userLang = "es"
        localStorage.setItem("language", userLang);
        location.reload();
    }else{
        userLang = "en"
        localStorage.setItem("language", userLang);
        location.reload();
    }
})

const elementsClass = [".desconegut", ".gasNoble", "#H", ".MetalAlcalin", ".MetalAlcalinoterri", ".metalsTransicio", ".postTransicional", ".metaloides", ".mNoReactius", ".Lantanids", ".Actinids"];
const liElementsNames = ["LiDesconegut", "LiGasNoble", "LiHidrogen", "LiAlcalin", "LiAlcalinoterri", "LiMetalsTransicio", "LiPostTransicio", "LiMetaloides", "LiMNoReactius", "LiLantanids", "LiActinids"];

const infoTitle = document.getElementById("informacionTitulo")
infoTitle.innerText = infoTitleText;

const groupTitle = document.getElementById("GroupTitle");
groupTitle.innerText = titleText;
const groupInfo = document.getElementById("GroupInfo");
groupInfo.innerText = periodicTableInfoText;
const infoDiv = document.getElementById("informacion");
const modoNoche = document.getElementById("modoNoche");
modoNoche.innerText = modoNocheText;

const exitInfo = document.getElementById("exitInfo");

const mainScreen = document.querySelector("main");
const exit = document.getElementById("cross");

exit.innerText = hideText;

const tdElements = document.querySelectorAll("td");
let tdColor = " black";

let correctTd = 0;
let inGame = false;

exitInfo.style.visibility = "hidden";

let mobileMode = false;

tdElements.forEach(td =>{
    if(!td.classList.contains("invisible")){
        td.addEventListener("mouseenter", ()=>{
            td.style.border = "3px solid" + tdColor;
        })
        td.addEventListener("mouseleave", ()=>{
            td.style.border = "1px solid" + tdColor;
        })
        td.addEventListener("click", ()=>{
            const number = td.children;
            if (!inGame){
                document.title = titleText + " - " + td.innerText;
                groupTitle.innerText = td.innerText;
                groupInfo.innerText = tdText1 + number[0].innerText + tdText2 + GetConfiguracionElectronica(number[0].innerText);
            }else{
                if (number[0].innerText == correctTd){
                    groupTitle.innerText = "Correcto!";
                }else{
                    groupTitle.innerText = "Mal!";
                }
                groupInfo.innerText = "";
                setTimeout(()=>{
                    location.reload();
                }, 1500)
            }
            if (mobileMode){
                mainScreen.style.transition = "0s all";
                mainScreen.style.visibility = "hidden";
                infoDiv.style.visibility = "visible";
                exitInfo.style.visibility = "visible";
                infoDiv.style.width = "100%";
                infoDiv.style.left = 0;;
                infoDiv.style.padding = "10px";
                mainScreen.style.transition = "0.3s all ease-in";
            }
        })
    }
})

const elements = {};

for(let i = 0; i < elementsClass.length; i++){
    elements[i] = document.querySelectorAll(elementsClass[i]);
}

const lists = {}

for(let i = 0; i < liElementsNames.length; i++){
    lists[i] = document.getElementById(liElementsNames[i]);
}

for(let i = 0; i < elementsClass.length; i++){

    lists[String(i)].innerText = ElementsText[i];

    lists[String(i)].addEventListener('mouseenter', () => {
        elements[String(i)].forEach(element =>{
            element.style.border = "3px solid"+ tdColor;
        })
    });

    lists[String(i)].addEventListener("click", () => {
            groupTitle.innerText = lists[String(i)].innerText;
            groupInfo.innerText = elementsInfo[String(i)];
            document.title = titleText + " - " + lists[String(i)].innerText;
            if (mobileMode){
                mainScreen.style.transition = "0s all";
                mainScreen.style.visibility = "hidden";
                infoDiv.style.visibility = "visible";
                exitInfo.style.visibility = "visible";
                infoDiv.style.width = "100%";
                infoDiv.style.left = 0;;
                infoDiv.style.padding = "10px";
                mainScreen.style.transition = "0.3s all ease-in";
            }
    });
    
    lists[String(i)].addEventListener('mouseleave', () => {
        elements[String(i)].forEach(element =>{
            element.style.border = "1px solid" + tdColor;
        })
    });
}

const gameButton = document.getElementById("Game")
gameButton.innerText = gameButtonText;
let ranNum

gameButton.addEventListener("click", () =>{
    if(!inGame){
    document.title = titleText + " - " + gameTitleText;
    ranNum = Math.round(Math.random() * (118 - 1) + 1);
    let ranNum2;
        tdElements.forEach(td =>{
            if(!td.classList.contains("invisible")){
                const elNumber = td.children;
                if (elNumber[0].innerText == ranNum){
                    elNumber[0].innerText = ""
                    gameButton.innerText = td.innerText;
                    elNumber[0].innerText = ranNum;
                    elNumber[0].style.color = "black"
                    td.style.backgroundColor = "grey";
                    td.style.color = td.style.backgroundColor;
                    correctTd = ranNum;
                }else{
                    ranNum2 = Math.random() * 1.5;
                    if (ranNum2 < 1){
                        td.style.backgroundColor = "grey";
                        td.style.color = td.style.backgroundColor;
                        elNumber[0].style.color = "black"
                    }
                }
            }
        })
        inGame = true;
    }
});


exitInfo.addEventListener("click", ()=>{
    mainScreen.style.visibility = "visible";
    infoDiv.style.visibility = "hidden";
    exitInfo.style.visibility = "hidden";
})

const header = document.getElementById("header");

let hideHeader = true
exit.addEventListener("click", ( )=>{
    if (!hideHeader){
        header.style.transform = "translateY(0px)";
        mainScreen.style.top = "42px";
        exit.innerText = hideText;
        hideHeader = true;
    }else {
        header.style.transform = "translateY(-42px)";
        mainScreen.style.top = "0px";
        exit.innerText = showText;
        hideHeader = false;
    }
});

const table = document.querySelector("table");

let modoNocheActivated = false;
modoNoche.addEventListener("click", () =>{
    if (!modoNocheActivated){
        document.body.style.backgroundColor = "rgb(33, 33, 33)";
        header.style.backgroundColor = "rgba(56, 56, 56, 1)";
        document.body.style.color = "white";
        exit.style.backgroundColor = "black";
        exit.style.color = "white";
        exit.style.border = "white 1px solid";
        modoNoche.innerText = modoDiaText;
        tdElements.forEach(td =>{
            if(!td.classList.contains("invisible")){
                td.style.border = "rgba(6, 71, 64, 1) solid 1px";
            }
        })
        tdColor = " rgba(14, 80, 73, 1)";
        modoNocheActivated = true;
    }else{
        document.body.style.backgroundColor = "white";
        header.style.backgroundColor = "#eee";
        document.body.style.color = "black";
        exit.style.backgroundColor = "white";
        exit.style.color = "black";
        exit.style.border = "blue 1px solid";
        modoNoche.innerText = modoNocheText;
        tdElements.forEach(td =>{
            if(!td.classList.contains("invisible")){
                td.style.border = "black solid 1px";
            }
        })
        tdColor = " black";
        modoNocheActivated = false;
    }
})

function GetConfiguracionElectronica(number){
    let eList = [];
    let eNumber = 0;
    let bigI = 0;
    const superI = ["\u2070", "\u00b9", "\u00b2", "\u00b3", "\u2074", "\u2075", "\u2076", "\u2077", "\u2078", "\u2079", "\u00b9\u2070", "\u00b9\u00b9", "\u00b9\u00b2", "\u00b9\u00b3", "\u00b9\u2074"];
    const maxE = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6, 2];
    const eNames = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p", "8s"];
    for (let i = 0;i < number ;i++){
        eNumber += 1;
        if (eNumber >= maxE[bigI]){
            eList.push(eNames[bigI] + superI[eNumber] );
            eNumber = 0;
            bigI++
        }
    }
    if (eNumber > 0){
        eList.push(eNames[bigI]+ superI[eNumber]);
    }
    let electrons = ""
    for (let i = 0; i < eList.length; i++){
        electrons =  electrons + eList[i] + " ";
    }
    return electrons;
}

resize()

function resize(){
    infoDiv.style.width = "18%";
    infoDiv.style.left = "80%";
    infoDiv.style.padding = "0px";
    mainScreen.style.visibility = "visible";
    exit.style.left = 95 + "%";
    mainScreen.style.width = "80%";
    infoDiv.style.visibility = "visible";
    exitInfo.style.visibility = "hidden";
    mobileMode = false;
    if (window.innerWidth > 1080){
        table.style.fontSize = "16.5px";
    }else if (window.innerWidth > 800){
        exit.style.left = 92 + "%";
        table.style.fontSize = "15px";
    }else if (window.innerWidth > 600){
        mobileMode = true;
        mainScreen.style.width = "100%";
        infoDiv.style.visibility = "hidden";
        exit.style.left = 90 + "%";
        table.style.fontSize = "12px";
    }else if (window.innerWidth < 600){
        mobileMode = true;
        mainScreen.style.width = "100%";
        infoDiv.style.visibility = "hidden";
        exit.style.left = 87 + "%"; 
        table.style.fontSize = "10px";
    }
}

window.addEventListener("resize", () =>{
    resize();
});