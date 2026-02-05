# Welcome Kit

새로운 팀원을 위한 온보딩 포털입니다. (순수 HTML/CSS/JS - 빌드 불필요)

## 기능

- 단계별 온보딩 가이드 (게임처럼 진행)
- PC 환경 설정 체크리스트
- 팀 정보 및 연락처
- 필수 문서 다운로드
- 자기소개 등록 (PR 방식)
- 자동 이메일 알림

## 구조

```
welcome-kit/
├── index.html           # 메인 페이지
├── data/                # 📁 데이터 (여기만 수정하면 자동 반영)
│   ├── team.json        #   팀 정보, 멤버, 연락처
│   ├── steps.json       #   온보딩 단계 정의
│   ├── downloads.json   #   다운로드 파일 목록
│   └── introductions.json  # 자기소개 목록
├── steps/               # 📁 단계별 페이지
│   ├── step1.html ~ step5.html
├── introductions/       # 📁 자기소개 페이지
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   └── downloads/       # 다운로드 파일
└── .github/workflows/   # GitHub Actions (자동 배포)
```

## 콘텐츠 수정 방법

### 팀 정보 수정
`data/team.json` 파일을 수정합니다.

### 다운로드 파일 추가
1. `assets/downloads/`에 파일 추가
2. `data/downloads.json`에 정보 등록

### 자기소개 추가
1. `data/introductions.json`에 새 항목 추가
2. PR 생성 → 머지 시 자동 반영

## 로컬 실행

```bash
# 간단한 HTTP 서버로 실행
npx serve .
# 또는
python -m http.server 8000
```

## GitHub Pages 배포

1. Repository Settings > Pages
2. Source: **GitHub Actions** 선택
3. main 브랜치에 push하면 자동 배포

## 이메일 알림 설정

Repository Secrets에 다음 값을 설정:

- `SMTP_SERVER`: SMTP 서버 주소
- `SMTP_PORT`: SMTP 포트
- `SMTP_USERNAME`: SMTP 사용자명
- `SMTP_PASSWORD`: SMTP 비밀번호
