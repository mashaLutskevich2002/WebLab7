import React, { useEffect } from "react";


function Header(props) {

  function ChangeColor() {
    const educ = document.getElementById("education");
    const hobbi = document.getElementById("hobbi");
    educ.style.color = "green";
    educ.style.backgroundColor = "yellow";
    hobbi.style.color = "yellow";
    hobbi.style.backgroundColor = "green";
  }

  return (
    <div>
      <section>
        <h2 id="hobbi" onClick={ChangeColor}>Луцкевич Марія Едуардівна</h2>
        <p id="education" onClick={ChangeColor}>Місце народження: Волочиськ, 27.07.2002</p>
        <p>
          Освіта: CЗШ №16 - Сєвєродонецький багатопрофільний ліцей - КПІ
        </p>
      </section>
    </div>
  );
}

export default Header;
