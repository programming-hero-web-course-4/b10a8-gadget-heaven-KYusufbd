import { useContext } from "react";
import GadgetContext from "./GadgetContext";
import { DashboardContext } from "./DashboardContext";
import CloseIcon from '@mui/icons-material/Close';

const Wishlist = () => {
  const gadgets = useContext(GadgetContext);
  const { cart, setCart, wishlist, setWishlist } = useContext(DashboardContext);

    // Add to cart function:
    function addToCart(itemId) {
      if (!cart.includes(itemId)) {
        setCart([...cart, itemId]);
      }
    };

  // Function for removing items from wishlist
  const removeFromWishlist = (item) => {
    setWishlist((prevCart) => prevCart.filter(id => id !== item));
  };

  return (
    <div className="flex w-full flex-col gap-8 bg-bgcol px-4 pb-16">
      <div className="mx-auto flex w-page-width max-w-full flex-row justify-between">
        <h5 className="text-2xl font-bold">Wishlist</h5>
      </div>
      <div className="mx-auto flex max-w-page-width flex-col gap-6">
        {gadgets.map((gadget) => {
          if (wishlist.includes(gadget.product_id)) {
            return (
              <div key={gadgets.indexOf(gadget)} className="flex flex-row bg-white p-8 rounded-2xl gap-8">
                <div className="w-52 h-32 overflow-hidden rounded-xl aspect-square flex justify-center items-center">
                  <img className="w-full min-h-full" src={gadget?.product_image} alt="gadget-image" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">
                    {gadget?.product_title}
                  </h1>
                  <p className="text-lg opacity-60">{gadget?.description}</p>
                  <p className="text-xl font-semibold opacity-80">
                    Price: ${gadget?.price}
                  </p>
                  <button
                  onClick={() => addToCart(gadget.product_id)}
                  className={`btn w-max rounded-full bg-primary px-5 py-3 text-lg font-bold text-white hover:bg-primary hover:opacity-70 ${+ !gadget.availability && "btn-disabled"}`}
                  >
                  Add To Cart
                </button>
                </div>
                <button onClick={() => removeFromWishlist(gadget.product_id)} className="border-red-500 border border-2px rounded-full h-fit ml-auto">
                <CloseIcon className="text-red-500"/>
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Wishlist;