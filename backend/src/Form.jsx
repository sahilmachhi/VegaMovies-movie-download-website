import GenreCheckbox from "./Components/Genre";
import Link from "./Components/Link";
import OttPlatform from "./Components/OttPlatform";
import Quality from "./Components/Quality";
import Region from "./Components/Region";
import Screenshots from "./Components/Screenshots";
import Type from "./Components/Type";
import { useState } from "react";
import { useFormik } from "formik";
import supabase from "./supabase/supabase";

const Form = () => {
  const [ssInputCount, setssInputCount] = useState([]);
  const [linkInputCount, SetlinkInputCount] = useState([]);
  const [plotCount, setplotCount] = useState([]);
  const addScreenShot = (e) => {
    e.preventDefault();
    setssInputCount([...ssInputCount, {}]);
  };

  const addDes = (e) => {
    e.preventDefault();
    setplotCount([...plotCount, {}]);
  };
  const removeDes = (e, index) => {
    e.preventDefault();
    setplotCount(plotCount.filter((_, i) => i !== index));
  };

  const uploadData = async (movieData) => {
    const { error } = await supabase.from("movielist").insert(movieData);
    if (error) console.log(error);
    else {
      alert("movie upload successful");
    }
  };
  const addLink = (e) => {
    e.preventDefault();
    SetlinkInputCount([...linkInputCount, {}]);
  };

  const removeScreenShot = (e, index) => {
    e.preventDefault();
    setssInputCount(ssInputCount.filter((_, i) => i !== index));
  };

  const removeLink = (e, index) => {
    console.log("function called");
    e.preventDefault();
    SetlinkInputCount(linkInputCount.filter((_, i) => i !== index));
  };

  const formik = useFormik({
    initialValues: {
      url: "",
      name: "",
      metaTitle: "",
      metaDes: "",
      title: "",
      description: "",
      posterURL: "",
      year: "",
      plot: [],
      ott: "",
      region: "",
      type: "",
      genre: "",
      quality: "",
      screenshots: [],
      links: [],
    },
    onSubmit: (values) => {
      uploadData(values);
    },
  });

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full pb-14">
      <form
        onSubmit={formik.handleSubmit}
        className="md:w-2/4 w-4/5 flex flex-col gap-8"
      >
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            poster url
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="url"
            name="posterURL"
            onChange={formik.handleChange}
            value={formik.values.posterURL}
            required
          />
        </div>
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            URL
          </label>
          <input
            type="text"
            name="url"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="url"
            onChange={formik.handleChange}
            value={formik.values.url}
          />
        </div>
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            movie/series name
          </label>
          <input
            type="text"
            name="name"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            meta title
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="meta title"
            name="metaTitle"
            onChange={formik.handleChange}
            value={formik.values.metaTitle}
            required
          />
        </div>
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            meta description
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="meta description"
            name="metaDes"
            onChange={formik.handleChange}
            value={formik.values.metaDes}
            required
          />
        </div>
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            title
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            required
          />
        </div>

        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            description
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            required
          />
        </div>

        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            release year
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="year"
            name="year"
            onChange={formik.handleChange}
            value={formik.values.year}
            required
          />
        </div>

        <div className="flex gap-4 flex-col">
          {plotCount.map((_, index) => (
            <div key={index} className="flex gap-4 flex-col">
              <label htmlFor="" className="text-xl font-bold">
                movie/series plot
              </label>
              <input
                type="text"
                className="border-2 border-black rounded-sm pl-4 py-2"
                placeholder="plot"
                name={`plot[${index}]`}
                onChange={formik.handleChange}
                required
              />
              <button
                onClick={(e) => removeDes(e, index)}
                className="bg-red-500 px-6 py-3"
              >
                delete
              </button>
            </div>
          ))}
          <button onClick={addDes} className="bg-green-500 py-6">
            add Plot paragraph
          </button>

          <OttPlatform name="ott" onChange={formik.handleChange} />

          <Region name="region" onChange={formik.handleChange} />

          <Type name="type" onChange={formik.handleChange} />

          <GenreCheckbox name="genre" onChange={formik.handleChange} />

          <Quality name="quality" onChange={formik.handleChange} />
          <div className="flex gap-4 flex-col">
            <label htmlFor="screenshots" className="text-xl font-bold">
              Screenshots
            </label>
            {ssInputCount.map((_, index) => (
              <div key={index} className="flex gap-4">
                <Screenshots
                  onChange={formik.handleChange}
                  name={`screenshots[${index}]`}
                />
                <button
                  className="bg-red-500 px-6 py-3"
                  onClick={(e) => removeScreenShot(e, index)}
                >
                  delete
                </button>
              </div>
            ))}
            <button onClick={addScreenShot} className="bg-green-500 py-6">
              Add Screenshot
            </button>
          </div>

          <div className="flex gap-4 flex-col">
            <label htmlFor="links" className="text-xl font-bold">
              Links
            </label>
            {linkInputCount.map((_, index) => (
              <div key={index} className="flex gap-4">
                <Link formik={formik} index={index} />
                <button
                  onClick={(e) => removeLink(e, index)}
                  className="bg-red-500 px-6 py-3"
                >
                  remove this link
                </button>
              </div>
            ))}
            <button onClick={addLink} className="bg-green-500 py-6">
              add links
            </button>
          </div>
        </div>
        <button className="bg-blue-500 rounded-lg p-6" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
