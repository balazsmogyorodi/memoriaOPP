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
      } else {
        this.kattintas();
        this.#kattintasTrigger();
      }
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
      this.#imgElem.attr("src", "kepek/hatter.jpg");
    }
  }

  #kattintasTrigger() {
    window.dispatchEvent(new CustomEvent("KartyaKattintas", { detail: this }));
  }

  kattintas() {
    this.#allapot = !this.#allapot;
    this.#setLap();
  }

  eltuntet() {
    this.#divElem.css("visibility", "hidden");
  }
}

export default Kartya;
