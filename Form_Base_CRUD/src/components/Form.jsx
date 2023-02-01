import { useState } from "react";

const Form = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(true);
  const [errorBorder, setErrorBorder] = useState(false);
  const usernameIsValid = usernameValue.trim() !== "";
  //--->if username input field is empty

  //4
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!usernameIsValid) {
      console.log("Username must not be empty!");
      setErrorBorder(true);
      return;
    }
    console.log("You've entered " + usernameValue);
  };
  //2
  const usernameInputChangeHandler = (event) => {
    setUsernameValue(event.target.value); //---> il valore dell'elemento dove si trova l'evento (onChange)
  };

  //this first "col-4" is the "prosecution" of a bootstrap grid-system!
  return (
    <section className="col-5 d-flex flex-wrap ">
      <label htmlFor="form">Add User</label>
      <form
        //3
        onSubmit={formSubmissionHandler}
        id="form"
        className="d-flex flex-wrap"
      >
        <label htmlFor="username" className="m-2 ">
          Username:
        </label>
        <input
          type="text"
          //1
          value={usernameValue}
          onChange={usernameInputChangeHandler}
          id="username"
          className={
            errorBorder
              ? "w-100 border border-2 border-danger rounded"
              : "w-100"
          }
        />
        <label htmlFor="email" className="m-2">
          Email:
        </label>
        <input type="text" id="email" className="w-100" />
        <div className="mt-3">
          <button>Send</button>
        </div>
      </form>
    </section>
  );
};

//use effect
//callback
//on input

export { Form };
