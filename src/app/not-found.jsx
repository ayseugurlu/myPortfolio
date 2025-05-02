import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="bg-white dark:bg-blue-dark-main">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-main dark:text-blue-main">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            href="/"
            className="inline-flex text-blue-main bg-blue-dark-main hover:bg-blue-dark-secondary focus:ring-4 focus:outline-none focus:ring-blue-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-main my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
