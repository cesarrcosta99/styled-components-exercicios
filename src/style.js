import styled from "styled-components";


export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Cabecalho = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
    width:93%;
`
export const CorpoPrincipal = styled.main`
    min-height: 80%;
    display: flex;
`

export const MenuVertical = styled.nav`
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
`
export const BotaoMenuVertical = styled.li`
    list-style-type: none;
`

export const PainelVideos = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
`

export const BoxPaginaPrincipal = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: stretch;
` 

export const Footer=styled.footer`
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px; 
`

 export const Imagem=styled.img`
    width: 100%;
    height: 200px;
 `

 export const Titulo=styled.h4`
   margin-left: 20px;
 `

 