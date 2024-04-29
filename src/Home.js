import React from "react";
import myImage from "./material/runad.jpg";
import myImage2 from "./material/dr.PNG";
import picture from "./material/picture.PNG";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="">
      <div className=" flex justify-normal">
        <div className="">
          <div className="pl-10 text-3xl font-bold">
            ዩኬ ስደተኞችን ወደ ሩዋንዳ <br />
            የምትልክበት ሕግ ምንድን ነው? <br />
            ተፈጻሚነቱስ በማን ላይ ነው?
          </div>
          <div className="pl-10 pt-10">
            <div>
              <Link to="/Page1" className="">
                <img
                  src={myImage2}
                  alt="My Image"
                  className="w-56 h-44 rounded-xl"
                />
                ታዋቂው ደራሲ ሰር ሳልማን ሩሽዲ ከሁለት ዓመት በፊት የገጠማቸውን ለቢቢሲ
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" text-3xl font-bold">
            ታዋቂው ደራሲ ሳልማን ሩሽዲ በስለት ተወግተው <br />
            ዐይናቸውን ያጡባትን ዕለት ሲያስታውሱ
          </div>
          <div className="pl-20 pt-10">
            <img src={myImage2} alt="My Image" className="rounded-xl" />

            <div>
              <Link to="/ደራሲ" className="">
                ታዋቂው ደራሲ ሰር ሳልማን ሩሽዲ ከሁለት ዓመት በፊት የገጠማቸውን ለቢቢሲ
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" text-3xl font-bold">
            ዩኬ ስደተኞችን ወደ ሩዋንዳ <br />
            የምትልክበት ሕግ ምንድን ነው? <br />
            ተፈጻሚነቱስ በማን ላይ ነው?
          </div>
          <div className="pl-20 pt-10">
          <div>
              <Link to="/Uk" className="">
            <img
              src={myImage}
              alt="My Image"
              className="w-48 h-44 rounded-xl"
            />

            
                ዩኬ ስደተኞችን ወደ ሩዋንዳ የምትልክበት ሕግ ምንድን ነው? ተፈጻሚነቱስ በማን ላይ ነው?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Link to="/Page2">
          <img src={picture} alt="my image" className="" />
          go to the page two
        </Link>
      </div>
    </div>
  );
}

export default Home;
