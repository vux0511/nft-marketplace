import React from "react";
import LogoIcon from "../images/store-icon.svg";
import LogoText from "../images/logo-text.svg";

function Footer() {
    return (
        <section className="footer">
            <div className="container footer__container">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <a href="" className="footer__logo">
                            <img
                                src={LogoIcon}
                                alt=""
                                className="footer__logo-icon"
                            />
                            <img
                                src={LogoText}
                                className="footer__logo-text"
                                alt=""
                            />
                        </a>
                        <div className="footer__desc">
                            The Leading NFT Marketplace On Ethereum Home To The
                            Next Generation Of Digital Creators. Discover The
                            Best NFT Collections.
                        </div>
                        <div className="footer__social">
                            <img
                                src="images/DiscordLogo.svg"
                                alt=""
                                className="footer__social-image"
                            />
                            <img
                                src="images/TwitterLogo.svg"
                                alt=""
                                className="footer__social-image"
                            />
                            <img
                                src="images/InstagramLogo.svg"
                                alt=""
                                className="footer__social-image"
                            />
                            <img
                                src="images/YoutubeLogo.svg"
                                alt=""
                                className="footer__social-image"
                            />
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">Marketplace</div>
                        <a href="" className="footer__link">
                            Explore
                        </a>
                        <a href="" className="footer__link">
                            Articles
                        </a>
                        <a href="" className="footer__link">
                            How it Works
                        </a>
                        <a href="" className="footer__link">
                            Help
                        </a>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">Marketplace</div>
                        <a href="" className="footer__link">
                            Explore
                        </a>
                        <a href="" className="footer__link">
                            Articles
                        </a>
                        <a href="" className="footer__link">
                            How it Works
                        </a>
                        <a href="" className="footer__link">
                            Help
                        </a>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">Links</div>
                        <a href="" className="footer__link">
                            Tokens
                        </a>
                        <a href="" className="footer__link">
                            API
                        </a>
                        <a href="" className="footer__link">
                            Big Bounty
                        </a>
                        <a href="" className="footer__link">
                            Become Partners
                        </a>
                    </div>
                </div>
                <div className="footer__copyright">
                    <img
                        src="images/copyright.svg"
                        alt=""
                        className="footer__copyright-img"
                    />
                    2022 eNDFT. all Right Reserved
                </div>
            </div>
        </section>
    );
}

export default Footer;
