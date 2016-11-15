
var app = angular.module('pluapp', []);

app.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	"use strict";

	$scope.settings = {};

	/*
	// Practice list
	$scope.settings.pluList = [
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
			'4697' : 'Peppar röd (chili)',
			'6746' : 'Frysta bär lösvikt',
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

	// More complete list, sorted alphabetically (mostly)
	$scope.settings.pluList = [
		{
			'4433' : 'Ananas liten',
			'4081' : 'Aubergine',
			'3174' : 'Apelsin',
			'4227' : 'Avocado',
		},

		{
			'4011' : 'Bannan',
			'94011' : 'Ekologisk banan',
			'3263' : 'Blomkål',
		},

		{
			'3182' : 'Citron',
			'4645' : 'Champinjon',
			'4646' : 'Champinjon Kastanj',
			'4450' : 'Clementin',
		},

		{
			'7500' : 'Drick back',
			'4263' : 'Dadlar',
		},

		{
			'3171' : 'Fänkål',
			'6746' : 'Frysta bär',
			'4612' : 'Ingefära',
		},

		{
			'4297' : 'Grapefrukt',
			'4888' : 'Gräslök knippe',
			'4446' : 'Granat äpple',
			'64593' : 'Gurka',
		},

		{
			'4647' : 'Kantarell',
			'4030' : 'Kiwi',
			'94030' : 'Kiwi Ekologisk',
			'3279' : 'Kiwi gul',
			'4260' : 'Kokosnöt',
		},

		{
			'4048' : 'Lime',
			'1363' : 'Lösgodis',
			'1351' : 'Naturgodis',
		},

		{
			'4662' : 'Schalottenlök',
			'4666' : 'Gullök',
			'4082' : 'Rödlök',
			'4608' : 'Vitlök',
			'4629' : 'Purjolök',
		},

		{
			'4562' : 'Morot',
			'4313' : 'Mango',
			'1212' : 'Musli',
			'4379' : 'Nektarin',
		},

		{
			'4031' : 'Vattenmelon hel',
			'4326' : 'Galia melon',
			'4318' : 'Cataloupe melon',
			'4317' : 'Honungsmelon',
			'3101' : 'Prel de sabo (Grodskinnsmelon)',
		},

		{
			'4672' : 'Palsternacka',
			'4404' : 'Persika',
			'4397' : 'Passionsfrukt',
			'4444' : 'Plommon',
			'4650' : 'Portabella svamp',
			'4899' : 'Bladpersilja bunt',
		},

		{
			'4728' : 'Potatis',
			'6405' : 'Potatis säck',
			'4833' : 'Färskpotatis',
			'4091' : 'Sötpotatis',
			'4729' : 'Bakpotatis',
		},

		{
			'4688' : 'Paprika röd',
			'4680' : 'Paprika gul',
			'4710' : 'Paprika grön',
			'4697' : 'Peppar röd (chili)',
		},

		{
			'4089' : 'Rädisa',
			'4540' : 'Rödbeta',
			'4585' : 'Rotselleri',
			'4554' : 'Rödkål',
		},

		{
			'4061' : 'Sallad isberg',
			'1991' : 'Salladsbar',
			'4428' : 'Sharon/Kaki',
			'94620' : 'Spetskål',
		},

		{
			'4800' : 'Tomat (svensk)',
			'4807' : 'Kvisttomat',
			'4799' : 'Coctail Tomat',
		},

		{
			'3050' : 'Vitkål',
			'3051' : 'Vitkål färsk',
			'4067' : 'Zuccini',
			'6318' : 'Äpplen svenska'
		}
	]

	$scope.settings.currentSection = 0;
	$scope.settings.currentPLU = 0;

	$scope.settings.showAnswer = false;
	$scope.settings.showAnswerOnce = false;

	$scope.settings.showImageOpt = 'rand';
	$scope.settings.showTextOpt = 'yes';
	$scope.settings.showImage = true;
	$scope.settings.showText = true;

	$scope.settings.learned = {};
	$scope.settings.learnBlacklist = [];

	$scope.settings.learnPoints = {full: 8, half: 4};

	$scope.settings.input = document.getElementById('entry');
	$scope.settings.keypad = document.querySelector('#overlay-keypad');
	$scope.settings.keypadSpaceholder = document.querySelector('#keypad-spaceholder');

	$scope.settings.randomiseSection = false;
	$scope.settings.randomisePLU = false;

	$scope.settings.isMobile = window.innerWidth < 700;

	$scope.settings.modelsToAutoSave = [
		'currentSection',
		'showImageOpt',
		'showTextOpt',
		'randomiseSection',
		'randomisePLU'
	];


	$scope.init = function() {
		$scope.autoSave.loadAll();
		$scope.autoSave.setup();
	}


	$scope.autoSave = {
		loadAll: function() {
			Object.keys(localStorage).forEach(function(key){
				if($scope.settings.modelsToAutoSave.includes(key)) {

					var val = localStorage.getItem(key);

					if(val === 'false') {
						val = false;
					} else if(val === 'true') {
						val = true;
					}

					if(val == parseInt(val)) {
						val = parseInt(val);
					}

					$scope.settings[key] = val;
				}
			});
		},
		setup: function() {
			angular.forEach($scope.settings.modelsToAutoSave, function(val) {
				$scope.$watch('settings.' + val, function(n) {
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
		if( $scope.settings.currentPLU == $scope.settings.input.value || forceState === true) {
			
			$scope.settings.learned[$scope.settings.currentPLU] = $scope.settings.currentPLU in $scope.settings.learned ? $scope.settings.learned[$scope.settings.currentPLU] + 1 : 1;

			// Randomise section if $scope.settings.randomiseSection is true
			if ($scope.settings.randomiseSection === true) {
				$scope.setRandomSection();
			}

			$scope.setNewPLU();
			$scope.settings.input.value = '';
			$scope.settings.showAnswerOnce = false;


		} else if(forceState === false || forceState === 'skip') {
			$scope.settings.input.value = '';
			$scope.settings.showAnswerOnce = true;
			$scope.settings.learned[$scope.settings.currentPLU] = $scope.settings.currentPLU in $scope.settings.learned ? $scope.settings.learned[$scope.settings.currentPLU] - 1 : 0;

			// If skipped with "wrong" button
			if(forceState === 'skip') {

				// Randomise section if $scope.settings.randomiseSection is true
				if ($scope.settings.randomiseSection === true) {
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
	$scope.settings.inputUpdate = function(e) {
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
		return Object.keys($scope.settings.pluList).length-1;
	}

	$scope.isFirstSection = function() {
		return $scope.settings.currentSection === 0;
	}
	$scope.isLastSection = function() {
		return $scope.settings.currentSection == $scope.getSectionCount();
	}

	$scope.goToNextSection = function() {
		if(!$scope.isLastSection()) {
			$scope.settings.currentSection++;
		}
	}
	$scope.goToPreviousSection = function() {
		if(!$scope.isFirstSection()) {
			$scope.settings.currentSection--;
		}
	}


	$scope.displayKeypad = function() {
		$scope.settings.keypad.classList.add('visible');
		$timeout(function() {
			var height = $scope.settings.keypad.clientHeight;
			$scope.settings.keypadSpaceholder.style.height = height + 'px';
		}, 5);

	}
	$scope.hideKeypad = function() {
		$scope.settings.keypad.classList.remove('visible');
		$scope.settings.keypadSpaceholder.style.height = 0;
	}

	$scope.setNewPLU = function() {

		var items = Object.keys($scope.settings.pluList[$scope.settings.currentSection]),	
			learned = $scope.settings.learned,
			black = $scope.settings.learnBlacklist;

		// Ignore fully learned
		angular.forEach(learned, function(val, key) {
			if(val >= $scope.settings.learnPoints.full) {
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
			items = Object.keys($scope.settings.pluList[$scope.settings.currentSection]);
			$scope.clearLearnedBySession();
		}


		// If only one item left, return it
		if(items.length < 2) {
			$scope.settings.currentPLU = items.pop();
			return true;
		}

		// Randomize PLU
		if($scope.settings.randomisePLU) {

			// Get random item from values
			var randomIndex = Math.ceil(Math.random() * items.length ) - 1,
				randomItem = items[randomIndex];

			// If same as before, randomise again
			if(randomItem === $scope.settings.currentPLU) {
				$scope.setNewPLU();

			// New random
			} else {
				$scope.settings.currentPLU = randomItem;
			}

		// Not random, get the preceeding PLU
		} else {

			// First run, no current PLU, get first one
			if($scope.settings.currentPLU === 0) {
				$scope.settings.currentPLU = items[0];
			

			// Not first run, get preceeding
			} else {
				var currIndex = items.indexOf($scope.settings.currentPLU);
				if(currIndex+1 in items) {
					$scope.settings.currentPLU = items[ currIndex+1 ];
				} else {
					$scope.settings.currentPLU = items[0];
				}
			}


		}



		$scope.updateShowImage();
		$scope.updateShowText();
	}

	$scope.updateShowImage = function() {
		if($scope.settings.showImageOpt == 'yes') {
			$scope.settings.showImage = true;
		} else if($scope.settings.showImageOpt == 'no') {
			$scope.settings.showImage = false;
		} else if($scope.settings.showImageOpt == 'rand') {
			$scope.settings.showImage = Math.round(Math.random());
		}
	}
	$scope.updateShowText = function() {
		if($scope.settings.showTextOpt == 'yes') {
			$scope.settings.showText = true;
		} else if($scope.settings.showTextOpt == 'no') {
			$scope.settings.showText = false;
		} else if($scope.settings.showTextOpt == 'rand') {
			$scope.settings.showText = Math.round(Math.random());
		}
	}


	$scope.setRandomSection = function() {
		var rand = Math.round(Math.random() * $scope.settings.pluList.length)-1,
			rand = rand > 0 ? rand : 0;
		$scope.settings.currentSection = rand;
	}

	$scope.clearLearnedBySession = function() {
		angular.forEach($scope.settings.pluList[$scope.settings.currentSection], function(value, key) {
			if(key in $scope.settings.learned) {
				delete $scope.settings.learned[key];
			}
		});
	}

	$scope.getLearnedBySession = function() {
		var learned = {};

		angular.forEach($scope.settings.pluList[$scope.settings.currentSection], function(value, key) {
			if(key in $scope.settings.learned) {
				learned[key] = value;
			}
		});
	}

	$scope.toggleBlacklistPLU = function(plu) {
		if($scope.settings.learnBlacklist.includes(plu)) {
			var pos = $scope.settings.learnBlacklist.indexOf(plu);
			$scope.settings.learnBlacklist.splice(pos, 1);
		} else {
			$scope.settings.learnBlacklist.push(plu);
		}
	}


	$scope.$watch('settings.currentSection', function(n) {
		$scope.setNewPLU();
	});


	$scope.$watch('settings.showImageOpt', function() {
		$scope.updateShowImage();
	})

	$scope.$watch('settings.showTextOpt', function() {
		$scope.updateShowText();
	})


	$scope.settings.input.addEventListener('keyup', function(e) {
		$scope.settings.inputUpdate(e);
	});

	// On keypad click
	$scope.settings.keypad.addEventListener('mouseup', function(e) {
		var send = e.target.dataset.send;
		e.stopPropagation();

		// Only register click if you actually clicked a button
		if(e.target.dataset.send === undefined) {
			return true;
		}

		if(send === 'del') {
			var spl = $scope.settings.input.value + "";
			spl = spl.substring(0, spl.length-1);
			$scope.settings.input.value = spl;

		// We know input is wrong
		} else if(send === 'ok') {
			$scope.settings.input.value = '';
			$scope.settings.showAnswerOnce = true;
			$scope.settings.learned[$scope.settings.currentPLU] = $scope.settings.currentPLU in $scope.settings.learned ? $scope.settings.learned[$scope.settings.currentPLU] - 1 : 0;
		} else {
			$scope.settings.input.value += send;
		}

		e.target.classList.add('keypress');
		$timeout(function() {
			e.target.classList.remove('keypress');
		}, 100);

		$scope.settings.input.focus();
		$scope.$apply();
	});

	// Input focus
	$scope.settings.input.addEventListener('focus', function(e) {
		$scope.settings.inputUpdate(e);
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