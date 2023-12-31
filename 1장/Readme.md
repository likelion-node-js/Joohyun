🌱 첫번째 기록

일단 첫 장에서는 노드와 관련된 실습을 하기보다는 중요한 개념에 대해서 학습한다.

만약 내가 `런타임`, `이벤트 기반`, `논블로킹 I/O`, `싱글 스레드 모델`에 대해서 상세하게 알고 있다면 넘어가도 좋음

하지만 난 남한테 설명해줄 정도로 잘 알지 못하니 넘어가지 않음.

---

### 1.1 Major Concept

JavaScript를 공부하며 수도 없이 보고 들었던 말

<aside>
💡 Node.js는 크롬 V8 JavaScript 엔진으로 빌드된 자바스크립트 런타임입니다.

</aside>

<br>
사실 Node.js라고 하면 단순하게 “서버 아님?” 이라고 생각했는데,

공식 문서에서 노드를 정의하는 문장에는 서버라는 단어가 어디에도 존재하지 않음.

이유 : 노드는 서버 외에서도 실행이 가능하기 때문 → 다재다능하다!

<br>

**서버(Server)**

네트워크를 통해 클라이언트에 정보나 서비스를 제공(Response)하는 컴퓨터 혹은 프로그램

`클라이언트` : 요청(Request)을 보내는 주체(어떤 형태로든 존재 가능하다.)

자바스크립트에서는 노드를 사용해서 서버로 기능한다.

<br>

**런타임(Runtime)**

특정 언어로 만든 프로그램을 실행할 수 있는 환경

쉽게 말해서 Node.js는 자바스크립트의 실행기라고 보아도 무방하다.

<br>

**이벤트 기반(Event-driven)**

이벤트(Ex. 클릭, 네트워크 요청)가 발생할 때 미리 지정해둔 작업을 수행하는 방식

쉽게 말하면, 이벤트가 발생하면 기존에 이벤트 리스너에 등록해둔 콜백 함수를 호출한다.

이벤트 기반 모델에서는 이벤트 루프(Event-loop)라는 개념이 등장

- `이벤트 루프(Event-loop)` : 호출할 콜백 함수들을 관리하고 실행 순서를 결정하는 역할
- `백그라운드(Background)` : setTimeout같은 타이머나 이벤트 리스너들이 대기하는 곳
- `태스크 큐(Task queue)` : 타이머나 이벤트 리스너의 콜백 함수를 보내주는 곳

<br>

**논블로킹 I/O(Non-blocking I/O)**

`I/O` : Input(입력), Output(출력)을 의미(Ex. 파일 읽기 및 쓰기, 폴더 생성, 네트워크 요청 … )

`논블로킹` : 이전 작업이 완료될때까지 대기하지 않고 다음 작업을 수행 (↔ 블로킹)

논블로킹 ≠ 동시 : 동시성은 동시 처리가 가능한 작업들을 논블로킹 처리했을 때 얻을 수 있음

동시에 처리될 수 있는 작업들을 묶어서 백그라운드로 넘기면 시간 절약 가능

<br>

**싱글 스레드(Single Thread)**

스레드가 하나뿐이며, 자바스크립트 코드가 동시에 실행될 수 없는 이유이기도 하다.

- `프로세스` : 운영체제에서 할당하는 작업 단위(메모리 등의 자원을 공유 X)
- `스레드` : 프로세스 내부에서 실행되는 흐름 단위(메모리 등의 자원을 공유 O)

<br>

노드는 싱글 스레드라고 하지만, 그 이유는 여러 개의 스레드 중에서 우리가 직접 제어 가능한 스레드가 하나뿐이기 때문

싱글 스레드에서 설명했지만,

노드는 **싱글 스레드**이다. 라고 하는것에는 단순히 우리가 직접 제어가능한 스레드가 하나밖에 없어서이기 때문이다.

실제로는 노드를 실행하고 생성된 프로세스에는 여러 개의 스레드가 생성된다.

하지만 이제 노드에서도 멀티 스레드 방식을 사용하는 것이 가능해졌다(Node 12ver.)

<br>

멀티 스레드 방식을 사용하는 것이 더 효율적이고 좋지 않나요?

근데 사실 그렇지도 않음. 물론 장점이 있겠지만 분명한 단점이 존재한다.

또한 멀티 스레드 방식으로 프로그래밍하는 것은 상당히 고난도의 작업 → 멀티 프로세싱 방식을 사용

<br>

**결론**

노드는

- 자바스크립트 상에서는 싱글 스레드(Single-thread) + 논블로킹(Nonblocking) 방식을 채택하고,
- I/O 작업을 수행할 때는 멀티 프로세싱(Multi-processing) 방식을 채택
