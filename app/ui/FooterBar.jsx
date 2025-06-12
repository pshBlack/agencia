import { LiaTelegram, LiaViber, LiaInstagram } from "react-icons/lia";

export default function FooterBar() {
  return (
    <footer className="bg-[#E5E1DA] mt-15 py-5 h-max absolute w-full">
      <div className="flex sm:justify-end items-center mx-15 gap-15 flex-col sm:flex-row">
        <div className="">
          <h4 className="font-bold">Зв'язатися з нами: </h4>
          <a className="" href="tel:0671234567">
            +380 (67) 123-45-67
          </a>
          <div className="flex justify-evenly items-center mt-5 gap-5">
            <a href="https://www.instagram.com/" target="_blank">
              <LiaInstagram className="size-10" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <LiaViber className="size-10" />
            </a>
            <a href="https://t.me/" target="_blank">
              <LiaTelegram className="size-10" />
            </a>
          </div>
        </div>
        <div className="max-w-[200px] flex flex-col items-center">
          <h4 className="font-bold">Розташування: </h4>
          <p className="">
            м. Івано-Франківськ, вул. Крутої агенції 2, 3 дім, 2 поверх
          </p>
        </div>
      </div>
    </footer>
  );
}
