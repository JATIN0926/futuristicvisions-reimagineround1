import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true };

const Products = () => {
  return (
    <div className="w-screen max-w-full h-screen flex flex-col items-center justify-center gap-3 mbMedium:gap-6 tbMedium:gap-10">
      <div className="flex flex-col gap-2 mbMedium:gap-4 tbLandscape:gap-6 items-center justify-center w-[85%] mbXSmall:w-[65%] mbSmall:w-[60%] mbMedium:w-[50%] laptop:w-[35%] tbPortrait:w-[30%]">
        <h2 className="text-[#006240] text-xs mbXSmall:text-sm mbSmall:text-lg mbMedium:text-xl tbMedium:text-2xl font-MaleoTrials-Bold tracking-[0.15rem] mbXSmall:tracking-[0.2rem] mbMedium:tracking-[0.3rem]">
          Order instantly favourite Coffee
        </h2>
        <h1 className="text-[1.7rem] mbXSmall:text-2xl mbSmall:text-4xl tbMedium:text-5xl leading-8 mbSmall:leading-[3rem] text-center font-medium text-[#1E3932] font-lander-grande">
          Add to your cart or explore more.
        </h1>
      </div>
      <div className="w-full">
        <EmblaCarousel options={OPTIONS} />
      </div>
    </div>
  );
};

export default Products;
