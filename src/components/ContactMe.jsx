import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const ContactMe = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Andrew",
            from_email: form.email,
            to_email: "andrew.segovia4@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

  return (
    <div className=" bg-secondary h-screen pt-10 flex flex-col items-center justify-center ">
        <div className="grid grid-cols-2 gap-10" style={{padding: '25px'}}>
            <div className="text-white leading-5 py-5">
                <h1 className="lowercase text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Let's connect</h1>
                <div className="pt-0 sm:pt-1 text-sm sm:text-base md:text-xl mt-4">
                    <a className="cursor-pointer hover:text-gray-500" href="https://github.com/andrewsegovia00" target="_blank" rel="noopener noreferrer">GitHub</a><br/>
                    <a className="cursor-pointer hover:text-gray-500" href="mailto:andrew.segovia4@gmail.com" target="_blank" rel="noopener noreferrer">Email</a><br/>
                    <a className="cursor-pointer hover:text-gray-500" href="https://www.linkedin.com/in/andrew-segovia99/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="block lg:flex py-4">
        <div className="md:flex flex-col flex-1 ">
            <label className="text-base">Name:
                <input className="bg-blue-900 border-b-2 border-gray-400 border-r-0 border-t-0 border-l-0 w-full"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe?"
                />
            </label>
            <label className="text-base">Email:
                <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe123@gmail.com"
                className="bg-blue-900 border-b-2 border-gray-400 border-r-0 border-t-0 border-l-0 w-full"
                />
            </label>
        </div>
       <div className="flex flex-col flex-1 pt-6 lg:pt-0 lg:ml-5 ">
            <label className="text-base">Your Message
                <textarea
                id="body"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="bg-blue-900 border-b-2 border-gray-400 border-r-0 border-t-0 border-l-0 w-full md:w-full lg:w-700 h-16 md:h-20 block"
                ></textarea>
            </label>
            <button
            type="submit"
            className="my-4 px-5 py-1 border-none rounded-md bg-green-500 text-white text-base cursor-pointer hover:bg-green-700 block"
            >
            {loading ? "Sending..." : "Send"}
            </button>
            </div>
        </form>
        </div>
    </div>
  )
}
export default ContactMe