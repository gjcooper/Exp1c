
/*let corPhAtAr = // Array of all options, grouped by attributes i.e. correlated condition array
[["$44", "5MP", "8GB", '5"', "1280p x 720p"],
["$134", "13MP", "16GB", '5"', "1280p x 720p"],
["$179", "8MP", "8GB", '5"', "1280p x 720p"],
["$179", "16MP", "32GB", '5.2"', "1920p x 1080p"],
["$199", "13MP", "64GB", '6.1"', "1560 x 720"],
["$199", "13MP", "16GB", '5.7"', "1520 x 720"],
["$199", "13MP", "32GB", '5.5"', "1440 x 720"],
["$229", "13MP", "32GB", '6.2"', "1520 x 720"],
["$239", "13MP", "64GB", '6.2"', "1520 x 720"],
["$249", "13MP", "64GB", '6.4"', "1544 x 720"],
["$249", "13MP", "32GB", '5.5"', "1920 x 1080"],
["$249", "13MP", "32GB", '6.3"', "1520 x 720"],
["$279", "13MP", "32GB", '6.4"', "1560 x 720"],
["$279", "13MP", "64GB", '6.2"', "1520 x 720"],
["$279", "13MP", "32GB", '5.5"', "2160 x 1080"],
["$299", "13MP", "64GB", '6.2"', "1520 x 720"],
["$299", "13MP", "32GB", '5.7"', "1520 x 720"],
["$299", "12MP", "64GB", '5.7"', "2560 x 1440"],
["$299", "13MP", "128GB",'6.4"', "1544 x 720"],
["$299", "16MP", "32GB", '5.5"', "1920 x 1080"],
["$299", "16MP", "64GB", '6.3"', "1520 x 720"],
["$299", "16MP", "64GB", '6.5"', "1600 x 720"],
["$299", "12MP", "32GB", '5.2"', "1920 x 1080"],
["$349", "16MP", "128GB",'6.6"', "2340 x 1080"],
["$379", "16MP", "32GB", '6.4"', "1920 x 1080"],
["$379", "16MP", "32GB", '5.7"', "1920 x 1080"],
["$399", "48MP", "128GB",'6.5"', "2340 x 1080"],
["$399", "16MP", "128GB",'6.3"', "2340 x 1080"],
["$399", "16MP", "64GB", '6.3"', "2280 x 1080"],
["$399", "48MP", "128GB",'6.3"', "2520 x 1080"],
["$399", "24MP", "128GB",'6.2"', "2312 x 1080"],
["$399", "12MP", "32GB", '5.2"', "1920 x 1080"],
["$399", "16MP", "128GB",'6.4"', "2340 x 1080"],
["$399", "48MP", "128GB",'6.1"', "1560 x 720"],
["$399", "12MP", "128GB",'5.0"', "1920 x 1080"],
["$399", "16MP", "32GB", '5.1"', "2560 x 1440"],
["$449", "48MP", "128GB", '6.4"', "2340 x 1080"],
["$449", "12MP", "32GB", '5.8"', "2280 x 1080"],
["$499", "12MP", "32GB", '4.7"', "1334 x 750"],
["$499", "25MP", "64GB", '6.4"', "2340 x 1080"],
["$499", "48MP", "128GB", '5.5"', "2340 x 1080"],
["$499", "12MP", "64GB", '6.2"', "2280 x 1080"],
["$499", "20MP", "128GB", '5.5"', "2560 x 1440"],
["$499", "12MP", "128GB", '5.5"', "2560 x 1440"],
["$499", "23MP", "32GB", '5.5"', "3840 x 2160"],
["$499", "13MP", "64GB", '5.7"', "2880 x 1440"],
["$549", "48MP", "128GB", '6.3"', "2280 x 1080"],
["$549", "16MP", "32GB", '5.6"', "2220 x 1080"],
["$599", "12MP", "128GB", '4.7"', "1334 x 750"],
["$599", "48MP", "128GB", '6.5"', "2340 x 1080"],
["$599", "48MP", "128GB", '6.3"', "2340 x 1080"],
["$599", "48MP", "128GB", '6.4"', "2340 x 1080"],
["$599", "20MP", "128GB", '6.4"', "2340 x 1080"],
["$649", "32MP", "128GB", '6.7"', "2400 x 1080"],
["$649", "12MP", "64GB", '5.6"', "2220 x 1080"],
["$699", "12MP", "128GB", '6.0"', "2880 x 1440"],
["$699", "12MP", "128GB", '6.4"', "2340 x 1080"],
["$699", "20MP", "256GB", '6.4"', "2340 x 1080"],
["$699", "12MP", "128GB", '6.4"', "3120 x 1400"],
["$699", "12MP", "32GB", '3.3"', "1280 x 720"],
["$779", "12MP", "64GB", '4.7"', "1334 x 750"],
["$799", "12MP", "64GB", '6.2"', "2960 x 1440"],
["$799", "12MP", "128GB", '5.5"', "1920 x 1080"],
["$799", "13MP", "32GB", '4.5"', "1620 x 1080"],
["$859", "12MP", "128GB", '4.7"', "1334 x 750"],
["$879", "12MP", "128GB", '5.5"', "2160 x 1080"],
["$899", "40MP", "128GB", '6.1"', "2340 x 1080"],
["$899", "12MP", "256GB", '5.8"', "2960 x 1400"],
["$899", "12MP", "64GB", '6.3"', "2960 x 1440"],
["$999", "12MP", "64GB", '5.8"', "2436 x 1125"],
["$999", "16MP", "128GB", '5.8"', "2280 x 1080"],
["$999", "48MP", "128GB", '6.7"', "2400 x 1080"],
["$999", "12MP", "256GB", '6.2"', "2960 x 1440"],
["$999", "12MP", "128GB", '6.3"', "2960 x 1440"],
["$1049", "16MP", "64GB", '5.7"', "2280 x 1080"],
["$1049", "12MP", "64GB", '6.1"', "1792 x 868"],
["$1129", "12MP", "128GB", '6.1"', "1792 x 868"],
["$1149", "12MP", "256GB", '5.8"', "2436 x 1125"],
["$1199", "12MP", "64GB", '6.1"', "1792 x 828"],
["$1199", "16MP", "128GB", '6.4"', "3040 x 1440"],
["$1199", "40MP", "256GB", '6.5"', "2340 x 1080"],
["$1199", "16MP", "128GB", '5.7"', "2280 x 1080"],
["$1199", "16MP", "512GB", '6.1"', "3040 x 1440"],
["$1249", "12MP", "64GB", '6.5"', "2688 x 1242"],
["$1279", "12MP", "128GB", '6.1"', "1792 x 828"],
["$1279", "16MP", "64GB", '6.3"', "3040 x 1440"],
["$1349", "12MP", "512GB", '5.8"', "2436 x 1125"],
["$1399", "12MP", "256GB", '6.5"', "2688 x 1242"],
["$1429", "16MP", "128GB", '6.3"', "3040 x 1440"],
["$1449", "12MP", "256GB", '6.1"', "1792 x 828"],
["$1599", "16MP", "512GB", '6.4"', "3040 x 1440"],
["$1699", "12MP", "256GB", '6.8"', "3040 x 1440"],
["$1699", "16MP", "1000GB", '6.4"', "3040 x 1440"],
["$1749", "12MP", "64GB", '5.8"', "2436 x 1125"],
["$1899", "12MP", "64GB", '6.5"', "2688 x 1242"],
["$1999", "12MP", "256GB", '5.8"', "2436 x 1125"],
["$1999", "12MP", "512GB", '6.8"', "3040 x 1440"],
["$2149", "12MP", "256GB", '6.5"', "2688 x 1242"],
["$2349", "12MP", "512GB", '5.8"', "2436 x 1125"],
["$2499", "12MP", "512GB", '6.5"', "2688 x 1242"]]
*/

let corPhAtAr = // Array of all options, grouped by attributes i.e. correlated condition array
[["$44", "5MP", "8GB", '5"', "1280p x 720p"],
["$134", "13MP", "16GB", '5"', "1280p x 720p"],
["$179", "8MP", "8GB", '5"', "1280p x 720p"],
["$179", "16MP", "32GB", '5.2"', "1920p x 1080p"],
["$199", "13MP", "64GB", '6.1"', "1560 x 720"],
["$199", "13MP", "16GB", '5.7"', "1520 x 720"],
["$199", "13MP", "32GB", '5.5"', "1440 x 720"],
["$229", "13MP", "32GB", '6.2"', "1520 x 720"],
["$239", "13MP", "64GB", '6.2"', "1520 x 720"],
["$249", "13MP", "64GB", '6.4"', "1544 x 720"],
["$249", "13MP", "32GB", '5.5"', "1920 x 1080"],
["$249", "13MP", "32GB", '6.3"', "1520 x 720"],
["$279", "13MP", "32GB", '6.4"', "1560 x 720"],
["$279", "13MP", "64GB", '6.2"', "1520 x 720"],
["$279", "13MP", "32GB", '5.5"', "2160 x 1080"],
["$299", "13MP", "64GB", '6.2"', "1520 x 720"],
["$299", "13MP", "32GB", '5.7"', "1520 x 720"],
["$299", "12MP", "64GB", '5.7"', "2560 x 1440"],
["$299", "13MP", "128GB",'6.4"', "1544 x 720"],
["$299", "16MP", "32GB", '5.5"', "1920 x 1080"],
["$299", "16MP", "64GB", '6.3"', "1520 x 720"],
["$299", "16MP", "64GB", '6.5"', "1600 x 720"],
["$299", "12MP", "32GB", '5.2"', "1920 x 1080"],
["$349", "16MP", "128GB",'6.6"', "2340 x 1080"],
["$379", "16MP", "32GB", '6.4"', "1920 x 1080"],
["$379", "16MP", "32GB", '5.7"', "1920 x 1080"],
["$399", "48MP", "128GB",'6.5"', "2340 x 1080"],
["$399", "16MP", "128GB",'6.3"', "2340 x 1080"],
["$399", "16MP", "64GB", '6.3"', "2280 x 1080"],
["$399", "48MP", "128GB",'6.3"', "2520 x 1080"],
["$399", "24MP", "128GB",'6.2"', "2312 x 1080"],
["$399", "12MP", "32GB", '5.2"', "1920 x 1080"],
["$399", "16MP", "128GB",'6.4"', "2340 x 1080"],
["$399", "48MP", "128GB",'6.1"', "1560 x 720"],
["$399", "12MP", "128GB",'5.0"', "1920 x 1080"],
["$399", "16MP", "32GB", '5.1"', "2560 x 1440"],
["$449", "48MP", "128GB", '6.4"', "2340 x 1080"],
["$449", "12MP", "32GB", '5.8"', "2280 x 1080"],
["$499", "12MP", "32GB", '4.7"', "1334 x 750"],
["$499", "25MP", "64GB", '6.4"', "2340 x 1080"],
["$499", "48MP", "128GB", '5.5"', "2340 x 1080"],
["$499", "12MP", "64GB", '6.2"', "2280 x 1080"],
["$499", "20MP", "128GB", '5.5"', "2560 x 1440"],
["$499", "12MP", "128GB", '5.5"', "2560 x 1440"],
["$499", "23MP", "32GB", '5.5"', "3840 x 2160"],
["$499", "13MP", "64GB", '5.7"', "2880 x 1440"],
["$549", "48MP", "128GB", '6.3"', "2280 x 1080"],
["$549", "16MP", "32GB", '5.6"', "2220 x 1080"],
["$599", "12MP", "128GB", '4.7"', "1334 x 750"],
["$599", "48MP", "128GB", '6.5"', "2340 x 1080"],
["$599", "48MP", "128GB", '6.3"', "2340 x 1080"],
["$599", "48MP", "128GB", '6.4"', "2340 x 1080"],
["$599", "20MP", "128GB", '6.4"', "2340 x 1080"],
["$649", "32MP", "128GB", '6.7"', "2400 x 1080"],
["$649", "12MP", "64GB", '5.6"', "2220 x 1080"],
["$699", "12MP", "128GB", '6.0"', "2880 x 1440"],
["$699", "12MP", "128GB", '6.4"', "2340 x 1080"],
["$699", "20MP", "256GB", '6.4"', "2340 x 1080"],
["$699", "12MP", "128GB", '6.4"', "3120 x 1400"],
["$699", "12MP", "32GB", '3.3"', "1280 x 720"],
["$779", "12MP", "64GB", '4.7"', "1334 x 750"],
["$799", "12MP", "64GB", '6.2"', "2960 x 1440"],
["$799", "12MP", "128GB", '5.5"', "1920 x 1080"],
["$799", "13MP", "32GB", '4.5"', "1620 x 1080"],
["$859", "12MP", "128GB", '4.7"', "1334 x 750"],
["$879", "12MP", "128GB", '5.5"', "2160 x 1080"],
["$899", "40MP", "128GB", '6.1"', "2340 x 1080"],
["$899", "12MP", "256GB", '5.8"', "2960 x 1400"],
["$899", "12MP", "64GB", '6.3"', "2960 x 1440"],
["$999", "12MP", "64GB", '5.8"', "2436 x 1125"],
["$999", "16MP", "128GB", '5.8"', "2280 x 1080"],
["$999", "48MP", "128GB", '6.7"', "2400 x 1080"],
["$999", "12MP", "256GB", '6.2"', "2960 x 1440"],
["$999", "12MP", "128GB", '6.3"', "2960 x 1440"],
["$1049", "16MP", "64GB", '5.7"', "2280 x 1080"],
["$1049", "12MP", "64GB", '6.1"', "1792 x 868"],
["$1129", "12MP", "128GB", '6.1"', "1792 x 868"],
["$1149", "12MP", "256GB", '5.8"', "2436 x 1125"],
["$1199", "12MP", "64GB", '6.1"', "1792 x 828"],
["$1199", "16MP", "128GB", '6.4"', "3040 x 1440"],
["$1199", "40MP", "256GB", '6.5"', "2340 x 1080"],
["$1199", "16MP", "128GB", '5.7"', "2280 x 1080"],
["$1199", "16MP", "512GB", '6.1"', "3040 x 1440"],
["$1249", "12MP", "64GB", '6.5"', "2688 x 1242"],
["$1279", "12MP", "128GB", '6.1"', "1792 x 828"],
["$1279", "16MP", "64GB", '6.3"', "3040 x 1440"],
["$1349", "12MP", "512GB", '5.8"', "2436 x 1125"],
["$1399", "12MP", "256GB", '6.5"', "2688 x 1242"],
["$1429", "16MP", "128GB", '6.3"', "3040 x 1440"],
["$1449", "12MP", "256GB", '6.1"', "1792 x 828"],
["$1599", "16MP", "512GB", '6.4"', "3040 x 1440"],
["$1699", "12MP", "256GB", '6.8"', "3040 x 1440"],
["$1699", "16MP", "1000GB", '6.4"', "3040 x 1440"],
["$1749", "12MP", "64GB", '5.8"', "2436 x 1125"],
["$1899", "12MP", "64GB", '6.5"', "2688 x 1242"],
["$1999", "12MP", "256GB", '5.8"', "2436 x 1125"],
["$1999", "12MP", "512GB", '6.8"', "3040 x 1440"],
["$2149", "12MP", "256GB", '6.5"', "2688 x 1242"],
["$2349", "12MP", "512GB", '5.8"', "2436 x 1125"],
["$2499", "12MP", "512GB", '6.5"', "2688 x 1242"]]


let mPA = [] // Object with key:value pairs (key = property name)

for (let phone of corPhAtAr) { // Create an array with key:value pairs
    mPA.push({price: phone[0], camera: phone[1], memory: phone[2], screenSize: phone[3], resolution: phone[4]})
}

console.log(mPA)

/*
//let uncorr2 = {price: ["$44", "101",...], cam}
let uncorrPhAtts = [
{price: "$44", camera: "5MP", memory: "8GB", screenSize: '5"',resolution: "1280 x 720"},
{price: "$134", camera: "13MP", memory: "16GB", screenSize: '5"', resolution: "1280 x 720"},
{price: "$179", camera: "8MP", memory: "8GB", screenSize: '5"', resolution: "1280 x 720"},
{price: "$179", camera: "16MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"},
{price: "$199", camera: "13MP", memory: "64GB", screenSize: '6.1"', resolution: "1560 x 720"},
{price: "$199", camera: "13MP", memory: "16GB", screenSize: '5.7"', resolution: "1520 x 720"},
{price: "$199", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "1440 x 720"},
{price: "$229", camera: "13MP", memory: "32GB", screenSize: '6.2"', resolution: "1520 x 720"},
{price: "$239", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"},
{price: "$249", camera: "13MP", memory: "64GB", screenSize: '6.4"', resolution: "1544 x 720"},
{price: "$249", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "1920 x 1080"},
{price: "$249", camera: "13MP", memory: "32GB", screenSize: '6.3"', resolution: "1520 x 720"},
{price: "$279", camera: "13MP", memory: "32GB", screenSize: '6.4"', resolution: "1560 x 720"},
{price: "$279", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"},
{price: "$279", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "2160 x 1080"},
{price: "$299", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"},
{price: "$299", camera: "13MP", memory: "32GB", screenSize: '5.7"', resolution: "1520 x 720"},
{price: "$299", camera: "12MP", memory: "64GB", screenSize: '5.7"', resolution: "2560 x 1440"},
{price: "$299", camera: "13MP", memory: "128GB", screenSize: '6.4"', resolution: "1544 x 720"},
{price: "$299", camera: "16MP", memory: "32GB", screenSize: '5.5"', resolution: "1920 x 1080"},
{price: "$299", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "1520 x 720"},
{price: "$299", camera: "16MP", memory: "64GB", screenSize: '6.5"', resolution: "1600 x 720"},
{price: "$299", camera: "12MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"},
{price: "$349", camera: "16MP", memory: "128GB", screenSize: '6.6"', resolution: "2340 x 1080"},
{price: "$379", camera: "16MP", memory: "32GB", screenSize: '6.4"', resolution: "1920 x 1080"},
{price: "$379", camera: "16MP", memory: "32GB", screenSize: '5.7"', resolution: "1920 x 1080"},
{price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.5"', resolution: "2340 x 1080"},
{price: "$399", camera: "16MP", memory: "128GB", screenSize: '6.3"', resolution: "2340 x 1080"},
{price: "$399", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "2280 x 1080"},
{price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2520 x 1080"},
{price: "$399", camera: "24MP", memory: "128GB", screenSize: '6.2"', resolution: "2312 x 1080"},
{price: "$399", camera: "12MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"},
{price: "$399", camera: "16MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
{price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.1"', resolution: "1560 x 720"},
{price: "$399", camera: "12MP", memory: "128GB", screenSize: '5.0"', resolution: "1920 x 1080"},
{price: "$399", camera: "16MP", memory: "32GB", screenSize: '5.1"', resolution: "2560 x 1440"},
{price: "$449", camera: "48MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
{price: "$449", camera: "12MP", memory: "32GB", screenSize: '5.8"', resolution: "2280 x 1080"},
{price: "$499", camera: "12MP", memory: "32GB", screenSize: '4.7"', resolution: "1334 x 750"},
{price: "$499", camera: "25MP", memory: "64GB", screenSize: '6.4"', resolution: "2340 x 1080"},
{price: "$499", camera: "48MP", memory: "128GB", screenSize: '5.5"', resolution: "2340 x 1080"},
{price: "$499", camera: "12MP", memory: "64GB", screenSize: '6.2"', resolution: "2280 x 1080"},
{price: "$499", camera: "20MP", memory: "128GB", screenSize: '5.5"', resolution: "2560 x 1440"},
{price: "$499", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "2560 x 1440"},
{price: "$499", camera: "23MP", memory: "32GB", screenSize: '5.5"', resolution: "3840 x 2160"},
{price: "$499", camera: "13MP", memory: "64GB", screenSize: '5.7"', resolution: "2880 x 1440"},
{price: "$549", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2280 x 1080"},
{price: "$549", camera: "16MP", memory: "32GB", screenSize: '5.6"', resolution: "2220 x 1080"},
{price: "$599", camera: "12MP", memory: "128GB", screenSize: '4.7"', resolution: "1334 x 750"},
{price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.5"', resolution: "2340 x 1080"},
{price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2340 x 1080"},
{price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
{price: "$599", camera: "20MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
{price: "$649", camera: "32MP", memory: "128GB", screenSize: '6.7"', resolution: "2400 x 1080"},
{price: "$649", camera: "12MP", memory: "64GB", screenSize: '5.6"', resolution: "2220 x 1080"},
{price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.0"', resolution: "2880 x 1440"},
{price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
{price: "$699", camera: "20MP", memory: "256GB", screenSize: '6.4"', resolution: "2340 x 1080"},
{price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.4"', resolution: "3120 x 1400"},
{price: "$699", camera: "12MP", memory: "32GB", screenSize: '3.3"', resolution: "1280 x 720"},
{price: "$779", camera: "12MP", memory: "64GB", screenSize: '4.7"', resolution: "1334 x 750"},
{price: "$799", camera: "12MP", memory: "64GB", screenSize: '6.2"', resolution: "2960 x 1440"},
{price: "$799", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "1920 x 1080"},
{price: "$799", camera: "13MP", memory: "32GB", screenSize: '4.5"', resolution: "1620 x 1080"},
{price: "$859", camera: "12MP", memory: "128GB", screenSize: '4.7"', resolution: "1334 x 750"},
{price: "$879", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "2160 x 1080"},
{price: "$899", camera: "40MP", memory: "128GB", screenSize: '6.1"', resolution: "2340 x 1080"},
{price: "$899", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2960 x 1400"},
{price: "$899", camera: "12MP", memory: "64GB", screenSize: '6.3"', resolution: "2960 x 1440"},
{price: "$999", camera: "12MP", memory: "64GB", screenSize: '5.8"', resolution: "2436 x 1125"},
{price: "$999", camera: "16MP", memory: "128GB", screenSize: '5.8"', resolution: "2280 x 1080"},
{price: "$999", camera: "48MP", memory: "128GB", screenSize: '6.7"', resolution: "2400 x 1080"},
{price: "$999", camera: "12MP", memory: "256GB", screenSize: '6.2"', resolution: "2960 x 1440"},
{price: "$999", camera: "12MP", memory: "128GB", screenSize: '6.3"', resolution: "2960 x 1440"},
{price: "$1049", camera: "16MP", memory: "64GB", screenSize: '5.7"', resolution: "2280 x 1080"},
{price: "$1049", camera: "12MP", memory: "64GB", screenSize: '6.1"', resolution: "1792 x 868"},
{price: "$1129", camera: "12MP", memory: "128GB", screenSize: '6.1"', resolution: "1792 x 868"},
{price: "$1149", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2436 x 1125"},
{price: "$1199", camera: "12MP", memory: "64GB", screenSize: '6.1"', resolution: "1792 x 828"},
{price: "$1199", camera: "16MP", memory: "128GB", screenSize: '6.4"', resolution: "3040 x 1440"},
{price: "$1199", camera: "40MP", memory: "256GB", screenSize: '6.5"', resolution: "2340 x 1080"},
{price: "$1199", camera: "16MP", memory: "128GB", screenSize: '5.7"', resolution: "2280 x 1080"},
{price: "$1199", camera: "16MP", memory: "512GB", screenSize: '6.1"', resolution: "3040 x 1440"},
{price: "$1249", camera: "12MP", memory: "64GB", screenSize: '6.5"', resolution: "2688 x 1242"},
{price: "$1279", camera: "12MP", memory: "128GB", screenSize: '6.1"', resolution: "1792 x 828"},
{price: "$1279", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "3040 x 1440"},
{price: "$1349", camera: "12MP", memory: "512GB", screenSize: '5.8"', resolution: "2436 x 1125"},
{price: "$1399", camera: "12MP", memory: "256GB", screenSize: '6.5"', resolution: "2688 x 1242"},
{price: "$1429", camera: "16MP", memory: "128GB", screenSize: '6.3"', resolution: "3040 x 1440"},
{price: "$1449", camera: "12MP", memory: "256GB", screenSize: '6.1"', resolution: "1792 x 828"},
{price: "$1599", camera: "16MP", memory: "512GB", screenSize: '6.4"', resolution: "3040 x 1440"},
{price: "$1699", camera: "12MP", memory: "256GB", screenSize: '6.8"', resolution: "3040 x 1440"},
{price: "$1699", camera: "16MP", memory: "1000GB", screenSize: '6.4"', resolution: "3040 x 1440"},
{price: "$1749", camera: "12MP", memory: "64GB", screenSize: '5.8"', resolution: "2436 x 1125"},
{price: "$1899", camera: "12MP", memory: "64GB", screenSize: '6.5"', resolution: "2688 x 1242"},
{price: "$1999", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2436 x 1125"},
{price: "$1999", camera: "12MP", memory: "512GB", screenSize: '6.8"', resolution: "3040 x 1440"},
{price: "$2149", camera: "12MP", memory: "256GB", screenSize: '6.5"', resolution: "2688 x 1242"},
{price: "$2349", camera: "12MP", memory: "512GB", screenSize: '5.8"', resolution: "2436 x 1125"},
{price: "$2499", camera: "12MP", memory: "512GB", screenSize: '6.5"', resolution: "2688 x 1242"},
]
*/

let corrPhAtts = [
  {price: "$44", camera: "5MP", memory: "8GB", screenSize: '5"',resolution: "1280 x 720"},
  {price: "$134", camera: "13MP", memory: "16GB", screenSize: '5"', resolution: "1280 x 720"},
  {price: "$179", camera: "8MP", memory: "8GB", screenSize: '5"', resolution: "1280 x 720"},
  {price: "$179", camera: "16MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"},
  {price: "$199", camera: "13MP", memory: "64GB", screenSize: '6.1"', resolution: "1560 x 720"},
  {price: "$199", camera: "13MP", memory: "16GB", screenSize: '5.7"', resolution: "1520 x 720"},
  {price: "$199", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "1440 x 720"},
  {price: "$229", camera: "13MP", memory: "32GB", screenSize: '6.2"', resolution: "1520 x 720"},
  {price: "$239", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"},
  {price: "$249", camera: "13MP", memory: "64GB", screenSize: '6.4"', resolution: "1544 x 720"},
  {price: "$249", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "1920 x 1080"},
  {price: "$249", camera: "13MP", memory: "32GB", screenSize: '6.3"', resolution: "1520 x 720"},
  {price: "$279", camera: "13MP", memory: "32GB", screenSize: '6.4"', resolution: "1560 x 720"},
  {price: "$279", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"},
  {price: "$279", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "2160 x 1080"},
  {price: "$299", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"},
  {price: "$299", camera: "13MP", memory: "32GB", screenSize: '5.7"', resolution: "1520 x 720"},
  {price: "$299", camera: "12MP", memory: "64GB", screenSize: '5.7"', resolution: "2560 x 1440"},
  {price: "$299", camera: "13MP", memory: "128GB", screenSize: '6.4"', resolution: "1544 x 720"},
  {price: "$299", camera: "16MP", memory: "32GB", screenSize: '5.5"', resolution: "1920 x 1080"},
  {price: "$299", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "1520 x 720"},
  {price: "$299", camera: "16MP", memory: "64GB", screenSize: '6.5"', resolution: "1600 x 720"},
  {price: "$299", camera: "12MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"},
  {price: "$349", camera: "16MP", memory: "128GB", screenSize: '6.6"', resolution: "2340 x 1080"},
  {price: "$379", camera: "16MP", memory: "32GB", screenSize: '6.4"', resolution: "1920 x 1080"},
  {price: "$379", camera: "16MP", memory: "32GB", screenSize: '5.7"', resolution: "1920 x 1080"},
  {price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.5"', resolution: "2340 x 1080"},
  {price: "$399", camera: "16MP", memory: "128GB", screenSize: '6.3"', resolution: "2340 x 1080"},
  {price: "$399", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "2280 x 1080"},
  {price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2520 x 1080"},
  {price: "$399", camera: "24MP", memory: "128GB", screenSize: '6.2"', resolution: "2312 x 1080"},
  {price: "$399", camera: "12MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"},
  {price: "$399", camera: "16MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
  {price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.1"', resolution: "1560 x 720"},
  {price: "$399", camera: "12MP", memory: "128GB", screenSize: '5.0"', resolution: "1920 x 1080"},
  {price: "$399", camera: "16MP", memory: "32GB", screenSize: '5.1"', resolution: "2560 x 1440"},
  {price: "$449", camera: "48MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
  {price: "$449", camera: "12MP", memory: "32GB", screenSize: '5.8"', resolution: "2280 x 1080"},
  {price: "$499", camera: "12MP", memory: "32GB", screenSize: '4.7"', resolution: "1334 x 750"},
  {price: "$499", camera: "25MP", memory: "64GB", screenSize: '6.4"', resolution: "2340 x 1080"},
  {price: "$499", camera: "48MP", memory: "128GB", screenSize: '5.5"', resolution: "2340 x 1080"},
  {price: "$499", camera: "12MP", memory: "64GB", screenSize: '6.2"', resolution: "2280 x 1080"},
  {price: "$499", camera: "20MP", memory: "128GB", screenSize: '5.5"', resolution: "2560 x 1440"},
  {price: "$499", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "2560 x 1440"},
  {price: "$499", camera: "23MP", memory: "32GB", screenSize: '5.5"', resolution: "3840 x 2160"},
  {price: "$499", camera: "13MP", memory: "64GB", screenSize: '5.7"', resolution: "2880 x 1440"},
  {price: "$549", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2280 x 1080"},
  {price: "$549", camera: "16MP", memory: "32GB", screenSize: '5.6"', resolution: "2220 x 1080"},
  {price: "$599", camera: "12MP", memory: "128GB", screenSize: '4.7"', resolution: "1334 x 750"},
  {price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.5"', resolution: "2340 x 1080"},
  {price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2340 x 1080"},
  {price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
  {price: "$599", camera: "20MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
  {price: "$649", camera: "32MP", memory: "128GB", screenSize: '6.7"', resolution: "2400 x 1080"},
  {price: "$649", camera: "12MP", memory: "64GB", screenSize: '5.6"', resolution: "2220 x 1080"},
  {price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.0"', resolution: "2880 x 1440"},
  {price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"},
  {price: "$699", camera: "20MP", memory: "256GB", screenSize: '6.4"', resolution: "2340 x 1080"},
  {price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.4"', resolution: "3120 x 1400"},
  {price: "$699", camera: "12MP", memory: "32GB", screenSize: '3.3"', resolution: "1280 x 720"},
  {price: "$779", camera: "12MP", memory: "64GB", screenSize: '4.7"', resolution: "1334 x 750"},
  {price: "$799", camera: "12MP", memory: "64GB", screenSize: '6.2"', resolution: "2960 x 1440"},
  {price: "$799", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "1920 x 1080"},
  {price: "$799", camera: "13MP", memory: "32GB", screenSize: '4.5"', resolution: "1620 x 1080"},
  {price: "$859", camera: "12MP", memory: "128GB", screenSize: '4.7"', resolution: "1334 x 750"},
  {price: "$879", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "2160 x 1080"},
  {price: "$899", camera: "40MP", memory: "128GB", screenSize: '6.1"', resolution: "2340 x 1080"},
  {price: "$899", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2960 x 1400"},
  {price: "$899", camera: "12MP", memory: "64GB", screenSize: '6.3"', resolution: "2960 x 1440"},
  {price: "$999", camera: "12MP", memory: "64GB", screenSize: '5.8"', resolution: "2436 x 1125"},
  {price: "$999", camera: "16MP", memory: "128GB", screenSize: '5.8"', resolution: "2280 x 1080"},
  {price: "$999", camera: "48MP", memory: "128GB", screenSize: '6.7"', resolution: "2400 x 1080"},
  {price: "$999", camera: "12MP", memory: "256GB", screenSize: '6.2"', resolution: "2960 x 1440"},
  {price: "$999", camera: "12MP", memory: "128GB", screenSize: '6.3"', resolution: "2960 x 1440"},
  {price: "$1049", camera: "16MP", memory: "64GB", screenSize: '5.7"', resolution: "2280 x 1080"},
  {price: "$1049", camera: "12MP", memory: "64GB", screenSize: '6.1"', resolution: "1792 x 868"},
  {price: "$1129", camera: "12MP", memory: "128GB", screenSize: '6.1"', resolution: "1792 x 868"},
  {price: "$1149", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2436 x 1125"},
  {price: "$1199", camera: "12MP", memory: "64GB", screenSize: '6.1"', resolution: "1792 x 828"},
  {price: "$1199", camera: "16MP", memory: "128GB", screenSize: '6.4"', resolution: "3040 x 1440"},
  {price: "$1199", camera: "40MP", memory: "256GB", screenSize: '6.5"', resolution: "2340 x 1080"},
  {price: "$1199", camera: "16MP", memory: "128GB", screenSize: '5.7"', resolution: "2280 x 1080"},
  {price: "$1199", camera: "16MP", memory: "512GB", screenSize: '6.1"', resolution: "3040 x 1440"},
  {price: "$1249", camera: "12MP", memory: "64GB", screenSize: '6.5"', resolution: "2688 x 1242"},
  {price: "$1279", camera: "12MP", memory: "128GB", screenSize: '6.1"', resolution: "1792 x 828"},
  {price: "$1279", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "3040 x 1440"},
  {price: "$1349", camera: "12MP", memory: "512GB", screenSize: '5.8"', resolution: "2436 x 1125"},
  {price: "$1399", camera: "12MP", memory: "256GB", screenSize: '6.5"', resolution: "2688 x 1242"},
  {price: "$1429", camera: "16MP", memory: "128GB", screenSize: '6.3"', resolution: "3040 x 1440"},
  {price: "$1449", camera: "12MP", memory: "256GB", screenSize: '6.1"', resolution: "1792 x 828"},
  {price: "$1599", camera: "16MP", memory: "512GB", screenSize: '6.4"', resolution: "3040 x 1440"},
  {price: "$1699", camera: "12MP", memory: "256GB", screenSize: '6.8"', resolution: "3040 x 1440"},
  {price: "$1699", camera: "16MP", memory: "1000GB", screenSize: '6.4"', resolution: "3040 x 1440"},
  {price: "$1749", camera: "12MP", memory: "64GB", screenSize: '5.8"', resolution: "2436 x 1125"},
  {price: "$1899", camera: "12MP", memory: "64GB", screenSize: '6.5"', resolution: "2688 x 1242"},
  {price: "$1999", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2436 x 1125"},
  {price: "$1999", camera: "12MP", memory: "512GB", screenSize: '6.8"', resolution: "3040 x 1440"},
  {price: "$2149", camera: "12MP", memory: "256GB", screenSize: '6.5"', resolution: "2688 x 1242"},
  {price: "$2349", camera: "12MP", memory: "512GB", screenSize: '5.8"', resolution: "2436 x 1125"},
  {price: "$2499", camera: "12MP", memory: "512GB", screenSize: '6.5"', resolution: "2688 x 1242"},
  ]
  
console.log(corrPhAtts[0])

// Fill the DCE 




function shuffleArr(arr) {    // This shuffle/randomise function lifted from https://bost.ocks.org/mike/shuffle/
                              // Shuffle function - Pick a random element, swap with last element in back of array/list.
  let m = arr.length, t, i;   // Shorthand for var m = arr.length, var t;, var i; i.e. multiple elements  
    while (m) {               // While there remain elements to shuffle (i.e. m = > 0)
                              // Pick a remaining element
                              // Generate a random number within the range of no. durations array and round down
      i = Math.floor(Math.random() * m--); 
                              // And swap it with the current element.
      t = arr[m];
                              // var t = the last element in durations array/list
      arr[m] = arr[i];
                              // Swap the last element in the durations array/list to the
                              // randomly chosen element in the durations array/list
      arr[i] = t;
                              // and swap element durations[i] with the formerly last element of the durations array/list
    }
  return arr;
}

shuffleArr(corrPhAtts)
console.log(corrPhAtts)



// Shuffle all correlated options
shuffleArr(corrPhAtts) 
// Options are indices within the corrPhAtts array
console.log(corrPhAtts[[1]])
// Each phone is described by 5 attributes - Price, Camera, Memory, screen size and resolution
// The location of each attribute should be randomised b/w subjects

// Shuffle all correlated options in the 

///console.log(uncorrPhAtts)

//console.log(uncorrPhAtts[2])

var phoneArray = []
const randomPresentation = 1; 	
const numAttributes = 5;
const randomProductsMode = 2;
const specificNumProducts = ["2", "4", "8"];
var nCurrentBlock = 0
var features = [	 // Array containing attributes and their levels (e.g. product attributes, pizza attributes)
  ["Low Price", "High Price",],
  ["Low Quality", "High Quality",],
  ["whatever", "whaetves",],
  ];
var usingFeatures = [];
var randomSelectedProduct = Math.floor(Math.random() * specificNumProducts.length);
  blockProducts = specificNumProducts[randomSelectedProduct];
  console.log(blockProducts) //hd r r y y



console.log(usingFeatures)

if (nCurrentBlock == 0) {
    for (var i = 0; i < features.length; i++)
              usingFeatures.push(i);
              console.log(usingFeatures);// 
          // To set the features being used, casually remove them randomly until it's the right length
          for (var i = 0; i < usingFeatures.length - numAttributes; i++)
              usingFeatures.splice(Math.floor(Math.random() * usingFeatures.length), 1);
              console.log(usingFeatures)
              if (randomPresentation == 1) { // This randomises the location of attributes between-subjects 
               for (var i = 0; i < usingFeatures.length; i++) 
                      var randomFeature = Math.floor(Math.random() * usingFeatures.length);
                      var temp = usingFeatures[i];
                      usingFeatures[i] = usingFeatures[randomFeature];
                      usingFeatures[randomFeature] = temp;
              }
            }

            console.log(usingFeatures) // niyigiy
            
/*
let priceLvls = [
"$44", "$134", "$179", "$179", "$199", "$199", "$199", "$229", "$239", "$249",
"$249", "$249", "$279", "$279", "$279", "$299", "$299", "$299", "$299", "$299",
"$299", "$299", "$299", "$349", "$379", "$379", "$399", "$399", "$399", "$399",
"$399", "$399", "$399", "$399", "$399", "$399", "$449", "$449", "$499", "$499",
"$499", "$499", "$499", "$499", "$499", "$499", "$549", "$549", "$599", "$599",
"$599", "$599", "$599", "$649", "$649", "$699", "$699", "$699", "$699", "$699",
"$779", "$799", "$799", "$799", "$859", "$879", "$899", "$899", "$899", "$999", 
"$999", "$999", "$999", "$999", "$1049", "$1049", "$1129", "$1149", "$1199", "$1199", 
"$1199", "$1199", "$1199", "$1249", "$1279", "$1279", "$1349", "$1399", "$1429","$1449",
"$1599","$1699","$1699","$1749","$1899","$1999","$1999","$2149","$2349","$2499",
]

let camLvls = [
"5MP", "13MP", "8MP", "16MP", "13MP", "13MP", "13MP", "13MP", "13MP", "13MP", 
"13MP", "13MP", "13MP", "13MP", "13MP", "13MP", "13MP", "12MP", "13MP", "16MP", 
"16MP", "16MP", "12MP", "16MP", "16MP", "16MP", "48MP", "16MP", "16MP", "48MP", 
"24MP", "12MP", "16MP", "48MP", "12MP", "16MP", "48MP", "12MP", "12MP", "25MP", 
"48MP", "12MP", "20MP", "12MP", "23MP", "13MP", "48MP", "16MP", "12MP", "48MP", 
"48MP", "48MP", "20MP", "32MP", "12MP", "12MP", "12MP", "20MP", "12MP", "12MP", 
"12MP", "12MP", "12MP", "13MP", "12MP", "12MP", "40MP", "12MP", "12MP", "12MP", 
"16MP", "48MP", "12MP", "12MP", "16MP", "12MP", "12MP", "12MP", "12MP", "16MP", 
"40MP", "16MP", "16MP", "12MP", "12MP", "16MP", "12MP", "12MP", "16MP", "12MP", 
"16MP", "12MP", "16MP", "12MP", "12MP", "12MP", "12MP", "12MP", "12MP", "12MP",
]

let memLvls = [ 
  "8GB", "16GB", "8GB", "32GB", "64GB", "16GB", "32GB", "32GB", "64GB", "64GB",
  "32GB", "32GB", "32GB", "64GB", "32GB", "64GB", "32GB", "64GB", "128GB", "32GB", 
  "64GB", "64GB", "32GB", "128GB", "32GB", "32GB", "128GB", "128GB", "64GB", "128GB", 
  "128GB", "32GB", "128GB", "128GB", "128GB", "32GB", "128GB", "32GB", "32GB", "64GB", 
  "128GB", "64GB", "128GB", "128GB", "32GB", "64GB", "128GB", "32GB", "128GB", "128GB", 
  "128GB", "128GB", "128GB", "128GB", "64GB", "128GB", "128GB", "256GB", "128GB", "32GB", 
  "64GB", "64GB", "128GB", "32GB", "128GB", "128GB", "128GB", "256GB", "64GB", "64GB", 
  "128GB", "128GB", "256GB", "128GB", "64GB", "64GB", "128GB", "256GB", "64GB", "128GB", 
  "256GB", "128GB", "512GB", "64GB", "128GB", "64GB", "512GB", "256GB", "128GB", "256GB", 
  "512GB", "256GB", "1000GB", "64GB", "64GB", "256GB", "512GB", "256GB", "512GB", "512GB",
  ]
  
let scSzLvls = [
'5"', '5"', '5"', '5.2"', '6.1"', '5.7"', '5.5"', '6.2"', '6.2"', '6.4"',
'5.5"', '6.3"', '6.4"', '6.2"', '5.5"', '6.2"', '5.7"', '5.7"', '6.4"', '5.5"',
'6.3"', '6.5"', '5.2"', '6.6"', '6.4"', '5.7"', '6.5"', '6.3"', '6.3"', '6.3"',
'6.2"', '5.2"', '6.4"', '6.1"', '5.0"', '5.1"', '6.4"', '5.8"', '4.7"', '6.4"',
'5.5"', '6.2"', '5.5"', '5.5"', '5.5"', '5.7"', '6.3"', '5.6"', '4.7"', '6.5"',
'6.3"', '6.4"', '6.4"', '6.7"', '5.6"', '6.0"', '6.4"', '6.4"', '6.4"', '3.3"',
'4.7"', '6.2"', '5.5"', '4.5"', '4.7"', '5.5"', '6.1"', '5.8"', '6.3"', '5.8"',
'5.8"', '6.7"', '6.2"', '6.3"', '5.7"', '6.1"', '6.1"', '5.8"', '6.1"', '6.4"',
'6.5"', '5.7"', '6.1"', '6.5"', '6.1"', '6.3"', '5.8"', '6.5"', '6.3"', '6.1"',
'6.4"', '6.8"', '6.4"', '5.8"', '6.5"', '5.8"', '6.8"', '6.5"', '5.8"', '6.5"',
]



let resLvls = [
"1280 x 720", "1280 x 720", "1280 x 720", "1920 x 1080", "1560 x 720", "1520 x 720", "1440 x 720", "1520 x 720", "1520 x 720", "1544 x 720",
"1920 x 1080", "1520 x 720", "1560 x 720", "1520 x 720", "2160 x 1080", "1520 x 720", "1520 x 720", "2560 x 1440", "1544 x 720", "1920 x 1080",
"1520 x 720", "1600 x 720", "1920 x 1080", "2340 x 1080", "1920 x 1080", "1920 x 1080", "2340 x 1080", "2340 x 1080", "2280 x 1080", "2520 x 1080",
"2312 x 1080", "1920 x 1080", "2340 x 1080", "1560 x 720", "1920 x 1080", "2560 x 1440", "2340 x 1080", "2280 x 1080", "1334 x 750", "2340 x 1080",
"2340 x 1080", "2280 x 1080", "2560 x 1440", "2560 x 1440", "3840 x 2160", "2880 x 1440", "2280 x 1080", "2220 x 1080", "1334 x 750", "2340 x 1080",
"2340 x 1080", "2340 x 1080", "2340 x 1080", "2400 x 1080", "2220 x 1080", "2880 x 1440", "2340 x 1080", "2340 x 1080", "3120 x 1400", "1280 x 720",
"1334 x 750", "2960 x 1440", "1920 x 1080", "1620 x 1080", "1334 x 750", "2160 x 1080", "2340 x 1080", "2960 x 1400", "2960 x 1440", "2436 x 1125",
"2280 x 1080", "2400 x 1080", "2960 x 1440", "2960 x 1440", "2280 x 1080", "1792 x 868", "1792 x 868", "2436 x 1125", "1792 x 828", "3040 x 1440",
"2340 x 1080", "2280 x 1080", "3040 x 1440", "2688 x 1242", "1792 x 828", "3040 x 1440", "2436 x 1125", "2688 x 1242", "3040 x 1440", "1792 x 828",
 "3040 x 1440", "3040 x 1440", "3040 x 1440", "2436 x 1125", "2688 x 1242", "2436 x 1125", "3040 x 1440", "2688 x 1242", "2436 x 1125", "2688 x 1242",
]

console.log(memLvls.length, priceLvls.length, camLvls.length, scSzLvls.length, resLvls.length)

*/
// accessing object values
//console.log(uncorrPhAtts[34])
//console.log(corPhAtAr[34])
//console.log(uncorrPhAtts[34]['camera'])


var features = [												// Available phone features and the random values it can have
                
  ["Resolution", "1280 x 720", "1280 x 720", "1280 x 720", "1920 x 1080", "1560 x 720", "1520 x 720", "1440 x 720", "1520 x 720", "1520 x 720", "1544 x 720",
  "1920 x 1080", "1520 x 720", "1560 x 720", "1520 x 720", "2160 x 1080", "1520 x 720", "1520 x 720", "2560 x 1440", "1544 x 720", "1920 x 1080",
  "1520 x 720", "1600 x 720", "1920 x 1080", "2340 x 1080", "1920 x 1080", "1920 x 1080", "2340 x 1080", "2340 x 1080", "2280 x 1080", "2520 x 1080",
  "2312 x 1080", "1920 x 1080", "2340 x 1080", "1560 x 720", "1920 x 1080", "2560 x 1440", "2340 x 1080", "2280 x 1080", "1334 x 750", "2340 x 1080",
  "2340 x 1080", "2280 x 1080", "2560 x 1440", "2560 x 1440", "3840 x 2160", "2880 x 1440", "2280 x 1080", "2220 x 1080", "1334 x 750", "2340 x 1080",
  "2340 x 1080", "2340 x 1080", "2340 x 1080", "2400 x 1080", "2220 x 1080", "2880 x 1440", "2340 x 1080", "2340 x 1080", "3120 x 1400", "1280 x 720",
  "1334 x 750", "2960 x 1440", "1920 x 1080", "1620 x 1080", "1334 x 750", "2160 x 1080", "2340 x 1080", "2960 x 1400", "2960 x 1440", "2436 x 1125",
  "2280 x 1080", "2400 x 1080", "2960 x 1440", "2960 x 1440", "2280 x 1080", "1792 x 868", "1792 x 868", "2436 x 1125", "1792 x 828", "3040 x 1440",
  "2340 x 1080", "2280 x 1080", "3040 x 1440", "2688 x 1242", "1792 x 828", "3040 x 1440", "2436 x 1125", "2688 x 1242", "3040 x 1440", "1792 x 828",
   "3040 x 1440", "3040 x 1440", "3040 x 1440", "2436 x 1125", "2688 x 1242", "2436 x 1125", "3040 x 1440", "2688 x 1242", "2436 x 1125", "2688 x 1242",
  ],
  ['Screen Size', '5"', '5"', '5"', '5.2"', '6.1"', '5.7"', '5.5"', '6.2"', '6.2"', '6.4"',
  '5.5"', '6.3"', '6.4"', '6.2"', '5.5"', '6.2"', '5.7"', '5.7"', '6.4"', '5.5"',
  '6.3"', '6.5"', '5.2"', '6.6"', '6.4"', '5.7"', '6.5"', '6.3"', '6.3"', '6.3"',
  '6.2"', '5.2"', '6.4"', '6.1"', '5.0"', '5.1"', '6.4"', '5.8"', '4.7"', '6.4"',
  '5.5"', '6.2"', '5.5"', '5.5"', '5.5"', '5.7"', '6.3"', '5.6"', '4.7"', '6.5"',
  '6.3"', '6.4"', '6.4"', '6.7"', '5.6"', '6.0"', '6.4"', '6.4"', '6.4"', '3.3"',
  '4.7"', '6.2"', '5.5"', '4.5"', '4.7"', '5.5"', '6.1"', '5.8"', '6.3"', '5.8"',
  '5.8"', '6.7"', '6.2"', '6.3"', '5.7"', '6.1"', '6.1"', '5.8"', '6.1"', '6.4"',
  '6.5"', '5.7"', '6.1"', '6.5"', '6.1"', '6.3"', '5.8"', '6.5"', '6.3"', '6.1"',
  '6.4"', '6.8"', '6.4"', '5.8"', '6.5"', '5.8"', '6.8"', '6.5"', '5.8"', '6.5"',
  ],
  [ "Memory", "8GB", "16GB", "8GB", "32GB", "64GB", "16GB", "32GB", "32GB", "64GB", "64GB",
    "32GB", "32GB", "32GB", "64GB", "32GB", "64GB", "32GB", "64GB", "128GB", "32GB", 
    "64GB", "64GB", "32GB", "128GB", "32GB", "32GB", "128GB", "128GB", "64GB", "128GB", 
    "128GB", "32GB", "128GB", "128GB", "128GB", "32GB", "128GB", "32GB", "32GB", "64GB", 
    "128GB", "64GB", "128GB", "128GB", "32GB", "64GB", "128GB", "32GB", "128GB", "128GB", 
    "128GB", "128GB", "128GB", "128GB", "64GB", "128GB", "128GB", "256GB", "128GB", "32GB", 
    "64GB", "64GB", "128GB", "32GB", "128GB", "128GB", "128GB", "256GB", "64GB", "64GB", 
    "128GB", "128GB", "256GB", "128GB", "64GB", "64GB", "128GB", "256GB", "64GB", "128GB", 
    "256GB", "128GB", "512GB", "64GB", "128GB", "64GB", "512GB", "256GB", "128GB", "256GB", 
    "512GB", "256GB", "1000GB", "64GB", "64GB", "256GB", "512GB", "256GB", "512GB", "512GB",
    ],
    ["Camera", "5MP", "13MP", "8MP", "16MP", "13MP", "13MP", "13MP", "13MP", "13MP", "13MP", 
  "13MP", "13MP", "13MP", "13MP", "13MP", "13MP", "13MP", "12MP", "13MP", "16MP", 
  "16MP", "16MP", "12MP", "16MP", "16MP", "16MP", "48MP", "16MP", "16MP", "48MP", 
  "24MP", "12MP", "16MP", "48MP", "12MP", "16MP", "48MP", "12MP", "12MP", "25MP", 
  "48MP", "12MP", "20MP", "12MP", "23MP", "13MP", "48MP", "16MP", "12MP", "48MP", 
  "48MP", "48MP", "20MP", "32MP", "12MP", "12MP", "12MP", "20MP", "12MP", "12MP", 
  "12MP", "12MP", "12MP", "13MP", "12MP", "12MP", "40MP", "12MP", "12MP", "12MP", 
  "16MP", "48MP", "12MP", "12MP", "16MP", "12MP", "12MP", "12MP", "12MP", "16MP", 
  "40MP", "16MP", "16MP", "12MP", "12MP", "16MP", "12MP", "12MP", "16MP", "12MP", 
  "16MP", "12MP", "16MP", "12MP", "12MP", "12MP", "12MP", "12MP", "12MP", "12MP",
  ], 
  ["Price", "$44", "$134", "$179", "$179", "$199", "$199", "$199", "$229", "$239", "$249",
  "$249", "$249", "$279", "$279", "$279", "$299", "$299", "$299", "$299", "$299",
  "$299", "$299", "$299", "$349", "$379", "$379", "$399", "$399", "$399", "$399",
  "$399", "$399", "$399", "$399", "$399", "$399", "$449", "$449", "$499", "$499",
  "$499", "$499", "$499", "$499", "$499", "$499", "$549", "$549", "$599", "$599",
  "$599", "$599", "$599", "$649", "$649", "$699", "$699", "$699", "$699", "$699",
  "$779", "$799", "$799", "$799", "$859", "$879", "$899", "$899", "$899", "$999", 
  "$999", "$999", "$999", "$999", "$1049", "$1049", "$1129", "$1149", "$1199", "$1199", 
  "$1199", "$1199", "$1199", "$1249", "$1279", "$1279", "$1349", "$1399", "$1429","$1449",
  "$1599","$1699","$1699","$1749","$1899","$1999","$1999","$2149","$2349","$2499",
  ],
                 // ["Memory", "16GB", "32GB", "64GB"],
                  //["Camera", "8MP", "12MP", "16MP"],
                  //["Cost/Month", "$30", "$45", "$60"],
                  //["Colour", "Red", "Green", "Blue"],
                  //["Feature 1", "a", "b", "c", "d", "e"],
                  //["Feature 2", "a", "b", "c", "d", "e"],
                  //["Feature 3", "a", "b", "c", "d", "e"],
                  //["Feature 4", "a", "b", "c", "d", "e"],
                   ];
            
                   
                   const months = ['Jan', 'March', 'April', 'June'];
                   months.splice(1, 0, 'Feb');
                   // inserts at index 1
                   months.splice(4, 1, 'May')
                   console.log(months);

                   
var usingFeatures = [];


for (var i = 0; i < features.length; i++)
		usingFeatures.push(i);
    console.log(usingFeatures)
    

    for (var i = 0; i < usingFeatures.length - numAttributes; i++)
          usingFeatures.splice(Math.floor(Math.random() * usingFeatures.length), 1); // Pro
          console.log(usingFeatures)
      if (randomPresentation == 1) {
          for (var i = 0; i < usingFeatures.length; i++) {
                var randomFeature = Math.floor(Math.random() * usingFeatures.length); //
                console.log(randomFeature)
                var temp = usingFeatures[i];
                console.log(temp)
                usingFeatures[i] = usingFeatures[randomFeature];
                console.log(usingFeatures[i])
                usingFeatures[randomFeature] = temp;
    }
  }
    console.log(usingFeatures)
    console.log(features.length, numAttributes)
    console.log(randomFeature)

const minPhones = 2; //
const maxPhones = 8;   ////////////////////////   
//var numPhones = Math.floor(Math.random() * (maxPhones - minPhones + 1) + minPhones);

var numPhones = 3
console.log(numPhones)



function createNewProduct() {	//creates Phones
  //console.log("createNewProduct");
  // Initialise product
  console.log(product)
  var product = {features:[]};
  // Add the attributes
  for (var i = 0; i < numAttributes; i++) {
      // Pick a random attribute from usingAttributes to create an option
      var randomValue = Math.floor(Math.random() * (features[usingFeatures[i]].length));
      console.log(numAttributes)
      console.log(randomValue)
      product.features[usingFeatures[i]] = features[usingFeatures[i]][randomValue];
      console.log(product)
  }
  // Return the new product
  return product;
}

let condition = 1

var phone = {attributes:[]};
//if(condition == 1) {
  for (var i = 0; i < numAttributes; i++) {
       // Pick a random attribute from usingAttributes
       var randomValue = Math.floor(Math.random() * (features[usingFeatures[i]].length - 1)) + 1;
       console.log(randomValue)
       phone.attributes[usingFeatures[i]] = features[usingFeatures[i]][randomValue]
       console.log(features[usingFeatures[3]][6])
       console.log(phone.attributes[usingFeatures[i]])//
       console.log(features[usingFeatures[1]])
        console.log(features[usingFeatures[0]][4])
      } 
        for (var i = 0; i < numPhones; i++) {
          var randomValue = Math.floor(Math.random() * (features[usingFeatures[i]].length - 1)) + 1
          //phone.attributes[i] = 
        }
      
    

console.log(phone)
 // Random number b/w 0-100

for (var i = 0; i < numPhones; i++) {
  var randOpt = Math.floor(Math.random() * features[1].length) + 1
  phoneArray.push[i] = features[usingFeatures[i]][randOpt]
}
console.log(phoneArray)

var phoneArray = [["1280 x 720", '5"', "8GB", "5MP", "$44"], ["1280 x 720", '5"', "8GB", "8MP", "$179"],]
var new_phone = ["1280 x 720", '5"', "8GB", "8MP", "$179"]


console.log(phoneArray)

console.log(Object.getOwnPropertyNames(phone))


    // Create 'numPhones' new phones - this is determined by the numbers from 1 of the 4 cases above
    for (var i = 0; i < numPhones; i++) {
        new_phone = createNewProduct(true)
        if (phoneArray.includes(new_phone)) {
          i--
          console.log('duplicate option')
          continue
        }
        phoneArray.push(new_phone)
      }


      for(var i = 0; i < phoneArray.length; i++) {
        if(JSON.stringify(new_phone) == JSON.stringify(phoneArray[i])) { 
            console.log('true ' + new_phone + ' ' + phoneArray[i]) 
          } 
        else 
            console.log('false')
        }
      
// 0 = res, 1 = screen, 2 = mem, 3 = cam, 4 =
// draw from correlated phone array 


//var product = {features:[]};
//product.features[usingFeatures[1]] = 
//console.log(product)


    



console.log(phoneArray)


function updateTable() {									//makes the phone table
  console.log("updateTable()");
  // Get the child nodes of the table
  var tableBody = document.getElementById("tableBody");
  var tableRows = tableBody.getElementsByTagName("tr");

  // Delete the current table
  while(tableRows.length != 0)
      tableRows[0].remove();


  // Add the Brand column
  var row = createRow();
  addCell(row, "th", "Pizza Option");

  // Add the current features row
  for (var brand = 0; brand < numPhones; brand++) {
      addCell(row, "td", phoneBrands[brand]);
  }

  // Add the recommendation
  if (recommendation == true) {
  var row = createRow();
  for (var currentPhone = -1; currentPhone < numPhones; currentPhone++) {
      if (currentPhone == recommendedPhone && recommendation)
          addCell(row, "td", "Highly Popular");
      else
          addCell(row, "td", "");
  }
  }
  else {
  }

  // Fill the data in
  for (var currentFeature = 0; currentFeature < numFeatures; currentFeature++) {
      var row = createRow();

      for (var currentPhone = -1; currentPhone < numPhones; currentPhone++) {

          if (currentPhone == -1) // This is adding the headings in
              addCell(row, "th", features[usingFeatures[currentFeature]][0]);
          else // This is adding the contents in
              addCell(row, "td", phoneArray[currentPhone].features[usingFeatures[currentFeature]]);
      }
  }


  // Add the Select row
  var row = createRow();
  addCell(row, "th", "Select");

  // Add the current features columns
  for (var currentPhone = 0; currentPhone < numPhones; currentPhone++) {
      // Select button
      var selectPhone = document.createElement("td");
      var selectPhoneButton = document.createElement("input");
      selectPhone.appendChild(selectPhoneButton);
      selectPhoneButton.setAttribute("type", "button");
      selectPhoneButton.setAttribute("value", "This one");
      //selectPhoneButton.setAttribute("fontSize", "large");
      selectPhoneButton.setAttribute("style", "width:200px;height:52px;font-size:large;border-radius: 8px;");
      selectPhoneButton.setAttribute("onclick", "stopTimer(); phoneSelected(" + currentPhone + "); ");
      row.appendChild(selectPhone);
  }
  if (TimerPresent == true) {
document.getElementById("CountDown").style.display = "block";
}
else {
}
if (TrialInstructions == true){
    if (Stimulus == 1) {
    document.getElementById("GoFast").style.display = "block";
    document.getElementById("GoSlow").style.display = "none";
    document.getElementById("GoFast").setAttribute("style", "color:green;margin-top:1cm;");
    }
    else if (Stimulus == 2) {
  document.getElementById("GoSlow").style.display = "block";
  document.getElementById("GoFast").style.display = "none";
  document.getElementById("GoSlow").setAttribute("style", "color:red;margin-top:1cm;");
  }
  else {
  }
}
else {
}
document.getElementById("phonesTable").setAttribute("style", "align:center;");
}

for(var i = 0; i < phoneArray.length; i++) {
  if(JSON.stringify(new_phone) == JSON.stringify(phoneArray[i])) { 
      console.log('true') 
    } 
  else 
      console.log('false')
  }

