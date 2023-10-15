import recommend from "../../assets/recommend.png";

function RecommendedCard({ name, price, rating, count }) {
  return (
    <div className="rounded-[20px] shadow-joincard max-w-[405px]">
      <img src={recommend} alt="recommend" className="object-cover w-full" />
      <div className="p-6">
        <div className="flex justify-between">
          <strong>{name}</strong>
          <strong>{price}</strong>
        </div>
        <p className="text-black text-xl font-poppins mt-2">
          I will do business evaluation and corporate services
        </p>
        <p className="flex gap-1 mt-2 font-poppins text-xl">
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
          <span className="font-bold text-[#0076CE]">{rating}</span> ({count})
        </p>
        <button className="py-2.5 px-5 mt-7 rounded-xl text-center font-poppins font-bold text-white bg-[#0076CE] w-full">
          View services
        </button>
      </div>
    </div>
  );
}

export default RecommendedCard;
