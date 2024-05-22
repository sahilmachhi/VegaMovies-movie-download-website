/* eslint-disable react/prop-types */
const Type = ({ name, onChange }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1>Type</h1>
        <div className="gap-2 flex">
          <input
            type="radio"
            id="movie"
            value="movie"
            name={name}
            onChange={onChange}
          />
          <label htmlFor="movie">Movie</label>
        </div>

        <div className="gap-2 flex">
          <input
            type="radio"
            id="web-series"
            value="web-series"
            name={name}
            onChange={onChange}
          />
          <label htmlFor="web-series">web-series</label>
        </div>
      </div>
    </>
  );
};

export default Type;
