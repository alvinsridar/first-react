function Welcome(props) {
    return <div style={{border:"2px gold solid"}}>
        <h1>Greetings, {props.name}.</h1>
        <p>Your queue number is {props.qNumber}.</p>
        <p>The current queue number is {props.qNumber - 1}.</p>
        </div>;
}

export default Welcome;