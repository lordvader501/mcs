import Container from "../layout/Container";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery && search) {
      fetch(`http://localhost:3000/ca?name_like=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, search]);

  return (
    <div className="bg-hero w-full relative">
      <Container className="relative max-w-[1350px] z-10 pb-20 flex flex-col xl:flex-row justify-center xl:justify-between items-center">
        <div className="xl:w-[49%]">
          <h1 className="font-poppins text-black text-px65 leading-none font-bold">
            Find{" "}
            <span className="bg-text1 text-transparent bg-clip-text">
              Partners
            </span>{" "}
            (CAs) available online
          </h1>
          <p className="text-darkgrey text-xl font-opensans mt-4">
            <span className="font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
          <div className="mt-16 relative">
            <input
              placeholder="search by name"
              value={searchQuery}
              type="text"
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearch(false);
              }}
              className="text-px18 placeholder:text-px18 focus:outline-none px-[30px] py-6 w-full border border-solid rounded-xl border-[#BFBFBF]"
            />
            <button
              className=" absolute right-0 text-center text-white font-bold text-base font-inter bg-[#0076CE] rounded-xl py-[26px] w-44"
              onClick={() => {
                setSearch(true);
              }}
            >
              Search
            </button>
          </div>
          {search && (
            <ul className="bg-white mt-3 rounded-lg p-4">
              {searchResults.map((result) => (
                <Link key={result.id} to={`/user/${result.id}`}>
                  <li className="hover:text-purple-400 my-1">{result.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full xl:w-[48%] flex gap-x-4 justify-center object-contain object-center overflow-hidden">
          <img
            src={hero1}
            alt="img"
            className="pt-[84px] h-min object-contain"
          />
          <img src={hero2} alt="img" className="h-min object-contain" />
          <img
            src={hero3}
            alt="img"
            className="pt-[42px] h-min object-contain"
          />
        </div>
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={window.innerWidth}
        height="210"
        viewBox={`0 0 ${window.innerWidth} 210`}
        fill="none"
        className="w-full absolute z-0 bottom-0"
      >
        <path
          d={`M0 210H${window.innerWidth}V80.0669V0L0 192.622V210Z`}
          fill="#FAFBFC"
        />
      </svg>
    </div>
  );
}

export default HeroSection;
