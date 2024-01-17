import { useEffect, useState } from "react";
import Buscador from "./Buscador";

function MiApi(climasFiltrados) {
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



return (
<div>
    <Buscador climas={climasFiltrados} />
</div>
);
}

export default MiApi;
