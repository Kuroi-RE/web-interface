import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 pt-[4rem]">
      <h1 className="text-5xl">Path Not found</h1>
      <div>
        <Link to="/" className="btn-error btn w-full">
          BACK
        </Link>
      </div>
    </div>
  );
};

export default Error;
