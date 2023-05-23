import Kartya from "./kartya.js";

class JatekTer {
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];
    constructor(kartyaLista) {
        this.#kartyaLista = kartyaLista;
        this.#init();
        $(window).on("KartyaKattintas", (event) => {
            this.#kivalasztottKartyaLista.push(event.detail);
            console.log(this.#kivalasztottKartyaLista);
            this.#ellenorzes();
        });



    }

    #init() {
        this.#kivalasztottKartyaLista = [];
        this.#kever();
        const szuloElem = $("article");
        szuloElem.empty();
        for (let index = 0; index < this.#kartyaLista.length; index++) {
            const kartya = new Kartya(this.#kartyaLista[index], szuloElem);
        }
    }

    #kever() {
        console.log(this.#kartyaLista);
        this.#kartyaLista.sort(function () {
            return 0.5 - Math.random();
        });



    }

    #ellenorzes() {
        if (this.#kivalasztottKartyaLista.length == 2) {
            this.#triggerBlocked();
        } else {
            if (this.#kivalasztottKartyaLista[0].getFajlnev() === this.#kivalasztottKartyaLista[1].getFajlnev()) {
                console.log("megvan")

                
                this.#kivalasztottKartyaLista.splice(0, 2);
                this.#triggerUnBlocked();
            }
            else {
                setTimeout(() => {
                    this.#kivalasztottKartyaLista[0].kattintas();
                    this.#kivalasztottKartyaLista[1].kattintas();
                    this.#kivalasztottKartyaLista.splice(0, 2);
                    this.#triggerUnBlocked();


                }, 1000);
            }
        }


    }

    #triggerBlocked() {
        window.dispatchEvent(new Event("gameBlocked"));
        console.log("blokkolt")


    }

    #triggerUnBlocked() {
        window.dispatchEvent(new Event("gameUnBlocked"));
        console.log("nem blokkolt")




    }






}


export default JatekTer;