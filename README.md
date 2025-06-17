# Redux Cart Application

This is a simple shopping cart application built with **React** and **Redux Toolkit**. It demonstrates basic Redux concepts for state management, including adding items to the cart, removing them, and adjusting quantities.

---

## Features

* **Add to Cart:** Add products to the shopping cart.
* **Quantity Control:** Increase or decrease the quantity of items in the cart (up to a maximum of 3 per item).
* **Remove from Cart:** Remove individual items from the cart.
* **Clear Cart:** Empty the entire cart.
* **Cart View:** Displays all items currently in the cart with their quantities.

---

## Project Structure

The project is organized into the following key files:

* **`src/cartSlice.js`**: This file defines the Redux slice for the cart state. It includes the `initialState`, `reducers` (actions like `addToCart`, `removeFromCart`, `increasedQty`, `decreaseQty`, `clearCart`), and exports the actions and the reducer.
* **`src/components/ProductList.js`**: This component displays a list of available products and allows users to add them to the cart.
* **`src/components/ShowItems.js`**: This component renders the items currently in the cart, along with controls to adjust quantities and remove items.
* **`src/components/AddToCart.js`**: A simple component demonstrating adding a single product to the cart (though `ProductList` provides the primary "add to cart" functionality).

---

## How to Run Locally

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-folder>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

    This will open the application in your default web browser at `http://localhost:3000`.
