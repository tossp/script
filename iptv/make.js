const fs = require("node:fs");
const path = require("node:path");
const util = require('node:util');

const fileData = fs.readFileSync(__dirname + path.sep + 'channel-cu.json');

channelData = JSON.parse(fileData.toString());

const tmpl = `#EXTINF:-1 ,%s
%s

`;
let resultTxt = `#EXTM3U
`;
channelData.retValues[0].ChannelList.forEach((cate, index) => {
  if (index === 0) {
    console.log(index, cate);
  }
  resultTxt = resultTxt + util.format(tmpl, cate.Name, cate.LiveUrl);
})
fs.writeFileSync(__dirname + path.sep + 'cu.m3u', resultTxt);
console.log('输出文件', __dirname + path.sep + 'cu.m3u');
