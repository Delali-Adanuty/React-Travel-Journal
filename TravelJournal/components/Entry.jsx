export default function Entry({entry}){
    return(
        <section className="entry">
            <img src={entry.img.src} alt={entry.img.alt} className="card-image"/>
            <div className="content">
                <div className="top">
                    <span>
                        <img src="/src/assets/mapPin.png" alt="map pin png" />
                        <p className="location">{entry.country}</p>    
                    </span>
                    <a href={entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{entry.title}</h2>
                <p className="date">
                    {entry.date}
                </p>
                <p className="content">
                    {entry.text}
                </p>
            </div>
        </section>
    )
}