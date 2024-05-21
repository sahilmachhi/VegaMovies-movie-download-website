const OttPlatform = () => {
  const ott = [
    "netflix",
    "amazon prime",
    "hotstar",
    "zee5",
    "sonyLIV",
    "jio cinema",
    "voot",
    "hoichoi",
    "discovery",
    "altbalaji",
    "mxPlayer",
    "appletv+",
    "theaterPrint",
  ];
  return (
    <>
      <h1>ott</h1>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-3 ">
        {ott.map((ott, index) => (
          <div key={index} className="gap-2 flex">
            <input type="radio" id={ott} name="ott-platform" value={ott} />
            <label htmlFor={ott}>{ott}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default OttPlatform;
