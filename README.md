#### 작업예정
- 태블릿 메인 CSS 스타일 처리, PC용 메인 CSS 스타일 처리(반응형으로 제작)
- 반응형 페이지의 핵심기술은 미디어쿼리 명령어 사용, 가로크기를 % (px고정크기가 아닌 비율로 내부 컨텐츠 크기를 지정하는 방법)
- 미디어(PC,태블릿,스마트폰 화면,프린터) + 쿼리(질의어=질문)
- @media 미디어타입(screen, print 등) and (min-width: 801px) {구현내용}
- 태블릿은 마우스오버 기능을 넣을 필요가 없다.(터치스크린이기 때문에)
- 배치1 : jQuery 코어 임포트 이후에 사용자가 지정한 js 배치를 해야함.
- 배치2 : reset.css, mobile.css 임포트 이후에 사용자가 지정한 tablet.css, pc.css 배치해야 레이아웃이 깨지지 않는다.
- 모바일 서브페이지 CSS 스타일 처리
- 태블릿+PC용 서브페이지 CSS 스타일 처리
- 모바일 게시판 페이지 CSS(CRUD) 처리
- 태블릿+PC용 CSS 스타일 처리
- 모바일+태블릿+PC용 댓글시스템 CSS+jQuery+부트스트랩 처리
- AdminLTE(부트스트랩 기반 템플릿- 반응형)를 이용해서 관리자단 디자인 제작
- UI디자인 마무리---------------------
- UI구현 시작 ------ 스프링 프로젝트 시작(이클립스+자바+오라클+스프링)
- UI구현 : 위에서 제작한 UI디자인 이용해서 프로그램을 입힌다.

#### 20210517(월) 작업
- jQuery 제이쿼리 JSON 데이터 파싱
- 외부 data.js 파일에서 json데이터를 저장한 후 html에서 불러와서 파싱.
- 외부 사이트에서 제공하는(RestAPI서버) json데이터를 html에서 불러와서 파싱.
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 파싱(데이터를 분해해서 화면에 뿌려주는 작업)
- RestAPI 서버주소(빅데이터) : https://coroname.me/getdata
- 수업시작전, jsonData 파싱부분에서 append 사용이 2번 반복되는 부분 확인예정.

- 메인페이지에 자바스크립트(jQuery)적용 
- 메뉴, 슬라이드이미지 3개 처리 : 모바일 메인페이지 마무리
- 보통 이미지 슬라이드 처리는 외부 라이브러리(Lib) 사용(니보슬라이드, 캐로셀슬라이드)
- 외부 Lib 사용 안하고, 우리가 직접 만들어봅니다.

#### 20210514(금) 작업
- 구문오류 : syntex 오류(문법오류)
- CSS3, HTML5 : 유효성 검사기준입니다.
- 사용자단 모바일 메인페이지 footer영역 CSS 입히기.
- 과제물 제출 준비
- jQuery Json 데이터 파싱 실습
- 8교시에 과제물 다음카페로 제출
- top 상단으로 이동

#### 20210513(목) 작업내역
- 픽사베이 이미지 3개 : 로고1, 슬라이드 이미지1, NoImage1 받고, 경로 적어놓기
- 로고: https://pixabay.com/ko/illustrations/%EB%A1%9C%EA%B3%A0-%EC%83%81%EC%A7%95-%EA%B8%B0%ED%98%B8-%EC%B1%85%EA%B0%88%ED%94%BC-707111/
- 슬라이드이미지: https://pixabay.com/ko/photos/%ED%9E%8C%ED%84%B0%EC%A0%9C-%ED%98%B8%EC%88%98-bergsee-3601004/
- 노이미지: https://pixabay.com/ko/illustrations/%EC%A4%91%EC%A7%80-%ED%8F%AC%ED%95%A8-%EA%B1%B0%EB%A6%AC-%ED%91%9C%EC%A7%80%ED%8C%90-%EB%B3%B4%EC%95%88-1013732/
- 작업폴더를 나누는 이유: 시청(관공서), 대학, 기업의 웹 프로그램(사이트) 제작할때, 1년간 무상 유지보수 이후 2천, 리뉴얼 4천 비용이 책정
- home폴더 기존작업물, 리뉴얼할때 home에 덮어쓰는 방식이 아니고,
- 리뉴얼 할때 home2022 폴더에 작업함
- jQuery 코어 다운받기 : min버전(압축버전- 속도가 빠름), 일반버전(개발버전- 일반적인 속도)
- jQuery 미처리 작업은 다음주에 하고,
- 오늘부터는 모바일 메인페이지 1개 만들어서 과제물로 제출 -> 스프링에서 프로그램 입히는 소스로 사용
- 애니데스크(독일산): 팀뷰어(독일산) 사용하는 대신에 애니데스크를 사용.
- html5.html, css.html, js.html 여기까지
- jQuery 기본구조만 실습했습니다.

#### 20210512(수) 작업내역
- 다른곳에서 작업해 보았습니다.
- git clone으로 하는방법 : 폴더 주소창에서 cmd 치고 들어가서 git clone
- git clone으로 프로젝트를 가져온 경우 아래 내용을 추가해주셔야합니다.
- git config --list 확인해서 user.name, user.email 없으면 아래추가.
- 터미널에서 아래 2가지 실행
- git config - local user.name 영문이름
- git config - local.user.email 영문이메일
- 프로젝트를 1명이 제작하는 경우가 없기 때문에, 2명일때 소스수정한 사람 확인용 정보입니다.

#### 20210511(화) 작업내역
- 로렘 입숨 한글url: http://guny.kr/stuff/klorem/#/dl-html
- 로렘 입숨 영어url: https://loremipsum.io/
- 경로(path): /루트, /test/html5.html
- html5의 레이아웃 구조 제작합니다.
- 서버(응답하는프로그램=response) = 아파치, 톰캣서버
- 클라이언트(요청하는프로그램=request) = 웹브라우저
- HTML은 마크업이 태그로 구성.<의미있는문자>...</의미있는문자>
- http://127.0.0.1:80[8080,9000,5500,6500]
- PC의 네트워크 내부주소(공통) : 127.0.0.1 == localhost
- yahoo.com(도메인) == 74.6.143.25(IP주소) == 주민번호
- IP주소버전: IPv4, IPv6
- HTML도 버전: HTML5, HTML4.01(old)

#### 20210510(월) 작업내역
- Git에서 'User.nave' 및 'user.email'을 구성하라고 떠요!
- 업로드절차: 1. 커밋(commit) 2. 푸시(push)
- 다운로드절차: 1. 풀([pull]) : 교실에서 작업한 결과를 집에서 이어서 작업할 상황
- 레포지토리(저장소) 초기화: git init
- 개발PC(html) 와 깃 저장소와 연결시킵니다.
- 포트의 역할이 트렌드로 많이 사용됩니다.
- 포트(port): 포트번호로 서비르를 만드는것이 트렌드
- 이전에는 80포트에 모든 서비스 묶어놓았습니다.
- 모든서비스를 개별로 분리하는 트렌드가 있습니다.: 마이크로서비스라고 합니다. == RestAPI로 구현이 됩니다.
- 도메인(예, https://naver.com:1451241/네이버 인증서비스 개발)
- 외부 인원(네이버직원아닌) 위 포트기준으로 제작한 서비스를 갖다가 사용
- html : Hyter Text MarkUp Language 태그를 사용하는 언어
- md : MarkDown Language 태그를 사용하지 않는 언어
