// import React, { useState, useRef, useEffect } from "react";
// import "@google/model-viewer";
// import "./Model.scss";

// const ModelViewerComponent = () => {
//   const [modelSrc, setModelSrc] = useState("");
//   const [hotspots, setHotspots] = useState([
//     {
//       slot: "hotspot-2",
//       x: "-0.15m",
//       y: "0.2m",
//       z: "0m",
//       info: "RAM",
//       img: "https://m.media-amazon.com/images/I/61XmhmEup8L._AC_SL1000_.jpg",
//     },
//     {
//       slot: "hotspot-3",
//       x: "-0.15m",
//       y: "0.1m",
//       z: "0m",
//       info: "ROM",
//       img: "https://m.media-amazon.com/images/I/61XmhmEup8L._AC_SL1000_.jpg",
//     },
//   ]);
//   const [tooltipData, setTooltipData] = useState({
//     img: "",
//     text: "",
//     visible: false,
//     x: 0,
//     y: 0,
//   });
//   const modelViewerRef = useRef(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     console.log(file);
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setModelSrc(url);
//     }
//   };

//   const loadModelFromUrl = () => {
//     const fileId = document.getElementById("driveInput")?.value?.trim();
//     if (fileId) {
//       setModelSrc(fileId);
//       alert(fileId);
//     } else {
//       alert("Vui lòng nhập Url tệp hợp lệ!");
//     }
//   };
//   const handleModelChange = () => {
//     console.log("oce");
//     setModelSrc(
//       "https://firebasestorage.googleapis.com/v0/b/chay-tam-an.appspot.com/o/Gram.glb?alt=media&token=f5e8c572-c34d-48f2-8158-4211587cb625"
//     );
//   };
//   const handleHotspotClick = (event) => {
//     event.stopPropagation();

//     const target = event.target;
//     setTooltipData({
//       img: target.getAttribute("data-img"),
//       text: target.getAttribute("data-info"),
//       visible: true,
//       x: target.getBoundingClientRect().left + window.scrollX + 20,
//       y: target.getBoundingClientRect().top + window.scrollY - 30,
//     });
//   };

//   const hideTooltip = () => {
//     setTooltipData((prev) => ({ ...prev, visible: false }));
//   };

//   useEffect(() => {
//     const handleClickOutside = () => {
//       hideTooltip();
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [modelSrc]);

//   useEffect(() => {
//     if (modelViewerRef.current) {
//       // Clear existing hotspots
//       modelViewerRef.current
//         .querySelectorAll(".hotspot")
//         .forEach((hotspot) => hotspot.remove());

//       // Create and append new hotspots
//       hotspots.forEach((hotspot) => {
//         const button = document.createElement("button");
//         button.className = "hotspot";
//         button.setAttribute("slot", hotspot.slot);
//         button.dataset.info = hotspot.info;
//         button.innerText = hotspot.info;
//         button.setAttribute("data-img", hotspot.img);
//         button.setAttribute(
//           "data-position",
//           `${hotspot.x} ${hotspot.y} ${hotspot.z}`
//         );
//         button.addEventListener("click", handleHotspotClick);
//         modelViewerRef.current.appendChild(button);
//       });
//     }
//   }, [hotspots]);

//   return (
//     <div>
//       <h2>3D Model Viewer</h2>

//       <div className="input-container">
//         <input
//           type="file"
//           id="fileInput"
//           accept=".gltf,.glb,.usdz"
//           onChange={handleFileChange}
//         />
//       </div>

//       <div className="input-container">
//         <input type="text" id="driveInput" placeholder="Model Url" />
//         <button onClick={loadModelFromUrl}>Get URL</button>
//       </div>

//       <model-viewer
//         ref={modelViewerRef}
//         id="modelViewer"
//         src={modelSrc}
//         ar
//         ar-modes="webxr scene-viewer quick-look"
//         camera-controls
//         auto-rotate
//         shadow-intensity="1"
//         interaction-prompt="none"
//         exposure="1"
//         style={{ width: "100%", height: "500px" }}
//       >
//         {/* Hotspots will be dynamically added here */}
//       </model-viewer>

//       {tooltipData.visible && (
//         <button
//           id="tooltip"
//           className="tooltip"
//           style={{
//             display: tooltipData.visible ? "block" : "none",
//             left: `${tooltipData.x}px`,
//             top: `${tooltipData.y}px`,
//             animation: "fadeBounce 0.4s ease-out forwards",
//           }}
//           onClick={handleModelChange}
//         >
//           <img id="tooltip-img" src={tooltipData.img} alt="Hotspot Image" />
//           <p id="tooltip-text">{tooltipData.text}</p>
//         </button>
//       )}
//     </div>
//   );
// };

// export default ModelViewerComponent;
