import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Checkout = () => {
    const { id } = useParams(); // Extract the `id` parameter
    const [subscription, setSubscription] = useState(null); // State to store subscription details
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Fetch subscription details
        const fetchSubscription = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/pricing/${id}`); // Replace with your API URL
                const data = await response.json();
                setSubscription(data); // Save subscription details to state
            } catch (error) {
                console.error("Error fetching subscription:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscription();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>; // Show a loading indicator while fetching data
    }

    if (!subscription) {
        return <p>Subscription not found!</p>; // Show error if no data is found
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="flex-1 gap-4 w-full mb-6 bg-[#fb4f11] rounded-xl shadow-[#d5420b] shadow-xl transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#d5420b] border-2 border-[#d5420b]">
                        <div className="text-center p-12">
                            <p className="text-3xl lg:text-2xl xl:text-3xl pb-4 text-black font-bold">
                                {subscription.name} {/* Display subscription name */}
                            </p>
                            <p className="text-lg text-gray-700 pb-4">
                                {subscription.description} {/* Display subscription description */}
                            </p>
                            <p className="text-xl text-green-600 font-bold">
                                ${subscription.price} {/* Display subscription price */}
                            </p>
                            <Link to={`/checkout/${id}`} className="btn block w-full text-center">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
