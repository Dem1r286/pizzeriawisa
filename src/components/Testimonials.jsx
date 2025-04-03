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
    name: "Arman Garibovic",
    date: "7.12.2024",
    rating: 4,
    description: "Dobra hrana, ljubazno osoblje",
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
      className="flex flex-col justify-center items-center bg-gray-200 px-40 pt-20 pb-20 rounded-xl mt-20 shadow-lg mt-60 mb-60"
    >
      <div className="flex justify-center items-center flex-col mb-10 gap-2">
        <h2 className="text-3xl font-semibold text-black">
          Šta naši gosti kažu o nama?
        </h2>
        <p className="text-center font-medium text-sm text-gray-700">
          Pročitajte utiske naših gostiju koji su uživali u vrhunskim jelima i
          prijatnoj atmosferi.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={60}
        slidesPerView={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-6xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-start"
            style={{
              height: "250px", 
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", 
            }}
          >
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-600 mb-10">{testimonial.description}</p>

              <div className="mt-auto flex justify-start">
                <Rating
                  value={testimonial.rating}
                  readOnly
                  precision={0.5}
                  size="medium"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center flex-col mt-10 gap-2">
        <div className="flex flex-row justify-center items-center gap-4">
          <p className="font-semibold mt-1 text-md">Google Ocjena 4.4</p>
          <Rating value={4.4} readOnly precision={0.5} size="medium" />
        </div>
        <p className="font-semibold text-xs">176 Google recenzija</p>
      </div>
    </div>
  );
};

export default Testimonials;
