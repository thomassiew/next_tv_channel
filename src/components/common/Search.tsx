import React, { useRef } from "react";
import Container from "./Container";

const Search = ({
  onSubmit,
}: {
  onSubmit: (search: string | undefined) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSearch = () => {
    onSubmit(inputRef.current?.value);
  };

  return (
    <>
      <div className="bg-astro-black ">
        <Container className="grid place-items-center bg-astro-black ">
          <h1
            className="text-3xl font-bold text-white"
            data-testid="home-content"
          >
            CONTENT GUIDE
          </h1>
        </Container>
      </div>

      <div className="bg-astro-black sticky top-0 z-10 px-2">
        <Container className="grid place-items-center bg-astro-black ">
          <div className="flex flex-row w-full ">
            <input
              data-testid="search-input"
              ref={inputRef}
              type="text"
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="rounded-l-full w-full appearance-none pl-5 py-3 focus:outline-none "
              placeholder="Search Channels, TV Shows, Movies"
            />
            <button
              data-testid="search-button"
              className="appearance-none px-5 rounded-r-full bg-astro-pink"
              onClick={() => handleSearch()}
            >
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M15.7 14.3l-3.1-3.1c2.3-3.1 1.7-7.5-1.4-9.9S3.7-.4 1.3 2.7s-1.7 7.5 1.4 9.9c2.5 1.9 5.9 1.9 8.5 0l3.1 3.1c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4zM2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5c-2.7 0-5-2.2-5-5z"></path>
              </svg>
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Search;
