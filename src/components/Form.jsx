import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const direct = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    noTelepon: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataInForm = JSON.parse(localStorage.getItem("dataUser")) || [];
    const updateData = [...dataInForm, formData];
    localStorage.setItem("dataUser", JSON.stringify(updateData));
    setFormData({
      name: "",
      email: "",
      noTelepon: "",
    });
    direct("/dashboard");
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm"
            placeholder="name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="noTelepon"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nomor Telepon
          </label>
          <input
            type="number"
            id="noTelepon"
            value={formData.noTelepon}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm"
            placeholder="08123456789"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
