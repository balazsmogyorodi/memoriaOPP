class Kartya {
    #fajlnev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;
    constructor(fajlNev, szuloElem) {
        console.log(fajlNev);
        this.#fajlnev = fajlNev;


        szuloElem.append(`<div class="kartya">
        <img src="" alt="kép"> </div>`);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img");

        this.#allapot = false;
        this.#setLap();
        this.#blokkolt = false;
        this.#divElem.on("click", () => {
            if (this.#blokkolt) {
                return;
            }
            this.kattintas();
            this.#kattintasTrigger();
        });

    }


    setAllapot() {
        $(window).on("gameBlocked", () => {
            this.#blokkolt = true;
        });
        $(window).on("gameUnBlocked", () => {
            this.#blokkolt = false;
        });
    }

    getFajlnev() {
        return this.#fajlnev;
    }

    #setLap() {
        if (this.#allapot) {
            this.#imgElem.attr("src", this.#fajlnev);
        } else {
            this.#imgElem.attr("src", "kepek/hatter.jpg")
        }
    }

    #kattintasTrigger() {
        let esemeny = new CustomEvent("KartyaKattintas", {
            detail: this,
        });
        window.dispatchEvent(esemeny);
    }

    kattintas() {
        this.#allapot = !this.#allapot;
        this.#setLap();
    }

    etluntet() {
        this.#divElem.css("visibility", "hidden");
    }





}

export default Kartya;