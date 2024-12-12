import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Review from "../resume/Review";
import Pricing from "../pages/Pricing";
import Modal from "react-modal";

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
        const response = await fetch(`http://127.0.0.1:8000/api/pricing/${id}`);
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
        const response = await fetch("http://127.0.0.1:8000/api/paymentsystem"); // Adjust the endpoint
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
      data-aos="fade-up"
      className="text-white body-font overflow-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div
            data-aos="fade-right"
            className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0"
          >
            <h2 className="text-sm title-font text-white tracking-widest">
              SUBSCRIPTION
            </h2>
            <h1 className="text-[#d5420b] text-3xl title-font font-medium mb-4">
              {subscription?.name}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                {subscription?.description}
              </a>
            </div>
            <ul className="list-disc pl-8">
              {subscription?.features.split("\r\n").map((feature) => (
                <li key={feature} className="border-b border-gray-300 py-2">
                  {feature}
                </li>
              ))}
            </ul>
            <div
              data-aos="fade-left"
              className="flex border-t border-b mb-6 border-gray-200 py-2"
            >
              <span className="text-[#d5420b]">Duration</span>
              <span className="ml-auto text-[#d5420b]">
                <button
                  className="border-2 border-gray-300 rounded-full px-2 py-1 mr-2"
                  onClick={() => setDuration(1)}
                >
                  1 month
                </button>
                <button
                  className="border-2 border-gray-300 rounded-full px-2 py-1 mr-2"
                  onClick={() => setDuration(3)}
                >
                  3 months
                </button>
                <button
                  className="border-2 border-gray-300 rounded-full px-2 py-1 mr-2"
                  onClick={() => setDuration(6)}
                >
                  6 months
                </button>
                <button
                  className="border-2 border-gray-300 rounded-full px-2 py-1"
                  onClick={() => setDuration(12)}
                >
                  1 year
                </button>
              </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-[#d5420b] text-lg">Price</span>
              <span className="ml-auto text-[#d5420b]">
                {subscription
                  ? `$${subscription.price * duration}`
                  : "Price unavailable"}
              </span>
            </div>
            {subscription?.name === "Student" ? (
              <button className="flex ml-auto text-white bg-[#d5420b] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Free
              </button>
            ) : (
              <button
                className="flex ml-auto text-white bg-[#d5420b] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={() => setModalIsOpen(true)}
              >
                Checkout
              </button>
            )}
          </div>
          <img
            alt="ecommerce"
            data-aos="fade-left"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://images.ctfassets.net/7qqwgjna58ct/3WEd2JUHd2kdYfY34FanGj/ec7084674c3fd7420911240de5a9c5d7/get-a-job-with-no-experience.png"
          />
        </div>
        
      </div>
      <Review />
      <Pricing />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Checkout Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            backgroundColor: "white",
            borderRadius: "0.5rem",
            padding: "2rem",
            width: "fit-content",
            height: "80vh",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
            border: "2px #1f1f1f solid",
          },
        }}
      >
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl text-[#d5420b] font-bold mb-4">Checkout</h2>
          <p className="mb-6 text-center text-lg" data-aos="fade-up" data-aos-duration="1000">
            Proceed to payment for {duration} months of <p className="text-[#d5420b] border-b-2 border-[#d5420b]">{subscription?.name}{" "}</p> 
            Subscription.
          </p>
          <p className="text-lg font-bold mb-4 text-center " data-aos="fade-up" data-aos-duration="1000">
            Total price: $
            {subscription ? subscription.price * duration : "Price unavailable"}
          </p>
        </div>
        <p className="mb-6" data-aos="fade-up" data-aos-duration="1000">Payment methods:</p>
        <ul className="list-disc mb-6 flex flex-row gap-4" data-aos="fade-up" data-aos-duration="1000">
          {paymentSystems.map((paymentSystem: PaymentSystem) => (
            <div
              className="border-2 border-gray-300 rounded p-2 hover:bg-gray-200"
              key={paymentSystem.name}
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
                  className="w-6 h-6"
                />
                <span>{paymentSystem.name}</span>
              </button>
            </div>
          ))}
        </ul>
        <div className="flex flex-col gap-4 bg-gray-100 p-4" data-aos="fade-up" data-aos-duration="1000">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              className="border-2 border-gray-300 rounded p-2 w-full"
              placeholder="John Doe"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              className="border-2 border-gray-300 rounded p-2 w-full"
              placeholder="johndoe@example.com"
            />
          </label>
          <label htmlFor="gender">
            Gender
            <select
              id="gender"
              className="border-2 border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label htmlFor="phone">
            Phone
            <input
              type="tel"
              id="phone"
              className="border-2 border-gray-300 rounded p-2 w-full"
              placeholder="+1 123 456 7890"
            />
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text"
              id="address"
              className="border-2 border-gray-300 rounded p-2 w-full"
              placeholder="123 Main St, Anytown, USA"
            />
          </label>
          <label htmlFor="paymentInfo">
            Payment Information
          </label>
          <div className="flex justify-center gap-4">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8 w-8" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8 w-8" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4IZwz7bJ8wqn5j6xil0Pmpx1cEPARqvxFQ&s" alt="American Express" className="h-8 w-8" />
          </div>
          <label htmlFor="CardType">
            Card Type
            <select
              id="CardType"
              className="border-2 border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select Card Type</option>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="American Express">American Express</option>
            </select>
          </label>
          <label htmlFor="CardNumber">
            Card Number
            <input
              type="text"
              id="CardNumber"
              className="border-2 border-gray-300 rounded p-2 w-full"
              placeholder="1234 5678 9012 3456"
            />
          </label>
          <label htmlFor="expiryDate">
            Expiry Date
            <input
              type="text"
              id="expiryDate"
              className="border-2 border-gray-300 rounded p-2 w-full"
              placeholder="MM/YY"
            />
          </label>
          <label htmlFor="cvv">
            CVV
            <input
              type="text"
              id="cvv"
              className="border-2 border-gray-300 rounded p-2 w-full"
              placeholder="123"
            />
          </label>
        </div>
        <div className="flex justify-center mt-4 p-4" data-aos="fade-up" data-aos-duration="1000">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
          <Link to={`/payment/${id}/${duration}`}>
            <button className="bg-[#d5420b] hover:bg-[#d5420b]/90 text-white font-bold py-2 px-4 rounded ml-4">
              Proceed to Payment
            </button>
          </Link>
          
        </div>

      </Modal>
      
    </section>

  );
};

export default Checkout;
