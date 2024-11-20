import "./sorteio.css";
// import Card from "./card";

// IMPORT IMAGES

import defaultImg from "../imgs/racas-img/default.jpg";
import racaFreeza from "../imgs/racas-img/racafreezar.png";

function SorteioRaca() {
  // funcion sorteio
  function sorteio() {
    const sayajin = {
      nome: "Sayajin",
    };

    const majin = {
      nome: "Majin",
    };

    const namekuseijin = {
      nome: "Namekuseijin",
    };

    const supremoKaioshin = {
      nome: "Supremo Kaioshin",
    };

    const android = {
      nome: "Android",
    };

    const freeza = {
      nome: "Freeza",
      img: racaFreeza,
    };

    // objeto com as raças
    const racas = [
      sayajin,
      majin,
      namekuseijin,
      supremoKaioshin,
      android,
      freeza,
    ];

    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

    // let boxImage = document.getElementById("img-raca");

    // console.log(racas[random(0, racas.length)]);
    // let imgRacaImage = freeza.img;
    // console.log("a img é " + imgRacaImage);

    const textRaca = racas[random(0, racas.length)];
    document.getElementById("text-raca").innerHTML =
      racas[random(0, racas.length)];
    console.log(textRaca);
  }

  return (
    <>
      <div className="box-image-raca">
        <button type="button" onClick={sorteio}>
          sortear Raça
        </button>

        <img src={defaultImg} id="img-raca" alt="" className="raca-image" />
        <p id="text-raca">Sua raça é: </p>
      </div>
    </>
  );
}
export default SorteioRaca;
