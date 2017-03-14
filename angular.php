<html lang="en" ng-app="angularTest" ng-controller="mainController">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>✾ Starlit Designs</title>
    
    
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/angular.css" rel="stylesheet">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.typeit/4.3.0/typeit.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
    <script src="/js/angulartest.js"></script>
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="index.php" class="navbar-brand">&lt;/✾&gt;</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a href="index.php">Home</a></li>
          <li class="active"><a href="portfolio.php">Projects</a></li>
        </ul>
      </div>
    </nav>
    <h1>Angular JS Test 1</h1>
    <div class="container-fluid">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <p class="info">This is a quick little demo using AngularJS. There is a module and controller in the javascript behind this that drives the whole thing. I wrote a little story about my favorite hero, but decided to let you put your own twist on it, adlib style. So, just fill in the blanks with whatever  words you want, and watch it react!</p>
        </div>
        <div class="col-sm-2"></div>
    </div>
    <div class="container-fluid">
        <br>
        <div class="col-sm-2"></div>
        <div class="form-group col-xs-12 col-sm-3">
            <label>Enter a Noun: </label><input class="form-control" type="text" ng-model="noun1" placeholder="Insert a Noun"> <br>
            <label>Enter a Noun: </label><input class="form-control" type="text" ng-model="noun2" placeholder="Insert a Noun"> <br>
            <label>Enter an Adjective: </label><input class="form-control" type="text" ng-model="adj1" placeholder="Insert an Adjective"> <br>
        </div>
        <div class="col-sm-2"></div>
        <div class="form-group col-xs-12 col-sm-3">
            <label>Enter an Adjective: </label><input class="form-control" type="text" ng-model="adj2" placeholder="Insert an Adjective"> <br>
            <label>Enter a Noun: </label><input class="form-control" type="text" ng-model="noun3" placeholder="Insert a Noun"> <br>
            <label>Enter a Noun: </label><input class="form-control" type="text" ng-model="noun4" placeholder="Insert a Noun"> <br>
        </div>
        <div class="col-sm-2"></div>
    </div>
    <hr>
    <div class="container-fluid">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
        <br>
        <p class="mainpar">&nbsp;&nbsp;&nbsp;&nbsp;The knight trudged along, leaving behind yet another disappointment. She thought she had found the one, but it turned out he was actually the town <span class="specialtxt">{{noun1}}</span> practicing his role, not really saving the town. She was on a quest to find a hero worthy of the enormous <span class="specialtxt">{{noun2}}</span> she carried, but every attempt she made on passing it on resulted in disastrous consequences, and was usually fatal. She heard of a town far to the north who was having some serious issues with monster attacks. She thought "Well, if I were a hero, I'd be fighting to save people, right?", and decided to head north, hoping to find the hero and complete the quest. It was a weeks journey on foot, as she had spent the majority of her time in the South. Once she arrived, she knew she had found the right place, as there was an immediate outburst of screams and terror. The knight ran over as fast as she could, but it still took a while as she was rather <span class="specialtxt">{{adj1}}</span>. What she saw was a nightmare, literally. There was a strange beast clothed in black with a strange, <span class="specialtxt">{{adj2}}</span> aura surrounding it. There was no time waste on waiting for someone else to step in. The knight planted her feet firmly in the ground beneath her, readied her hammer behind her, waited for the beast to charge, and swung with all her might. The world stood still for a moment as the hammer made impact, the force of all of the little knights power against the ferocity of this strange <span class="specialtxt">{{adj2}}</span> beast, but soon it became clear who was the strongest. After the point of impact, the hammer kept moving, bringing the beat along with it, and then promptly launching the monster high into the sky, far back into the wilderness from where it originated. "No hard feelings, but you were in my way." the knight chuckled to herself. Behind her the people started whispering, until one <span class="specialtxt">{{noun3}}</span> finally spoke up "Grandpa, that's her! That's the Hero of the South!" The knight was stunned for a moment, she couldn't believe she came all this way just to hear there's another <span class="specialtxt">{{noun4}}</span> back where she came from. "Guess I'm going this way now", she said, facing south, continuing her quest.</p>
    <div class="col-sm-1"></div>
    </div>
  </body>
</html>