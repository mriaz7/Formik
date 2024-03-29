import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`https://6579b1051acd268f9af9c282.mockapi.io/r/isdp/${id}` , {
      name: name,
      email: email,
    } ).then(()=>{
        navigate("/")
    })
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleSubmit}
        >
          Update
        </button>
        <Link to="/read">
        <button
          className="btn btn-secondary mx-2"
        >
          Back
        </button>
        </Link>
      </form>
    </>
  );
}

export default Update;