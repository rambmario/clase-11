export default function Video(props) {
    return (
        <>
            <video src={props.url} width={props.width} height={props.height} controls> </video>
        </>
    );
}