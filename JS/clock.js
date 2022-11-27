let hour = 0;
function update()
{
    
    let seconds = Date.getUTCSeconds();
    let minutes = Date.getUTCMinutes()-24;
    let countdownE1 = document.getElementById("watch1");
    countdownE1.innerHTML = `${hour}:${minutes}:${seconds}`;
    // if (minutes == 60)
    // (
    //     hour++;
    // )
   
}
setinterval(update,1000);
alert ("heloo");