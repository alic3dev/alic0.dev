/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    qualities: [60, 10],
    remotePatterns: [new URL("https://content.alic0.dev/**")],
  },
  sassOptions: { silenceDeprecations: ["legacy-js-api"] },
  webpack(config) {
    config.module.rules.push({ test: /motd\/alic0/u, type: "asset/source" });

    return config;
  },
};
