
alert(" It's just the beginning ")

function bolded() {
    if (document.getElementById("ta5").style.fontWeight== 'bold'){
        document.getElementById("ta5").style.fontWeight= 'normal';
    } else {
        document.getElementById("ta5").style.fontWeight='bold'
    }
}

function italic() {
    var i=document.getElementById("ta5");
    if (i.style.fontStyle=='normal'){    
        i.style.fontStyle='italic';
    } else {
        i.style.fontStyle='normal'
    }  
}

function underlined() {
    var und=document.getElementById("ta5");
    if (und.style.textDecoration=="none"){
        document.getElementById("ta5").style.textDecoration='underline';
    } else {
        und.style.textDecoration="none"
    }
}

function sizing(){
    var x=document.getElementById("sz");
    var y=document.getElementById("ta5");
    y.style.fontSize=x.value;
}

function styling(){
    var a=document.getElementById("fstyle");
    var b=document.getElementById("ta5");
    b.style.fontFamily=a.value;
}

$("a button").mouseout(function(){
    $(this).css("opacity", "0");
  });
  $("a button").mouseover(function(){
    $(this).css("opacity", "1");
  })

  