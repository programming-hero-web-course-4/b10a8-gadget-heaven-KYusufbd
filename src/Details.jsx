import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import GadgetContext from "./GadgetContext";

const Details = () => {
  const [gadget, setGadget] = useState({});
  const gadgets = useContext(GadgetContext);
  const p = useParams();

  useEffect(() => {
    setGadget(gadgets.find((g) => g.product_id === p.gadgetId));
  }, [gadgets, p.gadgetId]);

  useEffect(() => {scrollTo(0, 0)}, [])

  return (
    <div>
      <div className="w-full bg-bgcol pb-24">
        <div className="bg-primary px-5 pb-48 pt-8">
          <h1 className="text-center text-3xl font-bold text-white">
            Product Details
          </h1>
          <p className="mx-auto max-w-3xl text-center text-base text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="mx-auto -mt-32 flex w-11/12 max-w-page-width flex-row gap-8 rounded-3xl bg-white p-8">
          <div className="max-w-lg overflow-hidden rounded-2xl">
            <img
              src={gadget?.product_image}
              alt="gadget-image"
              className="h-full min-w-full"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold">{gadget?.product_title}</h4>
            <p className="text-xl font-semibold">
              {"Price: $ " + gadget?.price}
            </p>
            {gadget?.availability ? (
              <div className="w-max rounded-full border-2 border-green-600 bg-green-100 px-2 py-1 text-sm font-medium text-green-600">
                In Stock
              </div>
            ) : (
              <div className="w-max rounded-full border-2 border-warning bg-yellow-100 px-2 py-1 text-sm font-medium text-warning">
                Not Available
              </div>
            )}
            <p className="text-lg text-txtcol opacity-60">
              {gadget?.description}
            </p>
            <h6 className="text-lg font-bold">Specification:</h6>
            <ol className="text-lg opacity-60 list-decimal pl-5">
              {gadget?.specification?.map((s) => (
                <li key={gadget?.specification.indexOf(s)}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

/*
Development purpose only:
An object isntance:
{
    "product_id": "P005",
    "product_title": "Garmin Forerunner 265",
    "product_image": "https://img.freepik.com/free-vector/fitness-trackers-concept_23-2148529803.jpg?t=st=1730981984~exp=1730985584~hmac=4a412996bd2a2a4915478b269d4184b90a7fc66abd772bf61f2f9407e177c3e9&w=740",
    "category": "Wearables",
    "price": 399,
    "description": "Advanced GPS smartwatch designed for runners and athletes.",
    "specification": [
        "1.3-inch AMOLED display",
        "Multi-GNSS support",
        "Heart rate and SpO2 monitoring",
        "Up to 15 days battery life in smartwatch mode"
    ],
    "availability": true,
    "rating": 4.5
}
*/
