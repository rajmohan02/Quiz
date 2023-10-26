document.getElementById("s").addEventListener("click",function(){
    let count = 0;
    let ans;
    const radio = document.querySelectorAll('input[type = "radio"]');
    for (const check of radio)
    {
        if(check.checked)
            count++;
    }
    if(count!=10)
        alert("Please answer all questions");
    else
        count = 0;
        ans = document.getElementById("1a");
        if(ans.checked)
            count++;
        ans = document.getElementById("2c");
        if(ans.checked)
            count++;
        ans = document.getElementById("3c");
        if(ans.checked)
            count++;
        ans = document.getElementById("4d");
        if(ans.checked)
            count++;
        ans = document.getElementById("5b");
        if(ans.checked)
            count++;
        ans = document.getElementById("6a");
        if(ans.checked)
            count++;
        ans = document.getElementById("7c");
        if(ans.checked)
            count++;
        ans = document.getElementById("8b");
        if(ans.checked)
            count++;
        ans = document.getElementById("9a");
        if(ans.checked)
            count++;
        ans = document.getElementById("10d");
        if(ans.checked)
            count++;

        document.getElementById("score").textContent = "Your score is "+count+"/10";
        const result = document.getElementById("result");

        if (count >= 9) {
            result.textContent = "Excellent, you are a genius";
        } else if (count >= 7) {
            result.textContent = "Good, be better next time";
        } else if (count >= 5) {
            result.textContent = "Average, need to work hard";
        } else {
            result.textContent = "Poor, better luck next time";
        }
});
