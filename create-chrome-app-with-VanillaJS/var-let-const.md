#var #let #const

# 호이스팅(hoisting)  

자바스크립트는 실행 시점에 변수와 함수에 대해 호이스팅을 수행합니다.  
호이스팅의 사전적 의미는 **끌어올린다**라는 뜻으로 변수와 함수를 소스의 맨 위의 위치로 이동하는 것을 말합니다.  

``` javascript
console.log(name); // undefined
var name = 'Lia';
```

위의 코드를 보면 첫 줄에서 name을 출력하는데 에러가 나지않고 `undefined`가 나옵니다.   
그 이유는 실행 시점에 호이스팅에 의해 var 변수가 아래와 같이 최상단에 선언되기때문입니다.  

``` javascript
var name; // 실행 시점에 name 변수가 hoisting되어 상단으로 이동
console.log(name);
name = 'Lia';
```


## let과 const는 호이스팅되지않을까? No!!!

위에서 `var` 키워드로 선언된 변수는 호이스팅 되었습니다. 그러면 ES6에서 추가된 `let`과 `const`는 어떻게 될까요?  

``` javascript
console.log(name); // ReferenceError: name is not defined
let name = 'Lia';
```

`let` 으로 변수를 선언하면 에러가 발생합니다.   
여기서 **주의할 점**은 let 키워드로 선언된 변수는 호이스팅되지 않는구나 라고 생각할 수 있습니다.  

var 뿐만 아니라 `let`과 `const` 키워드로 **선언된 변수들도 호이스팅**됩니다. 아래의 예제를 보겠습니다.  

``` javascript
var name = 'Lia'; // 전역변수
{
  console.log(name); // name is not defined
  let name = 'Lia'; // 지역변수
}
```

최 상단에 name 변수를 선언했는데 왜 console.log에서는 에러가 출력될까요?  
그 이유는 {}  블록 내부에 let 으로 선언된 name 변수가 호이스팅되었기 때문입니다. `let name` 변수가 호이스팅되지 않았다면 console.log의 결과는 전역 벼수가 가리키는 `Lia`가 출력되어야 합니다.   

여기서 한 가지 의문이 들 수 있습니다. 그래! let으로 선언된 변수도 호이스팅 된다고? 그러면 왜 출력결과가 `undifined`가 아니라 `name is not defined` 에러지?

이를 이해하기 위해서 자바스크립트에서 변수가 어떻게 할당되고 var와 let이 어떤 차이가 있는지 알아야합니다.  


## 변수의 3단계 생성과정

변수는 아래와 같이 3단계의 과정을 통해 생성됩니다.

**1. 선언단계**: 변수를 실행 컨텍스트의 변수 객체에 등록한다.  
**2. 초기화 단계**: 실행 컨텍스트에 등록된 변수 객체에 대한 메모리를 할당한다. 이 단계에서 변수는 `undifined`로 초기화된다.  
**3. 할당 단계**: `undefined`로 초기화된 변수에 값을 할당한다.  
`var` 키워드로 변수를 만들 경우, 선언 단계와 초기화 단계가 동시에 일어납니다. 아래의 예제를 보겠습니다.

``` javascript
console.log(name); // undifined
var name = 'Lia';
```
위 코드에서 var 로 선언된 변수는 호이스팅되어 선언과 초기화가 동시에 일어나기 때문에 undefined로 출력됩니다.

### 하지만 let 키워드는 선언 단계와 초기화 단계가 분리되어 진행됩니다.

``` javascript
console.log(name); // ReferenceError: name is not defined
let name = 'Lia';
```

`let` 키워드로 선언된 변수는 호이스팅되어 선언 단계가 이뤄지지만 초기화 단계는 실제 `let`이 사용된 코드에 도착했을 때 이뤄집니다. 초기화 단계 이전에 변수에 접근하려면 `ReferenceError`가 발생합니다.  

## const 상수

`const` 상수와 `let` 변수의 차이점은 `const`로 선언되면 값이 상수화되어 변경이 불가능합니다. 또한 `const`로 선언될 경우 선언과 동시에 초기화를 해야합니다.

``` javascript
var name;
name = 'seo'

const age = 29; // 선언과 동시에 초기화 필요
const age;      // const 변수를 선언만 할 경우 에러가 발생
```
## 변수 Scope
 
let과 const로  선언된 변수는 블록 레벨 스코프를 가집니다. 즉, {} 내부에 변수를 선언하면 해당 블록 내부에만 생명주기를 유지합니다. 반대로 var는 함수 레벨 스코프를 가지므로 블록 내부에 선언되어도 외부에서 접근할 수 있습니다.

``` javascript
{
  let name = 'Lia';
}
console.log(name); // ReferenceError: name is not defined

{
  var age = 29;  
}
console.log(age); // 29, var는 함수 레벨 스코프

```



# 참고

[1. var, let, const 특징 및 호이스팅](https://medium.com/sjk5766/var-let-const-%ED%8A%B9%EC%A7%95-%EB%B0%8F-scope-335a078cec04)  
[2. var, let, const 차이점](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90)
[3. javascript var, let, const 차이점](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)


