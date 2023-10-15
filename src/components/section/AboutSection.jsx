import Container from "../layout/Container";
import Search from "../../icons/Search";
import Connect from "../../icons/Connect";
import Research from "../../icons/Research";
import Academy from "../../icons/Academy";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";

function AboutSection() {
  const aboutItems = [
    {
      icon: <Search />,
      title: "SEARCH /n for vital company information",
    },
    {
      icon: <Connect />,
      title: "CONNECT /n with the resources to meet your business needs",
    },
    {
      icon: <Research />,
      title: "RESEARCH /n and generate reports that drive growth ",
    },
    {
      icon: <Academy />,
      title: "ACADEMY /n to give you the skills for success in your career",
    },
  ];
  return (
    <div>
      <Container className="flex flex-col lg:flex-row justify-between pb-24 lg:pb-32">
        <div className="lg:w-[55%]">
          <h1 className="font-poppins text-black text-px65 leading-normal font-bold">
            <span className="bg-text1 text-transparent bg-clip-text">
              All-in-One
            </span>{" "}
            platform that Makes Easier
          </h1>
          <p className="text-black text-2xl font-poppins mt-2 lg:max-w-[604px]">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
          <div className="flex flex-row flex-wrap mt-8 gap-y-16  justify-between lg:max-w-[604px]">
            {aboutItems.map((item, index) => (
              <div key={index} className="flex flex-row align-top">
                {item.icon}
                <p className="max-w-[205px] pl-2 font-poppins text-xl whitespace-normal">
                  <strong>{item.title.split("/n")[0]}</strong>
                  {item.title.split("/n")[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[50%] p-10 relative">
          <div className="max-w-[332px] flex flex-col items-end relative z-10">
            <p className="py-2 w-fit text-sm mt-2 px-4 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br bg-[#EFD9F9]">
              Hey, check out loreumipsum services.{" "}
            </p>
            <p className="py-2 w-fit text-sm mt-2 px-4 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br bg-[#EFD9F9]">
              I learned from their videos, got my first job.
            </p>
            <p className="py-2 w-fit text-sm mt-2 px-4 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br bg-[#EFD9F9]">
              You won&apos;t be disappointed with their services.
            </p>
          </div>
          <div>
            <img
              src={about1}
              alt="about1"
              className="absolute z-[1] bottom-0"
            />
            Copy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="340"
              viewBox="0 0 265 340"
              fill="none"
              className="absolute -bottom-8"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.603528 173.126C0.593605 220.409 14.8099 267.246 43.8993 299.501C72.1284 330.803 111.713 342.152 150.23 339.035C186.157 336.128 220.516 316.816 243.005 283.39C263.492 252.938 267.946 211.436 261.85 173.126C256.723 140.902 230.46 123.798 213.496 97.9328C191.78 64.8223 184.468 13.2626 150.23 2.93925C112.441 -8.45468 72.1185 14.7763 43.9523 46.8126C15.2173 79.496 0.613449 125.854 0.603528 173.126Z"
                fill="#DDF3FF"
              />
            </svg>
          </div>
          <div>
            <img
              src={about2}
              alt="about1"
              className="absolute z-[1] top-0 right-0"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="233"
              height="310"
              viewBox="0 0 233 310"
              fill="none"
              className="absolute top-0 right-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M232.117 157.811C232.126 200.963 219.152 243.708 192.605 273.144C166.842 301.71 130.717 312.068 95.5652 309.224C62.7774 306.57 31.421 288.946 10.8974 258.44C-16.5268 217.677 18.3 186.813 18.3 147.657C18.3 108.5 1.04975 106.256 5.92257 58.8804C10.532 14.0654 62.2614 0.834357 95.5652 0.834345C131.585 0.834331 166.851 13.2989 192.556 42.5359C218.78 72.3633 232.108 114.671 232.117 157.811Z"
                fill="#EFD9F9"
              />
            </svg>
          </div>
          <div className="max-w-[342px] flex flex-col items-end mt-6 relative z-10">
            <p className="py-2 w-fit text-sm mt-2 px-4 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl bg-[#DDF3FF]">
              I got a perfect analysis report from them too
            </p>
            <p className="py-2 mr-2.5 w-fit text-sm mt-2 px-4 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl bg-[#DDF3FF]">
              Oh, that&apos;s great.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutSection;
