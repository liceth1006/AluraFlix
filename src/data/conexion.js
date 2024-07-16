const URL_BASE = "http://localhost:3001/";

async function getCategorias(){
  const response = await fetch(`${URL_BASE}categorias`)
  const data = response.json()
  return data
}

async function getVideos() {
  const response = await fetch(`${URL_BASE}videos`);
  const data = await response.json();
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
  const response = await fetch(`${URL_BASE}videos/${id}`,{
    method:"DELETE",
      headers:{'content-type': 'application/json'},
    });
  const data = await response.json();
  return data;
}

export const conexion = {
  getVideos,
  postVideos,
  getCategorias,
  deleteVideos
};
