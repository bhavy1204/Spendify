import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm text-center space-y-6">
        <div className="text-6xl font-bold text-slate-300">404</div>

        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            Page not found
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            The page you’re looking for doesn’t exist or was moved.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-xl bg-slate-900 text-white font-medium active:scale-95 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
