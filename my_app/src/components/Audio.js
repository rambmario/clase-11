export default function Audio(props) {
    return (
        <div>
            <audio controls>
                <source src={props.url}>
                </source>
            </audio>
        </div>
    );
}