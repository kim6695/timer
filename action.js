document.addEventListener("DOMContentLoaded", function(){
    //도형 정보
    var shape = document.getElementById("bt");
    //입력 정보
    var timeInput = document.getElementById("timeInput");
    //이전에 입력한 시간 정보 불러오기
    var previousTime = localStorage.getItem("recordedTime");
    if (previousTime !== null){
        timeInput.value == previousTime;
    }

    //이벤트 발생 시
    shape.addEventListener("click",function(){
        var userinput = parseInt(timeInput.value, 10);
        //유효성 검사
        if (!isNaN(userinput) && userinput > 0){                
            //색상변경
            shape.style.backgroundColor = "black";
            //입력한 시간 로컬 스토리지에 저장
            localStorage.setItem("recordedTime",userinput);
            //시간 설정
            setTimeout(function(){
                shape.style.backgroundColor = "#f54242";
            }, userinput * 1000)
        } else {
            alert("유효한 숫자를 입력하세요")
        }
    })
})