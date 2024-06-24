import EmblaCarousel from "./EmblaCarousel";

// import '../Courses/embla.css';
const OPTIONS = { dragFree: true };
const Products = () => {
  return (
    <div className="w-screen max-w-full h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col gap-4 items-center justify-center w-[30%]">
        <h2 className="text-[#006240] text-xl font-MaleoTrials-Bold tracking-[0.3rem]">
          Order instantly favourite Coffee
        </h2>
        <h1 className="text-4xl leading-[3rem] text-center font-medium text-[#1E3932] font-lander-grande">
          Add to your cart or explore more.
        </h1>
      </div>
      <div className="">
        <EmblaCarousel options={OPTIONS} />
      </div>
    </div>
  );
};

export default Products;
