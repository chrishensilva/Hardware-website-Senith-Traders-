import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getFeaturedProducts } from '../../data/products';
import './Home.css';

// Import custom icons
import roadIcon from '../../assets/road.png';
import tollIcon from '../../assets/toll.png';
import vestIcon from '../../assets/high-visibility-vest.png';
import i1 from '../../assets/high-quality.png';
import i2 from '../../assets/b2b.png';
import i3 from '../../assets/phone-call.png';

const featuredProducts = getFeaturedProducts();

const categories = [
  {
    id: 'manhole',
    icon: roadIcon,
    title: 'Cast Iron Manhole & Gully Cover',
    desc: 'Round and square manhole covers, recessed covers, gully grates, and kerb drain inlets — all EN 124 certified.',
    count: 8,
  },
  {
    id: 'parking',
    icon: tollIcon,
    title: 'Parking Safety Equipments',
    desc: 'Wheel stops, parking bollards, speed bumps, traffic cones, convex mirrors, and parking signs.',
    count: 29,
  },
  {
    id: 'safety',
    icon: vestIcon,
    title: 'Safety Equipments',
    desc: 'PPE helmets, harnesses, safety boots, gloves, goggles, hi-vis vests, respirators, and fire safety.',
    count: 51,
  },
];

const reasons = [
  {
    icon: i1,
    title: 'Certified Quality',
    desc: 'All products meet international safety standards — ISO, ANSI, EN, and NIOSH certified.',
  },
  /*{
    icon: '🚚',
    title: 'Fast Island-Wide Delivery',
    desc: 'Reliable delivery across Sri Lanka. Bulk orders dispatched within 24–48 hours.',
  },*/
  {
    icon: i2,
    title: 'B2B Specialist',
    desc: 'Tailored pricing, bulk discounts, and dedicated account managers for contractors.',
  },
  {
    icon: i3,
    title: 'Expert Support',
    desc: 'Our team of product specialists is ready to help you choose the right equipment.',
  },
];

export default function Home() {
  return (
    <main className="page-content">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hero section">
        <div className="container hero__inner">
          <div className="hero__content">
            {/*<span className="section-label section-label--light">Trusted Since 2005</span>*/}
            <h1 className="hero__title">
              Safety First.<br />
              <span className="hero__title-accent">Build Smarter.</span>
            </h1>
            <p className="hero__subtitle">
              K D Senith Traders PVT LTD is Sri Lanka's premier supplier of certified
              safety equipment and professional hardware tools. Quality you can count on,
              pricing that works for your business.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn--primary btn--lg" id="hero-browse-btn">
                Browse Catalog
              </Link>
              <Link to="/contact" className="btn btn--outline btn--lg" id="hero-quote-btn">
                Get a Quote
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">88</span>
                <span className="hero__stat-label">Products</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-num">3</span>
                <span className="hero__stat-label">Categories</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-num">20+</span>
                <span className="hero__stat-label">Years in Business</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-card hero__visual-card--1">
              <div className="hero__visual-icon-wrap">
                <img src={roadIcon} alt="" className="hero__visual-img-icon" />
              </div>
              <div>
                <div className="hero__visual-card-title">Manhole & Gully Covers</div>
                <div className="hero__visual-card-sub">EN 124 certified cast iron</div>
              </div>
            </div>
            <div className="hero__visual-card hero__visual-card--2">
              <div className="hero__visual-icon-wrap">
                <img src={tollIcon} alt="" className="hero__visual-img-icon" />
              </div>
              <div>
                <div className="hero__visual-card-title">Parking Safety</div>
                <div className="hero__visual-card-sub">Bollards, cones & more</div>
              </div>
            </div>
            <div className="hero__visual-card hero__visual-card--3">
              <div className="hero__visual-icon-wrap">
                <img src={vestIcon} alt="" className="hero__visual-img-icon" />
              </div>
              <div>
                <div className="hero__visual-card-title">Safety Equipments</div>
                <div className="hero__visual-card-sub">Full PPE & fire safety</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="section section--gray" aria-labelledby="categories-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
            <span className="section-label">Our Range</span>
            <h2 className="section-title" id="categories-heading">Shop by Category</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              From personal protective equipment to professional-grade power tools —
              we stock everything your job site demands.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/products?cat=${cat.id}`}
                className="category-card"
                id={`cat-card-${cat.id}`}
              >
                <div className="category-card__icon-wrap">
                  <img src={cat.icon} alt="" className="category-card__img-icon" />
                </div>
                <div className="category-card__body">
                  <h3 className="category-card__title">{cat.title}</h3>
                  <p className="category-card__desc">{cat.desc}</p>
                  <span className="category-card__cta">
                    View {cat.count} products →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <div className="featured-header">
            <div>
              <span className="section-label">Bestsellers</span>
              <h2 className="section-title" id="featured-heading">Featured Products</h2>
              <div className="section-divider" style={{ margin: 'var(--space-sm) 0' }}></div>
            </div>
            <Link to="/products" className="btn btn--outline-dark featured-view-all" id="featured-view-all-btn">
              View All Products →
            </Link>
          </div>

          <div className="grid-4 featured-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section section--dark" aria-labelledby="why-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
            <span className="section-label section-label--light">Why Us</span>
            <h2 className="section-title section-title--light" id="why-heading">Why Choose K D Senith Traders?</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle section-subtitle--light">
              We combine product expertise, certified inventory, and reliable service
              to be the partner your business can depend on.
            </p>
          </div>

          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div className="reason-card" key={i} id={`reason-card-${i}`}>
                <div className="reason-card__icon-wrap">
                  <img src={r.icon} alt="" className="reason-card__img-icon" />
                </div>
                <h3 className="reason-card__title">{r.title}</h3>
                <p className="reason-card__desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container cta-banner__inner">
          <div className="cta-banner__text">
            <h2 className="cta-banner__title">Ready to Equip Your Team?</h2>
            <p className="cta-banner__sub">
              Send us an inquiry and get a customized quote within 24 hours.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn--primary btn--lg" id="cta-banner-btn">
              Contact Us Today
            </Link>
            <a href="tel:+94771453183" className="btn btn--outline btn--lg" id="cta-phone-btn">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
