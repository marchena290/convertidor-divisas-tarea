const btnDropdown = document.querySelector("button[data-bs-toggle='dropdown']");
const btnMonedaColones = document.querySelector("#moneda-a-colones");
const btnColonesMoneda= document.getElementById("colones-a-moneda");

const inputValorMoneda = document.getElementById("valor-moneda");
// tomar referencia del input de colones
const inputValorColones = document.getElementById("valor-colones");

const limpiarInput = document.getElementById("clearbutton");


const liEUR = document.getElementById("eur");
const liUSD = document.getElementById("usd");
const liGTQ = document.getElementById('gtq');
const liMXM = document.getElementById('mxm');
const liLPA = document.getElementById('lpa');


//tipos de cambio
const TIPO_CAMBIO_DOLAR_COLONES = 514.26;
const TIPO_CAMBIO_EURO_COLONES = 558.70;
const TIPO_CAMBIO_QUETZAL_COLONES = 68.07;
const TIPO_CAMBIO_PESOS_COLONES = 30.15;
const TIPO_CAMBIO_LEMPIRA_COLONES = 21.40;



let monedaSeleccionada = 'USD';

liEUR.addEventListener('click', () => {
    btnDropdown.innerText = 'Euro';
    btnMonedaColones.innerText = 'Euro a Colones';
    btnColonesMoneda.innerText = 'Colones a Euros';
    monedaSeleccionada = 'EUR';
});

liUSD.addEventListener('click', () => {
    btnDropdown.innerText = 'Dolar';
    btnMonedaColones.innerText = 'Dólares a Colones';
    btnColonesMoneda.innerText = 'Colones a Dólares';
    monedaSeleccionada = 'USD';
});

liGTQ.addEventListener('click', () => {
    btnDropdown.innerText = 'Quetzal';
    btnMonedaColones.innerText = 'Quetzales a Colones';
    btnColonesMoneda.innerText = 'Colones a Quetzales';
    monedaSeleccionada = 'GTQ';
}); 

liMXM.addEventListener('click', () => {
    btnDropdown.innerText = 'Pesos';
    btnMonedaColones.innerText = 'Pesos a Colones';
    btnColonesMoneda.innerText = 'Colones a Pesos';
    monedaSeleccionada = 'MXM';
});

liLPA.addEventListener('click', () => {
    btnDropdown.innerText = 'Lempiras';
    btnMonedaColones.innerText = 'Lempiras a Colones';
    btnColonesMoneda.innerText = 'Colones a Lempiras';
    monedaSeleccionada = 'LPA';
});


// Crear evento para btnMoneadaColones donde imprima por consola el valor de moneadaSeleccionada

btnMonedaColones.addEventListener('click', () => {
    const valorMoneda =  inputValorMoneda.value; // extraer valor del input: string

    if(valorMoneda.length === 0 || parseInt(valorMoneda) < 0){ // si no hay nada en el input o el  valor es menor que 0
        alert('El valor no es correcto');
        return;// aqui acaba la funcion
    }

    // "5.4 => 5 = usando parseInt"
    // "5.4 => 5.4 = usando parseFloat"
    const valorMonedaParseado = parseFloat(valorMoneda); // parsear el valor del input, de string a number 

    let result = 0;

    //switch
    switch (monedaSeleccionada){
        case "USD":
            result = valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES;
            break;

        case "EUR":
            result = valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
            break;

        case 'GTQ':
            result = valorMonedaParseado * TIPO_CAMBIO_QUETZAL_COLONES;
            break;

        case 'MXM':
            result = valorMonedaParseado * TIPO_CAMBIO_PESOS_COLONES;
            break;
        
        case 'LPA':
            result = valorMonedaParseado * TIPO_CAMBIO_LEMPIRA_COLONES;
            break;

        default:
            console.error('Moneda no encontrada')
    }

    inputValorColones.value = result.toFixed(2);
});

//De colones a x moneada

btnColonesMoneda.addEventListener('click', () => {
    const colonesValor = inputValorColones.value

    if(colonesValor.length === 0 || parseInt(colonesValor) < 0){ 
        alert('El valor no es correcto');
        return;

    }

    const colonesValorParseado = parseInt(colonesValor);

    let result = 0;

    switch (monedaSeleccionada) {
        case "USD":
            result = colonesValorParseado / TIPO_CAMBIO_DOLAR_COLONES;
            break;
        
        case "EUR":
            result = colonesValorParseado / TIPO_CAMBIO_EURO_COLONES;
            break;

        case "GTQ":
            result = colonesValorParseado / TIPO_CAMBIO_QUETZAL_COLONES;
            break;
            
        case "MXM":
            result = colonesValorParseado / TIPO_CAMBIO_PESOS_COLONES;
            break;
        
        case "LPA":
            result = colonesValorParseado / TIPO_CAMBIO_LEMPIRA_COLONES;
            break;
            
        default:
            console.error('Moneda no encontrada');
    }

    inputValorMoneda.value = result.toFixed(2);
});

limpiarInput.addEventListener('click', () => {

    inputValorMoneda.value = innerText = " ";
    inputValorColones.value = innerText = " ";
    
})