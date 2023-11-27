import GPTMovieSuggestions from './GPTMovieSuggestions';
import GPTSearchBar from './GPTSearchBar';

const GPTSearch = () => {
  return (
    <div className="mx-6 md:mx-12 my-3 md:my-6 flex flex-col items-center">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
