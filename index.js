
    const cheerio = require('cheerio');
    const axios= require('axios');
    var dest = 'islamabad'
    var Table = require('easy-table');

    axios.get('https://www.accuweather.com/en/pk/islamabad/258278/daily-weather-forecast/258278').then((res)=>{

        
        const $ = cheerio.load(res.data);
       
            const day=$('.dow').text();
        console.log(day);
          const date=$('.sub').text();
          console.log(date);          
            const HI=$('.high').text();
            console.log(HI);
            const low=$('.low').text();
            console.log(low);
            const phrase=$('.phrase').text();
            console.log(phrase);
           // console.log(date+" "+HI);
           // data[0]={date,day,HI,low,phrase};
            //daata[index]={day,date,HI,low,phrase};
            //console.log(daata);
        });
        
    
  //  var data[index]=daata[index];
    
   
   // var t = new Table
     
  //  data.forEach(function() {
   //   t.cell('Day',day)
     // t.cell('date', date)
      //t.cell('HI temp', HI)
      //t.cell('Low temp',low)
      //t.cell('Weather', phrase)
      //t.newRow()
    //})
     
   // console.log(t.toString())

       
   
     