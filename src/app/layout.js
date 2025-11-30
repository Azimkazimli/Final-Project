import Header from "@/Components/Header/Header";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import MyProvider from "@/Redux/providers";
import { UserProvider } from "@/Components/UserContext";
import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper/ClientLayoutWrapper";

export const metadata = {
  title: "Home | Caffeine X Coffee Shop Template",
  description:
    "Discover Caffeine X — a modern, elegant Webflow coffee shop template built for cafés, baristas, and roasteries. Enjoy smooth animations, clean design, responsive layout, and full CMS & eCommerce functionality.",
  keywords:
    "coffee shop, cafe website, espresso, coffee beans, barista, webflow template, modern cafe design, responsive web design, coffee ecommerce, roastery site",
  authors: [{ name: "Azim Kazimli", url: "https://caffeinetemplate.webflow.io/home" }],
  publisher: "Azim Kazimli",
  creator: "Azim Kazimli",
  applicationName: "Caffeine X",


  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Caffeine X Coffee Shop",
    title: "Caffeine X — Premium Coffee Shop Webflow Template",
    description:
      "Modern and minimalist coffee shop template for cafés and roasteries. Designed by Azim Kazimli with attention to detail, responsive design, and SEO optimization.",

  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  themeColor: "#fff6f0",
  canonical: "",
};

export default function RootLayout({ children }) {
  return (
    <MyProvider>
      <html lang="en">
        <link
          rel="shortcut icon"
          href="https://cdn.prod.website-files.com/63457232aa921b4c927c7246/634ed444ed422644f0dd2ff6_coffeebar-x-webclip.svg"
        />

        <body className="flex flex-col justify-between h-[100vh]"   cz-shortcut-listen="true">
          <UserProvider>
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>

            <Header />
            <Footer />
          </UserProvider>
        </body>
      </html>
    </MyProvider>
  );
}