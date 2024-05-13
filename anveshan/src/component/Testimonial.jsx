import React from "react";

const Testimonial = () => {
  const Test = [
    {
      id: 1,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/Minerva.jpg?v=1651061510&width=100https://www.anveshan.farm/cdn/shop/files/Minerva.jpg?v=1651061510&width=100",
      name: "Minerva Thakur",
      description: "A variety of ways to use my favourite coconut oil and honey. My skin feels nourished, my cuticles are soft, my lips are smooth, and many other benefits come from using them!",
    },
    {
      id: 2,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/ghee_customer_Moment_c2dcfa0f-5051-4548-a309-72b7183a7f4a.jpg?v=1622564670&width=100",
      name: "Lakshmi Dev",
      description: "Their ghee helped solve my acid reflux problem. While cooking with wood pressed oils imparts a unique taste and I feel lighter",
    },
    {
      id: 3,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/Untitled_2_489afb6b-0d97-4ef2-9a9a-d92b3fcb2a4a.jpg?v=1622564461&width=100",
      name: "Dr Shagun Walia",
      description: "This ghee is the most healthy option out there for children. I use it regularly for my daughter and she loves the taste",
    },
    {
      id: 4,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/pankajtw.jpg?v=1651053172&width=100",
      name: "Pankaj Tiwari",
      description: "Works very well for holistic healing! This honey isn't your typical honey. It is very sweet and can tackle a sore throat like nobody's business :)",
    },
  ];

  return (
    <>
      <div className="bg-yellow-50 p-7">
      <div className=" flex flex-row md:w-1/2 mx-auto text-center justify-center p-4">
          <img src="https://www.anveshan.farm/cdn/shop/t/438/assets/heartinhand_90x.png?v=61875725875826084871714115533" alt=""  className="w-24 h-24" />
        </div>
        <div className=" flex flex-col md:w-1/2 mx-auto text-center justify-center ">
          
          <h2 className="text-3xl text-green-800 font-semibold mb-3">
            What Do Our Customers Say
          </h2>
        </div>

        <div className="flex flex-row gap-6 items-center justify-center">
          <ul className="flex flex-row gap-4 p-4">
            {Test.map((test) => (
              <li key={test.id} className="border-solid border-2 border-black rounded-2xl  ">
                <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md  cursor-pointer flex flex-col items-center justify-center">
                 
                  <p className="text-gray-500">{test.description}</p>
                 <div className="flex flex-row justify-center items-center p-6">
                 <img
                    src={test.imageUrl}
                    alt={test.name}
                    className="w-24 h-24 rounded-full"
                  />
                  <h4 className="text-lg font-semibold text-black mb-2 px-2">
                    {test.name}
                  </h4>
                 </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
