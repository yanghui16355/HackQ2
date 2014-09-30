<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>LCT</title>

		<!-- Bootstrap -->

		<!-- c:url value="/resources/logo.png" /-->

		<link href="<c:url value='/resources/css/bootstrap.min.css'/>" rel="stylesheet">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
		<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">LCT</a>
				</div>
				<div class="navbar-collapse collapse">
					<form class="navbar-form navbar-right" role="form">
						<div class="form-group">
							<input type="text" placeholder="Start time" class="form-control">
						</div>
						<div class="form-group">
							<input type="password" placeholder="End time" class="form-control">
						</div>
						<button type="submit" class="btn btn-success">
							Sign in
						</button>
					</form>
				</div><!--/.navbar-collapse -->
			</div>
		</div>


		<!-- hidden model -->
		<%@ include file="detail.jsp" %>

		<!-- hidden model -->
			
		<!-- Main jumbotron for a primary marketing message or call to action -->
		<div class="jumbotron" id="main_jumbotorn">
			<div class="container">
				<h1>Expedia LCT Message Flow DashBoard</h1>
				<p>
					descriptions about LCT
				</p>
			</div>
		</div>
		<!-- end jumbo -->
        <p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal">
            Expedia.com ---------> Hilton ---------> Expedia.com &raquo;</a></p>
        <p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal">
            Expedia.com ---------> Hilton ---------> Expedia.com &raquo;</a></p>
        <p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal">
            Expedia.com ---------> Hilton ---------> Expedia.com &raquo;</a></p>
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="<c:url value='/resources/js/bootstrap.min.js'/>"></script>
		<script src="<c:url value='/resources/pages/js/load.js'/>"></script>
	</body>
</html>