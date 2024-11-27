//print district with its highest temperature
//output:{Thrissur:32, Kottayam:30, Palakkad:34, Ernakulam:33}


weatherData=[
    {district:"Thrissur", temp:32},
    {district:"Kottayam", temp:29},
    {district:"Palakkad", temp:34},
    {district:"Ernakulam", temp:33},
    {district:"Kottayam", temp:30},
    {district:"Palakkad", temp:32},
    {district:"Ernakulam", temp:31}
]



//logic

//create an empty object to store output
//get each district details from array
//then store district and temp seperately
//check that district is present in output
//if it is present, get the value of output and store it in a variable
//compare old temp and current temp
// curtemp>old temp, then update value in existing key

// if ihe district is not in output, insert district and temp

output={}


weatherData.forEach(districtDetail=>{
    district=districtDetail.district
    curTemp= districtDetail.temp

    if(output.hasOwnProperty(district)){
        oldTemp=output[district]

        if(curTemp>=oldTemp) {
            output[district]=curTemp
        }
            
    }
    else{
            output[district]=curTemp
        }
    

})
console.log(output);
