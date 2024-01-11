import React from "react";
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Logo from "./components/logo";


const config = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Tushar Debnath'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://tushardebnath.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    return (
      <>
       <title>{frontMatter.title+ " | Tushar Debnath" || 'Tushar Debnath'}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Tushar Debnath'}
        />
      </>
    );
  },
  logo: <Logo />,
  search: { component: null },
  feedback: { content: null },
  editLink: { text: null },
  themeSwitch: {component:null},
  footer: { component: null },
navbar:{component:null},
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
