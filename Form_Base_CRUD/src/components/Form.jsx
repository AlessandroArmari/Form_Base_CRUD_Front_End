const Form = () => {
  //this first "col-4" is the "prosecution" of a bootstrap grid-system!
  return (
    <section className="col-5 d-flex flex-wrap ">
      <label htmlFor="form">Add User</label>
      <form id="form" className="d-flex flex-wrap ">
        <label htmlFor="username" className="m-2 ">
          Username:
        </label>
        <input type="text" id="username" className="w-100" />
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

export { Form };
