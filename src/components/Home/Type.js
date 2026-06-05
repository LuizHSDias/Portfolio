import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudante de Engenharia de Computação",
          "Desenvolvedor Back-end",
          "Desenvolvedor Full Stack",
          "Entusiasta de Engenharia de Software",
          "Desenvolvedor Java",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;