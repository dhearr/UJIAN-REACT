import { Link } from "react-router-dom";
import Form from "../components/Form";

function Formulir() {
  return (
    <>
      <div className="p-10">
        <Link className="mr-10 bg-blue-500 p-2 rounded-md text-white" to={"/"}>
          Halaman Utama
        </Link>
      </div>
      <Form />;
    </>
  );
}

export default Formulir;
