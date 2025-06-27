import { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { MdMail } from "react-icons/md";
import { BackgroundLines } from "../components/ui/bg-lines";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const mess = event.target.Message.value;
    if (mess.trim() === "") {
      return;
    }
    setResult("sending");

    formData.append("access_key", "946cb917-df86-472b-8ac2-a26436d772b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(true);
      event.target.reset();
    } else {
      setResult(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-10/12 mx-auto relative "
    >
      <Helmet>
        <title>Contact Me | Developer Sadik</title>
      </Helmet>
      <BackgroundLines>
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Contact Me
        </h1>
        <p className="lg:w-2/5 mx-auto pt-1 pb-10 text-xs md:text-sm text-center">
          Feel free to get in touch! Whether you have a project in mind, need
          assistance, or just want to connect, I&apos;d love to hear from you.
        </p>
      </BackgroundLines>
      <section className="flex lg:flex-row flex-col items-center gap-10 md:gap-20">
        <div className="lg:w-2/4 text-left">
          <h1 className="gradient-text uppercase md:text-xl font-medium">
            Do you have a project to discuss?
          </h1>
          <h1 className="md:text-2xl text-xl py-2 md:py-3 font-bold">
            Let&apos;s Create Something Amazing Together!
          </h1>
          <p className="md:text-base text-sm">
            Thanks for stopping by! If you have any questions, ideas, or simply
            want to collaborate, feel free to reach out. Use the contact details
            below or fill out the quick form to send me a message directly.
            I&apos;m excited to connect and create something amazing together!
          </p>
          <h2 className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
            contact
          </h2>
          <ul className="text-sm md:text-base">
            <li className="">
              <a
                href="https://www.google.com/maps/place/Sher-E-Bangla+Fazlul+Haque+Hall,+RU/@24.3669963,88.6368959,17z/data=!4m6!3m5!1s0x39fbf1706bcb3ee7:0x363863405d6eb2b7!8m2!3d24.3679208!4d88.6411386!16s%2Fg%2F11gmgw_gcn?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaLocationDot />
                Binodpur, Rajshahi, Bangladesh
              </a>
            </li>
            <li className="">
              <a
                href="tel:+8801717375585"
                target="_blank"
                className="flex items-center gap-2"
              >
                <BiSolidPhoneCall /> +8801717375585
              </a>
            </li>
            <li className="">
              <a
                href="https://wa.me/8801717375585"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp /> +8801717375585
              </a>
            </li>
            <li className="">
              <a
                href="mailto:sadiksourov11@gmail.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <MdMail /> sadiksourov11@gmail.com
              </a>
            </li>
          </ul>

          <h2 className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
            social
          </h2>
          <ul className="flex gap-2 ">
            <li className="banner-list">
              <a href="https://github.com/sadik117" target="_blank">
                <FaGithub className="banner-list-a" />
              </a>
            </li>

            <li className="banner-list">
              <a
                href="https://linkedin.com/in/sadiksourov11"
                target="_blank"
              >
                <FaLinkedin className="banner-list-a" />
              </a>
            </li>

            <li className="banner-list">
              <a
                href="mailto:sadiksourov11@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you."
                target="_blank"
              >
                <MdMail className="banner-list-a" />
              </a>
            </li>

            <li className="banner-list">
              <a href="https://x.com/sadiksourov117" target="_blank">
                <FaTwitter className="banner-list-a" />
              </a>
            </li>

            <li className="banner-list">
              <a
                href="https://www.facebook.com/sadiksourov11/"
                target="_blank"
              >
                <FaFacebook className="banner-list-a" />
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-2/4 w-full flex flex-col items-start">
          <h1 className="text-lg font-semibold pb-5">Direct Message</h1>
          <div className="bg-gradient-bg rounded-xl w-full p-[1px]">
            <form
              onSubmit={onSubmit}
              className="bg-primary/80 rounded-xl p-3 md:p-7 text-left w-full"
            >
              <div className="flex flex-col gap-1 items-start">
                <label className="font-semibold text-sm md:text-base">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Enter your email"
                  className="w-full text-sm md:text-base bg-primary/50 focus:outline-none indent-2 p-2 rounded-xl"
                />
              </div>

              <div className="flex flex-col gap-1 items-start pt-2">
                <label className="font-semibold text-sm md:text-base">
                  Message
                </label>
                <textarea
                  name="Message"
                  type="text"
                  required
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full text-sm md:text-base bg-primary/50 focus:outline-none indent-2 p-2 rounded-xl"
                />
              </div>

              <button className="btn bg-gradient-bg text-primary mt-3 md:mt-5  min-h-max h-max  border-none rounded-full md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3">
                Send <LuSend />
              </button>
              <h1
                className={`font-medium pt-2 text-sm ${
                  result ? "gradient-text" : "text-red-500"
                }`}
              >
                {result === true && "Message sent!"}{" "}
                {result === false && "Failed to send message"}{" "}
                {result === "sending" && "Sending..."}
              </h1>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
