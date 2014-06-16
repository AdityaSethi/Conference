[1mdiff --git a/www/css/app.css b/www/css/app.css[m
[1mindex 871f1f2..bf00b8b 100644[m
[1m--- a/www/css/app.css[m
[1m+++ b/www/css/app.css[m
[36m@@ -1033,20 +1033,31 @@[m [mhtml[m
   float:left;[m
   font-family: "Roboto-Regular";[m
   font-style: italic;[m
[31m-  width:28%;[m
[32m+[m[32m  min-width:24%;[m
[32m+[m[32m  max-width:100%;[m
   padding-top: 7px;[m
[31m-  [m
[32m+[m[32m   margin-left:0px;[m
[32m+[m[32m  padding-bottom: 7px;[m
[32m+[m[32m  text-align: left !important;[m
[32m+[m[32m  border-bottom:solid #F39C12;[m
 }[m
[32m+[m[32m.overviewHT[m
[32m+[m[32m{[m
[32m+[m[32m  float:right;[m
[32m+[m[32m  padding-right: 5px;[m
 [m
[32m+[m[32m}[m
 .overviewHeadImage[m
 {[m
   float:left;[m
   width:50%;[m
[32m+[m[32m  border-bottom:solid #F39C12;[m
[32m+[m
 }[m
[31m-.overviewImageFloatLeft[m
[32m+[m[32m/*.overviewImageFloatLeft[m
 {[m
   float:left;[m
[31m-}[m
[32m+[m[32m}*/[m
 .overviewHead[m
 {[m
  /* height:66px;*/   /* Was 20% */[m
[36m@@ -1055,8 +1066,9 @@[m [mhtml[m
   color: #FFFFFF;[m
   padding-top: 10px; [m
   text-align: center;[m
[31m- margin:auto;[m
[32m+[m[32m  display: inline-block;[m
   width:100%;[m
[32m+[m[32m  min-width:371px !important;[m
 }[m
 .overviewHP[m
 {[m
[36m@@ -1066,12 +1078,14 @@[m [mhtml[m
 {[m
 height: 34px;[m
 width: 190px;[m
[32m+[m
 /*padding-left:-30px !important;[m
 margin-left: -30px !important;*/[m
 }[m
 .overviewBG[m
 {[m
[31m-  background: url('../img/Home-BG.png')  !important;[m
[32m+[m[32m  background: url('../img/Home-BG.png') ;[m
[32m+[m[32m  background-repeat: no-repeat;[m
 }[m
 .overviewTV[m
 {[m
[36m@@ -1083,13 +1097,64 @@[m [mmargin-left: -30px !important;*/[m
 .overviewTVH[m
 {[m
   text-align:center;[m
[32m+[m[32m  color:white;[m
[32m+[m[32m  font-family: roboto-medium;[m
[32m+[m[32m  font-size:11px;[m
 }[m
 .headerBar[m
 {[m
[31m-  background-color: #F39C12 !important;[m
[31m-  width:86%;[m
[31m-  height:10px;[m
[31m-  float:left;[m
[31m-  color:#F39C12;[m
[31m-  font-size: 0px[m
[32m+[m[32m  margin-top:35px;[m
[32m+[m[32m border:5px solid #F39C12;[m
[32m+[m
[32m+[m
[32m+[m[32m}[m
[32m+[m[32m.overviewNI[m
[32m+[m[32m{[m
[32m+[m[32m  border-top: solid #C2B7AD;[m
[32m+[m[32m  border-bottom: solid #C2B7AD;[m
[32m+[m[32m  padding: 3% 0% 3% 0%;[m
[32m+[m[32m  margin:4% 4% 0% 4%;[m
[32m+[m[32m  color:white;[m
[32m+[m[32m  font-family: roboto-regular;[m
[32m+[m[32m}[m
[32m+[m[32m.overviewFeature1[m
[32m+[m[32m{[m
[32m+[m[32m  width:90%;[m
[32m+[m[32m  margin:0% 5% 0% 5%;[m
[32m+[m[32m  padding:4% 4% 4% 4%;[m
[32m+[m[32m  color:white;[m
[32m+[m[32m  background-color:#31ACA6;[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m}[m
[32m+[m[32m.overviewFeature2[m
[32m+[m[32m{[m
[32m+[m[32m  width:90%;[m
[32m+[m[32m  margin:0% 5% 0% 5%;[m
[32m+[m[32m  padding:4% 4% 4% 4%;[m
[32m+[m[32m  color:white;[m
[32m+[m[32m  background-color:#DA5754;[m
[32m+[m[32m   display: inline-block;[m
[32m+[m[32m}[m
[32m+[m[32m.overviewFeature3[m
[32m+[m[32m{[m
[32m+[m[32m  width:90%;[m
[32m+[m[32m  margin:0% 5% 3% 5%;[m
[32m+[m[32m  padding:4% 4% 4% 4%;[m
[32m+[m[32m  color:white;[m
[32m+[m[32m  background-color:#F38649;[m
[32m+[m[32m   display: inline-block;[m
[32m+[m[32m}[m
[32m+[m[32m.overviewFI[m
[32m+[m[32m{[m
[32m+[m[32m  width:90%;[m
[32m+[m[32m  float:right;[m
[32m+[m[32m  font-size: 12px;[m
[32m+[m[32m  font-family: roboto-regular;[m
[32m+[m[32m}[m
[32m+[m[32m.overviewArrow[m
[32m+[m[32m{[m
[32m+[m[41m  [m
[32m+[m[32m  margin-top: 5%;[m
[32m+[m[32m  margin-bottom: 8%;[m
[32m+[m[32m  text-align: center;[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/www/partials/overview.html b/www/partials/overview.html[m
[1mindex a545ad7..4da5c44 100644[m
[1m--- a/www/partials/overview.html[m
[1m+++ b/www/partials/overview.html[m
[36m@@ -1,4 +1,4 @@[m
[31m- <div ng-include="'partials/navbar.html'"></div>[m
[32m+[m[32m<!-- <div ng-include="'partials/navbar.html'"></div>[m
 <div style="height:{{deviceHeight}}px !important;width:{{deviceWidth}}px !important" class="bg_grey">[m
 	<div class="headerMargin">[m
 		<div class="overviewText " ng-repeat="overview in overviews">[m
[36m@@ -12,7 +12,44 @@[m
 		</div>[m
 		<div ><img class="overviewImage" src="img/overview-bg.png"></img></div>[m
 	</div>[m
[31m-</div> [m
[32m+[m[32m</div> -->[m
[32m+[m[32m<div class="overviewBG" style="background-size:{{deviceWidth}}px 100% !important">[m
[32m+[m	[32m<!-- <div class="navbar-fixed-top"> -->[m
[32m+[m[41m    [m	[32m<div class="container-fluid">[m
[32m+[m[41m      [m		[32m<div class="overviewHead">[m[41m [m
[32m+[m	[41m        [m		[32m<div class="overviewHeadText">[m
[32m+[m	[41m        [m			[32m<span class="overviewHT">{{overview.welcomeNote}}</span>[m
[32m+[m	[41m        [m		[32m</div>[m
[32m+[m	[41m        [m		[32m<div  class="overviewHeadImage">[m
[32m+[m		[41m        [m		[32m<div class="overviewImageFloatLeft">[m
[32m+[m		[41m        [m			[32m<img src="img/icons/logo-large.png" class="overviewHI overviewHP"></img>[m
[32m+[m		[41m        [m		[32m</div>[m
[32m+[m	[41m     [m			[32m</div>[m[41m	[m
[32m+[m[41m    [m		[32m</div>[m
[32m+[m		[32m</div>[m
[32m+[m	[32m<!-- </div> -->[m[41m	[m
[32m+[m[41m	[m
[32m+[m	[32m<div class="overviewTVH">[m
[32m+[m		[32m<img src="img/icons/icon-large.png" class="overviewTV"></img>[m
[32m+[m		[32m<div>WE, THE JAVASCRIPT PEOPLE</div>[m
[32m+[m	[32m</div>[m
[32m+[m	[32m<div class="overviewNI">[m
[32m+[m		[32m<span>Join us at the JS Channel Conference in Bengaluru for an oppurtunity to learn and hear from the best brains in the industry. Two days of hands-on workshops and talks. A great platform to mingle with the community. As always lunch and high tea on us. We look forward to seeing you there and hope you enjoy the mobile app.</span>[m
[32m+[m	[32m</div>[m
[32m+[m	[32m<div class="breakline"></div>[m
[32m+[m	[32m<div class="overviewFeature1">[m
[32m+[m
[32m+[m		[32m<img height="25px" src="img/icons/browse.png" class=""></img><div class="overviewFI">Browse around the app to find the latest agenda, session details, speaker information and venue maps.</div>[m
[32m+[m	[32m</div>[m
[32m+[m	[32m<div class="overviewFeature2">[m
[32m+[m		[32m<img height="25px" src="img/icons/date.png" class=""></img><div class="overviewFI">Takes place on July 18-19, 2014, Hotel Taj Vivanta, Bengaluru.</div>[m
[32m+[m	[32m</div>[m
[32m+[m	[32m<div class="overviewFeature3">[m
[32m+[m		[32m<img height="16px" src="img/icons/email.png" class=""></img><div class="overviewFI">Contact us at <a>help@jschannel.com</a> with any questions or concerns.</div>[m
[32m+[m	[32m</div>[m
[32m+[m	[32m<div class="overviewArrow">[m
[32m+[m		[32m<img height="22px" src="img/icons/arrow-down.png"></img>[m
[32m+[m	[32m</div>[m
[32m+[m	[32m<div ng-include="'partials/footer.html'"></div>[m
[32m+[m[32m</div>[m
 [m
[31m-<div ng-include="'partials/footer.html'"></div>[m
[31m-</div>[m
\ No newline at end of file[m
[1mdiff --git a/www/scripts/controllers/overview.js b/www/scripts/controllers/overview.js[m
[1mindex 89c0879..e7d8cf7 100644[m
[1m--- a/www/scripts/controllers/overview.js[m
[1m+++ b/www/scripts/controllers/overview.js[m
[36m@@ -2,9 +2,9 @@[m [mangular.module('conferenceApp')[m
   .controller('overviewCtrl', function($scope,$http) {[m
 [m
         $http.get('scripts/lib/json/overview.json').success(function(response) {[m
[31m-        $scope.overviews=response;[m
[32m+[m[32m        $scope.overview=response;[m
         [m
[31m-        console.log($scope.overviews)[m
[32m+[m[32m        console.log($scope.overview)[m
     });[m
          $scope.active_overview="active";[m
     $scope.active_speaker;[m
[1mdiff --git a/www/scripts/lib/json/overview.json b/www/scripts/lib/json/overview.json[m
[1mindex 2a5d990..ab2b117 100644[m
[1m--- a/www/scripts/lib/json/overview.json[m
[1m+++ b/www/scripts/lib/json/overview.json[m
[36m@@ -1,11 +1,13 @@[m
[31m-[[m
[31m- {[m
[31m- 	"headingOne":"JS Channel Conference",[m
[31m- 	"date":"July 18 - 19, 2014",[m
[31m- 	"venue":"Hotel Taj Vivanta, Bengaluru",[m
[31m- 	"headingTwo":"Welcome to the JS Channel Conference app!",[m
[31m- 	"paraOne":"Browse around the app to find the latest agenda, session details, speaker information and venue maps.",[m
[31m- 	"paraTwo":"Join us at the JS Channel Conference in Bengaluru for an opportunity to learn and hear from the best brains in the industry. Two days of hands-on workshops and talks. A great platform to mingle with the community. As always lunch and high tea on us. We look forward to seeing you there and we hope you enjoy the mobile app.",[m
[31m- 	"paraThree":"Feel free to contact help@jschannel.com with any questions or concerns."[m
[31m- }[m
[31m-][m
\ No newline at end of file[m
[32m+[m
[32m+[m	[32m{[m
[32m+[m		[32m"welcomeNote":"Welcome to",[m
[32m+[m		[32m"subtitle":"WE, THE JAVASCRIPT PEOPLE",[m
[32m+[m		[32m"description":"Join us at the JS Channel Conference in Bengaluru for an oppurtunity to learn and hear from the best brains in the industry. Two days of hands-on workshops and talks. A great platform to mingle with the community. As always lunch and high tea on us. We look forward to seeing you there and hope you enjoy the mobile app.",[m
[32m+[m		[32m"feature1":"Browse around the app to find the latest agenda, session details, speaker information and venue maps.",[m
[32m+[m		[32m"feature2":"Takes place on July 18-19, 2014, Hotel Taj Vivanta, Bengaluru.",[m
[32m+[m		[32m"feature3":"Contact us at <a>help@jschannel.com</a> with any questions or concerns."[m
[32m+[m	[32m}[m
[41m+[m
[41m+[m
[41m+[m
[41m+[m
warning: LF will be replaced by CRLF in www/partials/overview.html.
The file will have its original line endings in your working directory.
