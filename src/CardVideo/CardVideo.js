import { BoxPaginaPrincipal,Imagem,Titulo} from "../style";

function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPaginaPrincipal onClick={reproduzVideo}>
      <Imagem src={props.image1} alt={props.textoAlternativo} />
      <Titulo>{props.titulo}</Titulo>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
