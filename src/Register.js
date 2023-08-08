import React, { useState } from "react";
import swal from "sweetalert";
export default function Register() {
  const data = { name: "", email: "", password: "" };
  const [input, setInput] = useState(data);
  //   const [flag, setFlag] = useState(false);
  //   useEffect(() => {
  //     console.log(flag);
  //   }, [flag]);

  function handleData(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  // console.log(input);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name != "" && input.email != "" && input.password != "") {
      swal("Registered Successfully !");
    } else {
      swal("All Feilds are mandatory !");
    }
  }
  return (
    <>
      {/* <pre>{flag ? <h1>All Fields are mandatory</h1> : ""}</pre> */}
      <form className="w-50 offset-3" onSubmit={handleSubmit}>
        <h1 className="mb-3">Registration Form</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Name
          </label>
          <input
            type="password"
            name="name"
            className="form-control"
            id="exampleInputPassword2"
            value={input.name}
            onChange={handleData}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={input.email}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={input.password}
            onChange={handleData}
          />
        </div>
        <div id="emailHelp" className="form-text mb-2">
          We'll never share your email and password with anyone else.
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
