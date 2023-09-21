function generateMadLibs() {
    const pluralNoun = document.getElementById("pluralNoun").value.toLowerCase();
    const noun1 = document.getElementById("noun1").value.toLowerCase();
    const noun2 = document.getElementById("noun2").value.toLowerCase();
    const song = document.getElementById("song").value.toLowerCase();
    const verb = document.getElementById("verb").value.toLowerCase();

    const madLibsStory = `Once upon a spooky Halloween night, a group of adventurous ${pluralNoun} gathered around a bubbling ${noun1}. 
    They needed to find the perfect ingredients for their magical ${noun2}.
    First, they needed a ${noun1} filled with a mysterious potion, so they grabbed a giant, black ${noun1}. 
    Next, they required a pinch of ${noun2} to make the potion truly terrifying. They carefully added it to the brew.
    To add a spooky touch, they chanted a spooky incantation, "Double, double, toil and trouble," from the song "${song}." 
    And then, with a wave of their wands and a sprinkle of eerie dust, the potion began to bubble and smoke.
    The ${pluralNoun} had successfully ${verb} the most frightening concoction ever seen. 
    It was a Halloween to remember, filled with spooky spells and enchanting songs.`;

    document.getElementById("madLibsStory").textContent = madLibsStory;
    document.getElementById("result").style.display = "block";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("goAgainBtn").style.display = "block";
}

function goAgain() {
    document.getElementById("result").style.display = "none";
    document.getElementById("submitBtn").style.display = "block";
    document.getElementById("goAgainBtn").style.display = "none";

    // Clear input fields
    document.getElementById("pluralNoun").value = "";
    document.getElementById("noun1").value = "";
    document.getElementById("noun2").value = "";
    document.getElementById("song").value = "";
    document.getElementById("verb").value = "";
}

document.getElementById("submitBtn").addEventListener("click", generateMadLibs);
document.getElementById("goAgainBtn").addEventListener("click", goAgain);
