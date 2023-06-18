import {css} from '@emotion/react'
import styled from '@emotion/styled'

const pinkStyle = css`
  color: hotpink;
`
const TituloNaranja = styled.h1`
  color: orange;
  font-size: 8px;
`
const TituloVerde = styled.h1`
  color: green;
  font-size: 10px;
`
export default function DEstilosEjemplo() {
    return (
        <>
            {/*<p className={*/}
            {/*    style*/}
            {/*}>Hola pink</p>*/}
            <TituloNaranja>Titulo 1</TituloNaranja>
            <TituloVerde>Titulo 2</TituloVerde>
            <div className={pinkStyle as unknown as string}>
                Texto pink
            </div>
        </>
    )
}