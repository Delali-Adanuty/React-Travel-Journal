export default function Joke(props){
    return(
        <section>
            <p className="setup">{props.setup}</p>
            <p className="punchline">{props.punchline}</p>
        </section>
    )
}