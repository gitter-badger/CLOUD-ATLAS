import resolve from '@rollup/plugin-node-resolve';
import html from '@open-wc/rollup-plugin-html';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

export default {
  input: 'index.html',
  output: {
    dir: 'build',
    format: 'es',
  },
  plugins: [
    resolve(),
    html(),
    typescript({
      tsconfig: 'tsconfig.dev.json',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      )
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
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'build/assets/' },
        { src: 'styles/global.css', dest: 'build/styles/' },
        { src: 'manifest.json', dest: 'build/' },
      ],
    }),
  ],
};
