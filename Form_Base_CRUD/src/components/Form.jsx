const Form = () => {
  return (
    <section>
      <label htmlFor="form">Add User</label>
      <form id="form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />
        <div>
          <button>Send</button>
        </div>
      </form>
    </section>
  );
};

export { Form };
