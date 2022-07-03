# 개발일지 (이주연)
***
# 1. 일시 220625 
#### 220625 이전의 내용들은 모두 수기로 작성해두었다. 다시 볼 일이 있을지 없을지 잘 모른다.

## 1) 개발 계획을 세우고 일정을 수립하자.

<해야 할 일>

- Rings of Jupiter 리액트 화
- 누구나 생활음악 리액트 화
- 기존 프로젝트 리팩토링 (지뢰찾기, 프로필, Me:Sic, To do List)

<뭐부터 언제 까지?>

- Rings of Jupiter를 7월 4일까지 끝내겠다.
  - 웹 디자인 
    - Home화면과 Mypage화면을 구분 지음(0628)
    - Home화면에 Table을 구성해서 게시판 레이아웃을 만듦(0628)
    - Mypage 화면은 재활용 했는데 Update에서 Join으로 만들자(0629) 
    - Font를 설정해 주자 재활용하면 됨 ( 할 일 )
  - 프론트엔드
    - Body.js 모듈화했음. ( 0703 )
  - 백엔드 server
    - DB를 연동하지 않는 인증부터 만들어 구현 하자 그 뒤로 CRUD기능을 추가하자. (0630)
    - fetch의 2번째 인자에 대해 큰 이슈가 있었다. 해결 함.(0630)
    - front에서 Id, password 보냄 -> Back에서 DB에 대조하고 맞으면 true 틀리면 false반환 -> front에서 state에 저장. (0630)
    - setState를 이용하여 isLogin 구현 중 (0701)
    - 갑자기 코드가 너무 복잡해져서 셀프 리뷰 한버 하며 주석달기 시작 ( 0630 )
    - CRUD를 구성하여 일단 인증하면 글 쓰고 지울 수 있게 만들자.( 할 일 )
    - 로그인은 구성 했다. 이제 로그인인 상태와 아닌상태를 구분해야 하는데. 세션을 확인하러 가자. (시급한문제입니다!!!!!!!!!!!!!!!!!!!!!!!!!)
    - DB가 없으니 코드안에서 하드코딩 중인데 얼른 DB 무꺼버리자 ( 0702 )
    - 네이버, 카카오, 구글 로그인 OAuth 인증 시스템을 만들자 ( 할 일 )
    - Front와 Back과 DB를 연결하는 API를 구성하자 ( 할 일 )
    - ****Back과 DB가 연결되는 중 회원가입절차는 만들었고, 로그인 절차 만들 차례( 할 일 )
    - Local MySQL은 heroku에서 작동을 안한다. => heroku Addons ClearDB를 사용하기로 했다.
      - clearDB는 addon설치 해줘야하고. (heroku addons:create cleardb:ignite), 만들어진 db의 주소를 heroku config | grep CLEARDB_DATABASE_URL로 찾아와야 한다.
      - mysql://bbadc38db84c9f:2251e22c@us-cdbr-east-06.cleardb.net/heroku_92ea96d00cdd65c?reconnect=true 대충 이런주소가 나오는데
      - 골뱅이 뒤부터 .net까지 host이름 us-cdbr-east-06.cleardb.net
      - 골뱅이 앞의 무작위 문자열은 :을 중심으로 앞이 user 뒤가 password
    - CORS정책 위반은 fetch의 OPTION의 헤더에다가 허용 URL을 넣어주는것으로 해결한다.
  - DB server
    - 기존 Databases를 좀 정리하자.. 웩( 0702 )
    - 새로운 Databases를 만들자 ( 0702 )
    - clearDB연동 완료. 여기는 한글이 지원 안되니 Only 영어로만 하자.
- 기존 프로젝트 리팩토링
  - 지뢰 찾기 (게임 기록판, 실행 취소 버튼, 남은 지뢰 갯수 등)
  - Me:sic ( 발전방향이 떠오르지 않음.)
  - To do List (로컬스토리지를 이용한 방식에서 발전시키지 말것. 그 외의 발전방향은 아직 미지수)

- 누구나 생활음악
  - Rings of Jupiter와 기능적으로 중복 인 것 같은데 다른 아이디어로 프로젝트를 먼저 하는게 좋을것 같다.

## 2) 적고싶은거 쓰삼..  

- 왜 웹개발을 나눠서 하는지 알 것 같은 날이다.. (0702)
- 헤로쿠 또 망가짐. 예상되는 지점은 MYSQL, fetch 두 군데임. 아마 MYSQL이 로컬이라서 그런듯. 헤로쿠에 postgres라는게 있다는데 알아보세요.
  - 헤로쿠에서 mysql을 쓸때는 clearDB addon으로 사용 (ignite PLAN이 무료)
  - 헤로쿠에서 뭔갈 할때는 어떤 프로젝트에서 하는건지 지정 해 줘야 함
  - git init && heroku apps && heroku git:remote -a [APP_NAME]