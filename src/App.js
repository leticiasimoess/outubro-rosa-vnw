import styled, { createGlobalStyle } from "styled-components";
import logo from "./assets/logo.png";
import background from "./assets/background.png";

import cancer from "./assets/cancer.png";

import { useState } from "react";

const EstiloGlobal = createGlobalStyle`
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
  font-family: "Caveat", cursive;
}
`;

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffa0d9;
  height: 20vh;
`;
const Imagem = styled.img`
  width: 8vw;
`;

const NavBar = styled.nav`
  ul {
    font-weight: 400;
    font-style: italic;
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 56vw;
    font-size: 24px;
    color: #ffffff;
  }
`;

const Main = styled.main`
  p {
    font-size: 19px;
    font-style: italic;
    font-weight: normal;
    margin: 8px;
    border-radius: 60px;
    background: #ffa0d9;
    height: 12vh;
    width: 37vw;
    display: flex;
    align-items: center;
    justify-content: justify;
    padding: 26px;
    /* Estilos para o número */
    ::first-child {
      font-weight: normal; /* Remova a negrito apenas para o número */
    }
  }
`;

const Texto = styled.h2`
  h2 {
    color: #ffa0d9;
    font-size: 29px;
    width: 36vw;
    height: 10vh;
    margin: 50px;
    font-style: italic;
    font-weight: normal;
  }
`;

const Numeros = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: flex-start; /* Alinhe os itens à esquerda */
`;

const Numero = styled.span`
  /* Estilos para o número */
  font-weight: bold;
  font-size: 30px;
  color: #000;
  margin-right: 28px; /*espaçamento entre numero e texto*/
  font-family: Caveat;
`;

const ImageContainer = styled.div`
  img {
    width: 55vw;
    height: auto;
    float: right;
    position: relative;
    margin-top: -500px;
  }
`;

const Footer = styled.footer`
  background-color: #ffa0d9;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffa0d9;
  height: 17vh;
  margin-top:70px;
  margin-
`;

const Figure = styled.figure`
  img {
    width: 11vw;
    height: auto;
  }
`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 20px;
  font-style: italic;
  text-decoration-line: underline;
  margin: 30px;
  flex: 1;
  text-align: ${(props) => (props.alignRight ? "right" : "left")};
`;

export default function App() {
  const [numeros, setNumeros] = useState(["1", " 2", " 3", " 4", " 5"]);

  const sintomas = [
    "Nódulo palpável na mama.",
    "Pele avermelhada ou retraída, sem resposta a tratamentos tópicos;",
    "Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção;",
    "Dor ou inchaço em parte ou na totalidade das mamas;",
    "Nódulos cervicais ou na axila.",
  ];

  return (
    <>
      <EstiloGlobal />
      <Header>
        <Imagem src={logo} alt="" />
        <NavBar>
          <ul>
            <li>Cartilha</li>
            <li>Folheto colo do útero</li>
            <li>Folheto mama</li>
            <li>Kit Materiais</li>
          </ul>
        </NavBar>
      </Header>
      <Main>
        <Texto>
          <h2>
            Os principais sinais de alerta ou sintomas do câncer de mama são:
          </h2>
        </Texto>

        <Numeros>
          {numeros.map((numero) => (
            <p key={numero}>
              <Numero>{numero}</Numero> {sintomas[numero - 1]}
            </p>
          ))}
        </Numeros>
        <ImageContainer>
          <Imagem src={background} alt="Imagem" />
        </ImageContainer>
      </Main>
      <Footer>
        <Paragraph>
          <p>Instituto Nacional de Câncer - INCA</p>
        </Paragraph>
        <Figure>
          <Imagem src={cancer} alt="" />
        </Figure>
        <Paragraph>
          <p>Instituto Nacional de Câncer - INCA</p>
        </Paragraph>
      </Footer>
    </>
  );
}
