document.addEventListener('DOMContentLoaded', function() {
    // Replace the loading text with your introduction
    var introText = "Hi, I'm Your Name. Welcome to my website!";
    document.getElementById('intro-text').textContent = introText;

    // Replace the loading text with your interests
    var interestsList = [
        "Programming",
        "Reading",
        "Traveling",
        "Playing Guitar"
    ];

    var interestsListElement = document.getElementById('interests-list');
    interestsList.forEach(function(interest) {
        var li = document.createElement('li');
        li.textContent = interest;
        interestsListElement.appendChild(li);
    });
});
