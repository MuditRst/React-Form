import React from "react";
import footerImg from '../images/footer.png'

function Footer(){
    return <div className="text-gray-500 font-medium py-8 text"><p className="relative -right-8">Powered by</p><img className="footerImg relative -top-10 -right-36" src={footerImg} alt="footerImg"/></div>
}

export default Footer;