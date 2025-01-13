import './styles.css';
import { useEffect, useState } from 'react';

export default function LoadMoreButton() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errorMsg, setErrMsg] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    function fetchProducts(getUrl) {
        setLoading(true);

        fetch(getUrl)
            .then((response) => {
                if (!response.ok) {
                    setErrMsg(true);
                    setLoading(false);
                };
                return response.json();

            })
            .then((data) => {
                if (data && data.products.length && data.products) {
                    setProducts((prevData) => [...prevData, ...data.products])
                    setLoading(false)
                };
            })
            .catch((e) => {
                setErrMsg(e.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true);
        }
    }, [products]);
    useEffect(() => {
        fetchProducts(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
    }, [count]);

    console.log(products);
    if (errorMsg) {
        return (
            <div>{errorMsg}</div>
        )
    };

    if (loading) {
        return (
            <div>Please wait! Data is loading...</div>
        )
    }

    return (
        <div className="container">
            <div className="product-container">
                {
                    products && products.length ?
                        products.map(item => {
                            return (
                                <div className="product" key={item.id}>
                                    <img src={item.thumbnail} alt={item.title} />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                        : null
                }
            </div>
            <div className="button-container">
                <button onClick={() => setCount(count + 1)} disabled={disableButton}>Load More Products</button>
                {
                    disableButton ? 
                    <p>You have reached to 100 products</p>
                    : null
                }
            </div>
        </div>
    )
}