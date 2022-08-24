/* check if there are already stored truth and dare items and give users the choice to use them or set default */
if (localStorage.getItem("truths") && localStorage.getItem("dares")) {
	if (confirm("Do you want to use your saved truths and dares?")) {
		var truthsGet = localStorage.getItem("truths");
		var truths = JSON.parse(truthsGet);

		var daresGet = localStorage.getItem("dares");
		var dares = JSON.parse(daresGet);
	} else {
		localStorage.clear();
		var truths = new Array(
			"Have you ever kissed an animal?",
			"Have you ever cheated on a test?",
			"What was the last thing you ate?",
			"Do you have any unusual talents?",
			"Do you have any phobias?",
			"Have you ever used someone else's password?",
			"Have you ever ridden the bus without paying the fare?",
			"Do you message people during your classes?",
			"Have you ever fallen asleep during a class?",
			"Have you ever bitten a toenail?",
			"Have you ever stolen something?",
			"Are you a hard-working student?",
			"What was the best day of you life?",
			"What was the strangest dream you ever had?",
			"What is the most annoying thing to you (pet peeve)?",
			"If you could have a superpower, what would it be?",
			"Who is most important to you?"
		);

		var dares = new Array(
			"Sing a song.",
			"Post 'I love English!' on social media.",
			"Say the English alphabet backwards.",
			"Give someone near you a compliment.",
			"Show the last photo you took with your phone.",
			"Do your best dance.",
			"Act like a cat.",
			"Act like a monkey and a donkey at the same time.",
			"Introduce yourself to someone you don't know.",
			"Smell the inside of your shoe.",
			"Call someone and ask if they believe in aliens.",
			"Act like a pirate.",
			"Talk about the last time you apologized.",
			"Act like you are swimming.",
			"Say the months of the year backwards."
		);
	}
} else {
	/* if there is no local storage, set the default truth and dares */
	var truths = new Array(
		"Have you ever kissed an animal?",
		"Have you ever cheated on a test?",
		"What was the last thing you ate?",
		"Do you have any unusual talents?",
		"Do you have any phobias?",
		"Have you ever used someone else's password?",
		"Have you ever ridden the bus without paying the fare?",
		"Do you message people during your classes?",
		"Have you ever fallen asleep during a class?",
		"Have you ever bitten a toenail?",
		"Have you ever stolen something?",
		"Are you a hard-working student?",
		"What was the best day of you life?",
		"What was the strangest dream you ever had?",
		"What is the most annoying thing to you (pet peeve)?",
		"If you could have a superpower, what would it be?",
		"Who is most important to you?"
	);

	var dares = new Array(
		"Sing a song.",
		"Post 'I love English!' on social media.",
		"Say the English alphabet backwards.",
		"Give someone near you a compliment.",
		"Show the last photo you took with your phone.",
		"Do your best dance.",
		"Act like a cat.",
		"Act like a monkey and a donkey at the same time.",
		"Introduce yourself to someone you don't know.",
		"Smell the inside of your shoe.",
		"Call someone and ask if they believe in aliens.",
		"Act like a pirate.",
		"Talk about the last time you apologized.",
		"Act like you are swimming.",
		"Say the months of the year backwards."
	);
}

/* helper for JQuery control of the Animate.css library */
var animationEnd =
	"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

/* global variables*/
var truthNum = truths.length;
var dareNum = dares.length;
var statementSpace = document.getElementById("statementSpace");
var resetSpace = document.getElementById("resetSpace");
var customizeButton = document.getElementById("customize");
var truthsList = document.getElementById("newTruthList");
var daresList = document.getElementById("newDareList");
var i;

/* display on load */
statementSpace.innerHTML = "<p>or</p>";
resetSpace.innerHTML =
	'<button class="btn btn-block white-bg black-color" id="customize"><span class="fa fa-pencil"></span></button>';
$("#customize")
	.addClass("animated fadeIn")
	.one(animationEnd, function () {
		$(this).removeClass("animated fadeIn");
	});

/* interactions through button clicks / touches */

/* modal to display possible truth and dare choices */
document.getElementById("review").addEventListener("click", function () {
	document.getElementById("truthList").innerHTML = "";
	for (i = 0; i < truths.length; i++) {
		document.getElementById("truthList").innerHTML +=
			'<li class="list-group-item">' + truths[i] + "</li>";
	}

	document.getElementById("dareList").innerHTML = "";
	for (i = 0; i < dares.length; i++) {
		document.getElementById("dareList").innerHTML +=
			'<li class="list-group-item">' + dares[i] + "</li>";
	}
});

/* truth question display */
document.getElementById("truth").addEventListener("click", function () {
	statementSpace.innerHTML = "";
	resetSpace.innerHTML = "";
	resetSpace.innerHTML =
		'<button class="btn btn-block black-bg white-color" id="reset"><span class="fa fa-home"></span></button>';
	reset();

	var num = Math.floor(Math.random() * truths.length);
	var truth = truths[num];
	statementSpace.innerHTML = '<p class="animated zoomIn">' + truth + "</p>";

	$("#truth").addClass("animated fadeOut");
	$("#truth").css("display", "none");

	$("#dare").addClass("animated fadeOut");
	$("#dare").css("display", "none");

	$("#reset").removeClass("animated fadeOut");
	$("#reset").addClass("animated fadeIn white-color");
	$("#reset").css("display", "block");
});

/* dare challenge display */
document.getElementById("dare").addEventListener("click", function () {
	statementSpace.innerHTML = "";
	resetSpace.innerHTML = "";
	resetSpace.innerHTML =
		'<button class="btn btn-block black-bg white-color" id="reset"><span class="fa fa-home"></span></button>';
	reset();

	var num = Math.floor(Math.random() * dares.length);
	var dare = dares[num];
	statementSpace.innerHTML = '<p class="animated zoomIn">' + dare + "</p>";

	$("#truth").addClass("animated fadeOut");
	$("#truth").css("display", "none");

	$("#dare").addClass("animated fadeOut");
	$("#dare").css("display", "none");

	$("#reset").removeClass("animated fadeOut");
	$("#reset").addClass("animated fadeIn white-color");
	$("#reset").css("display", "block");
});

/* to return to the home display */
var reset = function () {
	document.getElementById("reset").addEventListener("click", function () {
		$("#truth").css("display", "block");
		$("#dare").css("display", "block");

		$("#reset").removeClass("animated fadeIn white-color");
		$("#reset").addClass("animated fadeOut");
		$("#reset").css("display", "none");

		statementSpace.innerHTML = "";

		$("#truth").removeClass("animated fadeOut");
		$("#truth").addClass("animated fadeIn");
		$("#truth").css("display", "block");

		$("#dare").removeClass("animated fadeOut");
		$("#dare").addClass("animated fadeIn");
		$("#dare").css("display", "block");

		statementSpace.innerHTML = '<p class="animated zoomIn">or</p>';
		resetSpace.innerHTML =
			'<button class="btn btn-block white-bg black-color" id="customize"><span class="fa fa-pencil"></span></button>';
		customizeActivity();
	});
};

/* to initalize option to edit truth and dare options */
var customizeActivity = function () {
	customize.addEventListener("click", function () {
		var play = document.getElementById("play");
		$(play).css("display", "none");

		var edit = document.getElementById("edit");
		$(edit).css("display", "block");
		$(edit)
			.addClass("animated slideInUp")
			.one(animationEnd, function () {
				$(this).removeClass("animated slideInUp");
			});

		loadTruthsList();
	});
};
customizeActivity();

/* display, add, and delete truth items */
var loadTruthsList = function () {
	document.getElementById("newTruthList").innerHTML = "";
	for (i = 0; i < truths.length; i++) {
		document.getElementById("newTruthList").innerHTML +=
			'<li class="list-group-item" id="' +
			i +
			'"><button class="badge truth-badge btn" id="badge' +
			i +
			'">-</button>' +
			truths[i] +
			"</li>";
	}

	truthBadgeClick();
	moveNext();
};

var truthBadgeClick = function () {
	var truthBadge = document.getElementsByClassName("truth-badge");

	var removeTruth = function () {
		var $this = $(this);
		var parentId = $this.parent().attr("id");
		truths.splice(parentId, 1);
		loadTruthsList();
	};

	for (i = 0; i < truthBadge.length; i++) {
		truthBadge[i].addEventListener("click", removeTruth, false);
	}
};

var addTruth = function () {
	var checkTruthButton = document.getElementById("checkTruthButton");
	checkTruthButton.addEventListener("click", function () {
		var newTruth = document.getElementById("truthInput").value;
		truths.unshift(newTruth);
		loadTruthsList();
		document.getElementById("truthInput").value = "";
	});

	$("#truthInput").keyup(function (e) {
		if (e.which === 13) {
			var newTruth = document.getElementById("truthInput").value;
			truths.unshift(newTruth);
			loadTruthsList();
			document.getElementById("truthInput").value = "";
		}
	});
};

addTruth();

/* move to dare input */
var moveNext = function () {
	document.getElementById("next").addEventListener("click", function () {
		$("#newDareList").css("display", "block");
		$("#newDareList")
			.addClass("animated fadeIn")
			.one(animationEnd, function () {
				$(this).removeClass("animated fadeIn");
			});
		$("#newTruthList").css("display", "none");
		$("#next").css("display", "none");
		$("#save").css("display", "block");
		$("#truthInput").css("display", "none");
		$("#checkTruthButton").css("display", "none");
		$("#dareInput").css("display", "inline");
		$("#dareInput")
			.addClass("animated flipInX")
			.one(animationEnd, function () {
				$(this).removeClass("animated flipInX");
			});

		loadDaresList();
		$("#checkDareButton").css("display", "inline");
	});
};

/* display, add, and delete dare items */
var loadDaresList = function () {
	document.getElementById("newDareList").innerHTML = "";
	for (i = 0; i < dares.length; i++) {
		document.getElementById("newDareList").innerHTML +=
			'<li class="list-group-item" id="' +
			i +
			'"><button class="badge dare-badge btn" id="badge' +
			i +
			'">-</button>' +
			dares[i] +
			"</li>";
	}

	dareBadgeClick();
	updateLists();
};

var dareBadgeClick = function () {
	var dareBadge = document.getElementsByClassName("dare-badge");

	var removeDare = function () {
		var $this = $(this);
		var parentId = $this.parent().attr("id");
		dares.splice(parentId, 1);
		loadDaresList();
	};

	for (i = 0; i < dareBadge.length; i++) {
		dareBadge[i].addEventListener("click", removeDare, false);
	}
};

var addDare = function () {
	var checkDareButton = document.getElementById("checkDareButton");
	checkDareButton.addEventListener("click", function () {
		var newDare = document.getElementById("dareInput").value;
		dares.unshift(newDare);
		loadDaresList();
		document.getElementById("dareInput").value = "";
	});

	$("#dareInput").keypress(function (e) {
		if (e.which === 13) {
			var newDare = document.getElementById("dareInput").value;
			dares.unshift(newDare);
			loadDaresList();
			document.getElementById("dareInput").value = "";
		}
	});
};

addDare();

/* update truth and dare arrays and save to local storage */
var updateLists = function () {
	document.getElementById("save").addEventListener("click", function () {
		$("#edit").css("display", "none");
		$("#next").css("display", "block");
		$("#play").css("display", "block");
		$("#play")
			.addClass("animated slideInDown")
			.one(animationEnd, function () {
				$(this).removeClass("animated slideInDown");
			});
		$("#newTruthList").css("display", "block");
		$("#newDareList").css("display", "none");
		$("#truthInput").css("display", "inline");
		$("#checkTruthButton").css("display", "inline");
		$("#dareInput").css("display", "none");
		$("#checkDareButton").css("display", "none");

		$("#save").css("display", "none");
		$("#customize")
			.addClass("animated fadeIn")
			.one(animationEnd, function () {
				$(this).removeClass("animated fadeIn");
			});

		localStorage.setItem("truths", JSON.stringify(truths));
		localStorage.setItem("dares", JSON.stringify(dares));
	});
};
