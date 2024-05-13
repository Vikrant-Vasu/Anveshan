import React from "react";

function WeBelive() {
  const Services = [
    {
      id: 1,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/authenticity.png?v=1648616970&width=300",
      title: "AUTHENTICITY",
      description: "Bringing purest form of food direct from the farms",
    },
    {
      id: 2,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/tradition-culture.png?v=1648616970&width=300",
      title: "TRADITION",
      description: "Harnessing age-old wisdom passed down by Grandmas",
    },
    {
      id: 3,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/brutal-honesty.png?v=1648616970&width=300",
      title: "BRUTAL HONESTY",
      description: "Being 100% transparent & thoroughly lab-tested",
    },
    {
      id: 4,
      imageUrl:
        "https://www.anveshan.farm/cdn/shop/files/purpose.png?v=1648616970&width=300",
      title: "PURPOSE",
      description: "Empowering rural India with employment & fair trade",
    },
  ];


  return (
    <>
    <div className="bg-gray-100 p-7">
      <div className=" md:w-1/2 mx-auto text-center ">
        <h2 className="text-3xl text-green-800 font-semibold mb-3">
          We Believe In
        </h2>
      </div>

      <div className="flex flex-row gap-6 items-center justify-center">
        {Services.map((service) => (
            <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md  cursor-pointer flex flex-col items-center justify-center">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-36 h-36"
              />
            <h4 className="text-xl font-bold text-black mb-2 px-2">{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Anveshan’s Top Picks */}

    <div className="  p-7 w-full bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6 text-green-800">
      Anveshan’s Top Picks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-4 justify-center">

        <div className="max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://www.anveshan.farm/cdn/shop/products/1-Catalog.png?v=1665554171&width=713"
            alt="Summer Special Product 1"
          />
          <div className=" px-6 py-4">
            <div className="font-bold text-xl mb-2">200 gm Moringa Powder</div>
            <p className="text-gray-700 text-base">
              Rs. 849 <span className="line-through">Rs. 299</span>
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://www.anveshan.farm/cdn/shop/files/anveshan-mishriGulkand.jpg?v=1689582994&width=713"
            alt="Summer Special Product 2"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">200 gm Mishri Gulkand</div>
            <p className="text-gray-700 text-base">
              Rs. 849 <span className="line-through">Rs. 299</span>
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://www.anveshan.farm/cdn/shop/products/dry-fruit-paak-grey.jpg?v=1679649676&width=713"
            alt="Summer Special Product 3"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">200 gm Dry Fruit Paak Sweet</div>
            <p className="text-gray-700 text-base">
              Rs. 849 <span className="line-through">Rs. 299</span>
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://www.anveshan.farm/cdn/shop/products/2_11.jpg?v=1661758024&width=713"
            alt="Summer Special Product 4"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">200 gm Moringa Sattu Drink Mix</div>
            <p className="text-gray-700 text-base">
              Rs. 849 <span className="line-through">Rs. 299</span>
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default WeBelive;
