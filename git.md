# 了解git解決甚麼事情

- 瞭解傳統備份資料的缺點
- 知道什麼是版本控制
- 明白為什麼要使用版本控制
- 清楚版本控制可以提高開發效率
- 認識 Git
- 瞭解市面上與 Git 相關的事物
- 瞭解接下來要進行的實務操作流程
- 懂得設定 Git 使用者名稱與信箱
- 使用 git init 將專案加入版本控制
- 學會 git status 找出更動過但尚未提交的檔案
- 使用 git add 把這些檔案的內容更動加入暫存區
- 用 git commit 替在暫存區裡的內容更動建立新的版本紀錄
- 能使用 git revert 來還原專案的版本
- git reset：刪除版本紀錄，但保留內容。
- git revert：刪除該版本紀錄的內容更動，並新增一個版本紀錄。
- 能使用 git remote add 註冊遠端 GitHub 網址
- 用 git push 把專案推上 GitHub
  
---

1. 確認 Git 版本正確
2. 設定 Git 使用者的名稱和信箱
3. 找到並進入專案資料夾
4. 使用 git init 登記專案資料夾
5. 刪除 .git 資料夾解除 Git 版本控制
6. 用圖形化介面軟體（SourceTree／GitKraken）重複一次操作
7. 使用 git status 查詢更動過的內容
8. 使用 git add 把有更動過的檔案加入暫存區
9. 使用 git commit 建立版本紀錄節點
10. 使用 git status 確認所有檔案都建立版本紀錄
11. 使用 git reset 還原到之前的版本
12. 使用 git diff 觀察檔案差異
13. 刪除一些程式碼造成錯誤，並git commit -m "請描述你這次更新的目的和內容"建立版本紀錄
14. 使用 git revert 把上一個錯誤移除
15. 確認專案資料夾都已經 commit 好了
16. 在 GitHub 創建一個新的專案，複製其 HTTPS 網址
17. 使用 git remote add origin path 註冊該 GitHub 網址
18. 使用 git remote -v 確認註冊了的 GitHub 網址
19. 使用 git remote remove origin 重設遠端網址
20. 使用 git push -u origin master 把專案上傳到 GitHub

---

## 參考文件

1. [保哥 git 基本介紹](https://www.facebook.com/will.fans/videos/1806894692673000/)
2. [高見龍 為你自己學 Git(e-book)](https://gitbook.tw/)
3. [連猴子都能懂得Git入門指南](https://backlog.com/git-tutorial/tw/)
4. [Git 與 Github 版本控制基本指令與操作入門教學](https://blog.techbridge.cc/2018/01/17/learning-programming-and-coding-with-python-git-and-github-tutorial/)