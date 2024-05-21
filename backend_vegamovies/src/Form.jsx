import GenreCheckbox from "./Components/Genre";
import Link from "./Components/Link";
import OttPlatform from "./Components/OttPlatform";
import Quality from "./Components/Quality";
import Region from "./Components/Region";
import Screenshots from "./Components/Screenshots";
import Type from "./Components/Type";
import { useState } from "react";

const Form = () => {
  const [ssinput, setSsinput] = useState([]);
  const [LinkInput, SetLinkInput] = useState([]);

  const addScreenShot = (e) => {
    e.preventDefault();
    setSsinput([...ssinput, {}]);
  };

  const addLink = (e) => {
    e.preventDefault();
    SetLinkInput([...LinkInput, {}]);
  };

  const removeScreenShot = (e, index) => {
    e.preventDefault();
    setSsinput(ssinput.filter((_, i) => i !== index));
  };

  const removeLink = (e, index) => {
    e.preventDefault();
    SetLinkInput(LinkInput.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <form action="" className="md:w-2/4 w-4/5 flex flex-col gap-8">
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            movie/series name
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="name"
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
          />
        </div>
        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            poster url
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="url"
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
          />
        </div>

        <div className="flex gap-4 flex-col">
          <label htmlFor="" className="text-xl font-bold">
            movie/series plot
          </label>
          <input
            type="text"
            className="border-2 border-black rounded-sm pl-4 py-2"
            placeholder="plot"
          />

          <OttPlatform />

          <Region />

          <Type />

          <GenreCheckbox />

          <Quality />
          <div className="flex gap-4 flex-col">
            <label htmlFor="screenshots" className="text-xl font-bold">
              Screenshots
            </label>
            {ssinput.map((_, index) => (
              <div key={index}>
                <Screenshots />
                <button onClick={(e) => removeScreenShot(e, index)}>
                  delete
                </button>
              </div>
            ))}
            <button onClick={addScreenShot}>Add Screenshot</button>
          </div>

          <div className="flex gap-4 flex-col">
            <label htmlFor="screenshots" className="text-xl font-bold">
              Links
            </label>
            {LinkInput.map((_, index) => (
              <div key={index}>
                <Link />
                <button onClick={(index) => removeLink(index)}>
                  remove this link
                </button>
              </div>
            ))}
            <button onClick={addLink}>add links</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
