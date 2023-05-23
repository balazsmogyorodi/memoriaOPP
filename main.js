import lapok from "./adatok.js";
import JatekTer from "./jatekTer.js";

const adatlista = lapok();


$(function () {
    new JatekTer(adatlista);
});



