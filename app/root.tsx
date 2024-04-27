import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'

// Layout
import CustomLayout from './layout'

// Preline Init
import PrelineInitScript from './components/custom-scripts/preline'

// Stylesheet
import tailwindCss from '~/styles/tailwind.css?url'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindCss }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="/PNGLogo/favicon-16x16.png" />
        <link rel="author" href="humans.txt" />

        {/* Meta Tags */}
        <meta name="application-name" content="Media Teck" />
        <meta name="author" content="Media Teck" />
        <meta name="robots" content="index, follow, indexifembedded" />
        <meta name="rating" content="general" />
        {/* <link rel="canonical" href={process.env.SHARE_URL} /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="creationdate" content="24-Mar-2024" />
        <meta name="distribution" content="global" />

        {/* GeoTag */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Koday" />
        <meta name="geo.position" content="22.897066;69.388919" />
        <meta name="ICBM" content="22.897066, 69.388919" />

        {/* Some Extra Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Media Teck" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#F55D2D" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/PNGLogo/favicon-16x16.png" />

        {/* Icons */}
        <link rel="apple-touch-icon" sizes="60x60" href="/PNGLogo/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/PNGLogo/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/PNGLogo/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/PNGLogo/apple-touch-icon-152x152" />
        <link rel="apple-touch-icon" sizes="180x180" href="/PNGLogo/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/PNGLogo/apple-touch-icon-167x167" />

        <link rel="icon" type="image/png" sizes="192x192" href="/PNGLogo/android-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/PNGLogo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/PNGLogo/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/PNGLogo/favicon-16x16.png" />

        <meta name="msapplication-config" content="/PNGLogo/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#F55D2D" />
        <meta name="msapplication-TileImage" content="/PNGLogo/mstile-144x144.png" />
        <meta name="msapplication-TileImage" content="/PNGLogo/mstile-150x150.png" />
        <meta name="msapplication-TileImage" content="/PNGLogo/tile310x310.png" />
        <meta name="theme-color" content="#F55D2D" />

        <Meta />

        <Links />
      </head>
      <body>
        <CustomLayout>
          <Outlet />

          <ScrollRestoration />

          <Scripts />

          <PrelineInitScript />
        </CustomLayout>
      </body>
    </html>
  )
}
