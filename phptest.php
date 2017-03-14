<html lang="en" ng-app="angularTest" ng-controller="mainController">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>✾ Starlit Designs</title>
    
    
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/phptest.css" rel="stylesheet">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.typeit/4.3.0/typeit.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="/js/angulartest.js"></script>
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-28860145-4', 'auto');
      ga('send', 'pageview');
    </script>
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
    <h1 class="big">PHP and SQL Test 1 -- Guest Book</h1>
    <h1 class="smallone">PHP/SQL Test</h1>
    <div class="container-fluid">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <p class="info">This is a brief proof of concept using PHP and SQL. Please don't enter any confidential information in the fields below, it's just for testing and doesn't hold any actual function apart from proof of concept and leaving your mark on this site. If you wish to remove your name, just send me an email <a href="mailto:toamidan@gmail.com">here</a> with the details.</p>
            <br>
        </div>
        <div class="col-sm-2"></div>
    </div>
    <div class="container-fluid">
    <form action="/php/update.php" method="post" class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <label class="sr-only" for="f_name">First name</label><input type="text" name="f_name" class="form-control" placeholder="First Name">
            <label class="sr-only" for="l_name">Last name</label><input type="text" name="l_name" class="form-control" placeholder="Last Name"><br>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-5 col-sm-2">
            <button type="submit" class="btn btn-default btn-block">Submit</button>
          </div>
        </div>
    </form>
    </div>
    <hr>
    <div class="container-fluid">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
        <?php 
            $server = "localhost";
            $user = "starlit2_test";
            $pass = "phptestphp5000";
            $dbname = "starlit2_php_test";

            $conn = new mysqli($server, $user, $pass, $dbname);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 

            $sql = "SELECT f_name,l_name,n_name FROM main";
            $result = $conn->query($sql);
            echo "<div class='table-responsive'>";
            echo "<table class='table'>";
            echo "<tr><th>Name</th><th>Nickname</th><tr>";
      
            if ($result->num_rows > 0) {
                  while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>". $row["f_name"] . " " . $row["l_name"]. "</td>";
                    echo "<td>". $row["n_name"] . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "If your seeing this,something went horribly wrong.";
            }
            echo "</table>";
            echo "</div>";
            $conn->close();
        ?>
    <div class="col-sm-1"></div>
    </div>
  </body>
</html>