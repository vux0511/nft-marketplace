import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

function Category({ products, account, purchaseProduct }) {
    const [listProduct, setListProduct] = useState([]);
    const [contentSearch, setContentSearch] = useState("");

    const handleSearch = (e) => {
        let result = products.filter((product) => {
            if (
                product.name
                    .toLowerCase()
                    .indexOf(e.target.value.toLowerCase()) >= 0
            ) {
                return true;
            } else return false;
        });
        setListProduct(result);
        console.log(listProduct);
    };

    useEffect(() => {
        setListProduct(products);
    }, [products]);

    return (
        <>
            <div className="text-title products__heading">
                Explore Collectibles
            </div>
            <form className="products__search">
                <input
                    type="text"
                    className="products__input"
                    placeholder="Type your keywords . . ."
                    defaultValue={contentSearch}
                    onChange={handleSearch}
                />
                <button className="products__button">
                    <LuSearch className="products__button-search" />
                </button>
            </form>
            {/* <div className="category__wrapper">
                <div className="category__list">
                    <div className="dropdown">
                        <div className="dropdown__select">
                            <span className="dropdown__selected">
                                <p>Sort by</p>
                                <p>
                                    <IoIosArrowDown />
                                </p>
                            </span>
                        </div>
                        <ul className="dropdown__list">
                            <li className="dropdown__item">
                                <span className="dropdown__text">Under 5$</span>
                            </li>
                            <li className="dropdown__item">
                                <span className="dropdown__text">
                                    5$ to 10$
                                </span>
                            </li>
                            <li className="dropdown__item">
                                <span className="dropdown__text">
                                    10$ to 20$
                                </span>
                            </li>
                            <li className="dropdown__item">
                                <span className="dropdown__text">
                                    20$ to 50$
                                </span>
                            </li>
                            <li className="dropdown__item">
                                <span className="dropdown__text">Over 50$</span>
                            </li>
                        </ul>
                    </div>
                    <button className="category__item category__item-active">
                        All
                    </button>
                    <button className="category__item">Music</button>
                    <button className="category__item">Art</button>
                    <button className="category__item">Sports</button>
                    <button className="category__item">Virtual</button>
                    <button className="category__item">Videos</button>
                    <button className="category__item">More</button>
                </div>
            </div> */}
            <div className="container itemNft__wrapper">
                {listProduct.map((product, index) => (
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
        </>
    );
}

export default Category;
