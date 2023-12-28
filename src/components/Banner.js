import React from "react";

function Banner() {
    return (
        <section className="banner">
            <div className="container banner__container">
                <div className="banner__heading">
                    <h1 className="banner__title">
                        Remove borders with
                        <span>
                            NFTs <img src="images/line.png" alt="" />
                        </span>
                        share art freely.
                    </h1>
                    <div className="banner__desc">
                        Discover the power of NFTs for a unique digital
                        experience.
                    </div>
                    <div className="banner__button">
                        <a
                            href=""
                            className="button button-primary banner__button-small"
                        >
                            Explore
                        </a>
                        <a
                            href=""
                            className="button button-transparent banner__button-small"
                        >
                            Create
                        </a>
                    </div>
                    <div className="banner__stats">
                        <div className="banner__stats-item">
                            <div className="banner__stats-data">10K</div>
                            <div className="banner__stats-title">Artwork</div>
                        </div>
                        <div className="banner__stats-item">
                            <div className="banner__stats-data">32K</div>
                            <div className="banner__stats-title">Auction</div>
                        </div>
                        <div className="banner__stats-item">
                            <div className="banner__stats-data">42K</div>
                            <div className="banner__stats-title">Artist</div>
                        </div>
                    </div>
                </div>
                <div className="banner__image">
                    <img
                        src="https://lh3.googleusercontent.com/N3SELamgs4ueIO1AICNW6vF9ZoZXYM8PZ5suYko72P10VjuN7dVfJjKkVkwFp1BeNJs9ty7vfvuNvSCn0VtiPpufiblLNNLchkdUFg"
                        alt=""
                        className="banner__image-card"
                    />
                    <div className="banner__blur" />
                    <div className="banner__bid-title">
                        <div className="bid-now">BID NOW!</div>
                        <div className="bid-desc">Latest Collection</div>
                    </div>
                    <div className="banner__blur2" />
                    <div className="banner__author">
                        <img
                            src="https://cdn.dribbble.com/userupload/4252012/file/original-10306fb6dfd0e7c86c6a643dd2dbff0d.png?resize=1504x1128"
                            alt=""
                            className="image-item"
                        />
                        <div className="author">
                            <div className="name-item">HAPE #6959</div>
                            <div className="name-author">HAPES PRIME</div>
                        </div>
                    </div>
                    <div className="banner__bid">
                        <div className="eth">
                            <div className="eth-price">5.758 ETH</div>
                            <div className="eth-title">Latest Bid</div>
                        </div>
                        <div className="price">
                            <div className="dolar-price">$5758.31</div>
                            <div className="growth">+12.45%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
