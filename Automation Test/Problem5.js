const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
let arr = [];
let count = 1;
for (let i = 0; i < 5; i++) {
    if (count != 100)
        request('https://pagalfree.com/category/Bollywood/' + i + '/2019.html', callback);
}
function callback(err, res, html) {
    if (!err) {
        let $ = cheerio.load(html);
        let j = 2;
        let str = '';
        let songsClass = $('#category_content a');
        let name = $('.heading');
        if (count != 100) {
            for (let i = 0; i < songsClass.length; i++) {
                count++;
                if ($(name[j]).text() != '') {
                    let namearr = $(name[j]).text().split('\n')[1].split(' ');
                    for (let k = 12; k < namearr.length; k++) {
                        str = str + namearr[k];
                    }
                }
                let link = $(songsClass[i]).attr('href');
                arr.push({
                    'SongName': str,
                    'DownloadLink': link
                })
                j++;
                str = ''
            }
        }

        if (count == 100) fs.writeFileSync('Songs.json', JSON.stringify(arr));
    }
}