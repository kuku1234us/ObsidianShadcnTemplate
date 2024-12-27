// rollup.config.js
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import { env } from "process";
import path from "path";

export default {
  input: "src/main.tsx",
  output: {
    format: "cjs",
    file: "test-vault/.obsidian/plugins/my-plugin/main.js",
    exports: "default",
  },
  external: ["obsidian", "fs", "os", "path"], // Ensure 'react' and 'react-dom' are not listed here
  plugins: [
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "") }],
    }),
    resolve({
      browser: true,
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      preferBuiltins: false,
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: "auto",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      preventAssignment: true,
    }),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),
    postcss({
      plugins: [require("tailwindcss"), require("autoprefixer")],
      extract: "styles.css",
    }),
  ],
};
