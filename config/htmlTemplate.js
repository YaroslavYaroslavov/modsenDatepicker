import path from 'path';
import fs from 'fs';
import globalConfig from './globalConfig.js';

const { SRC_DIR } = globalConfig;
export const htmlTemplate = (js = []) => {
    const htmlDir = path.join(SRC_DIR, 'index.dev.html');
    const html = fs.readFileSync(htmlDir, { encoding: 'utf-8' });
    let scripts = '';

    for (let script of js) {
        scripts += `<script src="${script.fileName}"></script>\n`;
    }
    return html.replace('${scripts}', scripts);
};
