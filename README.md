#### 작업예정
- 1달(프론트엔드)간 주로 UI 계속 진행하면서(vscode개발환경)
- 짬짬이 자바|스프링(이클립스-egov전자정부프레임워크개발환경)
- 또는, 오라클DB(SQL디벨러퍼개발환경) Ansi-SQL(표준SQL) 기본언어 실습진행CRUD
- 2달(백엔드)째부터, 주로 스프링 위주로 수업진행(납품용-이력서 포트폴리오용)
- 스프링프로젝트1개(헬로자바) - test폴더에서 자바 기초를 해당 프로젝트로 진행
- VS code에서 만든 UI를 이클립스 JSP로 변경 후 스프링 웹 프로젝트를 진행.
- 관리자단 AdminLTE적용 - 스프링작업시 회원관리CRUD, 게시판생성관리CRUD : JSP로 작업

#### 20210528(금) 작업예정
- 관리자단 admin/board_write.html, admin/board_view.html(댓글 ajax처리) 작업예정
- 대시보드 home.html(최근 회원가입정보, 최근 게시물정보) 작업예정
- 이클립스로 작업한 html 내용을 -> resources 폴더(admin,home,root파일까지)로 배치
- 스프링작업 시작

#### 20210527(목) 작업
- admin/board_list.html 부터 시작.
- 관리자단 AdminLTE적용 - 지금 게시판CRUD, 대시보드 마무리 : html로 작업
- 관리자단 기본 틀(템플릿) : 공통 UI 부분 작업
- Ctrl+k, Ctrl+0 = 코드 축소 = Ctrl+k+0 (코드 구조 확인할때 사용)
- Ctrl+k, Ctrl+j = 코드 펼침 = Ctrl+k+j

#### 20210526(수) 작업
- 검색엔진에 최적화: 의미있는 태그를 사용했는가? <header>, <section>, <footer>, <article> 태그처럼 html5부터 만들어진 태그를 사용하면, 검색에 잘 노출된다.
- 유효성검사(validation) : 입력값이 제대로된 값인지 확인하는 과정.
- html5 내장된 유효성검사 : required(공백체크), type="email"(이메일 형식 검사), type="password"(입력값을 숨김처리), type="number"(입력값이 숫자인지 체크)
- js로 유효성검사 : 비밀번호확인(2개의 입력값이 같은지 체크)
- 반응형 서브페이지를(로그인, 회원가입, 마이페이지)
- HTML5부터는 유효성 검사가 내장되어있기 때문에, JS로 빈칸인지 코딩할 필요가 없다. required 속성을 태그에 집어넣으면 끝.
- 기획시, 메인1 CSS 네이밍, 서브1 CSS 네이밍
- 과장/이사급이 UI를 2개파일 만듬 또는 테마포레스트 같은 디자인 UI(html+css+js를 구매) 기반으로 퍼블리셔, 프론트개발자가 CSS나 HTML작업 이어서 함
- 금액이 4천~2억 수준의 프로젝트는 보통 자체 UI 사용

#### 20210525(화) 작업
- css: 계층:조부>부>본인(timnline)>자식(collapse)>손자(time-label)>증손자
- board_view.html 댓글 AdminLTE3의 페이징 UI추가예정
- 이제 스프링 프로젝트에서 5교시에 자바기초 시작예정
- 위 시작전 이클립스에서 프로젝트(윈도우 탐색기와 동일구조) 익스플로러와 패키지(폴더 경로를 .으로 구분) 익스플로러 차이 확인

#### 20210524(월) 작업.
- 시간 형식(Type) : date(연월일), dateTime(연월일시분초), TimeStampt(연월일시분초)
- 1970년 생일 : 1970년 1월 1일부터 현재까지의 초를 계산한 결과값이 타임스탬프
- 부트스트랩용어 : grid(12칸) 시스템, modal, xs, sm, md, lg, bs-(부트스트랩약자), fa-(폰트어썸약자)
- 팝업창 : 모달창(modal) - 필수창 : 작업을 해야 다음으로 이동 가능, 모달리스창(modeless) - 작업과 관계없이 다른화면으로 이동가능
- 폰트어썸(아이콘을 표현할수있는 웹폰트) : 아이콘을 확대해도 깨지지 않음(벡터 이미지 방식의 아이콘)
- 포토샵 디자인으로 아이콘을 만들면 확대시 깨짐(비트맵 이미지=스칼라 방식의 아이콘)
- 부트스트랩 그리드(모눈종이) 레이아웃 : 화면을 12개의 컬럼으로 분리해서 크기를 반응형으로 만듭니다.
- row(가로줄), cols(세로칸), col-md-12(화면 가로크기를 12로 지정 = 100%, 조건은 md에서는 100%)
- 반응형의 화면크기 : xs엑스트라스몰(~750px), sm스몰(750px~), md미디엄(970px~), lg라지(1170px~)
- 화면의 가로크기를 지정하는 이유(모바일, 태블릿, PC용일때 가로크기를 지정하기 위해서 입니다.)
- col-6(화면 가로크기를 6으로 지정 = 50%)
- board_view.html 댓글 UI디자인(부트스트랩) 추가.
- 반응형 서브페이지들(로그인, 회원가입, 마이페이지).
- 관리자단 AdminLTE 적용(회원관리CRUD, 게시판CRUD, 대시보드)
- 이클립스 헬로월드 실습. 1.다이나믹 웹프로젝트(jsp만드는 방식) 만든후 사용자단 UI실행 후 삭제
- jsp(1세대 2천년대-게시판) -> 서블렛(2세대 2005년 - servelet 게시판) -> 스트러츠(3세대 2010년대 프레임워크) -> 스프링(4세대 2013년 이후, 프레임워크)
- 스프링 (MVC)웹프로젝트 만들예정. 헬로월드 - 2달간 해당 프로젝트로 진행
- 위 스프링 프로젝트에서 자바 기초도 실습할 예정. -> htmlUI 만든것을 jsp로 변경작업 진행

#### 20210521(금) 작업
- 반응형 게시판페이지(CRUD) CSS 처리 : Create(Update) = board_write.html
- 글쓰기폼(부트스트랩 적용) : 첨부파일부분, 내용입력부분 웹에디터 추가
- 부트스트랩(AdminLTE): jQuery 기반의 UI 탬플릿(프레임워크)
- adminLTE: dist(distribute : 배포폴더), pages(더미데이터), plugins(서머노트 등등)
- 대시보드파일 샘플: index.html, index2.html, index3.html
- board+write.html 파일에 bootstrap코어임포트 + 서머노트플러그인 임포트
- 톰캣(jsp해석) vs 라이브서버(아파치-html해석)
- 자바소스(.java[앱] , .jsp[웹]) -> 컴파일(라인단위[인터프리터 방식] 해석x) -> class파일(여기에 DB자료가 동적으로 입출력이됨.) 생성 -> html번역(WAS-톰캣) -> 크롬/IE 화면에 랜더링
- localhost 도메인 = 127.0.0.1 아이피와 바인딩되는 도메인
- 백엔드: 1. 이클립스(스프링- 규모가 있는 프로젝트 개발) 2. 인텔리J(스프링부트- 규모가 작은 프로젝트 개발)

#### 20210520(목) 작업
- 메인페이지에서 시간이 걸리는 부분(프런트엔드): 메뉴처리, 슬라이딩처리
- 모바일 게시판 페이지 CSS(CRUD) 처리 : Read(list, view 페이지)
- Read - 리스트형식(다중Map): board_list.html 예, 회원리스트(회원목록)
- Read - Map형식, Json형식(key1:value1,key2:value2,key3:value3...) : board_view.html (회원상세보기)
- 상세보기 페이지 댓글 디자인은 부트스트랩 디자인시(관리자단 작업시) 추가할 예정.
- 카멜표기법(낙타등표기법 예: .bbsListTbl), _표기법(예, bbs_title)
- href: hypertext reference (웹문서 참조)
- 정적(static) 컨텐츠: html, css, js
- 동적(dynamic) 컨텐츠: jsp(java스프링), py(python장고), PHP, C#(닷넷), Nodejs(익스프레스)
- (데이터변수) 바인딩 : 정적인 컨텐츠에 동적인 데이터를 넣어주는것을 바인딩이라고 함(묶어주는 역할)
- 오후에 자바(스프링) 개발환경 설치예정(이클립스:전자정부표준프레임워크의 개발환경 설치)
- 게시물 타이틀 넘치는 부분 CSS처리했음. 스프링가서는 jsp에서 프로그램으로 처리할 예정.
- 전자정부표준프레임워크를 제작한 업체 : 삼성SDS, SK C&C, LG CNS
- 모바일 서브페이지 CSS 스타일 처리
- 태블릿+PC용 서브페이지 CSS 스타일 처리
- 태블릿+PC용 CSS 스타일 처리
- 모바일+태블릿+PC용 댓글시스템 CSS+jQuery+부트스트랩 처리
- AdminLTE(부트스트랩 기반 템플릿- 반응형)를 이용해서 관리자단 디자인 제작
- UI디자인 마무리---------------------
- UI구현 시작 ------ 스프링 프로젝트 시작(이클립스+자바+오라클+스프링)
- UI구현 : 위에서 제작한 UI디자인 이용해서 프로그램을 입힌다.

#### 20210518(화) 작업
- 태블릿 메인 CSS 스타일 처리, PC용 메인 CSS 스타일 처리(반응형으로 제작)
- 반응형 페이지의 핵심기술은 미디어쿼리 명령어 사용, 가로크기를 % (px고정크기가 아닌 비율로 내부 컨텐츠 크기를 지정하는 방법)
- 미디어(PC,태블릿,스마트폰 화면,프린터) + 쿼리(질의어=질문)
- @media 미디어타입(screen, print 등) and (min-width: 801px) {구현내용}
- 태블릿은 마우스오버 기능을 넣을 필요가 없다.(터치스크린이기 때문에)
- 배치1 : jQuery 코어 임포트 이후에 사용자가 지정한 js 배치를 해야함.
- 배치2 : reset.css, mobile.css 임포트 이후에 사용자가 지정한 tablet.css, pc.css 배치해야 레이아웃이 깨지지 않는다.

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
