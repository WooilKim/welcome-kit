---
title: "Step 5: 자기소개"
step: 5
---

마지막 단계입니다! 팀에 자신을 소개해주세요.

## 자기소개 작성 방법

GitHub PR을 통해 자기소개를 등록합니다. 아래 절차를 따라주세요:

### 1. 레포지토리 Fork & Clone

```bash
git clone git@github.com:YOUR_USERNAME/welcome-kit.git
cd welcome-kit
```

### 2. 브랜치 생성

```bash
git checkout -b introduce/홍길동
```

### 3. 자기소개 파일 생성

`_introductions` 폴더에 마크다운 파일을 생성합니다:

**파일명**: `홍길동.md` (본인 이름)

```markdown
---
name: "홍길동"
role: "백엔드 개발자"
join_date: "2024-01-15"
photo: "/assets/images/introductions/홍길동.jpg"
links:
  github: "https://github.com/gildong"
  linkedin: "https://linkedin.com/in/gildong"
---

## 안녕하세요! 👋

저는 홍길동입니다. {{ site.data.team.name }}에 합류하게 되어 기쁩니다.

## 경력

- 전 직장에서 3년간 백엔드 개발
- Node.js, Python 주력
- AWS 인프라 경험

## 관심사

- 클린 코드와 TDD
- 분산 시스템
- 커피와 러닝

## 한마디

빠르게 적응해서 팀에 기여하고 싶습니다. 
모르는 것이 많으니 많이 알려주세요!
```

### 4. (선택) 프로필 사진 추가

`assets/images/introductions/` 폴더에 사진을 추가하세요.

### 5. 커밋 & 푸시

```bash
git add .
git commit -m "feat: 홍길동 자기소개 추가"
git push origin introduce/홍길동
```

### 6. Pull Request 생성

GitHub에서 PR을 생성합니다:
- **제목**: `[신규입사] 홍길동 자기소개`
- **설명**: 간단한 인사말

<div class="alert alert-success">
  <strong>PR이 머지되면?</strong><br>
  자동으로 팀 메일링 리스트에 알림이 발송되고, 
  <a href="{{ '/introductions/' | relative_url }}">팀원 소개</a> 페이지에 등록됩니다!
</div>

## 자기소개 템플릿 다운로드

<div class="download-grid">
{% for template in site.data.downloads.templates %}
<div class="download-item">
  <div class="info">
    <h4>{{ template.name }}</h4>
    <p>{{ template.description }}</p>
  </div>
  <a href="{{ '/assets/downloads/' | append: template.file | relative_url }}" 
     class="btn btn-primary download-btn" download>다운로드</a>
</div>
{% endfor %}
</div>

## 체크리스트

<ul class="checklist">
  <li><input type="checkbox"> 레포지토리 Fork 완료</li>
  <li><input type="checkbox"> 자기소개 마크다운 작성 완료</li>
  <li><input type="checkbox"> PR 생성 완료</li>
</ul>

<div class="alert alert-info">
  <strong>축하합니다! 🎉</strong><br>
  모든 온보딩 단계를 완료했습니다. 이제 본격적으로 업무를 시작할 준비가 되었습니다!
</div>
