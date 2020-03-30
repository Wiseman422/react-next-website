import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/static/theme.css" />
          <link rel="stylesheet" href="/static/fa-styles.css" />
          <link rel="stylesheet" href="/static/react-carousel.es.css" />

          <script src="../static/vendor/jquery/dist/jquery.min.js"></script>
          <script src="../static/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
          <script src="../static/vendor/popper.js/dist/umd/popper.min.js"></script>
          <script src="../static/vendor/bootstrap/bootstrap.min.js"></script>

          {/* -- CSS Implementing Plugins -- */}
          <link rel="stylesheet" href="../static/vendor/font-awesome/css/fontawesome-all.min.css" />
          <link rel="stylesheet" href="../static/vendor/animate.css/animate.min.css" />
          <link rel="stylesheet" href="../static/vendor/slick-carousel/slick/slick.css" />

          {/* -- JS Implementing Plugins -- */}
          <script src="../static/vendor/jquery-validation/dist/jquery.validate.min.js"></script>
          <script src="../static/vendor/slick-carousel/slick/slick.js"></script>

          {/* -- JS Front -- */}
          <script src="../static/js/hs.core.js"></script>
          <script src="../static/js/components/hs.validation.js"></script>
          <script src="../static/js/components/hs.slick-carousel.js"></script>
          <script src="../static/js/hsSlickCarouselInit.js"></script>
          {/* <script src="../static/js/plugin.init.js" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
