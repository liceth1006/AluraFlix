import styled from "styled-components";
import BannerImg from "./Banner.png";
import BannerCard from "./BannerCard";

const FigureStyle = styled.figure`
  max-width: 100%;
  min-height: 550px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${BannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

const GradientStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 18, 51, 0.5), rgba(0, 18, 51, 0.5));
  z-index: 2;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  /* max-width: 200px; */
  padding: 0 64px;
`;

const Banner = () => {
  return (
    <FigureStyle>
      <ImageContainer />
      <GradientStyle />
      <ContentContainer>
        <BannerCard />
      </ContentContainer>
    </FigureStyle>
  );
};

export default Banner;
