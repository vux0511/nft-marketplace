import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../images/store-icon.svg";
import LogoText from "../images/logo-text.svg";
import { RiMenu3Fill } from "react-icons/ri";
import {
    MdClose,
    MdOutlineWallet,
    MdOutlineModeNight,
    MdClear,
} from "react-icons/md";
import { BiUserCircle, BiPencil } from "react-icons/bi";
import {
    AiOutlineShoppingCart,
    AiOutlineEye,
    AiOutlineSetting,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsGrid3X3, BsTrash } from "react-icons/bs";
import LogoMetaMaskIcon from "../images/meta-mask-icon.png";
import LogoGlow from "../images/glow.svg";
import LogoCoinbase from "../images/walletlink-alternative.png";
import LogoWalletConnect from "../images/wallet-icon.png";
import LogoLegder from "../images/ledgerconnect-alternative.webp";

function Header(props) {
    const beforeAddress = props.account;
    let afterAddress = beforeAddress.slice(0, 7);

    function handleToggleMenu() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuClose = document.querySelector(".menu-close");
        const menu = document.querySelector(".header__menu");
        if (!menuToggle || !menu) return;
        menuToggle.addEventListener("click", function() {
            menu.classList.add("is-active");
        });
        menuClose.addEventListener("click", function() {
            menu.classList.remove("is-active");
        });
        document.addEventListener("click", function(e) {
            if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
                menu.classList.remove("is-active");
            }
        });
    }

    return (
        <section className="header">
            <div className="container header__container">
                <Link to="/">
                    <div className="header__logo">
                        <img
                            src={LogoIcon}
                            alt=""
                            className="header__logo-image"
                        />
                        <img
                            src={LogoText}
                            alt=""
                            className="header__logo-text"
                        />
                        <div className="ck"></div>
                    </div>
                </Link>
                <ul className="header__menu">
                    <MdClose className="menu-close" />
                    <li className="header__item">
                        <Link className="header__item-link" to="/category">
                            Marketplace
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__item-link" to="/add">
                            Create
                        </Link>
                    </li>
                    <li className="header__item">
                        <div className="header__button">
                            <button
                                className="header__button-wallet"
                                // onClick={connectWallet}
                            >
                                <MdOutlineWallet className="header__button-wallet-icon" />
                                {props.account
                                    ? `${afterAddress}...`
                                    : "Connect Wallet"}
                            </button>
                            <button className="header__button-user">
                                <BiUserCircle />
                                <ul className="header__button-list">
                                    <Link
                                        to="/profile"
                                        className="header__button-item"
                                    >
                                        <FiUser className="header__button-icon" />
                                        <span>Profile</span>
                                    </Link>
                                    <li className="header__button-item">
                                        <AiOutlineEye className="header__button-icon" />
                                        <span>Watchlist</span>
                                    </li>
                                    <li className="header__button-item">
                                        <BsGrid3X3 className="header__button-icon" />
                                        <span>My Collection</span>
                                    </li>
                                    <Link
                                        className="header__button-item"
                                        to="/add"
                                    >
                                        <BiPencil className="header__button-icon" />
                                        <span>Create</span>
                                    </Link>
                                    <li className="header__button-item">
                                        <AiOutlineSetting className="header__button-icon" />
                                        <span>Setting</span>
                                    </li>
                                    <li className="header__button-item">
                                        <MdOutlineModeNight className="header__button-icon" />
                                        <span>Dark Mode</span>
                                    </li>
                                </ul>
                            </button>
                            <button
                                className="header__button-cart"
                                // onClick={handleToggleCart}
                            >
                                <AiOutlineShoppingCart />
                            </button>
                        </div>
                    </li>
                </ul>
                <RiMenu3Fill
                    className="menu-toggle"
                    onClick={handleToggleMenu}
                />
            </div>
        </section>
    );
}

export default Header;
