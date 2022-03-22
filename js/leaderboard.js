<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
    <link rel="icon" href="images/th/th-small-flag.png">
    <!--Style sheets -->
    <link rel="stylesheet" href="style/leaderboard.css"/>
    <link rel="stylesheet" type="text/css" href="style/th-style.css">
    <!--Js files-->
    <script src="js/cookies.js"></script>
    <script src="js/th.js"></script>
    <script src="js/question.js"></script>
    <script src ="js/leaderboard.js"></script>
</head>
<body>

<div class="TopNav">
    <!--Logo on left-->
    <img class="TopNav_logo"  src="images/th/th-logo.png" alt="logo">
    <!--Menu on right-->
    <ul class="TopNav_list">
        <li><a href="leaderboard.html">REFRESH</a></li>
        <li><a id="displayB" href="questions.html">BACK</a></li>
        <li><a id="displayA" onclick="playAgain()" style="display: none; cursor: pointer">PLAY AGAIN</a></li>
    </ul>
</div>

<div id="player-rank"></div>
<h2>Leaderboard</h2>
<div class="leaderboard-container">
<ul id="leaderboard"></ul>
</div>

<script>
    async function end(){
        const reply =  await fetch(TH_SCORE_URL +"?session="+sessionID);
        const data_obj =  await reply.json();

        if(data_obj.complete==true || data_obj.finished==true) {
            document.getElementById("displayB").style.display = "none";
            document.getElementById("displayA").style.display = "inline";
        }
    }
end();

</script>
</body>
</html>
