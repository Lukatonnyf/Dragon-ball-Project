import "./card.css";
import SorteioRaca from "./sorteioRaca.jsx";
// import { useState } from "react";

function Card() {
  // function user(e) {
  //   e.preventDefault();
  //   console.log(name);
  // }
  // const [name, setName] = useState();

  return (
    <>
      <div className="container">
        <div className="card-header">
          <h1>DRAGON BOLL</h1>
        </div>
        {/* form */}
        <div className="input-boxs">
          <form className="create-guerreiro">
            {/*onSubmit={user}*/}
            <input
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="off"
              // onChange={(e) => setName(e.target.value)}
            />
            {/*  ref={inputName}  */}
            {/* input age */}
            <input
              name="age"
              type="number"
              placeholder="Idade do seu guerreiro"
            />
          </form>

          <SorteioRaca />
        </div>
      </div>
    </>
  );
}

export default Card;
