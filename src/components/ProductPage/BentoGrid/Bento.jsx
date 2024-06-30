import React from 'react';
import Image from "next/image";
import  "./style.css";
import BentoBox from './BentoBox';
const Bento = () => {
    return (
        <div className="w-screen max-w-full flex items-start justify-center laptop:p-2 mbMini:p-0 py-4 bg-[#F1F0EA]">
      <div className="w-[85%]">
        
        <div className="w-full flex items-center  justify-between">
            <h1 className=" font-MaleoTrials-Bold lapotp:text-3xl mbSmall:text-2xl font-light text-[#006240]">
              Explore By Category
            </h1>
            <div className="flex items-center justify-center w-[60%] laptop:w-[35%] tbPortrait:w-[30%]">
                <button className="bg-[#02754B] rounded-md text-white p-1.5 pl-4 w-[49%] mbXSmall:w-[40%] mbSmall:w-[45%] laptop:w-[50%] flex items-center justify-start font-light gap-0.5 mbXSmall:gap-1 mbSmall:gap-2">
                  <Image
                    src="/icons/WheelChair.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="w-[0.8rem] h-[0.8rem] mbSmall:w-[1.2rem] mbSmall:h-[1.2rem]"
                  />
                  <h1 className=" text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm laptop:text-lg font-light mbSmall:font-medium">
                    Dine In
                  </h1>
                </button>
                <button className="bg-white rounded-md p-1.5 pl-4  w-[60%] mbXSmall:w-[50%] mbSmall:w-[50%] flex items-center justify-start gap-0.5 mbXSmall:gap-1 mbSmall:gap-2">
                  <Image
                    src="/icons/Basket.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="w-[0.8rem] h-[0.8rem] mbSmall:w-[1.2rem] mbSmall:h-[1.2rem]"
                  />
                  <h1 className=" text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm laptop:text-lg font-light mbSmall:font-medium">
                    Take Away
                  </h1>
                </button>
              </div>
          </div>
        <div className="!mt-[2rem] laptop:grid grid-cols-2 bg- h-[70vh] laptop:gap-4 mbMini:gap-0 hidden ">
            {/* First column */}
            <div className="col-span-1 inline ">
                {/* Subcolumn 1 */}
                <div className="grid grid-cols-9 grid-rows-subgrid gap-4">
                    {/* Rows */}
                    <div className="laptop:row-span-15 laptop:col-span-9 laptop:h-[26.2vh] laptop:w-[41.5vw] bg-[url('/images/gridRow1.png')] bg-cover bg-center  "></div>

        

                    <div className="menu row-span-14 col-span-5 z-[1] h-[28.5vh] relative overflow-hidden  bg-white"><p className=' p-[0.5rem] z-[4] text-black font-bold'>Food</p>
                    <Image src="/images/food.png" width={280} height={150} className='Image  origin-bottom-right absolute z-[2] right-[-2rem] top-[6.2vh]'/></div>
                    
                    
                    
                    <div className="menu row-span-14  h-[28.5vh] col-span-4 relative overflow-hidden bg-white"><p className=' p-[0.5rem] text-black font-bold'>Tea</p>
                    <Image src="/images/tea1.png" width={150} height={150} className='Image  absolute left-[-3rem] top-[10vh]'/>
                    <Image src="/images/tea2.png" width={150} height={150} className='Image absolute right-[-3rem] top-[13vh]'/></div>
                    <div className="menu row-span-14 h-[26.5vh] relative col-span-3 overflow-hidden bg-white">
                    <p className=' p-[0.5rem] text-black font-bold'>Merchandise</p>
                    <Image src="/images/merchandise.png" width={200} height={200} className='Image absolute right-[-4.5rem] top-[15vh]'/>
                    </div>
                    <div className="menu row-span-14 h-[26.5vh]  col-span-6 relative overflow-hidden bg-white">
                    <p className=' p-[0.5rem] text-black font-bold'>Coffee at home</p>
                    <Image src="/images/coffee.png" width={220} height={220} className='Image absolute right-[-3rem] top-[12vh]'/>
                    </div>
                </div>
            </div>

            {/* Second column */}
            <div className="col-span-1 inline ">
                {/* Subcolumn 1 */}
                <div className="grid grid-cols-2 grid-rows-subgrid gap-4">
                    {/* Rows */}
                    <div className="row-span-6 col-span-2 relative flex  overflow-hidden bg-[#DD92C0] ">
                    <p className=' absolute top-0 left-0 p-[0.5rem] !pb-[-2rem] text-white font-semibold'>Most Popular</p>
                    <div className='absolute menu w-max flex flex-row gap-5 pl-5 mr-[2rem] top-3 bottom-[-2] right-0 pr-[1rem] pt-[1rem] space-x-2 items-end justify-end '>
                    <Image src="/images/Coffee_01.png" width={50} height={50} className='Image '/>
                    <Image src="/images/Coffee_02.png" width={50} height={50} className='Image '/>
                    <Image src="/images/Coffee_03.png" width={50} height={50} className='Image'/>
                    <Image src="/images/Coffee_04.png" width={40} height={40} className='Image '/>
                    </div>
                    </div>
                    <div className="menu row-span-15 h-[44.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] text-black  font-bold'>Coffee</p>
                    <Image src="/images/coffeeCup.png" width={250} height={250} className='Image absolute right-[-3rem] top-[16vh]'/></div>
                    <div className="menu row-span-15  h-[44.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>Frappuccino</p>
                    <Image src="/images/frappuccino.png" width={250} height={250} className='Image absolute right-[-3rem] top-[17vh]'/></div>
                    <div className="menu row-span-14  h-[26.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>Espresso</p>
                    <Image src="/images/Espresso.png" width={250} height={250} className=' Image absolute right-[-4rem] top-[4rem]'/>
                    </div>
                    <div className="menu row-span-14 h-[26.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>New Flavours</p>
                    <Image src="/images/starbucksCup.png" width={250} height={250} className='Image absolute right-[-4rem] top-[8vh]'/>
                    </div>
                </div>
            </div>
        </div>


    <div className="container mx-auto px-0 mt-[1rem] laptop:hidden">
      <div className="grid grid-cols-1 gap-2 ">
        {/* Row 1: Split into 80% and 20% */}
        <div className="flex relative gap-2">
          <div className="  h-[18vh] w-[80vw] relative z-10 ">
          <Image src="/images/tasty.png" width={280} height={140} className='Image h-[18vh] w-[80vw] object-cover absolute '/>
          
          </div>
          <div className="w-[15vw]  relative bg-[#DD92C0] h-[18vh] flex items-end justify-start  overflow-hidden">
         <p className='flex self-start  pl-[1rem] pt-[1rem] text-white rotate-90 writing-mode:vertical-lr  font-bold '> Most Popular</p>
          <Image src="/images/Coffee_01.png" width={50} height={50} className='Image absolute left-[-3vw] bottom-[-3vh] rotate-45 '/>
          <Image src="/images/Coffee_02.png" width={50} height={50} className='Image absolute right-[-3vw] bottom-[2vh] -rotate-45 '/>
          </div>
        </div>

        {/* Row 2: Split into 2 equal columns */}
        <div className="grid grid-cols-2 gap-2 relative">
        <div className='relative bg-white overflow-hidden h-[22vh]'><p className=' p-[0.5rem] text-black  font-bold'>Coffee</p>
        <Image src="/images/coffeeCup.png" width={160} height={160} className='Image absolute right-[-2rem] top-[6vh]'/>
          </div>
          <div className='relative bg-white overflow-hidden h-[22vh]'> <p className=' p-[0.5rem] ] text-black  font-bold'>Frappuccino</p>
          <Image src="/images/frappuccino.png" width={160} height={160} className='Image absolute right-[-2rem] top-[6vh]'/> </div>
        
        </div>

        {/* Row 3: 3 equal columns */}
        <div className="grid grid-cols-3 gap-2">
        <div className='relative bg-white overflow-hidden z-[1] h-[14vh]'> <p className=' p-[0.5rem] z-[7] text-black  font-bold'>Foods</p>
         <Image src="/images/food.png" width={200} height={200} className='Image absolute z-[2] w-[20rem] h-[5rem] right-[-1rem] top-[6vh]'/>
        
         </div>
         <div className='relative bg-white overflow-hidden h-[14vh]'> <p className=' p-[0.5rem] ] text-black  font-bold'>Tea</p>
         <Image src="/images/tea1.png" width={80} height={80} className='Image absolute left-[-2rem] top-[5.9vh]'/>
         <Image src="/images/tea2.png" width={80} height={80} className='Image absolute right-[-2rem] top-[7.2vh]'/>
         </div>
         <div className='relative bg-white overflow-hidden h-[14vh]'><p className=' p-[0.5rem] ] text-black  font-bold'>Espresso</p>
         <Image src="/images/espresso.png" width={150} height={150} className='Image absolute right-[-2rem] top-[6vh]'/>
         
          </div>
        </div>

        {/* Row 4: 3 equal columns */}
        <div className="grid grid-cols-3 gap-2">
        <div className='relative bg-white overflow-hidden h-[14vh]'> <p className=' p-[0.5rem] ] text-black  font-bold'>New Flavours</p>
         <Image src="/images/starbucksCup.png" width={150} height={150} className='Image absolute right-[-1.5rem] top-[6vh]'/>
        
         </div>
         <div className='relative bg-white overflow-hidden h-[14vh]'> <p className=' p-[0.5rem] ] text-black  font-bold'>Merchandise</p>
       
         <Image src="/images/merchandise.png" width={150} height={150} className='Image absolute right-[-1.5rem] top-[8.5vh]'/>
         </div>
         <div className='relative bg-white overflow-hidden h-[14vh]'><p className=' p-[0.5rem] ] text-black  font-bold'>Coffee at home</p>
         <Image src="/images/coffee.png" width={150} height={150} className='Image absolute right-[-1.5rem] top-[6.2vh]'/>
         
          </div>
        </div>
      </div>
    </div>
  


        {/*mobile view*/ }

        {/* <div className="!mt-[2rem] laptop:hidden grid grid-rows-6 grid-cols-6 bg- h-[70vh] laptop:gap-4 mbMini:gap-0">
           
            <div className="row-span-2 inline ">
              
                <div className="grid grid-cols-6 grid-rows-subgrid gap-4">
                   
                    <div className=" menu overflow-hidden relative flex row-span-2 col-span-5 h-[17.2vh] w-[50vw]  ">
                    <Image src="/images/tasty.png" width={850} height={250} className='Image  aspect-video h-[17.2vh] w-[50vw]  absolute  '/>
                    </div>

        

                    <div className="row-span-14 col-span-5  h-[28.5vh]  bg-[url('/images/food.png')] bg-cover hover:bg-scale-110 flex align-top justify-start"><p className=' p-[0.5rem] text-black font-bold'>Food</p></div>
                    
                    
                    
                    <div className="menu row-span-14  h-[28.5vh] col-span-4 relative overflow-hidden bg-white"><p className=' p-[0.5rem] text-black font-bold'>Tea</p>
                    <Image src="/images/tea1.png" width={150} height={150} className='Image absolute left-[-3rem] top-[10vh]'/>
                    <Image src="/images/tea2.png" width={150} height={150} className='Image absolute right-[-3rem] top-[13vh]'/></div>
                    <div className="menu row-span-14 h-[26.5vh] relative col-span-3 overflow-hidden bg-white">
                    <p className=' p-[0.5rem] text-black font-bold'>Merchandise</p>
                    <Image src="/images/merchandise.png" width={200} height={200} className='Image absolute right-[-4.5rem] top-[15vh]'/>
                    </div>
                    <div className="menu row-span-14 h-[26.5vh]  col-span-6 relative overflow-hidden bg-white">
                    <p className=' p-[0.5rem] text-black font-bold'>Coffee at home</p>
                    <Image src="/images/coffee.png" width={220} height={220} className='Image absolute right-[-3rem] top-[12vh]'/>
                    </div>
                </div>
            </div>

           
            <div className="col-span-1 inline ">
               
                <div className="grid grid-cols-2 grid-rows-subgrid gap-4">
                    
                    <div className="row-span-6 col-span-2 relative flex  overflow-hidden bg-[#DD92C0] ">
                    <p className=' absolute top-0 left-0 p-[0.5rem] !pb-[-2rem] text-white font-semibold'>Most Popular</p>
                    <div className='absolute menu w-max flex flex-row gap-5 pl-5 mr-[2rem] top-3 bottom-[-2] right-0 pr-[1rem] pt-[1rem] space-x-2 items-end justify-end '>
                    <Image src="/images/Coffee_01.png" width={50} height={50} className='Image '/>
                    <Image src="/images/Coffee_02.png" width={50} height={50} className='Image '/>
                    <Image src="/images/Coffee_03.png" width={50} height={50} className='Image'/>
                    <Image src="/images/Coffee_04.png" width={40} height={40} className='Image '/>
                    </div>
                    </div>
                    <div className="menu row-span-15 h-[44.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] text-black  font-bold'>Coffee</p>
                    <Image src="/images/coffeeCup.png" width={250} height={250} className='Image absolute right-[-3rem] top-[16vh]'/></div>
                    <div className="menu row-span-15  h-[44.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>Frappuccino</p>
                    <Image src="/images/frappuccino.png" width={250} height={250} className='Image absolute right-[-3rem] top-[17vh]'/></div>
                    <div className="menu row-span-14  h-[26.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>Espresso</p>
                    <Image src="/images/Espresso.png" width={250} height={250} className=' Image absolute right-[-4rem] top-[4rem]'/>
                    </div>
                    <div className="menu row-span-14 h-[26.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>New Flavours</p>
                    <Image src="/images/starbucksCup.png" width={250} height={250} className='Image absolute right-[-4rem] top-[8vh]'/>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='flex flex-1 mbMini:mt-[1rem] laptop:mt-[9rem] p-[1rem] justify-center items-center border border-black font-bold'>Explore other beverages</div> 
        </div>
        </div>
    );
};

export default Bento;
