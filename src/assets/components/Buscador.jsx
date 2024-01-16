import { useEffect, useState } from "react";


function Buscador() {
    const [climas, setClimas] = useState([]);
    const [filtrar, setFiltrar] = useState('')

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
            <h5>Busca tu ciudad:</h5>
            <input type="text" value={filtrar} placeholder="Introduce tu ciudad" onChange={filtrado}/>
            {/* Table de Bootstrap */}
            <table className="table table-hover table-striped-columns table-primary">
                <thead>
                    <tr>
                        <th>CIUDAD</th>
                        <th>HORA</th>
                        <th>TEMPERATURA</th>
                        <th>HUMEDAD AMBIENTE</th>
                        <th>ESTADO ACTUAL</th>
                    </tr>
                </thead>
                <tbody>
                    {climasFiltrados.map(({Codigo, Estacion,HoraUpdate,Temp,Humedad,Estado}) => (
                        <tr key={Codigo}>
                            <td>{Estacion}</td>
                            <td>{HoraUpdate}</td>
                            <td>{Temp}°</td>
                            <td>{Humedad}%</td>
                            <td>{Estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Buscador;
