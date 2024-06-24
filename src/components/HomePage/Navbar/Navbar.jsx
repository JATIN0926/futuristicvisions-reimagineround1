// import React from "react";
// import "./style.css";
// import Link from "next/link";
// import Image from "next/image";
// const Nav = () => {
//   return (
//     <>
//       <div className="outer-nav">
//         <div className="navbar p-4 pr-9 font-sodo-sans">
//           <nav>
//             <Link href="" className="link">
//               Menu
//             </Link>
//             <Link href="" className="link">
//               Gift & Rewards
//             </Link>
//             <Link href="" className="link">
//               Our Coffee
//             </Link>
//             <Link href="" className="link">
//               Store
//             </Link>
//           </nav>
//           <Image
//             className="img"
//             id="navbar-logo"
//             src="/icons/starbucks_logo.png"
//             alt="Starbuck"
//             width={50}
//             height={50}
//           />
//           <div className="flex items-center justify-center gap-4">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Search for specific"
//                 className="search relative bg-transparent rounded-full p-2 px-6 border-[1.5px] border-[#D1D1D1]"
//               />
//             </div>
//             <Image
//               src="/icons/ShoppingCart.svg"
//               width={25}
//               height={25}
//               alt="cart"
//               className=" cursor-pointer"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;
import React, { forwardRef } from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";

const Nav = forwardRef((props, ref) => {
  return (
    <div className="outer-nav">
      <div className="navbar p-4 pr-9 font-sodo-sans">
        <nav>
          <Link href="" className="link">
            Menu
          </Link>
          <Link href="" className="link">
            Gift & Rewards
          </Link>
          <Link href="" className="link">
            Our Coffee
          </Link>
          <Link href="" className="link">
            Store
          </Link>
        </nav>
        <Image
          ref={ref}
          id="navbar-logo"
          className="img"
          src="/icons/starbucks_logo.png"
          alt="Starbucks"
          width={50}
          height={50}
        />
        <div className="flex items-center justify-center gap-4">
          <div>
            <input
              type="text"
              placeholder="Search for specific"
              className="search relative bg-transparent rounded-2xl p-2 px-6 border-[1.5px] border-[#D1D1D1]"
            />
          </div>
          <Image
            src="/icons/ShoppingCart.svg"
            width={25}
            height={25}
            alt="cart"
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
});

Nav.displayName = "Nav";

export default Nav;
