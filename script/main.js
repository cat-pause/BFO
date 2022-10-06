$(function(){

    const slideUl = $(".slide_ul");
    const prev = $("#prev");
    const next = $("#next");
    const slideList = document.querySelectorAll(".slide_ul li");
    const maxSlide = slideList.length;
    const qList = document.querySelectorAll(".quick_slide li"); 
    // const qList = $(".quick_slide li");

    var iWidth = window.innerWidth;

    window.addEventListener('resize', function(){
        // console.log("브라우저 화면너비 : " + window.innerWidth);
        // console.log("브라우저 전체너비 : " + window.outerWidth);
        iWidth = window.innerWidth;
    });
    
    //슬라이드 시간 조정 - time
    var time = 4000;
    var autoSlideId = setInterval(autoSlide, time);
    var count = 0;
    function autoSlide(){
        
        if(count >= maxSlide-1) {count = 0}
        else{count++}
        qList[0].classList.remove("on");
        qList[1].classList.remove("on");
        qList[2].classList.remove("on");
        qList[3].classList.remove("on");
        qList[4].classList.remove("on");
        qList[5].classList.remove("on");
        qList[6].classList.remove("on");
        qList[count].classList.add("on");
        console.log(count);
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
    }

    
    prev.on("click", function(){
        console.log("prev click");
        if(count <= 0){
            count = maxSlide-1;
        }else{count--}
        console.log(count);
        qList[0].classList.remove("on");
        qList[1].classList.remove("on");
        qList[2].classList.remove("on");
        qList[3].classList.remove("on");
        qList[4].classList.remove("on");
        qList[5].classList.remove("on");
        qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        
    })
    next.on("click", function(){
        console.log("next click");
        if(count >= maxSlide-1){
            count = 0
        }else{count++}
        console.log(count);
        qList[0].classList.remove("on");
        qList[1].classList.remove("on");
        qList[2].classList.remove("on");
        qList[3].classList.remove("on");
        qList[4].classList.remove("on");
        qList[5].classList.remove("on");
        qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
    })

    // qList 누르면 해당 슬라이드로 이동
    
    $(".quick_slide li:nth-child(1)").on("click", function(){
        clearInterval(autoSlideId);
        count=0;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(2)").on("click", function(){
        clearInterval(autoSlideId);
        count=1;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(3)").on("click", function(){
        clearInterval(autoSlideId);
        count=2;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(4)").on("click", function(){
        clearInterval(autoSlideId);
        count=3;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(5)").on("click", function(){
        clearInterval(autoSlideId);
        count=4;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(6)").on("click", function(){
        clearInterval(autoSlideId);
        count=5;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(7)").on("click", function(){
        clearInterval(autoSlideId);
        count=6;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    

    // 마우스 올리면 슬라이드 정지
    $(".slide_ul").on("mouseenter", function(){
        clearInterval(autoSlideId);
    })
    prev.on("mouseenter", function(){
        $("#prev img").innerHTML = '<img src=\"images/prev_on.png\" alt=\"\">';
        clearInterval(autoSlideId);
    })
    next.on("mouseenter", function(){
        $("#next img").innerHTML = '<img src=\"images/next_on.png\" alt=\"\">';
        clearInterval(autoSlideId);
    })
    $(".slide_ul").on("mouseleave", function(){
        autoSlideId = setInterval(autoSlide, time);
    })
    prev.on("mouseleave", function(){
        $("#previmg").innerHTML = '<img src=\"images/prev.png\" alt=\"\">';
        autoSlideId = setInterval(autoSlide, time);
    })
    next.on("mouseleave", function(){
        $("#nextimg").innerHTML = '<img src=\"images/next.png\" alt=\"\">';
        autoSlideId = setInterval(autoSlide, time);
    })
  
    //마우스 올리면 공지사항/공시공고 View Switch
    const titleNotice = document.querySelector(".switch_title li:nth-child(1)");
    const titleDA = document.querySelector(".switch_title li:nth-child(2)");
    const notice = document.querySelector(".notice_notice");
    const da = document.querySelector(".notice_da");

    $(".switch_title").on("mousemove", e =>{
        if(e.target == titleNotice){
            titleDA.classList.remove("on");
            titleNotice.classList.add("on");
            notice.classList.remove("d-none");
            da.classList.add("d-none");
        }else if(e.target == titleDA){
            titleNotice.classList.remove("on");
            titleDA.classList.add("on");
            da.classList.remove("d-none");
            notice.classList.add("d-none");
        }
    })
    










})








