import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
    }),
    terser(),
  ],
};
