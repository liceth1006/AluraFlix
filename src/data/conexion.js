const URL_BASE = "http://localhost:3001/videos";

async function getVideos() {
  const response = await fetch(URL_BASE);
  const data = await response.json();
console.log("conexion",data)
  return data;
}

async function postVideos(titulo, categoria, imagen, link, descripcion) {
  const response = await fetch(URL_BASE, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      titulo: titulo,
      categoria: categoria,
      imagen: imagen,
      link: link,
      descripcion: descripcion,
    }),
  });
  const data = response.json()
  return data
}

async function deleteVideos(id) {
  const response = await fetch(`${URL_BASE}/${id}`);
  const data = await response.json();
  return data;
}

export const conexion = {
  getVideos,
  postVideos,
  deleteVideos
};
