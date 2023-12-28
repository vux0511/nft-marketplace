import React from "react";

function Subcribe() {
    return (
        <section className="subcribe">
            <div className="container subcribe__container">
                <div className="text-title subcribe__text-more">
                    Get More Updates
                </div>
                <div className="subcribe__text-join">
                    Join our mailing list to stay in the loop with our newest
                    feature releases, NFT drops, and tips and tricks
                </div>
                <form action="#" className="subcribe__form">
                    <input
                        type="text"
                        className="subcribe__input"
                        placeholder="Enter your email address"
                    />
                    <button className="button subcribe__button button-primary">
                        Subcribe
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Subcribe;
