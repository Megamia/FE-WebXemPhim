// import React, { useState } from "react";
// import { FaRegBookmark, FaBookmark } from "react-icons/fa";
// import Cookies from "js-cookie";
// import axios from "axios";

// const Follow = () => {
//   const [active, setActive] = useState("");

//   const add = () => {
//     const storedToken = Cookies.get("token");
//     if (storedToken) {
//       axios
//         .post(
//           "http://localhost:4000/api/insert/:movieId",
//           {
//             movieid: movieid,
//             userid: userid,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${storedToken}`,
//             },
//           }
//         )
//         .then((response) => {
//           if (response.status === 200) {
//             setActive(!active);
//           } else {
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };
//   const del = () => {
//     const storedToken = Cookies.get("token");
//     if (storedToken) {
//       axios
//         .post(
//           "http://localhost:4000/api/insert/:movieId",
//           {
//             movieid: movieid,
//             userid: userid,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${storedToken}`,
//             },
//           }
//         )
//         .then((response) => {
//           if (response.status === 200) {
//             setActive(!active);
//           } else {
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center text-black h-screen gap-[30px]">
//       {active ? (
//         <FaRegBookmark onClick={add} />
//       ) : (
//         <FaBookmark className="fill-red-500" onClick={del} />
//       )}
//     </div>
//   );
// };

// export default Follow;