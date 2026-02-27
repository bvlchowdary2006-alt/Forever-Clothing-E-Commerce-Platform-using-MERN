import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We started this platform with a simple idea: online shopping should
            be easy, reliable, and actually enjoyable. In a world full of
            cluttered marketplaces, our goal is to create a clean, seamless
            experience where you can discover products you love without the
            hassle. From browsing to checkout, every part of our website is
            designed to be fast, intuitive, and user-friendly.
          </p>
          <p>
            Quality is at the heart of everything we do. We carefully select and
            curate our collections to reflect modern trends while maintaining
            high standards in craftsmanship and value. Whether it’s everyday
            essentials or something a little more special, we believe great
            products shouldn’t come with confusion or compromise.
          </p>

          <p>
            As a young, growing brand rooted in India, we understand the needs
            of today’s shoppers — affordability, authenticity, and trust. We
            work hard to ensure transparent pricing, secure payments, and
            dependable delivery across the country. Your satisfaction isn’t just
            a metric for us; it’s the foundation of our growth.
          </p>
          <b className=" text-gray-800">Our Mission</b>

          <p>
            Our mission is to make online shopping simple, trustworthy, and
            enjoyable. We focus on offering quality products at fair prices
            through a seamless, customer-first experience. By combining
            thoughtful design, reliable service, and continuous improvement, we
            aim to build a platform people can rely on and return to with
            confidence.
          </p>
        </div>
      </div>
      <div className=" text-4xl py-4">
        <Title text1={"WHY U "} text2={"SHOULD CHOOSE US"} />
      </div>
      <div className=" flex flex-col md:flex-row text-sm mb-20 ">
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Quality is never an afterthought for us — it’s built into every step
            of our process. From careful product selection to thorough checks
            before dispatch, we ensure that every item meets our standards for
            performance, durability, and value. We work closely with trusted
            suppliers and continuously refine our quality controls to deliver
            products you can rely on, every time you shop with us.
          </p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            Convenience is at the heart of everything we build. From intuitive
            navigation and secure checkout to multiple payment options and
            dependable delivery, we’re focused on saving you time and effort.
            Our platform is designed to make shopping easy and accessible, so
            you can find what you need quickly and enjoy a seamless experience
            from start to finish.
          </p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            We believe great service is just as important as great products. Our
            team is committed to providing prompt, friendly, and reliable
            support at every stage of your shopping journey. Whether you need
            help choosing a product, tracking an order, or resolving an issue,
            we’re here to ensure your experience is smooth, stress-free, and
            satisfying.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
