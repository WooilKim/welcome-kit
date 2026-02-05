# 자기소개 작성 가이드

새로 합류하신 것을 환영합니다! 아래 절차에 따라 자기소개를 등록해주세요.

## 1. 레포지토리 Fork

GitHub에서 이 레포지토리를 Fork합니다.

## 2. 로컬에 Clone

```bash
git clone git@github.com:YOUR_USERNAME/welcome-kit.git
cd welcome-kit
```

## 3. 브랜치 생성

```bash
git checkout -b introduce/이름
```

## 4. 자기소개 파일 작성

`_introductions/` 폴더에 마크다운 파일을 생성합니다.

**파일명**: `이름.md`

```markdown
---
name: "이름"
role: "직책"
join_date: "YYYY-MM-DD"
photo: "/assets/images/introductions/이름.jpg"
links:
  github: "https://github.com/username"
---

## 안녕하세요!

자기소개 내용...
```

### 필수 항목
- `name`: 이름
- `role`: 직책
- `join_date`: 입사일 (YYYY-MM-DD 형식)

### 선택 항목
- `photo`: 프로필 사진 경로
- `links`: GitHub, LinkedIn 등 링크

## 5. (선택) 프로필 사진 추가

`assets/images/introductions/` 폴더에 사진을 추가하세요.

## 6. 커밋 & 푸시

```bash
git add .
git commit -m "feat: 이름 자기소개 추가"
git push origin introduce/이름
```

## 7. Pull Request 생성

GitHub에서 PR을 생성합니다.

- **Base**: main
- **Compare**: introduce/이름
- **제목**: [신규입사] 이름 자기소개

## PR 머지 후

- GitHub Pages에 자동 배포
- 팀 메일링 리스트에 알림 발송
