import path from 'path';

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const BUILD_DIR = path.join(ROOT_DIR, 'build');

const tsconfig = path.join(ROOT_DIR, 'tsconfig.json');

const globalConfig = { ROOT_DIR, SRC_DIR, BUILD_DIR, tsconfig };
export default globalConfig;
