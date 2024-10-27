import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

function Product() {
  return (
    <>
      <div className="p-10">
        <Link className="mr-10 bg-blue-500 p-2 rounded-md text-white" to={"/"}>
          Halaman Utama
        </Link>
      </div>
      <ProductList />
    </>
  );
}

export default Product;
