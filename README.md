# wedding card

-   게스트북
    -   클라이언트단에 저장이 되서 관리

# 실행하기

1. 준비

    1. node package module 설치

    ```bash
    $ npm install
    ```

    2. Python 패키지 설치

    ```bash
    # 가상환경 활성화 된 상태에서
    $ pip install -r requirements.txt
    ```

2. FastAPI 실행

```bash
$ uvicorn main:app --reload
```

    - main: main.py 실행파일
    - app : main.py 안에 있는 app=FaslAPI()
    - --reload : 코드 변경 시 자동으로 저장되어 재시작
    - --host : 모든 접근이 가능하게 하려면 0.0.0.0 을 입력
    - --port : 접속 원하는 포트를 지정

    - API 문서
        -   [Swagger UI] http: 127.0.0.1:8000/docs
        -   [ReDoc] http: 127.0.0.1:8000/redoc

3. 웹 서버 실행

```bash
$ npm run dev
```

# Python 가상 환경 설정

-   가상환경 생성

```bash
# 현 프로젝트 루트에서
$ python -m venv {가상환경 이름}
```

-   가상환경 활성화

```bash
$ source {프로젝트 경로}/venv/bin/activate
```

-   가상환경 비활성화

```bash
$ deactivate
```

-   가상환경 생성해서, 패키지 설치

4. github에 배포하기

-   [] 일단 배포
-   [] env 환경 설정 (지도맵)
-   [] python 환경 설정 (FastAPI)
