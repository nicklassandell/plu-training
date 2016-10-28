
var app = angular.module('pluapp', []);

app.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	"use strict";

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
			'4729' : 'Bakpotatis',
			'4899' : 'Bladpersilja bunt',
			'3263' : 'Blomkål'
		},
		{
			'4645' : 'Champinjon',
			'3182' : 'Citron',
			'4450' : 'Clementin',
			'3171' : 'Fänkål',
			'4833' : 'Färskpotatis',
		},
		{
			'4326' : 'Gallia melon',
			'4728' : 'Potatis',
			'4629' : 'Purjolök',
			'3220' : 'Päron',
			'4540' : 'Rödbetor lösvikt',
		},
		{
			'4745' : 'Rabarber',
			'4089' : 'Rädisor i knippe',
			'4585' : 'Rotselleri',
			'4552' : 'Salladskål'
		},
		{
			'4428' : 'Sharon',
			'4675' : 'Sockerärtor',
			'4091' : 'Sötpotatis',
			'4608' : 'Vitlök',
			'4433' : 'Ananas'
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
			'4318' : 'Melon cantalope',
			'4526' : 'Morot',
			'4094' : 'Morot knippe',
			'4379' : 'Nektarin'
		},
		{
			'4672' : 'Palsternacka',
			'4397' : 'Passionsfrukt',
			'4444' : 'Plommon',
			'4650' : 'Portabella svamp',
			'4263' : 'Dadlar'
		},
		{
			'3238' : 'Honungsmelon',
			'4525' : 'Sparris',
			'64593' : 'Gurka',
			'4612' : 'Ingefära',
			'4031' : 'Vattenmelon'
		},
		{
			'94597' : 'Gurka eko',
			'4061' : 'Isbergssallad',
			'4645' : 'Kantareller',
			'3279' : 'Kiwi gul',
			'4260' : 'Kokosnöt'
		},
		{
			'4520' : 'Kronärtskocka',
			'4554' : 'Rödkål',
			'2514' : 'Kanelbulle',
			'2508' : 'Vaniljhjärtan',
			'2600' : 'Östras limpor'
		},
		{
			'2189' : 'Hålkaka',
			'2489' : 'Trehörning',
			'2503' : 'Ljusa limpor',
			'2500' : 'Mörka limpor',
			'29970' : 'Kladdkaka'
		},
		{
			'2479' : 'Fylld munk',
			'2491' : 'Ringmunk',
			'2510' : 'Muffins',
			'2212' : 'Östras frallor',
			'2600' : 'Östras bröd',
		}
	];
	$scope.currentSection = 0;
	$scope.currentPLU = 0;

	$scope.showAnswer = false;
	$scope.showAnswerOnce = false;
	$scope.showImageOrText = 1;
	$scope.input = document.getElementById('entry');

	$scope.learned = {};
	$scope.learnBlacklist = [];

	$scope.learnPoints = {full: 8, half: 4};



	$scope.checkValue = function() {

		// Correct
		if( $scope.currentPLU == $scope.input.value ) {
			
			$scope.learned[$scope.currentPLU] = $scope.currentPLU in $scope.learned ? $scope.learned[$scope.currentPLU] + 1 : 1;

			$scope.setNewPLU();
			$scope.input.value = '';
			$scope.showAnswerOnce = false;

		}
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

	$scope.setNewPLU = function() {

		var items = Object.keys($scope.pluList[$scope.currentSection]),	
			learned = $scope.learned,
			black = $scope.blacklisted;


		// Ignore fully learned
		angular.forEach(learned, function(val, key) {
			if(val >= $scope.learnPoints.full) {
				var pos = items.indexOf(key);
				items.splice(pos, 1);
			}
		});

		// If everything is learned, reset learned
		if(items.length < 1) {
			items = Object.keys($scope.pluList[$scope.currentSection]);
			$scope.clearLearnedBySession();
		}


		// Ignore blacklisted
		angular.forEach(black, function(val) {
			var pos = items.indexOf(val);
			items.splice(pos, 1);
		});


		// If only one item left, return it
		if(items.length < 2) {
			$scope.currentPLU = items.pop();
			return true;
		}


		// Get random item from values
		var randomIndex = Math.ceil(Math.random() * items.length) -1,
			randomItem = items[randomIndex];

		// If same as before, randomise again
		if(randomItem === $scope.currentPLU) {
			$scope.setNewPLU();

		// New random
		} else {
			$scope.currentPLU = randomItem;
		}

		// Randomise img vs text
		$scope.showImageOrText = Math.round(Math.random());
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

	$scope.input.addEventListener('keyup', function(e) {
		$scope.$apply(function() {

			// Clicked enter, pass
			if(e.which == 32 || e.which == 13 || e.which == 188 || e.which == 186) {
				$scope.input.value = '';
				$scope.showAnswerOnce = true;
				$scope.learned[$scope.currentPLU] = $scope.currentPLU in $scope.learned ? $scope.learned[$scope.currentPLU] - 1 : 0;
			
			// Normal keyup
			} else {
				$scope.checkValue();
			}

		});
	});

	// For use in index.html
	$scope.parseInt = parseInt;

}]);