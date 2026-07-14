# Hardware Store Website - Requirements Document

## 1. Business Requirements

### 1.1 Overview
The objective is to build a professional, clean, and highly functional website for a hardware and safety equipment business, inspired by the practical layout of industry standards like Asiri Hardware. The platform will serve as an online catalog to showcase safety gear and hardware equipment to potential buyers, contractors, and DIY enthusiasts. 

### 1.2 Target Audience
* **B2B Customers:** Construction companies, contractors, and workshops looking for bulk safety equipment and heavy-duty hardware.
* **General Consumers:** DIY enthusiasts and homeowners seeking reliable tools and building materials.

### 1.3 Core Features
* **Product Catalog:** A structured listing of products categorized primarily into "Safety Equipment" and "Hardware Tools".
* **Lead Generation:** A robust contact system allowing customers to inquire about bulk orders, pricing, or specific equipment availability.
* **Responsive Design:** Seamless experience across desktop, tablet, and mobile devices.

### 1.4 Design & Branding
* **Color Palette:** 
  * **Primary:** Construction Yellow (e.g., `#FFD700` or `#FACC15`) - establishes an immediate connection to the hardware/safety industry.
  * **Secondary/Background:** High-contrast Dark Charcoal/Black (`#111827`) and Clean White (`#FFFFFF`).
* **Aesthetic:** Following a modern, minimalistic "Apple/Stripe" aesthetic. Prioritize whitespace, sharp typography, high-quality product imagery, and a highly readable UI over cluttered traditional e-commerce layouts.
* **No Animations:** Strict adherence to zero animations. No fading, sliding, or GSAP transitions. All interactions (hovers, page loads) must be instant and utilitarian.

### 1.5 Page Structure
1. **Home:** 
   * A strong hero section with a clear value proposition.
   * Featured categories (Safety Equipment, Hand Tools, Power Tools).
   * A brief "About Us" or "Why Choose Us" section.
2. **Products:** 
   * A grid-based layout displaying all available items.
   * Basic filtering/sorting by category (e.g., Safety vs. Hardware).
   * Product cards featuring image, title, SKU/Model, and a "Request Quote" or "Inquire" button.
3. **Contact Us:** 
   * A clean inquiry form (Name, Email, Subject, Message).
   * Business details: Store location, operating hours, phone number, and email.

---

## 2. Technical Requirements

### 2.1 Technology Stack
* **Framework:** React.js (Component-based UI).
* **Build Tool:** Vite (For lightning-fast HMR and optimized build output).
* **Language:** Clean, modern ES6+ JavaScript.
* **Styling:** Standard Vanilla CSS (`.css` files) as requested. 

### 2.2 Project Setup & Architecture
* **Initialization:** `npm create vite@latest hardware-store -- --template react`
* **Routing:** `react-router-dom` to handle navigation between the 3 core pages (`/`, `/products`, `/contact`).
* **Directory Structure:**
  ```text
  src/
  ├── assets/           # Images, icons
  ├── components/       # Reusable UI (Navbar, Footer, ProductCard, Button)
  ├── pages/            # Page components (Home, Products, Contact)
  ├── data/             # products.js (Mock JSON data for the catalog)
  ├── styles/           # global.css, variables.css
  ├── App.jsx           # Main router setup
  └── main.jsx          # Entry point