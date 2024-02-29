import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Poppins } from "next/font/google";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "../../style/theme.scss";
import { Footer, Header } from "@components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ALKAYAN DECORATION",
  description: "ALKAYAN DECORATION",
};
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout(props: Props) {
  const { params, children } = props;
  let messages = useMessages();

  return (
    <html
      lang={params.locale}
      dir={params.locale === "en" ? "ltr" : "rtl"}
      data-layout-dir={params.locale === "en" ? "ltr" : "rtl"}
    >
      <body
        className={poppins.className}
        dir={params.locale === "en" ? "ltr" : "rtl"}
      >
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
