# Crown-Clothing: Online Clothing Store

![Version](https://img.shields.io/badge/version-0.1.0-blue)\
![Build Status](https://img.shields.io/badge/status-online-brightgreen)

**Crown Clothing** is a sleek online store featuring a curated range of clothing.\
This e-commerce store offers users an effortless shopping experience with browsing clothing based on categories, cart management, and secure payment options.\
Perfect for fashion enthusiasts seeking variety and convenience in one place.

## **Table of Contents**

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Live Demo](#live-demo)

## **Features**

- **Curated Clothing Selection:** Wide range of stylish and trendy items.
- **Cart Management:** Easily add, remove, and update items in the shopping cart.
- **Secure Payments:** Stripe powered payment ensures seamless transactions with no error possible.
- **Redux Store With Sagas:** Efficient state management and side-effect handling with Redux to ensure persist between data in application.
- **Serverless Backend:** Backend functionality powered by Netlify Functions and written in native Node.js.
- **TypeScript Integration:** Strongly typed development enabling robust, scalable and maintainable code, enchancing developer productivity and reducing runtime errors.

## **Tech Stack**

> Tech stack used to develop application:

### **Frontend**

- **React and TypeScript:** Components based on React's JSX powered by TypeScript to ensure data safety and improving scalability.
- **React-Redux with Redux Saga and Redux-Persist:** Data state managed by Redux's store which uses reducers, middleware and persist configuration to ensure state persist between page loads. Reducer Actions are powered by Redux-Saga.
- **React Router DOM:** Ensures client-side navigation, along with lazy loading of modules for more efficient loads and suspense for smooth transitions.
- **Styled Components:** Modular and reusable CSS in JS components for styling.

### **Backend**

- **Firebase:** Database handled collections based on JSON format and authentication using database storage and google provider.
- **Stripe API:** Secure and reliable payment integration on both backend and frontend. Backend locates on Netlify Functions, while frontend implementation bases on React Stripe Elements.

## **Live Demo**

Check out the live version of **Crown Clothing** here:

⏩ [Crown-Clothing Live Demo](https://crownclothing-onsite.netlify.app)

Explore the full functionality of the application, including browsing products, managing your cart, and secure checkout.
