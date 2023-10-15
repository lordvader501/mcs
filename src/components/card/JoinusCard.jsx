function JoinusCard({ index, title, subtitle, time, fees }) {
  return (
    <div className="max-w-[405px] min-w-[350px] relative px-8 py-6 bg-white rounded-[20px] shadow-joincard">
      <div className="absolute -top-3 -left-3 bg-numberbg p-2 w-12 h-12 text-white text-2xl font-poppins font-bold rounded-md">
        {index}
        {index === 1 && <sup>st</sup>}
        {index === 2 && <sup>nd</sup>}
        {index === 3 && <sup>rd</sup>}
        {index >= 4 && <sup>th</sup>}
      </div>
      <div>
        <h3 className="font-poppins text-center text-xl font-bold">{title}</h3>
        <p className="font-poppins text-center text-base mt-1 px-4">
          {subtitle}
        </p>
      </div>
      <div className="flex gap-x-8 justify-between px-4 py-3 bg-[#F4F4F4] rounded-xl mt-4">
        <div className="w-[25%]">
          <h3 className="text-[#0076CE] font-opensans font-bold text-lg">
            Due date
          </h3>
          <p className="font-opensans text-base">{time}</p>
        </div>
        <div className="w-fit">
          <h3 className="text-[#F66] font-opensans font-bold text-lg">
            Penalty fees
          </h3>
          {fees.map((item, index) => (
            <p
              key={index}
              className="font-opensans text-base first-line:font-bold"
            >
              <strong>{item.split("/n")[0]}</strong>
              {item.split("/n")[1]}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JoinusCard;
