// busy load

$(document).ready(function(){

     // $.busyLoadSetup({ spinner: "", text: "LOADING ...",fontSize: "1.8rem",textMargin: "3rem",textPosition: "bottom", animation: "fade",animationDuration: "slow",minSize: "60px", background: "rgba(251,83,83,.9)" });
     $.busyLoadSetup({ spinner: "", animation: "fade",animationDuration: "slow",minSize: "60px", background: "rgba(251,83,83,.9)" });

     $.busyLoadFull("show");

    $(window).on('load',function(){
        $.busyLoadFull("hide");
    })
})