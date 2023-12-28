import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";
import Header from "./Header";
import Main from "./Main";
import AddProduct from "./AddProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./Category";
import Profile from "./Profile";

function App() {
    const [account, setAccount] = useState("");
    const [productCount, setProductCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [marketplace, setMarketplace] = useState(null);

    const createProduct = useCallback(
        async (name, price) => {
            setLoading(true);
            try {
                await marketplace.methods
                    .createProduct(name, price)
                    .send({ from: account });
            } catch (error) {
                console.error("Error creating product:", error);
            } finally {
                setLoading(false);
            }
        },
        [account, marketplace]
    );

    const purchaseProduct = useCallback(
        async (id, price) => {
            setLoading(true);
            try {
                await marketplace.methods
                    .purchaseProduct(id)
                    .send({ from: account, value: price });
            } catch (error) {
                console.error("Error purchasing product:", error);
            } finally {
                setLoading(false);
            }
        },
        [account, marketplace]
    );

    useEffect(() => {
        const init = async () => {
            await loadWeb3();
            await loadBlockchainData();
        };

        init();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Trình duyệt không hỗ trợ Ethereum. Bạn nên cài đặt MetaMask!"
            );
        }
    };

    const loadBlockchainData = async () => {
        const web3 = window.web3;

        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const networkData = Marketplace.networks[networkId];

        if (networkData) {
            const marketplace = new web3.eth.Contract(
                Marketplace.abi,
                networkData.address
            );
            setMarketplace(marketplace);

            const productCount = await marketplace.methods
                .productCount()
                .call();
            setProductCount(productCount);

            const loadedProducts = [];
            for (let i = 1; i <= productCount; i++) {
                const product = await marketplace.methods.products(i).call();
                loadedProducts.push(product);
            }
            setProducts(loadedProducts);

            setLoading(false);
        } else {
            window.alert("Smart contract chưa được triển khai trên mạng này.");
        }
    };

    return (
        <Router>
            <Header account={account} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main
                            account={account}
                            products={products}
                            purchaseProduct={purchaseProduct}
                        />
                    }
                />
                <Route
                    path="/category"
                    element={
                        <Category
                            account={account}
                            products={products}
                            purchaseProduct={purchaseProduct}
                        />
                    }
                />
                <Route
                    path="/add"
                    element={
                        <AddProduct
                            createProduct={createProduct}
                            account={account}
                            purchaseProduct={purchaseProduct}
                        />
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Profile
                            account={account}
                            products={products}
                            purchaseProduct={purchaseProduct}
                        />
                    }
                />
                <Route
                    path="/account"
                    element={
                        <AddProduct
                            createProduct={createProduct}
                            purchaseProduct={purchaseProduct}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
