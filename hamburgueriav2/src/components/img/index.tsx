import React from "react";
import { BiArchive } from "react-icons/bi";

const ImgIcon = () => {
  return (
    <picture>
      <img src="./src/assets/Logo.svg" alt="Logo BurguerKenzie" />
      <div>
        <div>
          <BiArchive />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </div>
      <div className="ellipseGroup">
        <img src="src/assets/Group 135ellipse.svg" alt="Imagem ellipse" />
      </div>
    </picture>
  );
};

export default ImgIcon;
