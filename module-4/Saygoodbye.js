(function(window) {
    var byeSpeaker = new Object();
    var sWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(sWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
