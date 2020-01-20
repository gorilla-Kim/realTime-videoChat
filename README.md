# realTime-videoChat



## 🛠 Settings

### 📌Default

1. `npm init`
   * option : default
2. install modules
   * `npm i compression --save`
     * Traffic 압축을 위함
   * `npm i express --save`
     * Server Framework
   * `npm i react react-dom --save`
     * React를 사용하기 위함
   * `npm i react-redux redux --save`
     * 데이터의 단방향 흐름을 위함
   * `npm i react-router-dom --save`
     * Single page routing을 위함
   * `npm i serve-favicon --save`
     * webpage favicon을 관리하기 위함
   * `npm i socket.io --save`
     * real Time 통신을 위함

### 📌Dev

1. install modules
   * `npm i @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader webpack webpack-cli --save-dev`
     * babel/core
     * webpack
       * 파일들을 하나로 모아주는 역할
     * webpack-cli
       * 커맨드에서 webpack을 사용 가능케 하는 역할
     * ...loader
       * ...파일을 읽어오는 역할
     * babel
       * JS문법을 commonJS로 바꾸기 위해 사용됨
     * babel/preset...
       * ...문법에 맞춰 바꿔주는 함수들이 모여있음

### 📌Package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "postinstall": "webpack --mode production"
  },
```

* `dev` --> 개발모드로 webpack 시작
* `build` --> 배포모드로 webpack 시작
* `postinstall` --> `npm install`시 `build`스크립트와 동일하게 실행

---------



## React

### index.html

React를 랜더링하기 위한 단일 페이지 생성



### index.js

라우팅을 하기위한 공간

* `react-router-dom`
  * `BrowserRouter`
  * `Switch`
  * `Route`



### Home.js



### Room.js

**getUserMedia**

* ```javascript
  navigator.getUserMedia
  ```

* 사용자 PC에서 미디어의 스트림을 얻어내는 MediaStream의 API다. 

