const fs = require('fs');
const http = require('http');
const { default: slugify } = require('slugify');
const url = require('url');
const replaceTemplate = require('./starter/modules/replaceTemplate')
// const slugify = require('slugify');
// const replaceTemplate = require('./modules/replaceTemplate');

/////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//     });
//   });
// });
// console.log('Will read file!');

/////////////////////////////////
// 一些数据，在请求之前，就存放在文件里，当文件加载的时候，在内存中加载，防止每次请求的时候，都读取文件，造成拥堵。

const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`,'utf-8');
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`,'utf-8');
//convert to javascript object or js array. 之前是json对象，就转为js对象，之前是json数组，就转换为js数组
const dataObj = JSON.parse(data);
const slugs = dataObj.map(el =>slugify(el.productName,{lower:true}));
console.log(slugs);
//创建服务器
const server = http.createServer((req, res)=>{
    // url.parse 会解析url，返回url对象，这样会将里面query和pathname属性直接赋值给变量query，和pathname
    const { query, pathname } = url.parse(req.url,true);
//overview page
    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200,{'Content_type':'text/html'});
//loop through with map, return something that would be save into a new array
//excute function for every element
       const cardHtml =  dataObj.map(el => replaceTemplate(tempCard,el)).join('');
        // console.log(cardHtml);
        const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g,cardHtml);
        res.end(output);

//product page
    }else if (pathname ==='/product'){ 
        res.writeHead(200,{'Content_type':'text/html'});
        //获取点击的是哪个product，然后将模板里面的变量转换为对应商品的相关数据
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct,product);
        res.end(output)

// api page
    }else if(pathname === '/api'){
            res.writeHead(200,{'Content_type':'application/json'});
            res.end(data);
// not found page
    }else {
        res.writeHead(404,{
            'Content_type':'text/html',
        });
        res.end('<h1>Page note found !</h1>')
    }

});



server.listen(8000,'127.0.0.1',() =>{
    console.log('Listening to requests on port 8000');
});
