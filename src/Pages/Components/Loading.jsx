import { VscLoading } from "react-icons/vsc";

import loadingGif from '../../Assets/loading.gif';

export const Loading = () => {
  return (
    <div className="loadingComponent w-full h-screen relative">
      <div className="loading absolute z-50 top-1/4 left-1/3 w-1/3 h-1/3">
        <div className="loadingData flex flex-col h-full justify-center items-center">
          <img src={loadingGif} alt="" />
          
          <div className="loadingTitle text-center">
            <h1 className="text-3xl uppercase">please wait..</h1>
            <p className="text-sm text-gray-400/30">
              Searching for result in our library
            </p>
          </div>

          <div className="loadingSpinner mt-5">
            <VscLoading className="animate-spin text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
