import { Provider, VPN, Top, Aside } from "@/components/shared";
import "../scss/global.css";
import "../scss/style.scss";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  // metadataBase: new URL(),
  title: {
    template: "%s | MovieDB",
    default: "MovieDB",
  },
  description: "Каталог фильмов MovieDB",
  authors: { name: "Eugene Martynyuk", url: "https://emartynyuk.ru/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Каталог фильмов MovieDB",
    images: {
      url: "/fav/favicon.svg",
    },
  },
  icons: {
    shortcut: "/fav/favicon.ico",
    other: [
      {
        type: "image/png",
        url: "/fav/favicon-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/fav/favicon.svg",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/fav/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        url: "/fav/site.webmanifest",
      },
    ],
  },
  appleWebApp: {
    title: "MovieDB",
    statusBarStyle: "black",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="page">
      <body className="body">
        <Provider>
          <Aside />
          <main className="main">
            <Top />
            {children}
          </main>
          <VPN />
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              style: {
                background: "var(--dark-main-color)",
                color: "#fff",
              },
            }}
          />
        </Provider>
      </body>
    </html>
  );
}
