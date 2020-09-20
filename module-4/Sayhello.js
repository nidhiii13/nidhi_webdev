(function(window) {
    var helloSpeaker = new Object();
    var sWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(sWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
