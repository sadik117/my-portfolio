import { Helmet } from "react-helmet-async";
import { RiHome2Fill } from "react-icons/ri";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText, data } = error;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <Helmet>
                <title>{`Error | ${statusText}`}</title>
                
              </Helmet>
      <h1 className="text-3xl font-extrabold text-red-600">{status}</h1>
      <h2 className="text-lg font-semibold">{statusText}</h2>
      <p className="font-medium pb-5">{data}</p>
      <Link
        to='/home'
        className="btn bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
      >
        <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
           বাপী বাড়ি যা..
          <RiHome2Fill />
        </span>
      </Link>
    </div>
  );
};

export default ErrorPage;
