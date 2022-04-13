const form = document.getElementById('count-form');

const show = document.getElementById('show');


form.addEventListener('submit', function (e) {


    e.preventDefault()


    let time = this.querySelector('input[type="time"]').value;
    let date = this.querySelector('input[type="date"]').value;
    
   setInterval(() => {
    
    const start = new Date();


    let end = new Date(time +' '+ date);


    let finalt = Math.floor( end.getTime() - start.getTime() );

   let totalsec = Math.floor( finalt / 1000);
   
   let totalmin = Math.floor( totalsec / 60);

   let totalhour = Math.floor( totalmin / 60);

   let totalday = Math.floor( totalhour / 24 );


   let hour = totalhour - (totalday * 24);
   let min = totalmin - (totalday * 24 * 60) - (hour * 60);
   let sec = totalsec - (totalday * 24 * 60 * 60)  - (hour * 60 * 60) - (min * 60)
  
   console.log(totalday, hour, min, sec)

   

   show.innerHTML = `
     
   ${totalday} Day ${hour > 9 ? hour : '0' + hour} : ${min < 9 ? '0' + min : min} : ${sec < 9 ? '0' + sec : sec}
   
   `;




   }, 1000);
   

    

})


