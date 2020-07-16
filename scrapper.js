const puppeteer= require('puppeteer');

    (async () =>
        {
            let url= 'https://www.accuweather.com/en/pk/islamabad/258278/daily-weather-forecast/258278';
            let browser= await puppeteer.launch();
            let page= await browser.newPage();

            await page.goto(url,{waitUntil: 'networkidle2'});
         let data=   await page.evaluate(()=>{
                let result=document.querySelector('div[class="search-results"]> a').innerHTML;
                return{
                    result
                }
            })
            console.log(data);
            debugger;

            await browser.close();
        })();