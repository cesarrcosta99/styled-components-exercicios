import React from "react";
import CardVideo from "./CardVideo/CardVideo";
/* import "./styles.css"; */
import { GlobalStyle } from "./GlobalStyle";
import { TelaInteira,Cabecalho,CorpoPrincipal,MenuVertical,BotaoMenuVertical,PainelVideos,Footer} from "./style";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
     {/*  <GlobalStyle/> */}
      <TelaInteira>
        <Cabecalho>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Cabecalho>

        <CorpoPrincipal>
          <MenuVertical>
            <ul>
              <BotaoMenuVertical>Início</BotaoMenuVertical>
              <BotaoMenuVertical>Em alta</BotaoMenuVertical>
              <BotaoMenuVertical>Inscrições</BotaoMenuVertical>
              <hr />
              <BotaoMenuVertical>Originais</BotaoMenuVertical>
              <BotaoMenuVertical>Histórico</BotaoMenuVertical>
            </ul>
          </MenuVertical>

          <PainelVideos>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </PainelVideos>
        </CorpoPrincipal>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </TelaInteira>
    </div>
  );
}
