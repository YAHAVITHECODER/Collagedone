var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event)
var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
if(Content =="take my selfie")
{
    console.log("taking selfie --- ")
    Speak();
}
}

function Speak()
{
    var synth = window.speechSynthesis;

    speak_data = "Talking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie1"
        snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie2"
        snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie3"
        snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie4"
        snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis);
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    jpeg_quality:90
});

camera = document.getElementById("camera");

function snapshot()
{
    Webcam.snap(function(data_uri)
    {   if(img_id == 'selfie1') {
        document.getElementById("result").innerHTML = '<img id="selfie1" src="'+data_uri+'">'
    }

    if(img_id == 'selfie2') {
        document.getElementById("result1").innerHTML = '<img id="selfie2" src="'+data_uri+'">'
    }

    if(img_id == 'selfie3') {
        document.getElementById("result2").innerHTML = '<img id="selfie3" src="'+data_uri+'">'
    }

    if(img_id == 'selfie4') {
        document.getElementById("result3").innerHTML = '<img id="selfie4" src="'+data_uri+'">'
    }

    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}

