const fs = require("fs");
const superagent = require('superagent');
//创建匿名函数，赋值给常量readFile，只有一个argument-》file, 返回一个promise，用来引用then方法，flat structure
const readFilePro = file => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err) reject('I could not find that file 😢');
        resolve(data);
      });
    });
};

const writeFilePro = (file,data) =>{
    return new Promise((resolve,reject)=>{
        //err is a argument in callback
        fs.writeFile(file,data,err=>{
            if(err) reject('Could not write the file')
            //读取成功后，返回数据
            resolve('success');
        });
    });
};



// async/await allow us to insetad of having then handler,and make code looks like more synchronous
const getDogPic = async () => {
    try{
        //consume promise means : await would return a promise, await 等待获取将来返回值.
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed:${data}`);

        const res1Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
          );
          const res2Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
          );
          const res3Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
          );
          const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
          const imgs = all.map(el => el.body.message);
          console.log(imgs);
      
          await writeFilePro('dog-img.txt', imgs.join('\n'));
          console.log('Random dog image saved to file!');
    }catch (err) {
        console.log(err);
        //有错误时抛出一个错误，这样就避免打印下一句return值
        throw err;
    }
    return '2: READY 🐶';

};

(async () => {
    try {
      console.log('1: Will get dog pics!');
      const x = await getDogPic();
      console.log(x);
      console.log('3: Done getting dog pics!');
    } catch (err) {
      console.log('ERROR 💥');
    }
  })();


// readFilePro(`${__dirname}/dog.txt`)
// .then(data=>{
//     console.log(`Breed:${data}`);

//     return superagent
//     //get method actually returns a promise
//     //basically implement the concept of a future value 还没有拿到值，但是会返回一个promise，承诺会取回一些值回来
//     //consume promise means : wait promise to come back with data,todo that we use then method 
//     .get(`https://dog.ceo/api/breed/${data}/images/random`);
// })
// //当promise is done，并返回数据的时候，then中的callback就会执行，data作为argument的形式返回，例如res=result
// //then method only handles successful promise not rejected promise
// .then(res => {
//     console.log(res.body.message);
//     return writeFilePro(`dog.img.txt`,res.body.message)
// })
// .then(() =>{
//     console.log(`Rondom dog image saved to file`)
// })
// //which only handles rejected promise,there was an error
// .catch(err => {
//     console.log(err);
// });

