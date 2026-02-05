# Welcome Kit

새로운 팀원을 위한 온보딩 포털입니다.

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
├── _config.yml          # Jekyll 설정
├── _data/               # 데이터 파일 (수정하여 콘텐츠 업데이트)
│   ├── team.yml         # 팀 정보
│   ├── steps.yml        # 온보딩 단계 정의
│   ├── downloads.yml    # 다운로드 파일 목록
│   └── settings.yml     # 알림 설정
├── _steps/              # 온보딩 단계별 콘텐츠
├── _introductions/      # 팀원 자기소개
├── _layouts/            # 페이지 레이아웃
├── assets/
│   ├── css/             # 스타일
│   ├── js/              # JavaScript
│   ├── downloads/       # 다운로드 파일
│   └── images/          # 이미지
└── .github/
    └── workflows/       # GitHub Actions
```

## 콘텐츠 수정 방법

### 팀 정보 수정
`_data/team.yml` 파일을 수정합니다.

### 온보딩 단계 수정
`_steps/` 폴더의 마크다운 파일을 수정합니다.

### 다운로드 파일 추가
1. `assets/downloads/`에 파일 추가
2. `_data/downloads.yml`에 정보 등록

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve
```

http://localhost:4000/welcome-kit/ 에서 확인

## GitHub Pages 배포

1. Repository Settings > Pages
2. Source: GitHub Actions 선택
3. main 브랜치에 push하면 자동 배포

## 이메일 알림 설정

Repository Secrets에 다음 값을 설정:

- `SMTP_SERVER`: SMTP 서버 주소
- `SMTP_PORT`: SMTP 포트
- `SMTP_USERNAME`: SMTP 사용자명
- `SMTP_PASSWORD`: SMTP 비밀번호

`_data/settings.yml`에서 수신 이메일 주소 수정
