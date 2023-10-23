import { useState } from "react";

function Info() {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("Your Name");
  const [about, setAbout] = useState(
    "I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text."
  );
  const [portfolio, setPortfolio] = useState("your-portfolio.com");
  const [email, setEmail] = useState("your-email.com");
  const [phone, setPhone] = useState("2222255555");

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h1 className="text-2xl font-bold mb-4">
        {edit ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2"
          />
        ) : (
          name
        )}
      </h1>
      <p className="mb-4">
        {edit ? (
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="border rounded p-2"
            cols="110"
            rows="3"
          ></textarea>
        ) : (
          about
        )}
      </p>
      <div className="mb-4">
        <a href={portfolio} className="text-blue-500 mr-4">
          {edit ? (
            <input
              type="text"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              className="border rounded p-2"
            />
          ) : (
            portfolio
          )}
        </a>
        <a href={`mailto:${email}`} className="text-blue-500 mr-4">
          {edit ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded p-2"
            />
          ) : (
            email
          )}
        </a>
        <a href={`tel:${phone}`} className="text-blue-500">
          {edit ? (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded p-2"
            />
          ) : (
            phone
          )}
        </a>
      </div>
      <div>
        {edit ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white p-2 rounded mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Edit
          </button>
        )}
        {edit && (
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default Info;
