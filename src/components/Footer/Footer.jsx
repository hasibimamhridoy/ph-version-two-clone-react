import React from "react";
// import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <section className="footer-section bg-[#0f0317] text-white section w-full lg:p-20">
        <div className="footer flex justify-between  ">
          
          <div className="address space-y-3">
            <p className="text-sm">
              Office Address
            </p>
            <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
            <p>
              Support:<span className="email-ad hover:underline cursor-pointer"> web@programming-hero.com </span>
            </p>
            <p>
              Helpline:<span className="number-ad cursor-pointer hover:underline"> 01322810867 </span>
            </p>
            <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
          </div>

          <div className="useful-link space-y-3 cursor-pointer">
            <p className="text-sm cursor-pointer">Useful Links</p>
            <p className="useful-link-item cursor-pointer" href="">
              Success
            </p>
            <p className="useful-link-item cursor-pointer" href="">
              Blog
            </p>
            <p className="useful-link-item cursor-pointer" href="">
              Refund Policy
            </p>
            <p className="useful-link-item cursor-pointer" href="">
              Terms and Conditions
            </p>
            <p className="useful-link-item cursor-pointer" href="">
              Privacy & App Privacy Policy
            </p>
          </div>

          <div className="follow space-y-3">
            <p className="text-sm">Follow Us</p>
            <div className="social-img flex gap-3">
              <img className="w-7 h-7 cursor-pointer" src="facebook.png" alt="" />
              <img className="w-7 h-7 cursor-pointer" src="linkedin.png" alt="" />
              <img className="w-7 h-7 cursor-pointer" src="instagram.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
