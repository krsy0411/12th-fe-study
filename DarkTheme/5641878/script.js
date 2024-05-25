const checkbox = document.getElementById("checkbox");

// change : 값에 변화가 생기면 실행(텍스트 인풋은 글자 하나당 한 번씩 변화)
checkbox.addEventListener("change", function() {
    // body태그에 class 이름에 "dark-mode"를 토글(넣었다 뺐다 가능)
    document.body.classList.toggle("dark-mode");
})