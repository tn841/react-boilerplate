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
- 