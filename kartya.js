class Kartya {
    #fajlnev;
    #allapot;
    #blokklt;
    #divElem;
    #imgElem;
    constructor(fajlNev, szuloElem) {
        this.#fajlnev = fajlNev;

        szuloElem.append(`<div class="kartya">
        <img src="" alt="kép"> </div>`);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img");

        this.#allapot = false;
        this.#setLap();

        this.#divElem.on("click", () =>{
            this.kattintas();
            this.#kattintasTrigger();
        });

 



    }


    setAllapot() {

    }

    getFajlnev() {

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





}

export default Kartya;