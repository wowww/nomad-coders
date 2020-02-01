# Array 

javascript `배열`은 단일 변수에 여러 값을 저장하는 데 사용된다.  



## 배열이란?
배열은 한 번에 둘 이상의 값을 보유할 수 있는 특수 변수입니다.  
항목 목록(예: 자동차 이름 목록)이 있는 경우 단일 변수에 자동차를 저장하면 다음과 같이 보일 수 있다.  

``` javascript
var car1 = 'Saad';
var car2 = 'Volvo';
var car3 = 'BMW';
```

그러나 자동차를 순환하고 특정 자동차를 찾으려면 어떻게 해야할까요?? 3대가 아니라 300대라면 어떨까?    
이에 대한 해결책은 배열이다.  
배열은 단일 이름으로 많은 갑슬 보유할 수 있으며 색인 번호를 참조하여 값에 액세스할 수 있습니다.  

## 배열 만들기
배열 리터럴을 사용하는 것이 javascript 배열을 만드는 가장 쉬운 방법이다.  
 
``` javascript
var cars = ['Saab', 'Volvo', 'BMW'];
```

## javascript 키워드 사용 새로운 기능
다음 예제 또한 Array를 만들고 여기에 값을 할당합니다.  

``` javascript
var cars = new Array('Saab', 'Volvo', 'BMW');
```

## 배열 요소에 액세스
인덱스 번호를 참조하여 배열 요소에 액세스 합니다.  
``` javascript
var name = cars[0];
```

위의 코드는 cars의 배열에서 첫 번째 요소 값에 액세스 합니다.  


## 배열은 객체이다!
배열은 특별한 유형의 객체이다. `typeof` javascript의 연산자는 배열에 대해 객체(Object)를 반환합니다.  

---

## 배열 만들기
``` javascript
var fruits = ['사과', '복숭아'];

console.log(fruit.length); // 2
```

## 인덱스로 배열의 항목에 접근하기
``` javascript
var frist = fruits[0]; // 사과
var last = fruits[fruits.length -1]; // 복숭아
```

## 배열의 항목들을 순환하며 처리하기
``` javascript
fruits.forEach(function(item, index, array){
  console.log(item, index);
}); // 사과 0, 복숭아 1
```

## 배열 끝에 항목 추가하기
``` javascript
var newLength = fruits.push('오렌지'); // ['사과', '복숭아', '오렌지'];
```

## 배열 끝에서부터 항목 제거하기
``` javascript
var last = fruits,pop(); // 끝에 있던 '오렌지'를 제거
// ['사과', '복숭아'];
```

## 배열 앞에서부터 항목 제거하기
``` javascript
var newLength = fruits.unshift('딸기'); //  앞에 추가
// ['딸기', '복숭아'];
```

## 배열 안 항목의 인덱스 찾기
``` javascript
fruits.push('망고'); // ['딸기', '복숭아', '망고'];

var pos = fruits.indexOf('복숭아'); // 1
```
## 인덱스 위치에 있는 항목 제거하기
``` javascript
var removeItem = fruits.splice(pos, 1); // 항목을 제거하는 방법
// ['딸기', '망고'];
```

## 인덱스 위치에서부터 여러개의 항목 제거하기
``` javascript
var vegetables = ['양배추', '순무', '무', '당근'];

var pos = 1, n =2;

var removeItems = vegetables.splice(pos, n);
// 배열에서 항목을 제거하는 방법
// pos 인덱스 부터 n개의 항목을 제거함

console.log(vegetables); // ['양배추', '당근'];
consloe.log(removeItems); // ['순무', '무']; 
```

## 배열 복사하기
``` javascript
var shallowCopy = fruits.slice(); // 사본을 만드는 방법
// ['딸기', '망고'];
``` 

## 설명
배열은 프로토타입으로 탐색과 변형 작업을 수행하는 메서드를 갖는 리스트와 비슷한 객체입니다.  
javascript에서 배열의 길이와 요소의 자료형은 고정되어 있지 않습니다. 배열의 길이가 언제든지 늘어나거나 줄어들 수 있기 때문에 javascript 배열들은 밀집도가 보장되지 않습니다. 보통 이 성질은 편리하지만 목적에 맞지 않는다면 형식과 배열(type array)을 사용하는 것을 고려해봐야 합니다.   

배열은 요소 인덱스로 문자열을 사용할 수 없으며 무조건 정수만 허용합니다. 속성 접근자를 사용해 정수 외 키에 접근할 경우 배열 리스트의 요소가 아니라 배열 객체의 속성 변수를 설정하거나 회수합니다. 배열 객체으 ㅣ속성과 배열 요소의 리스트의 요소는 서로 다른 별개의 항목으로 순회 및변형 작업은 객체 속서에 적용되지 않습니다.  


# 참고
1. https://www.w3schools.com/js/js_arrays.asp  
2. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
3. https://www.geeksforgeeks.org/arrays-in-javascript/

