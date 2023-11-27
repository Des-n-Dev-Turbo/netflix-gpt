import { useRef } from 'react';
import { Search } from 'lucide-react';

import useGPTSearch from '@hooks/useGPTSearch';

const GPTSearchBar = () => {
  const searchInput = useRef();
  const { handleSearch } = useGPTSearch(searchInput);

  return (
    <div className="w-full my-10">
      <form className="w-full flex flex-col md:flex-row gap-4 items-center text-black" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="What would you like to watch Today?.."
          className="px-8 py-4 rounded-lg flex-1 w-full"
          ref={searchInput}
        />
        <button type="submit" className="text-white w-full md:w-fit bg-[#E50914] p-4 rounded-lg hover:bg-[#AA0001]">
          <span className="flex items-center gap-2 justify-center">
            <Search />
            Search
          </span>
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
