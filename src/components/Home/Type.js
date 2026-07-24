import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Back-end",
          "Java • Spring Boot",
          "Desenvolvedor Full Stack",
          "Estudante de Engenharia de Computação",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;