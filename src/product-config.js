export const productConfig = {
  "product": {
    "rank": 20,
    "tier": "P1",
    "score": 65,
    "domain": "WindowsApp",
    "ideaNo": 10,
    "ideaName": "PC・LAN・家電管理GUI",
    "repository": "pc-lan-appliance-control-gui",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "家庭内管理として範囲が広いので、まずはPC/LAN一覧に絞ると公開可能。",
    "surface": "Windows ローカル運用向け CLI と静的 HTML ダッシュボード",
    "integration": "",
    "overview": "PC健康診断、LANデバイス探査、家電リモコンを扱う。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "家庭内機器やPC状態の確認画面が分かれる。",
    "differentiation": "Windowsから見える範囲を一覧し、危険操作は確認を挟む。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
