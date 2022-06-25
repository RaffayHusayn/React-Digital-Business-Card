import {AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiFillGithub} from 'react-icons/ai';

function Footer(){
    return(
        <footer className="Footer">
            <a href='https://www.twitter.com'><AiFillTwitterSquare className='footer-icon' /></a>
            <a href='https://www.facebook.com'><AiFillFacebook className='footer-icon'/></a>
            <a href='https://www.instagram.com'><AiFillInstagram className='footer-icon'/></a>
            <a href='https://www.github.com'><AiFillGithub className='footer-icon'/></a>
        </footer>
    )
}

export default Footer;