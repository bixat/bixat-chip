// rollup.config.mjs
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extensions: [".css"],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
