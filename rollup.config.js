module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: "__COMPAT_TEST__",
    },
  ],
};
