const LinearBright = ({ darkness }) => {
  // 전체가 90%
  const position: number = darkness-10;

  return (
    <>
      <div className="flex items-center justify-center w-[90%] rounded-full shadow-md">
        <div className="bg-gray-button w-full h-[94px] rounded-[40px] flex justify-center items-center">
          <img src="/images/cool.png" alt="시원" className="m-2" />
          <div className="w-[70%] h-[30%] rounded-2xl shadow-lg bg-white">
            <div
              className="w-10 h-full bg-pink rounded-full relative"
              style={{
                left: `${position}%`,
              }}></div>
          </div>
          <img src="/images/hot.png" alt="시원" className="m-2" />
        </div>
      </div>
    </>
  );
};

export default LinearBright;
