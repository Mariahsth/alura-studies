import React from "react";
import "./style.scss";

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: React.ReactNode
}

function Botao({ onClick, type, children } : Props) {
  return (
    <button 
    onClick={onClick} 
    type={type} 
    className="botao">
      {children}
    </button>
  );
}


export default Botao;
