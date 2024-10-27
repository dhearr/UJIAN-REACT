import { useEffect, useState } from "react";

function Table() {
  const [dataForm, setDataForm] = useState([]);

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem("dataUser")) || [];
    setDataForm(dataUser);
  }, []);
  return (
    <div className="p-10">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Nomor Telepon</th>
          </tr>
        </thead>
        <tbody>
          {dataForm.map((data, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{data.name}</td>
              <td className="border px-4 py-2">{data.email}</td>
              <td className="border px-4 py-2">{data.noTelepon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
