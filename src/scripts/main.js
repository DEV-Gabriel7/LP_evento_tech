AOS.init();

// 26/12/2025 às 19hrs. 
const dataDoEvento = new Date("Dec 26, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contadorAteEvento = setInterval (function () {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const contadorDistancia = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;


    const diasAteEvento = Math.floor(contadorDistancia / diasEmMs);
    const horasAteEvento = Math.floor((contadorDistancia % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((contadorDistancia % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((contadorDistancia % minutosEmMs) / 1000);

    const cronometro = document.getElementById("contador");
    cronometro.innerHTML = `${diasAteEvento}d ${horasAteEvento}hrs ${minutosAteEvento}m ${segundosAteEvento}s`
}, 1000)