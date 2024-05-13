import React from "react";

function Video() {
  const Test = [
    {
      id: 1,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/anveshan--Deboashish.jpg?v=1672216295&width=150",
    },
    {
      id: 2,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/anveshan-Khusi.jpg?v=1672210245&width=150",
    },
    {
      id: 3,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/anveshan-Jasmeet.jpg?v=1672210245&width=150",
    },
    {
      id: 4,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/anveshan-Vaibhav.jpg?v=1672210245&width=150",
    },
    {
      id: 5,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/anveshan-Gyanendra.jpg?v=1672210693&width=150",
    },
  ];

  return (
    <div className=" mt-8 ">
      <div className=" flex flex-col md:w-1/2 mx-auto text-center justify-center ">
        <h2 className="text-3xl text-green-800 font-semibold mb-3">
          Bringing The Purest Traditional Superfoods to You
        </h2>
      </div>

      {/* video */}

      <div className="flex flex-row items-center justify-center p-4 my-3">
        <iframe
          width="1260"
          height="709"
          src="https://www.youtube.com/embed/elHg5unlBWk"
          title="Youtube Player"
          frameborder="0"
          allowFullScreen
        />
      </div>

      {/* customer support */}
      <div className=" flex flex-col md:w-1/2 mx-auto text-center justify-center my-8 ">
        <h2 className="text-3xl text-gray-800 mb-3">
          Our Customer Service is 2X the industry standard
        </h2>

        <p className="text-gray-500 my-8">
          Get help on your queries, orders and deliveries with our personal
          assistant, who's always around to answer your questions
        </p>
      </div>

      {/* photos list */}

      <div className="flex flex-row gap-6 items-center justify-center">
        <ul className="flex flex-row gap-16 p-4">
          {Test.map((test) => (
            <li key={test.id} className="shadow-lg rounded-full ">
              <div className=" text-center mx-auto  rounded-md  cursor-pointer flex flex-col items-center justify-center">
                <div className="flex flex-row justify-center items-center ">
                  <img
                    src={test.imageUrl}
                    alt="/"
                    className="w-32 h-32 rounded-full"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* get in touch */}
      <div className="flex items-center justify-between p-8 mt-8 w-full bg-green-800">
        <div className="flex-1 pl-10">
          <h2 className="text-2xl font-semibold text-white">Looking to buy in bulk?</h2>
          <p className="text-white mt-5">
            Our wholesale team is available and will assist you during the
            process.
          </p>
        </div>
        <button className="px-4 py-2 mr-10 bg-white rounded-2xl font-bold text-green-800">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Video;
