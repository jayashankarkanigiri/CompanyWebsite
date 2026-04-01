const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace section bgs first to avoid double replacement
    content = content.replace(/bg-\[#111827\]/g, 'bg-[#1f2937]'); // Old section bg -> new section bg
    content = content.replace(/bg-gray-900/g, 'bg-gray-800'); // Old card bg -> new card bg
    
    // Replace base background
    content = content.replace(/bg-\[#030712\]/g, 'bg-[#111827]'); // Old base bg -> new base bg
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
