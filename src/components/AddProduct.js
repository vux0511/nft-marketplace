import React, { useRef, useState } from "react";
import Footer from "./Footer";

const AddProduct = ({ products, account, createProduct }) => {
    const [nameNft, setNameNft] = useState("Name NFT");
    const [priceNft, setPriceNft] = useState("1");
    // const [accountNft, setAccountNft] = useState(account);

    const productNameRef = useRef(null);
    const productPriceRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = productNameRef.current.value;
        const price = window.web3.utils.toWei(
            productPriceRef.current.value.toString(),
            "Ether"
        );
        createProduct(name, price);
    };

    return (
        <>
            <section className="container create">
                {/* <form onSubmit={handleSubmit}>
                    <div className="form-group mr-sm-2">
                        <input
                            id="productName"
                            type="text"
                            ref={productNameRef}
                            className="form-control"
                            placeholder="Product Name"
                            required
                        />
                    </div>
                    <div className="form-group mr-sm-2">
                        <input
                            id="productPrice"
                            type="text"
                            ref={productPriceRef}
                            className="form-control"
                            placeholder="Product Price"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Product
                    </button>
                </form> */}
                <div className="create__preview">
                    <img
                        src="https://source.unsplash.com/random/?blockchain,nft"
                        alt=""
                        className="create__preview-image"
                    />
                    <div className="create__preview-info">
                        <div className="itemNft__name create__preview-name">
                            {nameNft}
                        </div>
                        <div className="itemNft__author">
                            <img
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                                alt=""
                                className="itemNft__author-image"
                            />
                            <div className="itemNft__author-name">
                                @{account.slice(0, 7)}...
                            </div>
                        </div>
                        <div className="itemNft__bottom">
                            <div className="card__bottom">
                                <div className="card__bottom-left">
                                    <div className="card__left-eth">
                                        {priceNft} ETH
                                    </div>
                                    <div className="card__left-title">
                                        Price
                                    </div>
                                </div>
                                <div className="card__bottom-right">
                                    <button className="button-your-nft">
                                        Your NFT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="create__form" onSubmit={handleSubmit}>
                    <div className="create__title">Create an NFT</div>
                    <label className="create__label" htmlFor="productName">
                        Name *
                    </label>
                    <input
                        placeholder="Name your NFT"
                        id="productName"
                        type="text"
                        ref={productNameRef}
                        className="create__input"
                        required
                        onChange={(e) => setNameNft(e.target.value)}
                    />
                    <label className="create__label" htmlFor="productPrice">
                        Price *
                    </label>
                    <input
                        type="text"
                        className="create__input"
                        placeholder="Price your NFT"
                        required
                        id="productPrice"
                        ref={productPriceRef}
                        onChange={(e) => setPriceNft(e.target.value)}
                    />
                    <label
                        className="create__label"
                        htmlFor="create__input-desc"
                    >
                        Description *
                    </label>
                    <textarea
                        id="create__input-desc"
                        name="create__input"
                        rows="3"
                        placeholder="Enter a description"
                    />
                    <button type="submit" className="button-create">
                        Create NFT
                    </button>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default AddProduct;
