/* eslint-disable react/prop-types */
const Region = ({ name, onChange }) => {
  const regions = [
    "hollywood",
    "bollywood",
    "anime",
    "kdrama",
    "gujarati",
    "south",
  ];
  return (
    <>
      <h1>Region</h1>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
        {regions.map((region, index) => (
          <div key={index} className="gap-2 flex">
            <input
              type="radio"
              id={region}
              value={region}
              onChange={onChange}
              name={name}
              required
            />
            <label htmlFor={region}>{region}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Region;
