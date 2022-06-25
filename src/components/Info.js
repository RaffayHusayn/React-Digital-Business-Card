import {AiFillLinkedin } from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
function Info(){
    return(
        <div className="info-section">
            <img src="https://images-na.ssl-images-amazon.com/images/I/719dTXiBb3L._RI_.jpg" alt="vinland saga" id="info-image"/>
            <h2 id="info-name">Thorfinn (トルフィン)</h2>
            <h4 id="info-profession">Viking Assassin</h4>
            <a href="_blank" id="info-website">iwanttokillaskeladd.com</a>
            <div className='btn-container'>
                <button className="info-btn" ><MdEmail className='btn-icon'/>Email</button>
                <button className="info-btn" id='info-linkedin-btn'><AiFillLinkedin className='btn-icon'/>Linkedin</button>
            </div>
        </div>
    )
}

export default Info;