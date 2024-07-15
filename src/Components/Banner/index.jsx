import styled from "styled-components"
import BannerImg from './Banner.png'

const FigureStyle = styled.figure`
background-image: url(${BannerImg});
max-width: 100%;
min-height: 832px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
margin: 0;
position: relative;
`
const GradientStyle = styled.div`
width: 100%;
height: 100%;
background-color: #001233;
opacity: 0.5;
position: absolute;

`
const DivEstilizado = styled.div`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = () =>{
return(
  <FigureStyle>
    <GradientStyle/>
 <DivEstilizado>
  <h2>Challenge React</h2>
 </DivEstilizado>
  </FigureStyle>
)

}

export default Banner