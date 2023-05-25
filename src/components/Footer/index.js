import './footer.css'

export const Footer = () => {
    return (<footer className="footerItem">
       <section>
       <ul>
            <li>
                <a href="https://linkedin.com/in/victor-oliveira-santos-b10bb81ab/" target="_blank" rel="noreferrer">
                    <img src="/images/linkedin.svg" alt="Linkedin Victor" />
                </a>
            </li>
            <li>
                <a href="https://github.com/victorevh" target="_blank" rel="noreferrer">
                    <img src="/images/github.svg" alt="Github Victor" />
                </a>
            </li>
            <li>
                <a href="https://facebook.com/victor.oliveirasantos" target="_blank" rel="noreferrer">
                    <img src="/images/fb.svg" alt="Facebook Victor" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/victorevh" target="_blank" rel="noreferrer">
                    <img src="/images/tw.svg" alt="Twitter Victor" />
                </a>
            </li>
            <li>
                <a href="https://instagram.com/victorevh" target="_blank" rel="noreferrer">
                    <img src="/images/ig.svg" alt="Instagram Victor" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/images/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Victor Santos
        </p>
       </section>
    </footer>)
}