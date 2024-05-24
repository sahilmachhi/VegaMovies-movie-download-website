/* eslint-disable react/prop-types */
const Quality = ({ onChange, name }) => {
  const quality = ["480p", "720p", "1080p", "2160p"];
  return (
    <>
      <h1>quality</h1>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
        {quality.map((quality) => (
          <div className="gap-2 flex" key={quality}>
            <input
              type="checkbox"
              id={quality}
              name={name}
              value={quality}
              onChange={onChange}
              required
            />
            <label htmlFor={quality}>{quality}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Quality;
