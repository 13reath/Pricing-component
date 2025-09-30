# 📊 Interactive Pricing Component

## Live Demo

[Interactive Pricing Component](https://13reath.github.io/Pricing-component/)

## Preview

![Desktop Version](./public/images/desktop-preview.jpg)

## Tech Stack

-   React + TypeScript
-   Vite
-   Tailwind CSS v4

## Features

-   Interactive range slider with custom styling
-   Monthly/Yearly billing toggle (25% discount)
-   Real-time price calculation
-   Fully responsive design

## Installation

```bash
git clone https://github.com/yourusername/pricing-component.git
cd pricing-component
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── PricingRange.tsx    # Slider & pricing logic
│   ├── BottomLayout.tsx    # Features & CTA
│   ├── HeadLayout.tsx      # Header section
│   ├── Checkmark.tsx       # Feature list item
│   └── Button.tsx          # CTA button
├── styles/
│   └── slider.css          # Custom slider styles
└── App.tsx                 # Main layout
```

## Key Implementation

-   **State**: `useState` for slider value and billing toggle
-   **Slider**: Custom CSS for webkit/moz browsers
-   **Pricing**: `finalPrice = isYearly ? price * 0.75 : price`
-   **Responsive**: Tailwind breakpoints for mobile/desktop layouts

## Deploy

```bash
npm run deploy
```
