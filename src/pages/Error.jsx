import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen pt-[4rem] flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl">Path Not found</h1>
      <div>
        <Link to="/" className="btn btn-error w-full">
          BACK
        </Link>
      </div>
    </div>
  );
};

export default Error;
