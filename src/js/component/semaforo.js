import React, {
    useState
} from "react";

export const Semaforo = () => {
    let [state, setState] = useState({
        rojo: "Luzroja",
        amarillo: "Luzamarilla",
        verde: "Luzverde"
    });

    return ( <
        div className = "d-flex flex-column align-items-center" >
        <
        div className = "container mt-4" >
        <
        div className = {
            state.rojo
        }
        onClick = {
            () =>
            setState({
                rojo: "LuzrojaSelected",
                amarillo: "Luzamarilla",
                verde: "Luzverde"
            })
        }
        /> <
        div className = {
            state.amarillo
        }
        onClick = {
            () =>
            setState({
                rojo: "Luzroja",
                amarillo: "LuzamarillaSelected",
                verde: "Luzverde"
            })
        }
        /> <
        div className = {
            state.verde
        }
        onClick = {
            () =>
            setState({
                rojo: "Luzroja",
                amarillo: "Luzamarilla",
                verde: "LuzverdeSelected"
            })
        }
        /> < /
        div > <
        /div>
    );
};