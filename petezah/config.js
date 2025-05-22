// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/petezah/petezah/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/petezah/handler.js",
  client: "/petezah/client.js",
  bundle: "/petezah/bundle.js",
  config: "/petezah/config.js",
  sw: "/petezah/rizz.sw.js",
};

  /*
    /**
     * Function to inject scripts into the doc Head
     * @type {function}
     * @param {URL} url - The URL for the rewrite function.
     * @returns {string} - The script to inject.
     */

    inject: async (url) => {
      if (url.host === '') {
          return `
                `
      }if (url.host === "www.youtube.com") {
          //meow
          return `<script src="/storage/js/youtube.js"></script>`
      }

      return `
      <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
      `
  },
}
*/
