import { useEffect, useState } from "react";
import { toast } from "sonner";

import { MovieMasterLogo } from "../Logo/Logo";
import {
  saveEmailToNewsletter,
  getEmailFromNewsletter,
  isEmailAlreadyRegistered,
} from "../../api/newsletter";

import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [emailData, setEmailData] = useState("");

  useEffect(() => {
    const alreadySubscribed = getEmailFromNewsletter();

    if (alreadySubscribed.length) setEmailData(alreadySubscribed[0].email);
  }, []);

  const handleEmailRegister = (e) => {
    setEmailData(e.target.value);
  };

  const handleEmailRegistration = () => {
    const alreadyRegistered = isEmailAlreadyRegistered(emailData);

    if (!alreadyRegistered) {
      toast.success("Subscribed successfully");
      return saveEmailToNewsletter(emailData);
    }
    toast.error("Email address already subscribed");
  };

  return (
    <footer className="container-fluid w-full flex flex-col justify-center items-center">
      <div className="footerNewsletter relative w-full h-48 flex justify-center items-center">
        <span className="imageEffect w-full h-full absolute -z-10 inset-0 bg-gradient-to-b from-slate-900/70 to-slate-500"></span>
        <imgs
          className="w-full h-full absolute inset-0 -z-10 object-cover"
          src="https://wallpapers.com/images/hd/best-fast-and-furious-background-3514-x-1977-snf7rpgrb2i4r4fx.jpg"
          alt="Footer Image"
        />

        <div className="footerNewsletter relative z-20">
          <div className="footerNewsletterTitle text-center">
            <h3 className="text-2xl text-white uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              illo!
            </p>
          </div>
          <div className="inputContainer h-10 w-full flex justify-center rounded-lg items-center border-[1px] border-gray-400">
            <input
              className="bg-transparent w-full focus:outline-none px-2"
              onInput={handleEmailRegister}
              defaultValue={emailData}
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="uppercase px-5 h-full relative z-10 text-white bg-red-500 rounded-lg"
              onClick={handleEmailRegistration}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="footerContainer w-full flex flex-col md:flex-row justify-center items-center p-1 mt-3">
        <div className="movieMasterLogo w-full md:min-w-96">
          <MovieMasterLogo mainDivClass={"text-center"} />
        </div>

        <div className="socialNetwork my-3 flex items-center">
          <div className="socialNetworkTitle pr-12 text-nowrap">
            <h3 className="text-gray-400 text-sm uppercase">social network</h3>
          </div>
          <div className="socialNetworkLinks flex">
            <Link to="/" className="text-white mx-2 hover:text-red-500">
              <CiFacebook />
            </Link>
            <Link to="/" className="text-white mx-2 hover:text-red-500">
              <CiInstagram />
            </Link>
            <Link to="/" className="text-white mx-2 hover:text-red-500">
              <CiTwitter />
            </Link>
          </div>
        </div>

        <div className="footerLinks w-full my-3 flex justify-evenly md:justify-end items-center uppercase text-sm">
          <Link to="/" className="mx-2 text-gray-400 hover:text-red-500">
            films
          </Link>
          <Link to="/" className="mx-2 text-gray-400 hover:text-red-500">
            favorites
          </Link>
          <Link to="/" className="mx-2 text-gray-400 hover:text-red-500">
            news
          </Link>
        </div>

        <div className="footerContact w-full flex items-center justify-evenly md:justify-end text-sm">
          <Link to="mailto:invalidmail@gmail.com" className="text-gray-400 hover:text-red-500 mx-2">
            moviemaster@info.com
          </Link>
          <Link to="tel:+1234567890" className="text-gray-400 hover:text-red-500">
            (+123) 456 7890
          </Link>
        </div>


      </div>
    </footer>
  );
};

// <div className="movieCardPoster relative w-full h-[90vh] -z-10">
//         <img className="absolute object-cover w-full h-full" src={randomMovieImage} alt="Movie Card" />
//         <span className="imageEffect absolute z-0 inset-0 bg-gradient-to-b from-slate-900/70 to-slate-500"></span>
//       </div>

// https://wallpapers.com/images/hd/best-fast-and-furious-background-3514-x-1977-snf7rpgrb2i4r4fx.jpg
