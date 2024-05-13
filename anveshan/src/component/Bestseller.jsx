import React from "react";

function BestSellers() {

 

  return (
    <div className="mt-14 mb-16">
  <h2 className="text-3xl font-semibold text-center mb-6 text-green-800">
    Best Sellers
  </h2>

  <div className="flex flex-wrap justify-center gap-6 mt-4 ">
    <div className="max-w-xs rounded overflow-hidden shadow-lg  w-32 md:w-60  h-fit">
      <video autoPlay={true} muted loop width="320" height="180">
        <source
          src="https://www.anveshan.farm/cdn/shop/files/quinn_kh3kzsgaqldzlxpv62pi6oef.mp4"
          type="video/mp4"
        />
      </video>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">A2 Cultured Desi Cow Ghee</div>
        <p className="text-gray-700 text-base">Rs. 549 <span className="line-through">Rs. 600</span></p>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden shadow-lg  w-32 md:w-60  h-fit">
      <video autoPlay={true} muted loop width="320" height="180">
        <source
          src="https://www.anveshan.farm/cdn/shop/files/quinn_n2cc2v4a37mgq74hzup4nnms.mp4"
          type="video/mp4"
        />
      </video>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Wood Cold Pressed Coconut Oil</div>
        <p className="text-gray-700 text-base">Rs. 379 <span className="line-through">Rs. 400</span></p>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden shadow-lg  w-32 md:w-60  h-fit">
      <video autoPlay={true} muted loop width="320" height="180">
        <source
          src="https://www.anveshan.farm/cdn/shop/files/quinn_sjdqwnl80336w7rdmbwyn0y3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Wood Cold Pressed Groundnut Oil</div>
        <p className="text-gray-700 text-base">Rs. 419 <span className="line-through">Rs. 475</span></p>
      </div>
    </div>
    <div className="max-w-xs rounded overflow-hidden shadow-lg  w-32 md:w-60  h-fit">
      <video autoPlay={true} muted loop width="320" height="180">
        <source
          src="https://www.anveshan.farm/cdn/shop/files/quinn_s3887c4ce6sp7e6sm1cn7vlx.mp4"
          type="video/mp4"
        />
      </video>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Wood Cold Pressed Groundnut Oil</div>
        <p className="text-gray-700 text-base">Rs. 419 <span className="line-through">Rs. 475</span></p>
      </div>
    </div>
  </div>
</div>

  );
}

export default BestSellers;
