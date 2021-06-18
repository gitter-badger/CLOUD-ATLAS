import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import html from '@open-wc/rollup-plugin-html';
import replace from '@rollup/plugin-replace';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

export default {
  input: 'build/index.html',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      ),
    }),
    html(),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    commonjs(),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    image(),
    postcss({
      extensions: ['.css'],
    }),
    terser(),
    strip({
      functions: ['console.log'],
    }),
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'dist/assets/' },
        { src: 'styles/global.css', dest: 'dist/styles/' },
        { src: 'manifest.json', dest: 'dist/' },
      ],
    })
  ],
};
