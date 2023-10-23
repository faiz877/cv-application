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
    <div>
      <h1>
        {edit ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          name
        )}
      </h1>
      <p>
        {edit ? (
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
        ) : (
          about
        )}
      </p>
      <div>
        <a href="">
          {edit ? (
            <input
              type="text"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          ) : (
            portfolio
          )}
        </a>
        <a href="">
          {edit ? (
            <input
              type="email"
              value={portfolio}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            email
          )}
        </a>
        <a href="">
          {edit ? (
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            phone
          )}
        </a>
      </div>
      {edit ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      {edit && <button onClick={handleCancel}>Cancel</button>}
    </div>
  );
}

export default Info;
