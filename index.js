//Display current date
var a= moment().format ("MMM Do YYYY")+(" Is The Day Today");
$("#display-date").text(a)
var row = ""

// Wait until Jquery is ready
$( document ).ready(function() {

//loop to dispaly 9am-18pm
for (var i= 8 ; i<=17; i++)

// Creation of the row elements
{row = $(`<div class="row">`)
col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`)
col2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
col3 = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
row.append(col1)
row.append(col2)
row.append(col3)
$("#display-planner").append(row)
getlocalStorage(i)}
$("button.btn.btn-success").click(function(e){
var id = $(this).data("id")
var inputText = $(this).parent().siblings().find("input").val()
localStorage.setItem(id,inputText)})


//  Convert Am to Pm
function displayAmorPm(hour){
var b=""
if(hour<=12){ b= "AM"}
else{b="PM"}

hour = hour % 12
hour = hour ? hour : 12
return hour + " " + b }});


    function getlocalStorage(hour){
    let inputval = localStorage.getItem(hour)
    if(true)
    {var text= $(`input#inputText${hour}`).val(inputval)
    console.log(text)}}

    //Update color
    function updateColor(){
    var hour = new Date().getHours();
    for (var i= 9 ; i<=18; i++){
    console.log(hour,i)
    if(hour==i ) {
    $(`#inputText${i}`).css("background","red")
    }else  if(hour<i ){$(`#inputText${i}`).css("background","lightblue")}
    }
    }

     // setting how quick the color updates
    setInterval(function(){ updateColor()},100)