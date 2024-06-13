import { testimonials } from "../constants";

const Testimony = () => {
  return (
    <>
      <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
          Recent Reviews
        </h2>
      </div>
      <div className="flex flex-wrap justify-center ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className=" w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
          >
            <div className="bg-neutral-750 rounded-md p-6 text-md border border-neutral-800">
                <p classname="text-lg">{item.text}</p>
                <div className="flex mt-8 items-start">
                    <img src={item.image} alt="profile" className="h-12 w-12 mr-5 rounded-full mt-1 border"/>
                    <div className="px-3 ">
                        <p >{item.user}</p>
                        <p className="text-neutral-500">{item.company}</p>

                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimony;
