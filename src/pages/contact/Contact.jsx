import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  // Fetch email from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("users");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser.email) {
          setInput((prev) => ({ ...prev, email: parsedUser.email }));
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.number || !input.message) {
      return toast.error("Please fill all the fields");
    }

    if (!/^\d{10}$/.test(input.number)) {
      return toast.error("Please enter a valid 10-digit number");
    }

    try {
      const allInputData = collection(fireDB, "contact");
      await addDoc(allInputData, input);
      toast.success("Message sent successfully");
      setInput({
        name: "",
        email: input.email, // Keep the email
        number: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <section className="flex justify-center flex-col items-center h-full bg-lightBg font-mono py-14 px-5">
        <h1 className="text-3xl font-medium text-primaryColor text-center">
          Contact
        </h1>
        <p className="text-sm xl:text-lg font-normal text-center">
          Contact with us to share your feedback
        </p>
        <div className="w-[100%] xl:w-[40%] bg-lightBg shadow-3xl py-10 px-7 rounded mt-5">
          <form className="flex flex-col w-full gap-5 " onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={input.name}
              className="border-[1px] border-primaryColor outline-none w-full px-2 py-2 rounded"
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />

            {/* Email (Fetched from localStorage, Read-Only) */}
            <input
              type="text"
              value={input.email}
              placeholder="Login required"
              className="border-[1px] border-primaryColor outline-none w-full px-2 py-2 rounded bg-gray-100 cursor-not-allowed"
              readOnly
            />

            <div className="flex w-full gap-2">
              <input
                type="number"
                value={input.number}
                placeholder="Enter your contact number"
                className="border-[1px] border-primaryColor outline-none w-full px-2 py-2 rounded"
                onChange={(e) => setInput({ ...input, number: e.target.value })}
              />
            </div>

            <textarea
              rows={5}
              value={input.message}
              placeholder="Write your message here..."
              className="border-[1px] border-primaryColor outline-none w-full px-2 py-2 rounded"
              onChange={(e) => setInput({ ...input, message: e.target.value })}
            ></textarea>

            <button className="w-full rounded bg-primaryColor px-2 py-2 text-white">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
