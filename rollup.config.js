import typescript from "rollup-plugin-typescript";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

export default [
  {
    input:"src/index.ts",
    plugins:[
      typescript()
    ],
    output:[
      {
        file:pkg.main,
        format:"cjs"
      },
      {
        file:pkg.module,
        format:"esm"
      }
    ]
  },
  {
    input:"src/index.ts",
    plugins:[
      dts()
    ],
    output:{
      file:pkg.types,
      format:"esm"
    }
  }
];