import { useState, useEffect } from 'react';
import { useProducts } from '../../context/ProductsContext';
import Card from '../card/Card';
import Loader from '../ui/Loader';
import './catalog.css';

function Catalog() {
    const { items, isLoading, error, loadProducts } = useProducts();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filterPrice, setFilterPrice] = useState("all");


    useEffect(() => {
        loadProducts(selectedCategory, filterPrice);
        // eslint-disable-next-line
    }, [selectedCategory, filterPrice]);

    const filteredProducts = items.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="container">
            <h1 className="catalog-title">Catalog</h1>

            {/* Блок фільтрів */}
            <div className="filters-container" style={{marginBottom: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                <input
                    type="text"
                    placeholder="Пошук..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                    style={{padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px'}}
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-select"
                    style={{padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px'}}
                >
                    <option value="all">Всі категорії</option>
                    <option value="clothing">Одяг</option>
                    <option value="accessories">Аксесуари</option>
                    <option value="stationery">Канцелярія</option>
                </select>

                <select
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                    className="price-select"
                    style={{padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px'}}
                >
                    <option value="all">Будь-яка ціна</option>
                    <option value="under50">Дешевше $50</option>
                    <option value="50to100">$50 - $100</option>
                    <option value="over100">Дорожче $100</option>
                </select>
            </div>

            {error && <div style={{color: 'red', textAlign: 'center'}}>{error}</div>}

            {isLoading ? (
                <Loader />
            ) : (
                <div className="cards-box">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Card
                                key={product.id}
                                id={product.id}
                                title={product.name}
                                desc={product.description}
                                img={product.imageUrl}
                                price={product.price}
                            />
                        ))
                    ) : (
                        !error && <div style={{width: '100%', textAlign: 'center'}}>Товарів не знайдено</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Catalog;