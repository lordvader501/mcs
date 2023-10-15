import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../layout/Container";
import RecommendedCard from "../card/RecommendedCard";
import classNames from "classnames";
import recommend from "../../assets/recommend.png";

function UsersInfoPage() {
  const userId = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loadedImg, setLoadedImg] = useState(false);

  const recommendItems = [
    {
      name: "Michael Jackson",
      price: "₹4,370",
      rating: "4.8",
      count: "89",
    },
    {
      name: "Stevie Wonder",
      price: "₹4,263",
      rating: "5.0",
      count: "62",
    },
    {
      name: "Ray Charles",
      price: "₹2,586",
      rating: "4.3",
      count: "189",
    },
  ];

  useEffect(() => {
    fetch(`http://localhost:3000/ca/${userId.id}`)
      .then((response) => response.json())
      .then((data) => setUserDetails(data));
  }, [userId]);

  if (!userDetails) {
    return <div className="h-screen">Loading...</div>;
  }
  return (
    <div>
      <Container className="flex gap-10 xl:flex-row flex-col">
        <div className="xl:max-w-[515px]">
          <div>
            <h1 className="font-bold font-poppins text-black text-px35">
              {userDetails?.name}
            </h1>
            <p className="text-black text-xl font-poppins mt-4">
              I am here to provide my {userDetails?.intro} all to assist you
              effectively.
            </p>
            <p className="flex gap-1 mt-6 font-poppins text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="#0076CE"
                />
              </svg>
              <span className="font-bold text-[#0076CE]">
                {userDetails?.rating}
              </span>{" "}
              ({userDetails?.reviewCount})
            </p>
          </div>
          <div className="rounded-[20px] bg-white shadow-joincard p-7 mt-10">
            <div className="flex justify-between text-xl font-poppins">
              <p>Basic to complex tasks</p>
              <strong>{userDetails?.price}</strong>
            </div>
            <div className="flex gap-1 font-poppins text-xl items-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                  fill="#0076CE"
                />
              </svg>
              {userDetails?.deliveryTime}
            </div>
            <div className="flex sm:flex-row flex-col gap-8 justify-center mt-6">
              <button className="py-2.5 px-5 rounded-xl text-center font-poppins font-bold sm:max-w-[220px] text-white bg-[#0076CE] w-full">
                Request Proposal
              </button>
              <button className="py-2.5 px-5 rounded-xl text-center font-poppins font-bold sm:max-w-[220px] text-[#0076CE] bg-white border-2 border-solid border-[#0076CE] w-full">
                Chat with me
              </button>
            </div>
          </div>
          <div className="rounded-[20px] bg-white shadow-joincard p-7 mt-10">
            <h3 className="font-bold font-poppins text-black text-px35">
              What people say?
            </h3>
            <p className="text-black text-xl font-poppins mt-4">
              {userDetails?.testimonial?.text}
            </p>
            <p className="text-black text-xl font-poppins mt-4 italic text-right">
              ~ {userDetails?.testimonial?.author}
            </p>
            <div className="flex justify-center mt-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="10"
                viewBox="0 0 86 10"
                fill="none"
              >
                <circle cx="45" cy="5" r="5" fill="#C5C5C5" />
                <circle cx="63" cy="5" r="5" fill="#C5C5C5" />
                <circle cx="81" cy="5" r="5" fill="#C5C5C5" />
                <rect width="32" height="10" rx="5" fill="#0076CE" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="relative">
            <img
              src={userDetails?.image}
              alt="image"
              className={classNames("rounded-[20px] object-cover w-full", {
                "": loadedImg,
                hidden: !loadedImg,
              })}
              onLoad={() => setLoadedImg(true)}
            />
            {!loadedImg && (
              <img
                src={recommend}
                alt="recommend"
                className="object-cover w-full"
              />
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="10"
              viewBox="0 0 86 10"
              fill="none"
              className="absolute bottom-5 left-1/2 -translate-x-1/2"
            >
              <circle cx="45" cy="5" r="5" fill="#747474" />
              <circle cx="63" cy="5" r="5" fill="#747474" />
              <circle cx="81" cy="5" r="5" fill="#747474" />
              <rect width="32" height="10" rx="5" fill="#0076CE" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold font-poppins text-black text-px35">
              About {userDetails?.name}
            </h1>
            <div className="flex flex-wrap gap-x-32 gap-y-4">
              <div>
                <p className="text-[#999] font-bold text-base font-poppins">
                  FROM
                </p>
                <p className="text-black text-xl font-poppins mt-3">
                  {userDetails?.about?.from}
                </p>
              </div>
              <div>
                <p className="text-[#999] font-bold text-base font-poppins">
                  PARTNER SINCE
                </p>
                <p className="text-black text-xl font-poppins mt-3">
                  {userDetails?.about?.partnerSince}
                </p>
              </div>
              <div>
                <p className="text-[#999] font-bold text-base font-poppins">
                  AVERAGE RESPONSE TIME
                </p>
                <p className="text-black text-xl font-poppins mt-3">
                  {userDetails?.about?.averageResponseTime}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-[#999] font-bold text-base font-poppins">
                ABOUT
              </p>
              <p className="text-black text-xl font-poppins mt-3">
                I am a {userDetails?.about?.description}
              </p>
            </div>
            <div className="flex flex-row mt-10 gap-x-16 sm:gap-x-64">
              <div>
                <p className="text-[#999] font-bold text-base font-poppins">
                  SERVICES I OFFER
                </p>
                <ul className="mt-2">
                  {userDetails?.about?.services.map((item, index) => (
                    <li key={index} className="list-disc ml-7 mb-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[#999] font-bold text-base font-poppins">
                  WHY ME?
                </p>
                <ul className="mt-2">
                  {userDetails?.about?.benefits.map((item, index) => (
                    <li key={index} className="list-disc ml-7 mb-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col pb-24">
        <h1 className="font-bold font-poppins text-black text-px35">
          Recommended for you
        </h1>
        <div className="flex flex-wrap gap-8 justify-center mt-12">
          {recommendItems.map((item, index) => (
            <RecommendedCard
              key={index}
              name={item.name}
              price={item.price}
              rating={item.rating}
              count={item.count}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default UsersInfoPage;
