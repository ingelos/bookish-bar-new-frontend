import './Footer.css'
import Copyright from '../../assets/copyright.svg'

function Footer() {
    return (
         <footer>
            <div className='footer-container'>
                <div className='about-info'>
                    <p className='about-content'>Bookish Bar</p>
                    <img src={Copyright} id='copyright-icon' alt='copyright-icon'/>
                    <p>created by Inge Los</p>
                </div>
                <div className='attribution'>
                    <p>All book data is from Open Library API, go to their website <a href="https://openlibrary.org" id='library-link' target='_blank'>here</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;