import styled from "styled-components";

const ContainerCard = styled.div`
width: 430px;
margin-bottom: 24px;
position: relative;
justify-content: space-between;
gap: 24px;
`

const Card = ({ titulo,link, descripcion }) => {
  return (
    <>
      <ContainerCard>
        
        <iframe
          width="560"
          height="315"
          src={link}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </ContainerCard>
    </>
  );
};

export default Card;
