document.addEventListener("DOMContentLoaded", function(){
    //도형 정보
    var shape = document.getElementById("bt");
    //입력 정보
    var timeInput = document.getElementById("timeInput");

    shape.addEventListener("click",function(){
        var userinput = parseInt(timeInput.value, 10);
        if (!isNaN(userinput) && userinput > 0){                
            shape.style.backgroundColor = "black";
            setTimeout(function(){
                shape.style.backgroundColor = "#f54242";
            }, userinput * 1000)
        } else {
            alert("유효한 숫자를 입력하세요")
        }
    })
})