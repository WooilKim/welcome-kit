---
title: "Step 4: 필수 문서"
step: 4
---

업무에 필요한 문서들을 다운로드하고 숙지해주세요.

## 필수 문서 다운로드

<div class="download-grid">
{% for doc in site.data.downloads.documents %}
<div class="download-item">
  <div class="info">
    <h4>{{ doc.name }}</h4>
    <p>{{ doc.description }}</p>
  </div>
  <a href="{{ '/assets/downloads/' | append: doc.file | relative_url }}" 
     class="btn btn-primary download-btn" download>다운로드</a>
</div>
{% endfor %}
</div>

## 개발 가이드라인 요약

### 코드 스타일
- ESLint + Prettier 사용
- 커밋 전 `npm run lint` 실행

### 브랜치 전략
```
main        ← 프로덕션
  └── develop   ← 개발 통합
        └── feature/기능명   ← 기능 개발
        └── fix/버그명       ← 버그 수정
```

### 커밋 메시지 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 리팩토링
test: 테스트 추가
chore: 빌드, 설정 변경
```

### PR 규칙
1. 제목에 Jira 티켓 번호 포함 (예: `[PROJ-123] 로그인 기능 추가`)
2. 리뷰어 1명 이상 지정
3. CI 통과 필수
4. Squash merge 사용

## 보안 정책 요약

<div class="alert alert-warning">
  <strong>필독!</strong> 보안 정책 문서를 반드시 읽어주세요.
</div>

- 회사 코드는 개인 저장소에 업로드 금지
- API 키, 비밀번호는 절대 커밋하지 않기
- `.env` 파일은 `.gitignore`에 포함
- 의심스러운 메일은 IT 보안팀에 신고

## 체크리스트

<ul class="checklist">
  <li><input type="checkbox"> 개발 가이드라인 문서 읽기 완료</li>
  <li><input type="checkbox"> 보안 정책 문서 읽기 완료</li>
  <li><input type="checkbox"> 브랜치 전략 이해 완료</li>
  <li><input type="checkbox"> 커밋 메시지 컨벤션 숙지 완료</li>
</ul>
