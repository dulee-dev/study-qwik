import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';
import { blueMode, redMode } from './routes/playground/theme/themes.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
        <script
          dangerouslySetInnerHTML={`
        (function() {
          var theme = localStorage.getItem('theme');
          if (theme === 'blueMode') {
            localStorage.setItem('theme', theme);
            document.documentElement.className = '${blueMode}'
          } else {
            localStorage.setItem('theme', theme);
            document.documentElement.className = '${redMode}'
          }
        })();
      `}
        ></script>
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
