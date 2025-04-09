import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Rating } from "@mui/material";

const testimonials = [
  {
    name: "Ak Ak",
    date: "prije 5 dana",
    rating: 5,
    description:
      "Najbolja pica u gradu, moja omiljena pizza je ona sa piletinom, sve preporuke 👌🏻👌🏻👌🏻",
  },
  {
    name: "Amela Sefer",
    date: "prije 2 godine",
    rating: 5,
    description: "Odlična hrana, usluga sve pohvale. Zaista nemam zamjerke 👌👌",
  },
  {
    name: "Ivana Pandurevic",
    date: "prije godinu dana",
    rating: 5,
    description: "Sve pohvale za kulturno osoblje. Hrana, zasluzena desetka ❤️",
  },
  {
    name: "Samah Abdulah",
    date: "prije 7 mjeseci",
    rating: 4,
    description:
      "Ukusna pica sa sirom. Usluga je odlična. Konobar se nasmijao i imao je ljubazno lice. Ima hladnjak za vodu, neka ih Bog nagradi. Preporučujem da probate njihovu pizzu.",
  },
  {
    name: "Anna Hamp",
    date: "prije 3. godine",
    rating: 5,
    description:
      "Najbolji sendvič sa piletinom u Sarajevu, napravljen i serviran od strane veoma ljubaznih ljudi.",
  },
  {
    name: "A C",
    date: "prije 7 mjeseci",
    rating: 5,
    description:
      "Brza dostava, ukusna hrana i pizze i sendviči. Vrijednost za novac, sve preporuke.",
  },
  {
    name: "Anastasia Anastasia",
    date: "prije 2 mjeseca",
    rating: 5,
    description:
      "Definitivno najbolja hrana, sve preporuke, odlicna atmosfera, velike pohvale momku Amaru koji pravi pice, svaka mu čast!",
  },
  {
    name: "Anesa B.",
    date: "prije godinu dana",
    rating: 5,
    description: "Odlična pica, veoma prijatno iznenađenje! 👍🏼",
  },
  {
    name: "AskSeven",
    date: "prije 8 mjeseci",
    rating: 5,
    description:
      "Ljubazni i ljubazni, pizza je dosta brzo dostavljena (napolju je bilo 40 stepeni Celzijusa). Pica je odlična (wisa i mexicana), dobri sastojci, kvalitetno meso.",
  },
  {
    name: "Nijaz Rahman",
    date: "prije 2 mjeseca",
    rating: 5,
    description:
      "Sve pohvale. Ukusne pizze i ostala jela. Ljubazno osoblje",
  },
  {
    name: "Eldar Vejsilagić",
    date: "prije 6 mjeseci",
    rating: 5,
    description:
      "Super pica, prekrasan sendvič, palačinke su odlične, dolazim ovde već godinama, odlični su, a i uposlenici jako ljubazni, svratite i nećete pokajati.",
  },
];

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      style={{
        backgroundImage: `url('assets/other/background.webp')`,
        backgroundSize: "cover",
      }}
      className="select-none flex flex-col w-screen h-screen justify-center items-center px-40 pb-10 xl:pb-40 xl:pt-20"
    >
      <div className="bg-black/90 px-20 py-10 rounded-xl my-10">
        <div className="flex justify-center items-center flex-col mb-10 gap-2">
          <h2 className="sm:text-3xl text-xl font-semibold text-white text-center">
            Šta naši gosti kažu o nama?
          </h2>
          <p className="text-center font-medium sm:text-sm text-xs text-white">
            Pročitajte utiske naših gostiju koji su uživali u vrhunskim jelima i
            prijatnoj atmosferi.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <Swiper
            modules={[Autoplay]}
            className="w-[300px] sm:w-[350px] md:w-[550px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1200px]"
            spaceBetween={60}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="bg-white rounded-xl shadow-xl p-6"
                style={{
                  height: "250px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-bold sm:text-md text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 sm:text-md text-xs">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 mb-10 text-sm">
                    {testimonial.description}
                  </p>

                  <div className="mt-auto flex justify-start">
                    <Rating
                      value={4.4}
                      readOnly
                      precision={0.5}
                      size="medium"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center items-center flex-col mt-10 gap-2 text-white">
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="font-semibold mt-1 sm:text-md text-sm">
              Google Ocjena 4.4
            </p>
            <Rating value={4.4} readOnly precision={0.5} size="medium" />
          </div>
          <p className="font-semibold sm:text-xs text-[11px]">
            176 Google recenzija
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
