/** SKILLS의 스킬 레벨 카운트.
 * 하나의 setInterval 함수를 여러개 실행하니 오류.
 * 이보다 더 간략한 방법 찾자. **/
function startCount() {
    var htmlPoint = $("#html").attr("skill-point");
    var cssPoint = $("#css").attr("skill-point");
    var jqPoint = $("#jq").attr("skill-point");
    var aiPoint = $("#ai").attr("skill-point");
    var psPoint = $("#ps").attr("skill-point");
    var htmlNum = cssNum = jqNum = aiNum = psNum = 0;
    flag = 1;
    if (htmlNum < htmlPoint) {
        playCount1 = setInterval(function () {
            var htmlNum = parseInt($("#html").text());
            htmlNum++;
            $("#html").text(htmlNum);
            if (htmlNum >= htmlPoint) {
                clearInterval(playCount1);
            };
        }, 10);
    }
    if (cssNum < cssPoint) {
        playCount2 = setInterval(function () {
            var cssNum = parseInt($("#css").text());
            cssNum++;
            $("#css").text(cssNum);
            if (cssNum >= cssPoint) {
                clearInterval(playCount2);
            };
        }, 10);
    }
    if (jqNum < jqPoint) {
        playCount3 = setInterval(function () {
            var jqNum = parseInt($("#jq").text());
            jqNum++;
            $("#jq").text(jqNum);
            if (jqNum >= jqPoint) {
                clearInterval(playCount3);
            };
        }, 10);
    }
    if (aiNum < aiPoint) {
        playCount4 = setInterval(function () {
            var aiNum = parseInt($("#ai").text());
            aiNum++;
            $("#ai").text(aiNum);
            if (aiNum >= aiPoint) {
                clearInterval(playCount4);
            };
        }, 10);
    }
    if (psNum < psPoint) {
        playCount5 = setInterval(function () {
            var psNum = parseInt($("#ps").text());
            psNum++;
            $("#ps").text(psNum);
            if (psNum >= psPoint) {
                clearInterval(playCount5);
            };
        }, 10);
    }
}