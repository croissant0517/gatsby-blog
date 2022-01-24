import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const IntroduceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
`

const IntroduceContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Introduce = () => {
    return (
        <IntroduceContainer>
            <StaticImage src="../images/5565F4C7-E1EB-4CA1-88D3-E7289FEDB336.png" alt="my-photo" width={87} height={87}/>
            <IntroduceContent>
                <span>Personal blog by <a href="https://github.com/croissant0517">Vic Chang</a></span>
                <span>The only thing I know, is that I know nothing.</span>
            </IntroduceContent>
        </IntroduceContainer>
    )
}

export default Introduce;