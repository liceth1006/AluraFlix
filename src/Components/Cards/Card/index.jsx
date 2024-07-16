const Card = ({ titulo, categoria, imagen, link, descripcion }) => {
  return (
    <>
      <div>
        <button>{categoria}</button>
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
      </div>
    </>
  );
};

export default Card;
