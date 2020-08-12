const
btn = document.getElementById('submitBtn'),
locationInput = document.getElementById('locationInput'),
showLocation = document.getElementById('locationDisplay'),
showDate = document.getElementById('dateDisplay'),
showTemp = document.getElementById('tempDisplay'),
date = new Date();

btn.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+locationInput.value+'&appid=88d5e812da3b355e827498eeef604e11&units=metric')
        .then(response => response.json())
        .then(data => {
            if(data.name){
                showLocation.innerText = `${data.name}, ${data.sys.country}`
                showTemp.innerText = parseInt(data.main.temp);
                showDate.innerText  = date;
                console.log(data);
            }else{
                alert('incorrect location!');
                locationInput.value = "";
            }
                        
        })
})