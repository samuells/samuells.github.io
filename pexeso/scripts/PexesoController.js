angular.module('myApp', []).constant('SW_DELAI', 1)
.factory('stopwatch', function (SW_DELAI,$timeout) {
    var data = { 
            millis: 0,
            sec: 0,
            min: 0,
            running:false
        },
        stopwatch = null;
        
    var start = function () {
    	data.running=true;
        stopwatch = $timeout(function() {
            data.millis+= data.millis === 99 ? function(){
            	data.sec+= data.sec === 59 ? function(){
            		data.min +=1;
            		return -59;
            		}() : 1;
	        	return -99;
	        	}() : 1;
            start();
        }, SW_DELAI);
    };

    var stop = function () {
        $timeout.cancel(stopwatch);
        data.running = false;
        stopwatch = null;
    };

    var reset = function () {
        stop()
        data.millis = data.sec = data.min =0;
    };

    return {
        data: data,
        start: start,
        stop: stop,
        reset: reset
    };
});

function PexesoController($scope, $timeout, stopwatch){
	$scope.myStopwatch = stopwatch;
	$scope.cards=[];
	$scope.size=16;
	var selectedCard=null;
	var comparedCard=null;
	var numOfSelections=0;
	var gameStarted=false;
	var cardsRemains = $scope.size;

	$scope.resetGame = function(){
		$scope.cards=[];
		cardsRemains = $scope.size;
		var tempCards = [];
		$scope.myStopwatch.reset();
		for (var i = 0; i < $scope.size; i++) {
			tempCards.push(i > $scope.size/2-1 ? i-$scope.size/2 : i);
		}
		for (var i = 0; i < $scope.size; i++) {
			var card = {
				id:i,
				number:tempCards.splice(Math.floor(Math.random()*tempCards.length),1)[0],
				selected:false,
				myStyle: null
			};
			$scope.cards.push(card);
		}
	}

	$scope.$watch('size', function(){
		$scope.edgeOfPlayground = Math.sqrt($scope.size) > 6 ? 12*80 : 80*Math.sqrt($scope.size);
		$scope.resetGame();
	});

	$scope.clickOnCard = function(index){
		if(!$scope.myStopwatch.data.running){
			gameStarted = true;
			$scope.myStopwatch.start();
		}
		if(numOfSelections === 2){
			selectedCard.selected = comparedCard.selected = false;
			selectedCard.myStyle = comparedCard.myStyle = null;
			selectedCard = comparedCard = null;
			numOfSelections = 0;
		}
		var card = $scope.cards[index];
		card.myStyle = card.myStyle === null ? {'background-image':"url('img/pic"+card.number+".png')"} : null;
		card.selected=!card.selected;
		numOfSelections += 1;
		selectedCard = selectedCard !== null ? compareCards(index) : card;
	}

	function compareCards(index){
		if (index === selectedCard.id){
			numOfSelections = 0;
			return null;
		}
		else if(selectedCard.number === $scope.cards[index].number){
			selectedCard.selected = $scope.cards[index].selected = 'done';
			var tempIndex = selectedCard.id;
			$timeout(function() {$scope.cards[tempIndex].myStyle = $scope.cards[index].myStyle = {'visibility':'hidden'};}, 500);
			numOfSelections = 0;
			cardsRemains-=2;
			if(!cardsRemains){
				console.log('stop!');
				$scope.myStopwatch.stop();
			}
			return null;
		}else {
			comparedCard = $scope.cards[index];
			return selectedCard;
		}
	}

}