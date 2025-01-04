// import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
// import { useState } from "react";
// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });
// //Add your Client ID here ⬇️
// const clientId = "8561f6ab-3850-44d3-9d1d-8bbb06e07eab";
// export default function Chatbot() {
//   const client = getClient({ clientId });
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);
//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };
//   return (
//     <div style={{ width: "25vw", height: "100vh" }}>
//       <style>{style}</style>
//       <WebchatProvider
//         theme={theme}
//         client={client}
//       >
//         <Fab onClick={toggleWebchat} />
//         <div
//           style={{
//             display: isWebchatOpen ? "block" : "none",
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//     </div>
//   );
// }