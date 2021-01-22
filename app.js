function clock(){
    var meridian = 'AM'
    var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();


    //displaysection

    document.querySelectorAll('.clock')[0].innerHTML=
    hrs(hours) + ':' + minSec(minutes) + ':' + minSec(seconds) + ' ' + meridian;
    
    function hrs(hr){
        if(hr>12){
            hr=hr-12
            meridian='PM'
            return '0' + hr
        }
        else{
            meridian='AM'
            return hr
        }
    }

    function minSec(ms){
        if(ms<10){
            ms='0' + ms
        }  
        return ms     
    }

}
setInterval(clock,1000);