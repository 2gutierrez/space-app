import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"
import Tags from "./Tags"

const GaleriaContainer = styled.div`
    display: flex;
`
const SeccionFluida =styled.section`
    flex-grow: 1;
`

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = ({ fotos = [], setTag, fotoSelecionada, alAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                    <Titulo>Navega por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen foto={foto} key={foto.id} alSolicitarZoom={fotoSelecionada} alAlternarFavorito={alAlternarFavorito} />)}
                    </ImagenesContainer>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria
