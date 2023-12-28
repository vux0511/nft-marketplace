import React, { useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import Footer from "./Footer";

function Profile({ products, account, purchaseProduct }) {
    return (
        <>
            <section className="wrapper ">
                <img
                    src="https://www.fintechanddigitalassets.com/files/2019/03/Stock-Images-Industry-FinTech-Futuristic-digital-blockchain-background.jpg"
                    alt="background"
                    className="profile__background"
                />
                <div className="container container__profile">
                    <img
                        src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                        alt=""
                        className="profile__avatar"
                    />
                </div>
                <div className="container">
                    <div className="profile__name">Hoàng Văn Vũ</div>
                    <div className="profile__ether">
                        <FaEthereum />
                        <div>0x3fe2324...</div>
                    </div>
                    <div className="profile__create-title">NFT Created</div>
                    <div className=" itemNft__wrapper">
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <>
                                    {product.owner === account ? (
                                        <div className="itemNft" key={index}>
                                            <img
                                                src="https://source.unsplash.com/random/?blockchain,nft"
                                                alt="Image NFT"
                                                className="itemNft__image"
                                            />
                                            <div className="itemNft__info">
                                                <div className="itemNft__name">
                                                    {product.name}
                                                </div>
                                                <div className="itemNft__author">
                                                    <img
                                                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                                                        alt=""
                                                        className="itemNft__author-image"
                                                    />
                                                    <div className="itemNft__author-name">
                                                        @
                                                        {product.owner.slice(
                                                            0,
                                                            7
                                                        )}
                                                        ...
                                                    </div>
                                                </div>
                                                <div className="itemNft__bottom">
                                                    <div className="card__bottom">
                                                        <div className="card__bottom-left">
                                                            <div className="card__left-eth">
                                                                {window.web3.utils.fromWei(
                                                                    product.price.toString(),
                                                                    "Ether"
                                                                )}{" "}
                                                                ETH{" "}
                                                            </div>
                                                            <div className="card__left-title">
                                                                Price
                                                            </div>
                                                        </div>
                                                        <div className="card__bottom-right">
                                                            {product.owner !==
                                                            account ? (
                                                                <button
                                                                    className="button-buy"
                                                                    name={
                                                                        product.id
                                                                    }
                                                                    value={
                                                                        product.price
                                                                    }
                                                                    onClick={(
                                                                        event
                                                                    ) => {
                                                                        purchaseProduct(
                                                                            event
                                                                                .target
                                                                                .name,
                                                                            event
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                >
                                                                    Buy NFT
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    className="button-your-nft"
                                                                    name={
                                                                        product.id
                                                                    }
                                                                    value={
                                                                        product.price
                                                                    }
                                                                    onClick={(
                                                                        event
                                                                    ) => {
                                                                        purchaseProduct(
                                                                            event
                                                                                .target
                                                                                .name,
                                                                            event
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                >
                                                                    Your NFT
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </>
                            ))
                        ) : (
                            <div className="profile__create-title">
                                Empty NFT
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Profile;
