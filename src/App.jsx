import AddToCart from "./features/cart/AddToCart"
import  Show from "./features/cart/ShowItems"
import ProductList from './features/cart/Product';
function App() {
  

  return (
    <>
      <ProductList/>
     <AddToCart/>
     <Show/>
    </>
  )
}

export default App
