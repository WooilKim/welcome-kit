---
title: "Step 2: 팀 소개"
step: 2
---

{{ site.data.team.name }}에 오신 것을 환영합니다! 팀과 팀원들을 소개합니다.

## 팀 정보

| 항목 | 정보 |
|------|------|
| 팀명 | {{ site.data.team.name }} |
| Slack 채널 | {{ site.data.team.slack_channel }} |
| Wiki | [팀 위키]({{ site.data.team.wiki_url }}) |

## 팀원 소개

<div class="introductions-grid" style="margin: 24px 0;">
{% for member in site.data.team.members %}
<div class="introduction-preview" style="cursor: default;">
  <div class="intro-photo-placeholder">{{ member.name | slice: 0 }}</div>
  <div>
    <h3>{{ member.name }}</h3>
    <p style="color: var(--primary);">{{ member.role }}</p>
    <p style="color: var(--text-muted); font-size: 0.85rem;">{{ member.email }}</p>
  </div>
</div>
{% endfor %}
</div>

## 주요 연락처

| 부서 | 이메일 |
|------|--------|
| HR | {{ site.data.team.contacts.hr }} |
| IT 지원 | {{ site.data.team.contacts.it_support }} |
| 시설관리 | {{ site.data.team.contacts.facilities }} |

## 팀 문화

- **데일리 스탠드업**: 매일 오전 10시, Slack 허들
- **코드 리뷰**: 모든 PR은 최소 1명의 리뷰 필요
- **점심 시간**: 12:00 ~ 13:00 (자유롭게)
- **재택 근무**: 주 2회 가능 (팀장과 조율)

<div class="alert alert-success">
  <strong>Tip!</strong> Slack에서 팀원들에게 먼저 인사해보세요. {{ site.data.team.slack_channel }} 채널에서 환영받으실 거예요!
</div>

## 체크리스트

<ul class="checklist">
  <li><input type="checkbox"> 팀 Slack 채널 가입 완료</li>
  <li><input type="checkbox"> 팀원들에게 인사 완료</li>
  <li><input type="checkbox"> 팀 Wiki 북마크 완료</li>
</ul>
