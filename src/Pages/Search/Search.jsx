
import { useLocation } from "react-router-dom";
import { Navigation } from '../../Components/Navigation/Navigation';

export const Search = () => {
  const location = useLocation();
  const dataFromFetch = location.state?.results;

  console.log(dataFromFetch);
  return (
    <>
      <Navigation />
      <main>
        Search page
      </main>
    </>
  )
}
