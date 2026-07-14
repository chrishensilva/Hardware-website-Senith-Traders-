import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products, categories } from '../../data/products';
import './Products.css';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  // SEO metadata setup
  useEffect(() => {
    document.title = "Premium Safety Equipment & Cast Iron Manholes Catalog | K D Senith Traders";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Browse our full catalog of certified safety equipment, personal protective gear (PPE), cast iron manhole and gully covers, and parking safety products in Sri Lanka. Request custom quotes today.");
    }
  }, []);

  // Sync category from URL query param
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: catId });
    }
  };

  // Filter
  let filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  // Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }

  // Sort
  if (sortBy === 'name-asc') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'sku') {
    filtered = [...filtered].sort((a, b) => a.sku.localeCompare(b.sku));
  } else if (sortBy === 'in-stock') {
    filtered = [...filtered].sort((a, b) => (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0));
  }

  const activeCategoryLabel = categories.find(c => c.id === activeCategory)?.label || 'All Products';

  return (
    <main className="page-content">
      {/* Page Header */}
      <section className="products-hero" aria-label="Products page header">
        <div className="container products-hero__inner">
          <div>
            <span className="section-label section-label--light">Full Catalog</span>
            <h1 className="products-hero__title">Our Products</h1>
            <p className="products-hero__sub">
              Browse our comprehensive catalog of certified safety equipment, personal protective gear (PPE), 
              premium cast iron manholes, gully covers, and road safety products in Sri Lanka.
            </p>
          </div>
          <div className="products-hero__stats">
            <div className="products-hero__stat">
              <span className="products-hero__stat-num">{products.length}</span>
              <span className="products-hero__stat-label">Products Listed</span>
            </div>
            <div className="products-hero__stat">
              <span className="products-hero__stat-num">3</span>
              <span className="products-hero__stat-label">Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section" aria-label="Product catalog">
        <div className="container products-layout">
          {/* Sidebar: Category Filter */}
          <aside className="products-sidebar" aria-label="Category filters">
            <div className="products-sidebar__section">
              <h2 className="products-sidebar__title">Categories</h2>
              <ul className="products-filter-list" role="list">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      className={`products-filter-btn ${activeCategory === cat.id ? 'products-filter-btn--active' : ''}`}
                      onClick={() => handleCategoryChange(cat.id)}
                      id={`filter-btn-${cat.id}`}
                      aria-pressed={activeCategory === cat.id}
                    >
                      <span className="products-filter-btn__label">{cat.label}</span>
                      <span className="products-filter-btn__count">
                        {cat.id === 'all'
                          ? products.length
                          : products.filter(p => p.category === cat.id).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help Box */}
            <div className="products-help-box">
              <span className="products-help-icon" aria-hidden="true">💬</span>
              <h3 className="products-help-title">Need Help?</h3>
              <p className="products-help-text">
                Can't find what you need? Our team can source specific products for you.
              </p>
              <a href="/contact" className="btn btn--primary btn--sm products-help-btn" id="sidebar-contact-btn">
                Contact Us
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <div className="products-main">
            {/* Search & Sort Bar */}
            <div className="products-toolbar" role="toolbar" aria-label="Search and sort tools">
              <div className="products-search-wrap">
                <span className="products-search-icon" aria-hidden="true"></span>
                <input
                  type="search"
                  className="products-search"
                  placeholder="Search products or SKU..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  id="product-search-input"
                  aria-label="Search products"
                />
              </div>

              <div className="products-toolbar-right">
                <span className="products-count">
                  {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                </span>
                <label htmlFor="sort-select" className="sr-only">Sort by</label>
                <select
                  id="sort-select"
                  className="products-sort"
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  aria-label="Sort products"
                >
                  <option value="default">Sort: Default</option>
                  <option value="name-asc">Name: A → Z</option>
                  <option value="name-desc">Name: Z → A</option>
                  <option value="sku">SKU</option>
                  <option value="in-stock">In Stock First</option>
                </select>
              </div>
            </div>

            {/* Active Filter Breadcrumb */}
            <div className="products-breadcrumb" aria-live="polite">
              Showing: <strong>{activeCategoryLabel}</strong>
              {searchQuery && <> · Search: "<em>{searchQuery}</em>"</>}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="products-grid" role="list" aria-label="Product list">
                {filtered.map(product => (
                  <div role="listitem" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="products-empty" id="products-empty-state">
                <span className="products-empty-icon" aria-hidden="true">📦</span>
                <h3 className="products-empty-title">No products found</h3>
                <p className="products-empty-text">
                  Try adjusting your search or selecting a different category.
                </p>
                <button
                  className="btn btn--outline-dark"
                  onClick={() => { setSearchQuery(''); handleCategoryChange('all'); }}
                  id="clear-filters-btn"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
