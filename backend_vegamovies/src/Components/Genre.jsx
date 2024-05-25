/* eslint-disable react/prop-types */
function GenreCheckbox({ onChange, name }) {
  const genres = [
    "action",
    "adventure",
    "animation",
    "biography",
    "comedy",
    "crime",
    "documentary",
    "drama",
    "family",
    "fantasy",
    "history",
    "horror",
    "mystery",
    "music",
    "romance",
    "sci-fi",
    "sport",
    "suspense",
    "thriller",
    "war",
    "short",
  ];

  return (
    <>
      <h1>genre</h1>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-3  ">
        {genres.map((genre) => (
          <div className="flex gap-2" key={genre}>
            <input
              type="checkbox"
              id={genre}
              name={name}
              value={genre}
              onChange={onChange}
            />
            <label htmlFor={genre}>{genre}</label>
          </div>
        ))}
      </div>
    </>
  );
}

export default GenreCheckbox;
