const Link = () => {
  const LinkDetail = ["title", "quality", "Link"];
  return (
    <>
      <div className="flex flex-col ">
        {LinkDetail.map((link, index) => (
          <div className="flex gap-4 flex-col" key={index}>
            <label htmlFor="" className="text-xl font-bold">
              {link}
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-sm pl-4 py-2"
              placeholder={link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Link;
