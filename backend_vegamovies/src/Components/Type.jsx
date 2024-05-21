const Type = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1>Type</h1>
        <div className="gap-2 flex">
          <input type="radio" id="movie" name="type" value="movie" />
          <label htmlFor="movie">Movie</label>
        </div>

        <div className="gap-2 flex">
          <input type="radio" id="web-series" name="type" value="web-series" />
          <label htmlFor="web-series">web-series</label>
        </div>
      </div>
    </>
  );
};

export default Type;
