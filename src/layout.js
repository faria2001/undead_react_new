// import { Provider } from "./Components/ui/Provider";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// // import "./globals.css";
// import "./App.css";

// // import { headers } from 'next/headers'

// // import { cookieToInitialState } from 'wagmi'

// // import { config } from '@/config'
// // import {WagmiProviderComp} from '@/context'
// // import { DataProvider } from '@/context/DataContext'

// export const metadata = {
//   title: "Epidemic Coin",
//   description: "Epidemic Coin",
//   icons: {
//     icon: [
//       {
//         url: "/logo.png",
//         href: "/logo.png"
//       }
//     ]
//   }
// };

// export default function RootLayout({ children }) {

// //   const initialState = cookieToInitialState(config, headers().get('cookie'))

//   return (
//     <html lang="en">
//       <body>
//         {/* <WagmiProviderComp initialState={initialState}>
//           <DataProvider> */}
//             <Provider
//               attribute="class"
//               defaultTheme="dark"
//               enableSystem
//               disableTransitionOnChange
//             >
//               <Navbar />
//               {children}
//               <Footer />
//             </Provider>
//           {/* </DataProvider>
//         </WagmiProviderComp> */}
//       </body>
//     </html>
//   )
// };