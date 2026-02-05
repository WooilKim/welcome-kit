---
title: "Step 3: 업무 도구"
step: 3
---

팀에서 사용하는 협업 도구들을 설정합니다.

## 커뮤니케이션

### Slack
- 회사 Slack 워크스페이스 초대 메일 확인
- 필수 채널 가입:
  - `#general` - 전사 공지
  - `{{ site.data.team.slack_channel }}` - 팀 채널
  - `#dev-help` - 개발 질문

### 이메일
- Outlook/Gmail 설정 완료
- 서명 설정 (이름, 직책, 연락처)

## 프로젝트 관리

### Jira
1. [Jira](https://company.atlassian.net) 접속
2. 프로젝트 보드 확인
3. 자신에게 할당된 태스크 확인

### Confluence
- 팀 Wiki 페이지 확인
- 주요 문서 북마크

## 개발 도구

### GitHub
1. Organization 초대 수락
2. 팀 레포지토리 접근 권한 확인
3. 알림 설정

```bash
# 레포지토리 클론
git clone git@github.com:company/main-project.git
cd main-project
npm install
```

### CI/CD
- GitHub Actions 워크플로우 확인
- 배포 프로세스 이해

## VS Code 추천 확장

```
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension ms-azuretools.vscode-docker
code --install-extension eamodio.gitlens
```

## 체크리스트

<ul class="checklist">
  <li><input type="checkbox"> Slack 워크스페이스 가입 및 채널 설정 완료</li>
  <li><input type="checkbox"> 이메일 설정 및 서명 등록 완료</li>
  <li><input type="checkbox"> Jira 접근 확인 완료</li>
  <li><input type="checkbox"> GitHub Organization 가입 완료</li>
  <li><input type="checkbox"> 메인 프로젝트 클론 완료</li>
  <li><input type="checkbox"> VS Code 확장 설치 완료</li>
</ul>

<div class="alert alert-warning">
  <strong>권한이 없나요?</strong><br>
  팀장({{ site.data.team.members[0].email }})에게 권한 요청을 해주세요.
</div>
