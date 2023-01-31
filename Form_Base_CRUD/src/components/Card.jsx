//REMEMBER: do not forget {} line 3

const Card = ({ username, email }) => {
  return (
    <>
      <span>{username}</span>

      <span>{email}</span>

      <button>Edit</button>
      <button>Delete</button>
    </>
  );
};

export { Card };
