let target = document.querySelector('#dynamic');

function randomString(){
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to React"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}


// 텍스트 전부 출력되었을 시 타이핑 리셋
function resetTyping(){
  target.textContent = ""; //빈문자로
  dynamic(randomString());
}

// 한글자씩 텍스트 출력
function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    }, 80)} else{
      setTimeout(resetTyping, 3000);      
    }
}

dynamic(randomString());

function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);