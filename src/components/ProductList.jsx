import { useState } from "react";
import product from "../product.json";
import { useEffect } from "react";
import { convertIDR } from "../utils/currency";

function ProductList() {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    setDataProduct(product);
  }, []);

  return (
    <div className="px-10">
      {dataProduct.map((product) => (
        <ul className="list-disc p-4" key={product.id}>
          <li>Name: {product.name}</li>
          <li>Price: {convertIDR(product.price)}</li>
        </ul>
      ))}
    </div>
  );
}

// useEffect digunakan untuk menjalankan kode setelah komponen pertama kali di render/tampilkan. Di dalam contoh ini saya mengambil data product dari ( product.json ) dan menyimpan nya ke state ( dataProduct ) yang sudah saya buat.

// Mengapa kita perlu menggunakan Array Kosong di dalam useEffect? Array kosong berarti useEffect hanya akan dijalankan sekali, saat komponen pertama kali dimuat, ini akan mencegah kode di dalam nya berulang-ulang setiap kali komponen di render, sehingga akan menjadi lebih efisien. Array kosong di dalam useEffect yang saya tau itu di sebut dengan dependency Array.

export default ProductList;
