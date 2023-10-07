function preload(){
    nose = loadImage("Funny-fake-mustaches-mask-and-retro-curly-moustaches-isolated-on-transparent-background-PNG.png")
    }
    
    noseX = 0;
    noseY = 0;
    
    
    function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 ,300);
    video.hide();
    
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose',gotposes)
    }
    
    function draw(){
    image(video, 0 ,0, 300 , 300);
    image(nose,noseX - 25,noseY , 50, 40)
    }
    
    function take_snapshot(){
    save("myFilterImage.png");
    }
    
    function modelLoaded(){
        console.log("poseNet is initialized");
    }
    
    function gotposes(results){
        if(results.length > 0){
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x)
    console.log("nose y = " + results[0].pose.nose.y)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
        }
    }