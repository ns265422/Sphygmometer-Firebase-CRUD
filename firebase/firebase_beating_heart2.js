            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyDvWwoibSWoGBr-bGs_Yq0dPogSMazM5G4",
                authDomain: "sphygmometer-nodered.firebaseapp.com",
                databaseURL: "https://sphygmometer-nodered.firebaseio.com",
                projectId: "sphygmometer-nodered",
                storageBucket: "sphygmometer-nodered.appspot.com",
                messagingSenderId: "54255152940"
            };

            firebase.initializeApp(config);

            var database = firebase.database();

            //取得目前受測者血壓資料            
            var userInfoBtn = document.getElementById("userInfoBtn");
            var userInfo = document.getElementById("userInfo");
            userInfoBtn.addEventListener("click", function() {

                /*資料讀取一次後就不再理會.once('value')

                        firebase.database().ref('/').once('value').then(function (snapshot) {
                            var userInfoText = "收縮壓 SBP："+ snapshot.val().SBP +"舒張壓 DBP：" +
                                snapshot.val().DBP +"脈搏 BP :" + snapshot.val().BP;
                            console.log(userInfoText);
                            userInfo.innerHTML = userInfoText;
                        }); 
                        
                */

                //資料讀取
                var userRef = firebase.database().ref('/DATA/EASON');

                userRef.on('value', function(snapshot) {
                    var userInfoText = '<div class="col-md-4">' + "收縮壓 SBP：" + snapshot.val().SBP + "<p></p>" + "舒張壓 DBP：" +
                        snapshot.val().DBP + "<p></p>" + "脈搏     BP : " + snapshot.val().BP;
                    console.log(userInfoText);
                    userInfo.innerHTML = userInfoText;
                });

            });

            //刪除受測者血壓資料
            var delUserInfoBtn = document.getElementById("delUserInfoBtn");
            delUserInfoBtn.addEventListener("click", function() {

                firebase.database().ref('/DATA/EASON').remove().then(function() {

                    var userInfoText = '<div class="col-md-4">' + "收縮壓 SBP：" + "<p></p>" + "舒張壓 DBP：" +
                        "<p></p>" + "脈搏   BP : ";
                    console.log("成功刪除");
                    userInfo.innerHTML = userInfoText;
                });
            });