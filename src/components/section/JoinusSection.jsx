import JoinusCard from "../card/JoinusCard";
import Container from "../layout/Container";

function JoinusSection() {
  const joinusItems = [
    {
      title: "Commencement of business",
      subtitle: "Invested shareholders must confirm payment and office address",
      time: "Within 180 days",
      fees: ["₹50,000 /n for the company", "₹1,000 /n /day for directors"],
    },
    {
      title: "Commencement of business",
      subtitle: "Invested shareholders must confirm payment and office address",
      time: "Within 180 days",
      fees: ["₹50,000 /n for the company", "₹1,000 /n /day for directors"],
    },
    {
      title: "Commencement of business",
      subtitle: "Invested shareholders must confirm payment and office address",
      time: "Within 180 days",
      fees: ["₹50,000 /n for the company", "₹1,000 /n /day for directors"],
    },
    {
      title: "Commencement of business",
      subtitle: "Invested shareholders must confirm payment and office address",
      time: "Within 180 days",
      fees: ["₹50,000 /n for the company", "₹1,000 /n /day for directors"],
    },
    {
      title: "Commencement of business",
      subtitle: "Invested shareholders must confirm payment and office address",
      time: "Within 180 days",
      fees: ["₹50,000 /n for the company", "₹1,000 /n /day for directors"],
    },
    {
      title: "Commencement of business",
      subtitle: "Invested shareholders must confirm payment and office address",
      time: "Within 180 days",
      fees: ["₹50,000 /n for the company", "₹1,000 /n /day for directors"],
    },
  ];
  return (
    <div className="relative">
      <Container className="relative z-10 pb-20 flex flex-col justify-center">
        <div>
          <h1 className="font-poppins text-center text-black text-px65 leading-none font-bold">
            Want to{" "}
            <span className="bg-text2 text-transparent bg-clip-text">Join</span>{" "}
            Us?
          </h1>
          <p className="text-black text-center text-2xl font-poppins mt-4">
            To remain with us, it is essential that you diligently follow the
            steps provided
          </p>
        </div>
        <div className="mt-28 flex flex-wrap justify-center gap-x-8 gap-y-14">
          {joinusItems.map((item, index) => (
            <JoinusCard
              key={index}
              index={index + 1}
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              fees={item.fees}
            />
          ))}
        </div>
        <div className="mt-8 bg-joinus">
          <p className="text-px17 font-poppins">
            * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
            <strong> every day</strong> until you file the form . There is no
            maximum penalty amount. So, if you don&apos;t file the form for a
            year, you will owe ₹73,000 per form
          </p>
        </div>
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={window.innerWidth}
        height="757"
        viewBox={`0 0 ${window.innerWidth} 757`}
        fill="none"
        className="w-full absolute z-0 bottom-36 bg-joinus"
      >
        <path
          d={`M0.107497 567.266C-13.6344 640.276 0.107497 757 0.107497 757H${window.innerWidth}V0C${window.innerWidth} 0 1478 47.0138 1451 68C1341.67 152.976 1246.29 92.2517 1105.5 116C957.033 141.043 919.752 257.324 770.187 276.037C632.645 293.245 557.716 199.916 420.345 218.238C255.102 240.279 134.274 284.651 52.3705 418.468C19.8 471.682 11.4329 507.095 0.107497 567.266Z`}
          fill="#DDF3FF"
        />
      </svg>
    </div>
  );
}

export default JoinusSection;
