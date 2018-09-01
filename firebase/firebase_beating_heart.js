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
var userInfo = document.getElementById("userInfo");
var userInfoBtn = document.getElementById("userInfoBtn").addEventListener("click", function() {

    //資料讀取一次後就不再理會.once('child_added')
    //讀取受測者血壓資料

    firebase.database().ref('DATA').on('child_added', function(snapshot) {

        var userInfoText = '<div class="col-md-4">' + "收縮壓 SBP：" + snapshot.val().SBP + "<p></p>" + "舒張壓 DBP：" +
            snapshot.val().DBP + "<p></p>" + "脈搏     BP : " + snapshot.val().BP;
        console.log(userInfoText);
        userInfo.innerHTML = userInfoText;
    });

});

//刪除受測者血壓資料

var delUserInfoBtn = document.getElementById("delUserInfoBtn").addEventListener("click", function() {

    firebase.database().ref('DATA').set({

        DATA: null //全部刪除

        /*設定為空值

            BP: "",
            SBP: "",
            DBP: "",
        
        */
    }).then(function() {
        var userInfoText = '<div class="col-md-4">' + "收縮壓 SBP：" + "<p></p>" + "舒張壓 DBP：" +
            "<p></p>" + "脈搏   BP : ";
        console.log("成功刪除");
        userInfo.innerHTML = userInfoText;
    }).key;
});

//測試 自行輸入血壓資料

/*
function push([bp, sbp, dbp]) {
    var key = firebase.database().ref('DATA/').push({
        BP: bp,
        SBP: sbp,
        DBP: dbp,
    }).key;
}
$(document).ready(function() {

    $("#all").click(function() {

        var bp = $('#bp').val();
        var sbp = $('#sbp').val();
        var dbp = $('#dbp').val();
        push([bp, sbp, dbp]);
    });

}); */