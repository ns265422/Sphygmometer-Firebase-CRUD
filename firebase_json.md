### firebase 資料庫規則設定 JSON

---

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null",

    "Entry": {
      ".read": true,
      ".write": "auth != null",

      "$child": {
        ".read": true,
        ".write": "auth != null",

        "views": {
          ".read": true,
          ".write": true,
          ".validate": "data.val() == null || newData.val() == data.val() || newData.val() == data.val()+1"
        }
      }
    }
  }
}
```

---

```json
".validate": "data.val() == null || newData.val() == data.val() || newData.val() == data.val()+1"
```

`data.val() == null` is allow to create.

`newData.val() == data.val()` is allow to update with the exact same value.

`newData.val() == data.val()+1` is allow to increase value by 1.
