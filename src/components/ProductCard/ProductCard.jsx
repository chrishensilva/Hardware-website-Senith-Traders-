import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

// Category icon map
const categoryIcons = {
  'manhole': '🕳️',
  'parking': '🚧',
  'safety': '🦺',
};

const categoryLabels = {
  'manhole': 'Manhole & Gully Cover',
  'parking': 'Parking Safety',
  'safety': 'Safety Equipment',
};

export default function ProductCard({ product }) {
  const { id, sku, name, category, inStock, image, specs } = product;
  const icon = categoryIcons[category] || '📦';
  const catLabel = categoryLabels[category] || category;

  // For manhole products with multiple specs, track the selected spec row
  const [selectedSpec, setSelectedSpec] = useState(0);

  // Resolve image URL dynamically for Vite
  let imageUrl = null;
  if (image) {
    let folder = '';
    if (category === 'manhole') folder = 'castiron';
    else if (category === 'parking') folder = 'parking safety';
    else if (category === 'safety') folder = 'Safety';

    try {
      imageUrl = new URL(`../../assets/img/${folder}/${image}`, import.meta.url).href;
    } catch (e) {
      console.warn("Failed to resolve image for product SKU " + sku, e);
    }
  }

  const activeSpec = specs && specs.length > 0 ? specs[selectedSpec] : null;

  return (
    <article className="product-card" id={`product-card-${id}`}>
      {/* Product Image */}
      <div className="product-card__image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="product-card__img" loading="lazy" />
        ) : (
          <span className="product-card__icon" aria-hidden="true">{icon}</span>
        )}
        {!inStock && (
          <span className="product-card__out-badge">Out of Stock</span>
        )}
      </div>

      {/* Content */}
      <div className="product-card__content">
        <div className="product-card__meta">
          <span className="badge badge--yellow product-card__cat">{catLabel}</span>
        </div>

        <h3 className="product-card__name">{name}</h3>

        {/* Specs Table/List based on category */}
        {category === 'manhole' && activeSpec && (
          <div className="product-card__specs">
            {/* Size selector tabs (if multiple specs) */}
            {specs.length > 1 && (
              <div className="product-card__spec-tabs" role="tablist" aria-label="Available sizes">
                {specs.map((s, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={selectedSpec === i}
                    className={`product-card__spec-tab ${selectedSpec === i ? 'product-card__spec-tab--active' : ''}`}
                    onClick={() => setSelectedSpec(i)}
                    id={`spec-tab-${id}-${i}`}
                    title={s.sizeMm}
                  >
                    {s.sizeMm}
                  </button>
                ))}
              </div>
            )}

            {/* Spec detail rows */}
            <dl className="product-card__spec-dl">
              <div className="product-card__spec-row">
                <dt className="product-card__spec-label">
                  <span className="product-card__spec-icon">📐</span> Size (mm)
                </dt>
                <dd className="product-card__spec-value">{activeSpec.sizeMm}</dd>
              </div>
              <div className="product-card__spec-row">
                <dt className="product-card__spec-label">
                  <span className="product-card__spec-icon">📏</span> Size (inches)
                </dt>
                <dd className="product-card__spec-value">{activeSpec.sizeInches}</dd>
              </div>
              {activeSpec.loadingCapacity && (
                <div className="product-card__spec-row">
                  <dt className="product-card__spec-label">
                    <span className="product-card__spec-icon">⚖️</span> Load Capacity
                  </dt>
                  <dd className="product-card__spec-value product-card__spec-value--highlight">{activeSpec.loadingCapacity}</dd>
                </div>
              )}
              {activeSpec.en124Standard && (
                <div className="product-card__spec-row">
                  <dt className="product-card__spec-label">
                    <span className="product-card__spec-icon">🏷️</span> EN 124 Standard
                  </dt>
                  <dd className="product-card__spec-value">
                    <span className="product-card__std-badge">{activeSpec.en124Standard}</span>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        )}

        {['parking', 'safety'].includes(category) && specs && specs.length > 0 && (
          <div className="product-card__specs">
            <dl className="product-card__spec-dl">
              {specs.map((s, i) => (
                <div key={i} className="product-card__spec-row">
                  <dt className="product-card__spec-label">
                    {s.label === 'Size' && <span className="product-card__spec-icon">📐</span>}
                    {s.label === 'Weight' && <span className="product-card__spec-icon">⚖️</span>}
                    {s.label === 'Material' && <span className="product-card__spec-icon">🛠️</span>}
                    {s.label === 'Reflective' && <span className="product-card__spec-icon">✨</span>}
                    {s.label === 'Model' && <span className="product-card__spec-icon">🏷️</span>}
                    {s.label === 'Color' && <span className="product-card__spec-icon">🎨</span>}
                    {s.label === 'Diameter' && <span className="product-card__spec-icon">⭕</span>}
                    {s.label === 'Power' && <span className="product-card__spec-icon">⚡</span>}
                    {s.label === 'Brand' && <span className="product-card__spec-icon">🏢</span>}
                    {s.label === 'Standard' && <span className="product-card__spec-icon">📋</span>}
                    {s.label === 'Coating' && <span className="product-card__spec-icon">🧤</span>}
                    {s.label === 'Lens' && <span className="product-card__spec-icon">👓</span>}
                    {s.label === 'Style' && <span className="product-card__spec-icon">👕</span>}
                    {s.label === 'Type' && <span className="product-card__spec-icon">⚙️</span>}
                    {s.label === 'Height' && <span className="product-card__spec-icon">📏</span>}
                    {s.label === 'Dimensions' && <span className="product-card__spec-icon">📐</span>}
                    {s.label === 'LEDs' && <span className="product-card__spec-icon">💡</span>}
                    {s.label}
                  </dt>
                  <dd className="product-card__spec-value">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <div className="product-card__footer">
          <Link
            to={`/contact?product=${encodeURIComponent(name)}&sku=${sku}`}
            className={`btn btn--primary btn--sm product-card__btn ${!inStock ? 'btn--disabled' : ''}`}
            id={`inquire-btn-${id}`}
          >
            {inStock ? 'Request Quote' : 'Notify Me'}
          </Link>
        </div>
      </div>
    </article>
  );
}
