import './contact.css';

const Social = [
    {link: 'https://www.linkedin.com/in/nicolas-galeano/', srcIMG:"src-linkedin"},
    {link: 'https://github.com/ngaleano13', srcIMG:"src-github"},
]

export const Contact = () => {
    return(
        <div id="contact" className="bg-contact d-flex flex-column justify-content-center align-items-center text-light gap-5 py-5">
            <h1 className='h1-custom'>Contactame</h1>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-4 mx-2'>
            {Social.map((social, index)=>(
                <Socials link={social.link} srcIMG={social.srcIMG} key={index}></Socials>
            ))}
            </div>
        </div>
    )
}

const Socials = ({link, srcIMG}) =>{
    return(
            <a href={link} className={'icondefault ' + srcIMG}></a>
    )
}