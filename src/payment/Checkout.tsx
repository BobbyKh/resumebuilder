import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Review from "../resume/Review";
import Pricing from "../pages/Pricing";
import Modal from "react-modal";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API_URL from "../api/Api";

interface Subscription {
  image: string;
  name: string;
  description: string;
  price: number;
  features: string;
}

interface PaymentSystem {
  name: string;
  description: string;
  qr_code: string;
  status: boolean;
}

const Checkout = () => {
  const { id } = useParams();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await fetch(`${API_URL}/api/pricing/${id}`);
        const data = await response.json();
        setSubscription(data);
      } catch (error) {
        console.error("Error fetching subscription:", error);
        setSubscription(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [id]);

  const [paymentSystems, setPaymentSystems] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchPaymentSystems = async () => {
      try {
        const response = await fetch(`${API_URL}/api/payment`); // Adjust the endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch payment systems");
        }
        const data = await response.json();
        setPaymentSystems(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching payment systems:", error);
      }
    };

    fetchPaymentSystems();
  }, []); //

  const [showQR, setShowQR] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
  className="relative text-white body-font overflow-hidden bg-gray-100 bg-via-black to-gray-50 bg-opacity-50 bg-opacity-50 bg-opacity-50"
>
  <div className="container px-6 py-24 mx-auto">
    <div className="relative max-w-6xl mx-auto bg-gray-200  shadow-2xl rounded-3xl p-10 md:p-16">
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-r from-blue-800 to-[#ff7b45] rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-gradient-to-r from-blue-800 to-[#d5420b] rounded-full blur-3xl opacity-50"></div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section */}
        <div
        
          className="lg:w-1/2 w-full text-center lg:text-left"
        >
          <h2 className="text-sm uppercase tracking-widest font-bold text-blue-800 mb-4 text-6xl">
            Subscription Plan
          </h2>
          <h1 className="text-6xl font-extrabold text-blue-800 leading-tight">
            {subscription?.name?.toUpperCase()}
          </h1>
          <p className="text-gray-900 leading-relaxed mb-8">
            {subscription?.description}
          </p>
          <ul className="space-y-6 text-lg text-gray-800">
            {subscription?.features.split(",").map((feature) => (
              <li
                key={feature}
                className="flex items-center space-x-4 bg-white bg-opacity-10 text-gray-900 py-3 px-5 rounded-lg shadow-lg"
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-800 text-2xl hover:text-[#ff7b45]"
                />
                <span className="text-gray-900">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div
          className="lg:w-1/2 w-full mt-12 lg:mt-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-gray-300 rounded-2xl shadow-inner py-12 px-10 space-y-8 ml-12 mb-12"
        >
          <div className="w-full">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Select Duration
            </h3>
            <div className="flex justify-between space-x-4 ">
              {[1, 3, 6, 12].map((dur) => (
                <button
                  key={dur}
                  className={`flex-1 px-6 text-lg font-semibold transition-all transform rounded-2xl shadow-inner  ${
                    duration === dur
                      ? "bg-blue-800 text-white shadow-lg scale-105"
                      : "bg-gray-600 bg-opacity-10 text-gray-900"
                  }`}
                  onClick={() => setDuration(dur)}
                >
                  {dur === 12 ? "1 Year" : `${dur} Month${dur > 1 ? "s" : ""}`}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Price</h3>
            <p className="text-4xl font-extrabold text-blue-800">
              {subscription
                ? `$${subscription.price * duration}`
                : "Price unavailable"}
            </p>
          </div>

          {subscription?.name === "Student" ? (
            <button className="w-full py-4 bg-blue-800 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform">
              Free
            </button>
          ) : (
            <button
              className="w-full py-4 bg-blue-800 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
              onClick={() => setModalIsOpen(true)}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>

    <div
      className="relative mt-16 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
    
    >
      <img
        alt="ecommerce"
        className="w-full h-full object-cover object-center"
        src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/06/infographic-resume-template-header.png"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30"></div>
      <div className=" justify-center">
        <h2 className="text-4xl font-bold text-blue-800 text-center ">
          Unlock Your Potential with Premium
        </h2>
      </div>
    </div>
  </div>







      <Review />
      <Pricing />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            backgroundColor: "d5420b",
            borderRadius: "0.5rem",
            padding: "2rem",
            width: "fit-content",
            height: "80vh",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            border: "2px #1f1f1f solid",
          },
        }}
      >



<section
      
  className="flex flex-col items-center bg-gray-200 text-blue-800 py-12 px-6"

>
  <div className="max-w-4xl w-full bg-gray-300 shadow-lg rounded-3xl p-8 md:p-12">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Checkout</h2>
      <p className="text-lg text-blue-800">
        Proceed to payment for{" "}
        <span className="text-blue-800">
          {subscription?.name}
        </span>{" "}
        subscription for {duration} months.
      </p>
      <p className="text-xl font-bold mt-4 text-blue-800">
        Total Price: $
        {subscription ? subscription.price * duration : "Price unavailable"}
      </p>
    </div>

    {/* Payment Methods */}
    <div className="mb-8">
      <p className="text-lg font-semibold mb-4">Payment Methods:</p>
      <ul className="flex flex-wrap gap-4">
        {paymentSystems.map((paymentSystem: PaymentSystem) => (
          <li
            key={paymentSystem.name}
            className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg hover:bg-gray-7n"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <button
              onClick={() => setShowQR(!showQR)}
              className="flex items-center space-x-2"
            >
              <img
                src={paymentSystem.qr_code}
                alt={paymentSystem.name}
                className="w-8 h-8"
              />
              <span className="text-white">{paymentSystem.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Form Section */}
    <form className="space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-900 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
            placeholder="johndoe@example.com"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-gray-900 mb-2">
            Gender
          </label>
          <select
            id="gender"
            className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-900 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
            placeholder="+1 123 456 7890"
          />
        </div>

        {/* Address */}
        <div className="col-span-full">
          <label htmlFor="address" className="block text-gray-900 mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
            placeholder="123 Main St, Anytown, USA"
          />
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <p className="text-lg font-semibold mb-4">Payment Information:</p>
        <div className="flex gap-4 justify-center mb-6">
          <img
            src="https://img.icons8.com/color/48/000000/visa.png"
            alt="Visa"
            className="h-10 w-10"
          />
          <img
            src="https://img.icons8.com/color/48/000000/mastercard.png"
            alt="Mastercard"
            className="h-10 w-10"
          />
          <img
            src="https://img.icons8.com/?size=100&id=13607&format=png&color=000000"
            alt="American Express"
            className="h-10 w-10"
          />

          <img
            src="https://img.icons8.com/?size=100&id=13611&format=png&color=000000"
            alt="Paypal"
            className="h-10 w-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Type */}
          <div>
            <label htmlFor="CardType" className="block text-gray-900 mb-2">
              Card Type
            </label>
            <select
              id="CardType"
              className="w-full p-3 rounded-lg  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
            >
              <option value="">Select Card Type</option>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="American Express">American Express</option>
            </select>
          </div>

          {/* Card Number */}
          <div>
            <label htmlFor="CardNumber" className="block text-gray-900 mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="CardNumber"
              className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label htmlFor="expiryDate" className="block text-gray-900 mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
              placeholder="MM/YY"
            />
          </div>

          {/* CVV */}
          <div>
            <label htmlFor="cvv" className="block text-gray-900 mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d5420b]"
              placeholder="123"
            />
          </div>
        </div>
      </div>
    </form>

    {/* Footer Buttons */}
    <div className="flex justify-center mt-8">
      <button
        className="bg-[#e71313] text-gray-600 text-white font-bold py-2 px-6 rounded-lg mr-4"
        onClick={() => setModalIsOpen(false)}
      >
        Close
      </button>
      <Link to={`/payment/${id}/${duration}`}>
        <button className="bg-blue-800 text-white font-bold py-2 px-6 rounded-lg">
          Proceed to Payment
        </button>
      </Link>
    </div>
  </div>
</section>
      </Modal>
    </section>
  );
};

export default Checkout;
