import { useEffect } from 'react';
import './Contact.css';
import i1 from '../../assets/map.png';
import i2 from '../../assets/email.png';
import i3 from '../../assets/phone-call.png';
import i4 from '../../assets/time.png';

const businessInfo = [
  {
    icon: i1,
    title: 'Our Location',
    lines: ['26/C/1 Biyagama Road, Talwatta Gonawala', 'Kelaniya 11600, Sri Lanka'],
  },
  {
    icon: i3,
    title: 'Phone',
    lines: [
      { text: '011 732 0068', href: 'tel:0117320068' },
      { text: '077 145 3183', href: 'tel:0771453183' },
      { text: '075 653 9790', href: 'tel:0756539790' },
    ],
  },
  {
    icon: i2,
    title: 'Email',
    lines: [
      { text: 'info@senithtrader.lk', href: 'mailto:info@senithtrader.lk' },
      { text: 'kd@senithtrader.lk', href: 'mailto:kd@senithtrader.lk' },
    ],
  },
  {
    icon: i4,
    title: 'Business Hours',
    lines: ['Monday – Friday: 8:00 AM – 6:00 PM', 'Saturday: 8:00 AM – 3:00 PM', 'Sunday: Closed'],
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact K D Senith Traders | Safety Equipment & Manhole Covers Supplier Sri Lanka";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with K D Senith Traders PVT LTD, Gonawala, Kelaniya. Reach out for wholesale pricing on safety equipment, cast iron manhole covers, gully covers, and road safety accessories.");
    }
  }, []);

  return (
    <main className="page-content">
      {/* Page Header */}
      <section className="contact-hero" aria-label="Contact page header">
        <div className="container">
          <span className="section-label section-label--light">Get In Touch</span>
          <h1 className="contact-hero__title">Contact Us</h1>
          <p className="contact-hero__sub">
            Visit our store in Colombo or reach out directly via phone or email. Our team is ready to help you with your order requirements.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section" aria-label="Contact information and map">
        <div className="container contact-layout">
          {/* === Business Info Panel === */}
          <aside className="contact-info" aria-label="Business contact information">
            <div className="contact-info__card">
              <h2 className="contact-info__heading">Business Information</h2>

              <ul className="contact-info__list">
                {businessInfo.map((item, i) => (
                  <li key={i} className="contact-info__item">
                    <div className="contact-info__icon-wrap">
                      <img src={item.icon} alt="" className="contact-info__img-icon" />
                    </div>
                    <div>
                      <div className="contact-info__item-title">{item.title}</div>
                      {item.lines.map((line, j) => {
                        const isObject = typeof line === 'object';
                        const text = isObject ? line.text : line;
                        const href = isObject ? line.href : item.href;

                        return href ? (
                          <div key={j} className="contact-info__item-line">
                            <a href={href} className="contact-info__item-link">
                              {text}
                            </a>
                          </div>
                        ) : (
                          <div key={j} className="contact-info__item-line">
                            {text}
                          </div>
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="contact-quick">
              <h3 className="contact-quick__title">Quick Actions</h3>
              <a href="tel:0771453183" className="btn btn--primary contact-quick__btn" id="quick-call-btn">
                Call Us Now
              </a>
              <a href="mailto:info@senithtrader.lk" className="btn btn--outline-dark contact-quick__btn" id="quick-email-btn">
                Send an Email
              </a>
            </div>
          </aside>

          {/* === Interactive Google Map Panel === */}
          <div className="contact-map-panel">
            <h2 className="contact-map-panel__title">Our Location Map</h2>
            <div className="contact-map-iframe-container">
              <iframe
                title="K D Senith Traders Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.9767991448757!2d79.93863598097215!3d6.948517890705192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25757a78e6b8d%3A0x5684397fb8aca822!2sSenith%20Traders!5e1!3m2!1sen!2slk!4v1783013177147!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
