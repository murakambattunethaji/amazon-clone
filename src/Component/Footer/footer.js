import React from 'react'
import './footer.css';
import amazonLogo from '../../Assets/amazonLogo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>
                   
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">About</div>
                        <div className="contentFooterSubTitleCont">Careers</div>
                        <div className="contentFooterSubTitleCont">Pree Releases</div>
                        <div className="contentFooterSubTitleCont">Amazon Science</div>

                    </div>

                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect With Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Instagram</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                        <div className="contentFooterSubTitleCont">Facebook</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money With US</div>
                    <div className="contentFooterSubTitleCont">Sell on Amazon</div>
                    <div className="contentFooterSubTitleCont">Sell under Amazon Accelerator</div>
                    <div className="contentFooterSubTitleCont">Protuct and Build Your Brand</div>
                    <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
                    <div className="contentFooterSubTitleCont">Facebook</div>
                    <div className="contentFooterSubTitleCont">Facebook</div>
                    </div>
                
                <div className="footerCont1">
                    <div className="contentFooterTitle">Lets Us Help You</div>
                    {/* please watch the video for code */}
                </div>
            </div>
            <div className="amazonImg">
                <img className='amazonImgFooter' src={amazonLogo} />
            </div>
        </div>
    )
}

export default Footer