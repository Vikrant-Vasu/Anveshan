import React from 'react'

function Social() {

    const Tests = [
        {
          id: 1,
          imageUrl:
            "https://scontent-sin6-2.cdninstagram.com/v/t51.29350-15/441500080_1484197092528132_4696007202465702311_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=6WSeun98U9cQ7kNvgEfIr6_&_nc_ht=scontent-sin6-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA5-OvxqvRp7myZ71wWD_SH6xa2KKMuEyHaiGleT_p1NA&oe=663DA1A0",
        },
        {
          id: 2,
          imageUrl:
            "https://scontent-sin6-1.cdninstagram.com/v/t51.29350-15/440114149_964614028370944_773028445704315499_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=iWW3AqJ5GggQ7kNvgFbauGu&_nc_ht=scontent-sin6-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCIg4IORCxU0iGyBJO4TvYASdGwT3HgWdkJlOdyeFykqw&oe=663D9E3D",
        },
        {
          id: 3,
          imageUrl:
            "https://scontent-sin6-3.cdninstagram.com/v/t51.29350-15/436470327_729353289358555_5520580841914092577_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=b8QBe6oeNKMQ7kNvgFXkAlS&_nc_ht=scontent-sin6-3.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCLuHXCP9W2h7RblsgdO87zLW5F-YCX50mlUfBQsqLrVA&oe=663D93A8",
        },
        {
          id: 4,
          imageUrl:
            "https://scontent-sin6-4.cdninstagram.com/v/t51.29350-15/436668488_969058887489661_916912512958661636_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=FFcLE_CxylYQ7kNvgGSs1HI&_nc_ht=scontent-sin6-4.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCfF-30JJvsg7iHpRmdzV9oZvqcB3y1QncNMy1hRK_cxA&oe=663DB365",
        },
        {
          id: 5,
          imageUrl:
            "https://scontent-sin6-2.cdninstagram.com/v/t51.29350-15/435293729_1150263009312168_6102221548922241940_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=icROWd6wlSkQ7kNvgF_QzaI&_nc_ht=scontent-sin6-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAECIbH8tzYV4IXn_hlFmMI6vRyim7LHvQ4UCyV05sFiA&oe=663DAC91",
        },
      ];
      const Test = [
        {
          id: 1,
          imageUrl:
            "https://scontent-sin6-3.cdninstagram.com/v/t51.29350-15/434873889_411262868273063_8966237332018267168_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=QqXTchz2KbUQ7kNvgHDC7UK&_nc_ht=scontent-sin6-3.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBypN7GISZ7HMNQKZ4jrN31-xt9RiYxL2SqrbZCC_xrMQ&oe=663DA16E",
        },
        {
          id: 2,
          imageUrl:
            "https://scontent-sin6-3.cdninstagram.com/v/t51.29350-15/433894958_314821988281111_323111491156438023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=sSGBL73YlVIQ7kNvgH24P-e&_nc_ht=scontent-sin6-3.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfApfP1zclSJqidRx5mCaeDeSdkyRIynLZx1LIkZw2CMkg&oe=663D979E",
        },
        {
          id: 3,
          imageUrl:
            "https://scontent-sin6-2.cdninstagram.com/v/t51.29350-15/433411898_331336552804362_7901800279345177165_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=I7_KeUor5IkQ7kNvgEOkg6z&_nc_ht=scontent-sin6-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCypS1LNvQzGoFxG6Ub0SLwZ8xsInbjOHg2FjvcNuiFYg&oe=663DB597",
        },
        {
          id: 4,
          imageUrl:
            "https://scontent-sin6-1.cdninstagram.com/v/t51.29350-15/432552745_945641496926613_5161741657692388711_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=IQl_T_kboI4Q7kNvgEM6Fwu&_nc_ht=scontent-sin6-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB2ZWOVH4pqNczMVVP2c1kihJsKaFQC_w3D9CRZE7Stlw&oe=663DACFF",
        },
        {
          id: 5,
          imageUrl:
            "https://scontent-sin6-3.cdninstagram.com/v/t51.29350-15/431345764_782735836524620_8348932275133421016_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=dsYVuSf3wgYQ7kNvgHgDVfc&_nc_ht=scontent-sin6-3.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDEiuqGAOreBinw6TuQia8rK4YEdkL93tvZyzVC8iFSFA&oe=663DBFC4",
        },
      ];

  return (
    <div className="mt-8  p-6 w-full bg-yellow-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
      Join Us On Social Media
      </h2>
      <h3 className='text-2xl  text-center mb-6 text-gray-700'>Health Tips, Recipes & More</h3>

      <div className="flex flex-row gap-6 items-center justify-center">
        <ul className="flex flex-row gap-3 p-4">
          {Tests.map((test) => (
            <li key={test.id} className="shadow-lg rounded-lg ">
              <div className=" text-center mx-auto  rounded-md  cursor-pointer flex flex-col items-center justify-center">
                <div className="flex flex-row justify-center items-center ">
                  <img
                    src={test.imageUrl}
                    alt="/"
                    className="w-56 h-56 rounded-xl"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-6 items-center justify-center">
        <ul className="flex flex-row gap-3 p-4">
          {Test.map((test) => (
            <li key={test.id} className="shadow-lg rounded-lg ">
              <div className=" text-center mx-auto  rounded-md  cursor-pointer flex flex-col items-center justify-center">
                <div className="flex flex-row justify-center items-center ">
                  <img
                    src={test.imageUrl}
                    alt="/"
                    className="w-56 h-56 rounded-xl"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Social
