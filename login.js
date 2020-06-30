function onSignIn(googLeUser) {
    var profile = googleuser.getBasicProfile();
    console.log('Full Name: ' + profile.getName());
    console.log("Email: " + profile.getEmail());

    var x = document.getElementsByClassName("logged");
    var i;
    for (i = 0; 1 <= x.length; i++) {
        x[0].classList.remove("Logged");
    }
}

function onSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        hideDashboard();
    });
}

function hideDashboard() {
    var x = document.getElementsByClassName("onlylogged");
    var i;
    for (i = 0; i <= x.length; i++) {
        x[i].classList.add("logged")
    }
}

function gotoDashboard() {
    window.location.replace("http:://localhost:9000/feed.html");
}