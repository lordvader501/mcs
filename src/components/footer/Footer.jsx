import Container from "../layout/Container";
import logofooter from "../../assets/logofooter.png";
import { Link } from "react-router-dom";
import Whatsapp from "../../icons/Whatsapp";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";

function Footer() {
  const companyitems = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Pricing",
      link: "/",
    },
    {
      title: "Careers",
      link: "/",
    },
  ];
  const solitems = [
    {
      title: "Search",
      link: "/",
    },
    {
      title: "Connect",
      link: "/",
    },
    {
      title: "Careers",
      link: "/",
    },
    {
      title: "Academy",
      link: "/",
    },
  ];
  const resitems = [
    {
      title: "Blogs",
      link: "/",
    },
    {
      title: "Forms",
      link: "/",
    },
  ];
  const supitems = [
    {
      title: "Help",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/",
    },
  ];
  const legitems = [
    {
      title: "Privacy",
      link: "/",
    },
    {
      title: "Terms",
      link: "/",
    },
    {
      title: "Accessibility",
      link: "/",
    },
  ];
  const Socials = [
    {
      logo: <Facebook />,
      link: "/",
    },
    {
      logo: <Instagram />,
      link: "/",
    },
    {
      logo: "in",
      link: "/",
    },
    {
      logo: <Whatsapp />,
      link: "/",
    },
  ];
  return (
    <div className="bg-footerbg">
      <Container className="flex flex-col gap-x-7 !py-8">
        <div className="flex flex-wrap lg:flex-row flex-col justify-between gap-8">
          <div>
            <img src={logofooter} alt="logo" />
            <p className="text-white font-opensans text-sm lg:max-w-[272px] mt-2">
              India&apos;s first platform dedicated to simplifying partner
              search
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-opensans text-sm font-bold">
              COMPANY
            </h3>
            <div className="flex lg:flex-col flex-row gap-x-6 gap-y-2 flex-wrap mt-3">
              {companyitems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-white font-opensans text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-opensans text-sm font-bold">
              SOLUTIONS
            </h3>
            <div className="flex lg:flex-col flex-row gap-x-6 gap-y-2 flex-wrap mt-3">
              {solitems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-white font-opensans text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-opensans text-sm font-bold">
              RESOURCES
            </h3>
            <div className="flex lg:flex-col flex-row gap-x-6 gap-y-2 flex-wrap mt-3">
              {resitems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-white font-opensans text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-opensans text-sm font-bold">
              SUPPORT
            </h3>
            <div className="flex lg:flex-col flex-row gap-x-6 gap-y-2 flex-wrap mt-3">
              {supitems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-white font-opensans text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-opensans text-sm font-bold">
              LEGAL
            </h3>
            <div className="flex lg:flex-col flex-row gap-x-6 gap-y-2 flex-wrap mt-3">
              {legitems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-white font-opensans text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-solid border-white mt-8" />
        <div className="mt-8">
          <div className="flex justify-between gap-3">
            <p className="text-white text-sm font-opensans">
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
            <div className="flex gap-3 items-center min-w-[120px]">
              {Socials.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="text-white font-bold text-xl"
                >
                  {item.logo}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
