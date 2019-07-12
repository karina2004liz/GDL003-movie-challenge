const thor = ['tt0800369','tt1981115','tt3501632','tt6016776','tt1667903','tt6599818','tt1792794','tt1260572','tt1241721','tt1922373']
const xmen =["tt1877832","tt1270798","tt0120903","tt0290334","tt0376994","tt0458525","tt3385516","tt0103584","tt0247827","tt0772145"]
const blackwindow = ["tt5305270"]
const spiderman = ["tt2705436","tt2084949","tt0100669","tt1785572","tt1132238","tt1433184","tt2233044","tt2586634","tt2158533","tt3696826"]
const ironman = ["tt0371746","tt1300854","tt1228705","tt0120744","tt1258972","tt0096251","tt3296908","tt0903135","tt2654124","tt3625152"]
const hulk = ["tt0800080","tt0286716","tt1483025","tt1325753","tt0077031", "tt0095368","tt0115215","tt2455514","tt0098512","tt0099387"]
const doctorstrange = ["tt1211837"]
const wolverine =["tt0458525","tt1430132","tt0772145","tt3152670","tt1847521","tt3077530","tt0115138","tt0249251","tt3668942"]
const blackpanther = ["tt1825683","tt1441105","tt0075764","tt8205250","tt0210482","tt4529214","tt4063610","tt0196528","tt0230045","tt0056457"]
const daredevil = ["tt3322312"]
const avengers = ["tt0848228","tt4154756","tt2395427","tt4154796","tt0118661","tt1626038","tt0491703","tt0803093","tt2455546","tt0054518"]
const antman = ["tt0478970","tt5095030","tt7249258","tt5284380","tt5860546","tt6731258","tt6736100"]
const captainAmerica = ["tt0458339","tt1843866","tt3498820","tt0103923","tt3911200","tt0078937","tt0078938","tt0206474","tt0036697","tt1740721"]
const guardiansOfTheGalaxy = ["tt2015381","tt3896198","tt4176370","tt7131308","tt7387224","tt6636812","tt7134278","tt7312152","tt6791350","tt5286008"]
const captainMarvel = ["tt4154664","tt4154664","tt0033317","tt3959390","tt6406718"]
const deadpool = ["tt1431045","tt5463162","tt6612630","tt2269724","tt7636826","tt2622240","tt2153366", "tt6693444","tt5852644","tt4529214"]
const venom = ["tt1270797","tt0428251","tt0084854","tt1241018","tt3083812","tt0207801","tt0425996","tt1931601","tt9093748","tt0466137"]
const fantasticFour = ["tt0120667","tt1502712","tt0109770","tt0187635","tt0830298","tt0061250","tt0476458","tt3113456","tt0241100","tt1027810"]
const thepunisher = ["tt5675620","tt0330793","tt0098141","tt2280378","tt0424369","tt3007602","tt0462495","tt0420995","tt1364489","tt2074458"]
const logan = ["tt3315342","tt5439796","tt3387648","tt0078430","tt1744793","tt6193484","tt1483010","tt7535470","tt6970688","tt2356598"]
const ghostRider = ["tt0259324","tt1071875","tt1038023","tt4727580","tt0862703","tt0033846","tt0026407","tt0035936","tt6306178","tt0966569"]
const blade = ["tt0083658","tt1856101","tt0120611","tt0187738","tt0359013","tt0117666","tt3672840","tt5084170","tt0475723","tt7428594"]
const elektra = ["tt0357277","tt1340773","tt1513070","tt0277689","tt1920913","tt0255136","tt0444728","tt0480934","tt0131370","tt1296365"]



movieCard=(data)=>{
        return   `

          <div class="flip-card">
           <div class="flip-card-inner">
             <div class="flip-card-front">
             <div class= container>
               <img id= imgPoster src="${data.Poster}" style= "width: 205px; height: 270px">
               </div>
             </div>
             <div class="flip-card-back" style= "word-wrap: break-word">
               <p>${data.Title}</p>
               <p>Country : ${data.Country}</p>
               <p>Year : ${data.Year}  </p>
               <p style= "width: 205px">Director : ${data.Director}</p>
               <p>${data.Plot}</p>
             </div>
           </div>
         </div>





`
};



thor.forEach( function(item) {
fetch('https://www.omdbapi.com/?i='+ item + '&apikey=98d30079')
  .then(res => res.json())
   .then(data => {
 document.getElementById('container').innerHTML += movieCard(data);
});
});


xmen.forEach( function(item) {
fetch('https://www.omdbapi.com/?i='+ item + '&apikey=98d30079')
  .then(res => res.json())
   .then(data => {
 document.getElementById('container2').innerHTML += movieCard(data);
});
});

ironman.forEach( function(item) {
fetch('https://www.omdbapi.com/?i='+ item + '&apikey=98d30079')
  .then(res => res.json())
   .then(data => {
 document.getElementById('container3').innerHTML += movieCard(data);
});
});

hulk.forEach( function(item) {
fetch('https://www.omdbapi.com/?i='+ item + '&apikey=98d30079')
  .then(res => res.json())
   .then(data => {
 document.getElementById('container4').innerHTML += movieCard(data);
});
});





/*

<div>
  <h6>${data.Title}</h6>
  <p>Country : ${data.Country}</p>
  <p>Year : ${data.Year}  </p>
  <p>Director : ${data.Director}</p>
  <p>${data.Plot}</p>
</div>





res.forEach( element => {

container.innerHTML +=

`<div>
  <img src="${element.Poster}" alt="">
  <h1>${element.Title}</h1>

</div>`


});



/*
Here is your key: 98d30079

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=98d30079

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=758cf263-e293-466b-8a15-a3c81ca49e70
If you did not make this request, please disregard this email.
  */


/*
spiderman [tt2705436,tt2084949,tt0100669,tt1785572,tt1132238,tt1433184,tt2233044,tt2586634,tt2158533,tt3696826]
thor [tt0800369,tt1981115,tt3501632,tt6016776,tt1667903,tt6599818,tt1792794,tt1260572,tt1241721,tt1922373]
iron man [tt0371746,tt1300854,tt1228705,tt0120744,tt1258972,tt0096251,tt3296908,tt0903135,tt2654124,tt3625152]
blackwindow [tt5305270]
hulk [tt0800080,tt0286716,tt1483025,tt1325753,tt0077031, tt0095368,tt0115215,tt2455514,tt0098512,tt0099387]
doctorstrange [tt1211837,]
wolverine[tt0458525,tt1430132,tt0772145,tt3152670,tt1847521,tt3077530,tt0115138,tt0249251,tt3668942]
blackpanther[tt1825683,tt1441105,tt0075764,tt8205250,tt0210482,tt4529214,tt4063610,tt0196528,tt0230045,tt0056457]
daredevil[tt3322312]
avengers [tt0848228,tt4154756,tt2395427,tt4154796,tt0118661,tt1626038,tt0491703,tt0803093,tt2455546,tt0054518]
ant-man[tt0478970,tt5095030,tt7249258,tt5284380,tt5860546,tt6731258,tt6736100]
captainAmerica [tt0458339,tt1843866,tt3498820,tt0103923,tt3911200,tt0078937,tt0078938,tt0206474,tt0036697,tt1740721]
guardiansOfTheGalaxy [tt2015381,tt3896198,tt4176370,tt7131308,tt7387224,tt6636812,tt7134278,tt7312152,tt6791350,tt5286008]
captainMarvel [tt4154664,tt4154664,tt0033317,tt3959390,tt6406718]
deadpool [tt1431045, tt5463162,tt6612630,tt2269724,tt7636826,tt2622240,tt2153366, tt6693444,tt5852644,tt4529214]
xmen [tt1877832,tt1270798,tt0120903,tt0290334,tt0376994,tt0458525,tt3385516,tt0103584,tt0247827,tt0772145]
venom[tt1270797,tt0428251,tt0084854,tt1241018,tt3083812,tt0207801,tt0425996,tt1931601,tt9093748,tt0466137]
fantasticFour [tt0120667,tt1502712,tt0109770,tt0187635,tt0830298,tt0061250,tt0476458,tt3113456,tt0241100,tt1027810]
thepunisher [tt5675620,tt0330793,tt0098141,tt2280378,tt0424369,tt3007602,tt0462495,tt0420995,tt1364489,tt2074458]
logan [tt3315342,tt5439796,tt3387648,tt0078430,tt1744793,tt6193484,tt1483010,tt7535470,tt6970688,tt2356598]
ghostRider [tt0259324,tt1071875,tt1038023,tt4727580,tt0862703,tt0033846,tt0026407,tt0035936,tt6306178,tt0966569]
blade [tt0083658,tt1856101,tt0120611,tt0187738,tt0359013,tt0117666,tt3672840,tt5084170,tt0475723,tt7428594]
elektra [tt0357277,tt1340773,tt1513070,tt0277689,tt1920913,tt0255136,tt0444728,tt0480934,tt0131370,tt1296365]



*/
