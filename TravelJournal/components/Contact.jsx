export default function Contact(props){
    return(
        <article className="contact-card">
        <img src={props.img} alt="mount fuji" className="card-image"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="/src/assets/mapPin.png" alt="map pin png" />
                <p>{props.number}</p>
            </div>
            <div className="info-group">
                <img src="/src/assets/mapPin.png" alt="map pin png" />
                <p>{props.email}</p>
            </div>
        </article>
    )
}