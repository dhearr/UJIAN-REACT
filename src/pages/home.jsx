import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul className="list-disc p-10">
        <li>
          <Link to="/product">Mounting Data</Link>
        </li>
        <li>
          <Link to="/formulir">Form Input</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
