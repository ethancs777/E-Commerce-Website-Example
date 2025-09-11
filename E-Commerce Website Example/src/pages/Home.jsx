import '../css/Home.css'
import React, { useState, useEffect } from 'react'
import ShoppingItem from '../components/ShoppingItem'
import { fetchProducts } from '../services/api';


function Home({ userName }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    // Filter products by search and category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase()) ||
            (product.description && product.description.toLowerCase().includes(search.toLowerCase()));
        let cat = product.category ? product.category.toLowerCase() : '';
        const matchesCategory = category === 'all' || cat === category.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="home-main-layout">
            <h1 className="top-left-header"> <strong>Welcome, {userName}</strong></h1>
            <div className="search-filter-bar" style={{margin: '2.5rem auto 1.5rem auto', maxWidth: '65rem', width: '100%'}}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="category-radio-group">
                    <label className="category-radio-label">
                        <input type="radio" name="category" value="all" checked={category === 'all'}  onChange={() => setCategory('all')}/> All
                    </label>
                    <label className="category-radio-label">
                        <input type="radio" name="category" value="men's clothing" checked={category === "men's clothing"} onChange={() => setCategory("men's clothing")} /> Men's Clothing
                    </label>
                    <label className="category-radio-label">
                        <input type="radio" name="category" value="women's clothing" checked={category === "women's clothing"} onChange={() => setCategory("women's clothing")} /> Women's Clothing
                    </label>
                </div>
            </div>
            <div className="container">
                <ShoppingItem products={filteredProducts} />
            </div>
        </div>
    );
}

export default Home;