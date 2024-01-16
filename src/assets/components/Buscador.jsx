import { useEffect, useState } from "react";
import MiApi from "./MiApi";

function Buscador() {
    const [climas, setClimas] = useState([]);
    const [filtrar, setFiltrar] = useState("");

const obtenerClima = async () => {
try {
    const url = 'https://api.gael.cloud/general/public/clima';
    const res = await fetch(url);
    const data = await res.json();
    setClimas(data);
} catch (error) {
    console.log(error);
}
}

useEffect(() => {
obtenerClima();
}, []);

const filtrado = (e) => {
setFiltrar(e.target.value);
};

let climasFiltrados = [];

if (filtrar !== "") {
climasFiltrados = climas.filter((clima) =>
    clima.Estacion.toLowerCase().includes(filtrar.toLowerCase())
);
} else {
climasFiltrados = climas;
}

return (
<div>
    <MiApi climas={climasFiltrados} />
</div>
);
}

export default Buscador;
