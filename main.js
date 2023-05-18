import lapok from "./adatok.js";
import JatekTer from "./JatekTer.js";

const adatlista = lapok();


$(function () {
    new JatekTer(adatlista);
});



