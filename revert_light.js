const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Backgrounds
            content = content.replace(/bg-\[#111827\]/g, 'bg-[#f8fafc]');
            content = content.replace(/bg-\[#1f2937\]/g, 'bg-gray-50');
            content = content.replace(/bg-\[#030712\]/g, 'bg-[#f8fafc]'); // just in case
            content = content.replace(/bg-gray-800/g, 'bg-white');
            content = content.replace(/bg-gray-900/g, 'bg-white');
            
            // Borders
            content = content.replace(/border-gray-800/g, 'border-gray-100');
            content = content.replace(/border-gray-700/g, 'border-gray-200');
            
            // Text colors (dimmed)
            content = content.replace(/text-gray-400/g, 'text-gray-600');
            content = content.replace(/text-gray-300/g, 'text-gray-700');
            content = content.replace(/text-gray-500/g, 'text-gray-500'); // keep 500
            
            // Text white to dark - careful replacement
            // Find classNames containing text-white
            content = content.replace(/className=(["'])(.*?)\1/g, (match, quote, classes) => {
                const hasDarkBg = /bg-(blue|purple|green|red|gradient|solid|\[#ba3131\]|black)/.test(classes);
                
                if (!hasDarkBg && classes.includes('text-white')) {
                    // Replace text-white with text-gray-900 if there's no dark background forcing white text
                    classes = classes.replace(/\btext-white\b/g, 'text-gray-900');
                }
                
                return `className=${quote}${classes}${quote}`;
            });
            
            fs.writeFileSync(fullPath, content, 'utf8');
        }
    });
}

const basePath = path.join(__dirname, 'src');
processDir(path.join(basePath, 'pages'));
processDir(path.join(basePath, 'components'));

console.log('Reversion to Light Theme completed');
