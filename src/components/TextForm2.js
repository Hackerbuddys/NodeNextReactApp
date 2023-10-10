// import React from "react";
// import { useState } from "react";

// function TextForm2(props) {
//   const [text1, setText1] = useState("");
//   const [text2, setText2] = useState("");

//   const handleOnChange1 = (event) => {
//     setText1(event.target.value);
//   };

//   const handleOnChange2 = (event) => {
//     setText2(event.target.value);
//   };

//   const handleReplace = () => {
//     const replacedText = text1.replace(new RegExp(text2, "g"), text2);
//     setText1(replacedText);
//     props.onConvert(replacedText);
//   };

//   return (
//     <form className="container my-5">
//       <div className=" row">
//         <div className="col">
//           <h1>Word you want to replace, Enter here...</h1>
//           <textarea
//             className="form-control"
//             id="Mybox"
//             rows="8"
//             value={text1}
//             onChange={handleOnChange1}
//           ></textarea>
//         </div>
//         <div className="col">
//           <h1>To which word it should be replaced</h1>
//           <textarea
//             className="form-control"
//             id="Mybox2"
//             rows="8"
//             value2={text2}
//             onChange={handleOnChange2}
//           ></textarea>
//         </div>
//       </div>
//       <div>
//         <button
//           className="btn-lg btn btn-dark my-3 container "
//           onClick={handleReplace}
//         >
//           Convert
//         </button>
//       </div>
//     </form>
//   );
// }

// export default TextForm2;
