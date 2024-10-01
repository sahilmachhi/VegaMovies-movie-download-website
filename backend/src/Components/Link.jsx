/* eslint-disable react/prop-types */

const Link = ({ formik, index }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-4 flex-col">
          <label htmlFor="title" className="text-xl font-bold">
            title
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="title"
            name={`links[${index}].title`}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div className="flex gap-4 flex-col">
          <label htmlFor="url" className="text-xl font-bold">
            Link
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="Link"
            name={`links[${index}].link`}
            onChange={formik.handleChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default Link;
