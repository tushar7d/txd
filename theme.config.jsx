import React from "react";

import Logo from "./components/logo";

const config = {
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tushar Debnath</title>
        <meta property="og:title" content="Tushar Debnath" />
        <meta property="og:site_name" content="Tushar Debnath" />
        <meta property="og:url" content="https://tushardebnath.com" />
        <meta property="og:image" content="https://tushardebnath.com/og.png" />
        <meta
          property="og:description"
          content="Product designer and developer from New Delhi"
        />
        <meta property="og:type" content="website" />
      </>
    );
  },
  logo: <Logo />,
  search: { component: null },
  feedback: { content: null },
  editLink: { text: null },
  themeSwitch: false,
  footer: { component: null },
  gitTimestamp: false,
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
