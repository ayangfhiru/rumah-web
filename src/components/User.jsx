const User = (props) => {
  const { users } = props;

  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        Nama Pengguna:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-900 list-decimal list-inside">
        {users?.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
