"use client";

import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import FilterLeftNav from './components/Filters';
import ArrowLeftIcon from './components/Common/Icons/ArrowLeftIcon';
import CustomDropdown from './components/Common/CustomDropdown';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSelect = () => {

  }

  return (
    <main>
      <section className="discover-products">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p className='product-description'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </section>
      <section className="productListing">
        <div className="productHeader">
          <div className='items-count'>
            <span>{products.length} ITEMS</span>
            <span className='filter-box'>
              <ArrowLeftIcon />Hide Filters</span>
          </div>
          <CustomDropdown onSelect={handleSelect} />
        </div>
        <div className="filterAndProducts">
          <FilterLeftNav />
          <div className="productGrid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
