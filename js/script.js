
var app = angular.module('pluapp', []);

app.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	"use strict";

	// Practice list
	$scope.pluList = [
		{
			'3029' : 'Satsumas',
			'4067' : 'Zuccini',
			'4227' : 'Avocado',
		},
		{
			'4252' : 'Jordgubbar',
			'94620' : 'Ekologisk Spetskål',
			'6318' : 'Äpple Svenska',
		},
		{
			'4082' : 'Rödlök',
			'4672' : 'Palsternacka',
			'4526' : 'Morot'
		},
		{
			'4697' : 'Peppar röd (chili)',
			'6746' : 'Frysta bär lösvikt',
			'4608' : 'Vitlök'
		}
	];

	/*
	// Original list
	$scope.pluList = [
		{
			'4011' : 'Banan',
			'94011' : 'Ekologisk banan',
			'4688' : 'Röd paprika',
			'4680' : 'Gul paprika',
			'4710' : 'Grön paprika',
		},
		{
			'1363' : 'Lösgodis',
			'1351' : 'Naturgodis',
			'4800' : 'Tomat',
			'4807' : 'Kvisttomater',
		},
		{
			'4082' : 'Rödlök',
			'4670' : 'Röd lök knippe',
			'4666' : 'Gullök',
			'4669' : 'Gul lök knippe',
			'3174' : 'Apelsin'
		},
		{
			'64081' : 'Aubergine styck',
			'4081' : 'Aubergine',
			'4899' : 'Bladpersilja bunt',
			'3263' : 'Blomkål',
		},
		{
			'4728' : 'Potatis',
			'4833' : 'Färskpotatis',
			'4729' : 'Bakpotatis',
			'4091' : 'Sötpotatis',
			'4450' : 'Clementin',
		},
		{
			'4318' : 'Melon cantalope',
			'3238' : 'Honungsmelon',
			'4031' : 'Vattenmelon',
			'4326' : 'Gallia melon',
			'4540' : 'Rödbetor lösvikt',
			'4645' : 'Champinjon',
		},
		{
			'4629' : 'Purjolök',
			'4745' : 'Rabarber',
			'4089' : 'Rädisor i knippe',
			'4585' : 'Rotselleri',
			'4552' : 'Salladskål'
		},
		{
			'4428' : 'Sharon',
			'4675' : 'Sockerärtor',
			'4608' : 'Vitlök',
			'4433' : 'Ananas',
			'3182' : 'Citron',
		},
		{
			'4446' : 'Granatäpple',
			'3050' : 'Vitkål',
			'3051' : 'Färsk vitkål',
			'4747' : 'Kålrot',
			'4048' : 'Lime'
		},
		{
			'4313' : 'Mango',
			'4526' : 'Morot',
			'4094' : 'Morot knippe',
			'4379' : 'Nektarin',
			'3171' : 'Fänkål',
			'3220' : 'Päron',
		},
		{
			'4672' : 'Palsternacka',
			'4397' : 'Passionsfrukt',
			'4444' : 'Plommon',
			'4650' : 'Portabella svamp',
		},
		{
			'4525' : 'Sparris',
			'64593' : 'Gurka',
			'94597' : 'Gurka eko',
			'4263' : 'Dadlar'
		},
		{
			'4061' : 'Isbergssallad',
			'4645' : 'Kantareller',
			'3279' : 'Kiwi gul',
			'4260' : 'Kokosnöt'
		},
		{
			'4520' : 'Kronärtskocka',
			'4554' : 'Rödkål',
			'4612' : 'Ingefära',
		},
		{
			'2189' : 'Hålkaka',
			'2489' : 'Trehörning',
			'2503' : 'Ljusa limpor',
			'2500' : 'Mörka limpor',
		},
		{
			'2491' : 'Ringmunk',
			'2479' : 'Fylld munk',
			'2508' : 'Vaniljhjärtan',
		},
		{
			'29970' : 'Kladdkaka',
			'2510' : 'Muffins',
			'2514' : 'Kanelbulle',
		},
		{
			'2212' : 'Östras frallor',
			'2600' : 'Östras limpor',
			'2600' : 'Östras bröd',
		}
	];
	*/

	$scope.currentSection = 0;
	$scope.currentPLU = 0;

	$scope.showAnswer = false;
	$scope.showAnswerOnce = false;

	$scope.showImageOpt = 'rand';
	$scope.showTextOpt = 'yes';
	$scope.showImage = true;
	$scope.showText = true;

	$scope.learned = {};
	$scope.learnBlacklist = [];

	$scope.learnPoints = {full: 8, half: 4};

	$scope.input = document.getElementById('entry');
	$scope.keypad = document.querySelector('#overlay-keypad');
	$scope.keypadSpaceholder = document.querySelector('#keypad-spaceholder');

	$scope.randomiseSection = false;

	$scope.isMobile = window.innerWidth < 700;

	$scope.modelsToAutoSave = [
		'currentSection',
		'showImageOpt',
		'showTextOpt',
		'randomiseSection'
	];


	$scope.init = function() {
		$scope.autoSave.loadAll();
		$scope.autoSave.setup();
	}


	$scope.autoSave = {
		loadAll: function() {
			Object.keys(localStorage).forEach(function(key){
				if($scope.modelsToAutoSave.includes(key)) {

					$scope[key] = localStorage.getItem(key);
				}
			});
		},
		setup: function() {
			angular.forEach($scope.modelsToAutoSave, function(val) {
				$scope.$watch(val, function(n) {
					$scope.autoSave.save(val, n);
				});
			});
		},
		save: function(model, value) {
			localStorage.setItem(model, value);
		}
	};


	$scope.checkValue = function(forceState) {

		// Correct
		if( $scope.currentPLU == $scope.input.value || forceState === true) {
			
			$scope.learned[$scope.currentPLU] = $scope.currentPLU in $scope.learned ? $scope.learned[$scope.currentPLU] + 1 : 1;

			// Randomise section if $scope.randomiseSection is true
			if ($scope.randomiseSection === true) {
				$scope.setRandomSection();
			}

			$scope.setNewPLU();
			$scope.input.value = '';
			$scope.showAnswerOnce = false;


		} else if(forceState === false || forceState === 'skip') {
			$scope.input.value = '';
			$scope.showAnswerOnce = true;
			$scope.learned[$scope.currentPLU] = $scope.currentPLU in $scope.learned ? $scope.learned[$scope.currentPLU] - 1 : 0;

			// If skipped with "wrong" button
			if(forceState === 'skip') {

				// Randomise section if $scope.randomiseSection is true
				if ($scope.randomiseSection === true) {
					$scope.setRandomSection();
				}

				// Set new PLU
				$scope.setNewPLU();
			}
		}
	}

	// Called from right/wrong buttons in ui
	$scope.respond = function(state) {

		// Pressed "correct"
		if(state === 'ok') {
			$scope.checkValue(true);

		// Pressed "wrong"
		} else if (state === 'wrong') {
			$scope.checkValue('skip');
		}
	}

	// Everytime a key is typed
	$scope.inputUpdate = function(e) {
		$scope.$apply(function() {

			// Clicked enter, don't know answer
			if(e.which == 32 || e.which == 13 || e.which == 188 || e.which == 186) {
				$scope.checkValue(false);

			// Normal keyup
			} else {
				$scope.checkValue();
			}

		});
	}

	$scope.getSectionCount = function() {
		return Object.keys($scope.pluList).length-1;
	}

	$scope.isFirstSection = function() {
		return $scope.currentSection === 0;
	}
	$scope.isLastSection = function() {
		return $scope.currentSection == $scope.getSectionCount();
	}

	$scope.goToNextSection = function() {
		if(!$scope.isLastSection()) {
			$scope.currentSection++;
		}
	}
	$scope.goToPreviousSection = function() {
		if(!$scope.isFirstSection()) {
			$scope.currentSection--;
		}
	}


	$scope.displayKeypad = function() {
		$scope.keypad.classList.add('visible');
		$timeout(function() {
			var height = $scope.keypad.clientHeight;
			$scope.keypadSpaceholder.style.height = height + 'px';
		}, 5);

	}
	$scope.hideKeypad = function() {
		$scope.keypad.classList.remove('visible');
		$scope.keypadSpaceholder.style.height = 0;
	}

	$scope.setNewPLU = function() {

		var items = Object.keys($scope.pluList[$scope.currentSection]),	
			learned = $scope.learned,
			black = $scope.learnBlacklist;

		// Ignore fully learned
		angular.forEach(learned, function(val, key) {
			if(val >= $scope.learnPoints.full) {
				var pos = items.indexOf(key);
				items.splice(pos, 1);
			}
		});


		// Ignore blacklisted
		angular.forEach(black, function(val) {
			if(items.includes(val)) {
				var pos = items.indexOf(val);
				items.splice(pos, 1);
			}
		});

		// If everything is learned, reset learned
		if(items.length < 1) {
			items = Object.keys($scope.pluList[$scope.currentSection]);
			$scope.clearLearnedBySession();
		}


		// If only one item left, return it
		if(items.length < 2) {
			$scope.currentPLU = items.pop();
			return true;
		}


		// Get random item from values
		var randomIndex = Math.ceil(Math.random() * items.length ) - 1,
			randomItem = items[randomIndex];

		// If same as before, randomise again
		if(randomItem === $scope.currentPLU) {
			$scope.setNewPLU();

		// New random
		} else {
			$scope.currentPLU = randomItem;
		}


		$scope.updateShowImage();
		$scope.updateShowText();
	}

	$scope.updateShowImage = function() {
		if($scope.showImageOpt == 'yes') {
			$scope.showImage = true;
		} else if($scope.showImageOpt == 'no') {
			$scope.showImage = false;
		} else if($scope.showImageOpt == 'rand') {
			$scope.showImage = Math.round(Math.random());
		}
	}
	$scope.updateShowText = function() {
		if($scope.showTextOpt == 'yes') {
			$scope.showText = true;
		} else if($scope.showTextOpt == 'no') {
			$scope.showText = false;
		} else if($scope.showTextOpt == 'rand') {
			$scope.showText = Math.round(Math.random());
		}
	}


	$scope.setRandomSection = function() {
		var rand = Math.round(Math.random() * $scope.pluList.length)-1,
			rand = rand > 0 ? rand : 0;
		$scope.currentSection = rand;
	}

	$scope.clearLearnedBySession = function() {
		angular.forEach($scope.pluList[$scope.currentSection], function(value, key) {
			if(key in $scope.learned) {
				delete $scope.learned[key];
			}
		});
	}

	$scope.getLearnedBySession = function() {
		var learned = {};

		angular.forEach($scope.pluList[$scope.currentSection], function(value, key) {
			if(key in $scope.learned) {
				learned[key] = value;
			}
		});
	}

	$scope.toggleBlacklistPLU = function(plu) {
		if($scope.learnBlacklist.includes(plu)) {
			var pos = $scope.learnBlacklist.indexOf(plu);
			$scope.learnBlacklist.splice(pos, 1);
		} else {
			$scope.learnBlacklist.push(plu);
		}
	}


	$scope.$watch('currentSection', function(n) {
		$scope.setNewPLU();
	});


	$scope.$watch('showImageOpt', function() {
		$scope.updateShowImage();
	})

	$scope.$watch('showTextOpt', function() {
		$scope.updateShowText();
	})


	$scope.input.addEventListener('keyup', function(e) {
		$scope.inputUpdate(e);
	});

	// On keypad click
	$scope.keypad.addEventListener('mouseup', function(e) {
		var send = e.target.dataset.send;
		e.stopPropagation();

		// Only register click if you actually clicked a button
		if(e.target.dataset.send === undefined) {
			return true;
		}

		if(send === 'del') {
			var spl = $scope.input.value + "";
			spl = spl.substring(0, spl.length-1);
			$scope.input.value = spl;

		// We know input is wrong
		} else if(send === 'ok') {
			$scope.input.value = '';
			$scope.showAnswerOnce = true;
			$scope.learned[$scope.currentPLU] = $scope.currentPLU in $scope.learned ? $scope.learned[$scope.currentPLU] - 1 : 0;
		} else {
			$scope.input.value += send;
		}

		e.target.classList.add('keypress');
		$timeout(function() {
			e.target.classList.remove('keypress');
		}, 100);

		$scope.input.focus();
		$scope.$apply();
	});

	// Input focus
	$scope.input.addEventListener('focus', function(e) {
		$scope.inputUpdate(e);
		$scope.displayKeypad();
	});

	// Click anywhere outside input to close
	// Keypad not included because stopPropagation
	document.addEventListener('mouseup', function(e) {
		if(e.target.nodeName !== 'INPUT') {
			$scope.hideKeypad();
		}
	});


	// For use in index.html
	$scope.parseInt = parseInt;


	$scope.init();

}]);