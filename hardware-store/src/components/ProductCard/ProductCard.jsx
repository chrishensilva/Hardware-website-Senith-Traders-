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
  const { id, sku, name, category, inStock, image } = product;
  const icon = categoryIcons[category] || '📦';
  const catLabel = categoryLabels[category] || category;

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
          <span className="product-card__sku">SKU: {sku}</span>
        </div>

        <h3 className="product-card__name">{name}</h3>

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
