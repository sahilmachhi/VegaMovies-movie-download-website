/* eslint-disable react/prop-types */
const Screenshots = ({ onChange, name }) => {
  return (
    <>
      <input
        type="text"
        className="border-2 border-black rounded-sm pl-4 py-2"
        placeholder="screenshot url"
        onChange={onChange}
        name={name}
        required
      />
    </>
  );
};

export default Screenshots;
