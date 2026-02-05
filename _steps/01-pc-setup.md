---
title: "Step 1: PC 환경설정"
step: 1
---

개발에 필요한 기본 환경을 설정합니다. 아래 체크리스트를 따라 순서대로 진행해주세요.

## 필수 소프트웨어 설치

아래 프로그램들을 설치해주세요:

<div class="download-grid">
{% for item in site.data.downloads.software %}
<div class="download-item">
  <div class="info">
    <h4>{{ item.name }}</h4>
    <p>{{ item.description }}</p>
  </div>
  <a href="{{ item.url }}" target="_blank" class="btn btn-primary download-btn">다운로드</a>
</div>
{% endfor %}
</div>

## Git 설정

터미널에서 아래 명령어를 실행하여 Git을 설정합니다:

```bash
git config --global user.name "홍길동"
git config --global user.email "gildong@company.com"
```

## SSH Key 생성

GitHub 접근을 위한 SSH Key를 생성합니다:

```bash
ssh-keygen -t ed25519 -C "gildong@company.com"
cat ~/.ssh/id_ed25519.pub
```

출력된 키를 [GitHub Settings > SSH Keys](https://github.com/settings/keys)에 등록해주세요.

## 체크리스트

설치가 완료되면 체크해주세요:

<ul class="checklist">
  <li><input type="checkbox"> VS Code 설치 완료</li>
  <li><input type="checkbox"> Git 설치 및 설정 완료</li>
  <li><input type="checkbox"> Node.js 설치 완료</li>
  <li><input type="checkbox"> Docker Desktop 설치 완료</li>
  <li><input type="checkbox"> SSH Key 생성 및 GitHub 등록 완료</li>
</ul>

<div class="alert alert-info">
  <strong>도움이 필요하신가요?</strong><br>
  IT 지원팀에 문의해주세요: {{ site.data.team.contacts.it_support }}
</div>
