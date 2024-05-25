import { FaSearch } from "react-icons/fa";
const MobileSearch = ({ search }) => {
  return (
    <>
      <div
        className="flex items-center rounded-md justify-between px-2 my-2 gap-1 h-8"
        style={{ display: `${search}` }}
      >
        <input
          type="text"
          placeholder="search here"
          className="text-black w-full h-full pl-4"
        />
        <FaSearch className="size-8 mx-3" />
      </div>
    </>
  );
};

export default MobileSearch;
