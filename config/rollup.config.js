import path from 'path';

import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import globalConfig from './globalConfig.js';
const { SRC_DIR, BUILD_DIR, tsconfig } = globalConfig;

const input = path.join(SRC_DIR, 'index.tsx');
const output = {
    file: path.join(BUILD_DIR, 'bundle.js'),
    format: 'umd',
};
const plugins = [
    nodeResolve({
        browser: true,
    }),
    commonjs(),
    babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        extensions: ['.ts', '.tsx'],
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],
    }),
    typescript({
        tsconfig,
    }),
];
const rollupConfig = { input, output, plugins };
export default rollupConfig;
