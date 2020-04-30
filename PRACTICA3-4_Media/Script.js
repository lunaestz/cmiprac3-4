function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("cancion",true);
VideoSetVolume("video2",0);
}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function sonidovideo_OnClick(){
StackTrace="sonidovideo.On Click";
SoundPlay("click",false);
VideoSetVolume("video2",100);

}

function sonidovideo_OnRelease(){
StackTrace="sonidovideo.On Release";
SoundPlay("click",false);

VideoSetVolume("video2",0);
}

function pause_OnClick(){
StackTrace="pause.On Click";
SoundPlay("click",false);
VideoPause("video2");

}

function pause_OnRelease(){
StackTrace="pause.On Release";
SoundPlay("click",false);
VideoResume("video2");

}

function IRASONIDO_OnClick(){
StackTrace="IRASONIDO.On Click";
ToggleButtonRelease("video");
GotoSceneName("Escena2");
SoundPlay("click",false);

}

function musica_OnClick(){
StackTrace="musica.On Click";
SoundPause("cancion");
SoundPlay("click",false);


}

function musica_OnRelease(){
StackTrace="musica.On Release";
SoundPlay("click",false);
SoundResume("cancion");

}

function IRALVIDEO_OnClick(){
StackTrace="IRALVIDEO.On Click";
GotoSceneName("Escena1");
SoundPlay("click",false);
ToggleButtonRelease("sonido");

}

