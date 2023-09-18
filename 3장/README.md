## REPL이란?

<aside>
💡 입력한 코드를 “읽고(Read), 해석(Eval)하고, 반환(Print)하고, 종료할 때까지 반복(Loop)한다” 의 줄임말

</aside>

맥에서 REPL 사용할 수 있는 방법

- 맥 자체 터미널
- vscode의 터미널

_REPL 종료 방법 : `.exit`_

<br>

## Module이란?

<aside>
💡 특정한 기능을 하는 함수나 변수들의 집합 → 브라우저의 자바스크립트와 차이점이다!

</aside>

- 모듈은 자체로도 하나의 프로그램이면서, 다른 프로그램의 부품으로도 사용 가능하다.
- 하나 만들어두면, 여러 프로그램에서 재사용이 가능하다.
- 파일 하나가 모듈 하나가 되며, 파일별로 코드를 모듈화할 수 있다.
- 노드에서 사용하는 모듈 형식
  - **CommonJS** Module
    - 표준 자바스크립트 모듈은 아니지만 노드 생태계에서 가장 널리 쓰이는 모듈
  - **ECMAScript** Module
    - 공식적인 자바스크립트 모듈 형식
    - 확장자명이 js 대신 `mjs`(js 확장자에서 ES모듈을 사용하려면 package.json에 `type: “module”` 속성을 부여)
    - import는 `Promise`를 반환 → await나 then을 붙임
- 모듈을 불러올때는 require 함수를 사용한다.
- **순환 참조(Circular dependency)** : 모듈이 서로를 require하고 있는 구조 → 에러 발생하지 않고 빈 객체로 변경됨
- **다이나믹 임포트(Dynamic import)** : 조건부로 모듈을 불러오는 것

> 궁금한 점 : CommonJS 모듈과 ECMAScript 모듈 중에 어떤 방식을 많이 사용할까?

<br>

## Node 내장 객체

<aside>
💡 노드에서는 브라우저의 window와 같이 따로 설치하지 않고 바로 사용 가능한 내장 객체와 내장 모듈이 존재한다.

</aside>

노드 프로그래밍을 할 때 많이 쓰이는 내장 객체들에 대해서 알아보자

- global
  - globalThis : 브라우저 환경과 노드 환경을 모두 아우르는 객체(브라우저 : window, 노드 : global)
- console
  - 보통 디버깅 용도로 많이 사용
  - console. + time, log, error, table, dir, trace
  - 더욱 더 다양한 메소드들이 추가되고 있는 중이며, 실제로는 이것들보다 훨씬 다양한 메소드들이 존재한다.
- Timer

  - setTimeout(), setInterval(), setImmediate()
  - 타이머는 콜백 기반의 API이지만, 프로미스 방식을 사용할 수도 있다.

- Process
  - 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다.
  - 이 기록을 작성하고 있는 중의 나의 노드 프로세스 정보
  - process.env : 노드의 환경 변수
  - process.nextTick : 다른 콜백함수들보다 먼저 실행됨
  - process.exit : 실행 중인 노드 프로세스를 종료
