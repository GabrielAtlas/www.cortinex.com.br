import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="language" content="pt-br" />
          <meta name="language" content="pt-br" />
          <meta name="robots" content="index,follow,noodp,noydir" />
          <meta
            name="description"
            content="Cortinex Decorações - A mais de 18 anos no mercado trazendo o melhor em cortinas, persianas, papéis de parede e acessórios!"
          />
          <meta
            name="keywords"
            content="cortinex, cortinex decorações, cortinex loja de cortina, loja de cortinas, loja de cortina, loja de cortinas minas gerais, loja de cortina andradas e região, loja de cortinas poços de caldas e região"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Cortinex Decorações" />

          <link rel="canonical" href="https://cortinex.com.br/" />

          <link rel="shortcut icon" href="CORTINEX.png" type="image/png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <noscript>
          Você precisa habilitar o JavaScript para visualizar este site.
        </noscript>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
