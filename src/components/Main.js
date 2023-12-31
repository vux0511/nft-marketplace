import React from "react";
import Banner from "./Banner";
import Wallet from "./Wallet";
import TopCollection from "./TopCollection";
import Footer from "./Footer";
import Subcribe from "./Subcribe";

const Main = ({ products, account, purchaseProduct }) => {
    return (
        <>
            <Banner />
            <Wallet />
            <TopCollection />

            <div className="container itemNft__wrapper">
                {products.map((product, index) => (
                    <>
                        {product.owner !== account ? (
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
                                            @{product.owner.slice(0, 7)}
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
                                                {product.owner !== account ? (
                                                    <button
                                                        className="button-buy"
                                                        name={product.id}
                                                        value={product.price}
                                                        onClick={(event) => {
                                                            purchaseProduct(
                                                                event.target
                                                                    .name,
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                    >
                                                        Buy NFT
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="button-your-nft"
                                                        name={product.id}
                                                        value={product.price}
                                                        onClick={(event) => {
                                                            purchaseProduct(
                                                                event.target
                                                                    .name,
                                                                event.target
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
                ))}
            </div>

            <Subcribe />
            <Footer />
        </>
    );
};

export default Main;
