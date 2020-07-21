## #13. Auth기능 만들기
- token을 활용한 인증 기능 구현
- cookie에 있는 token을 가져와서 User정보를 얻는다.
- route함수에 middleware를 구현하여, 인증을 먼저 체크한다.

- - -
## #14. Logout 기능 만들기
- cookie에서 token을 얻고DB에서 해당 User를 찾는다.
- 있다면, DB에서 token을 지운다.

- - -
## #15. Reat란?
1. FaceBook에서 만든 JS Library
2. 구현하고자하는 것을 컴포넌트화 하고 모듈화한다.
3. Virtual Dom 을 사용한다. (특정 element가 수정될 때, 모든 DOM을 다시 그리는 것이 아니라 바뀐 element만 다시 그린다.)
- - -


## #16. Create-React-App
- Babel : ES6 문법을 ES5로 변환하여 브라우저 호환성 지원하도록 도와줌
- Webpack : 다양한 JS 라이브러리를 하나의 JS파일로 번들화 시켜준다.

```
npx create-react-app .
```

> 기존에 npm -g 옵션으로 설치된 create-react-app이 있다면, 삭제 후 npx로 재설치해준다.

- - -
## #17. npm mpx
- npm (Node Package Manager)
    - registry?
    - 빌드할때 사용
    - 디팬던시 관리
    - 기본적으로 local에 다운로드, 설치가 된다.
    - -g 옵션을 주면 global로 다운로드, 설치가 된다.
- npx
    - 원격에 있는 create-react-app을 다운받지 않고 사용할 수 있다.

- - -
## #18. react 프로젝트 구조 설명
- public
    - index.html : 실제 페이지
    - public 디렉토리 하위에 생성되는 파일은 webpack이 src디렉토리 파일을 bundel처리한 결과물
- src
    - App.js : App 컴포넌트 정의
    - index.js : App 컴포넌트를 랜더링
    - src 디렉토리 하위에서 작업하는 파일은 webpack이 관리해준다.

- - -
## #19. CRA to Our Boilerplate
> 우리가 원하는 형태로 프로젝트 구조 변경

- _actions, _reducer : Redux를 위한 폴더
- components/views : Page구현
- components/views/Sections : 해당 페이지에 대한 css나 component들을 넣는다.
- App.js : Routing관련 처리
- Config.js : 환경변수 지정
- hoc, utils : Heigher Order Component, 공통적으로 쓰이는 것, 어디서든 쓸수 있게 해줌

- HOC : flask 데코레이터 같은 느낌. ex) 권한체크..

> vscode react Extension을 이용하여, rfce를 치면 react functional component 문법을 자동완성 해준다.


- - -
## #20. React Router Dom
- react에서는 페이지 이동을 할 때, React Router Dom이라는 것을 이용한다.


- - -
## #21. 데이터 Flow & Axios
- Axios 라이브러리 install -> client에 설치한다.
- CORS 이슈가 발생한다.

- - -
## #22. CORS이슈, Proxy 설정
- server : port 5000
- client : port 3000
- Proxy를 사용하여 해결할 수 있다.
```
npm install http-proxy-middleware --save
```


- - -
## #23. Proxy Server란?
- server와 client 사이에서 IP제어, 캐시, 보안 강화, 접근 제어 등의 역할을 한다.

- - -
## #24. Concurrently
- client와 server를 각각 start해야하는 번거로움을 해결할 수 있다.
```
npm install concurrently --save
```
- package.json의 script 옵션을 추가한다.
```
"dev": "concurrently \"npm run devstart\" \"npm run start --prefix client\" "
```

- - -
## #24. Antd CSS Framework
- CSS Framework 종류 (for React)
    1. Material UI
    2. React Bootstrap
    3. Semantic UI
    4. Ant Design (강의에서 쓸 놈) 
        - 장) 깔끔, 편리
        - 단) 사이즈 큼, 중국에서 만듬
        - https://ant.design/
    5. Materialize
    ...
- react의 dependency이므로 client로 이동해서 npm install 한다.
```
npm install antd --save
```

- - -
## #25. Redux 기초
- 상태(state)관리 라이브러리
- Props : 
    - properties
    - 컴포넌트 간 데이터 통신
    - 부모에서 자식으로만 데이터를 보낼 수 있다.
    - props값은 immutable하다.
- State : 
    - 컴포넌트 안에서 데이터 처리
    - state는 mutable하다.
    - state가 변하면 re-render 된다.

- ACTION -> REDUCER -> STORE -> React Component -> ACTION (데이터는 한방향으로만 흐른다.)
- ACTION : {type: 'LIKE_ARTICKE', articleID: 42}
- REDUCER : (previousState, action) => nextState
- STORE : app의 모든 state를 관리