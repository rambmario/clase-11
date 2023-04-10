export default function Saludo(props) {
    return (
        <div>
            <h2>Esto es un saludo para {props.texto} tienes {props.edad} anios</h2>
        </div>
    );
}
