import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudante de Engenharia de Computação",
          "Desenvolvedor Java",
          "Desenvolvedor Spring Boot",
          "Desenvolvedor Web",
          "Desenvolvedor Full Stack",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;