const about= "Thorfinn (トルフィン, Torufin), also nicknamed Karlsefni, is the main protagonist of the manga and anime, Vinland Saga. He is a former warrior of Askeladd's band, and the son of Thors, the most famous Jomsviking warrior until his defection. Thorfinn is related to the leadership of the Jomsvikings through his mother Helga, who is the daughter of Chief Sigvaldi and the nephew of Thorkell."
function About(){
    return(
        <div>
            <h3 className="body-heading">About</h3>
            <p className="body-text">
                {about}
            </p>
        </div>
    )
}

export default About;