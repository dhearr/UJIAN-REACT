import { Link } from "react-router-dom";
import Table from "../components/Table";

function Dashboard() {
  return (
    <>
      <div className="p-10">
        <Link
          className="mr-10 bg-green-500 p-2 rounded-md text-white"
          to={"/formulir"}
        >
          Form Input
        </Link>
        <Link className="mr-10 bg-blue-500 p-2 rounded-md text-white" to={"/"}>
          Halaman Utama
        </Link>
      </div>
      <Table />;
    </>
  );
}

export default Dashboard;
