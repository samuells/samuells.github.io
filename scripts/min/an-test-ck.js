var module = angular.module('samuellsPortfolio', []);
module.directive('threepoint', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div class="delimeter"><div class="circle"></div><div class="circle"></div><div class="circle"></div></div>',
		// templateUrl: '',
		replace: true
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {
			
		// }
	};
});
module.directive('samJob', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'job.html',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {
			
		// }
	};
});

function dataController($scope){
	$scope.text = 'hello world';
	$scope.jobs = [{name:'Freelancer',
					duration:'April 2014 - Present',
					projects:'AngularJS Pexeso, Iteas website',
					techs:'AngularJS, HTML5, CSS3, JavaScript, Modernizr, jQuery',
					info:'Mostly learning german language and web technologies. I have made first steps in the field of the AngularJS. Improved my JavaScript, HTML5 and CSS3 skills. Start using Sass.',
					show:false},
					{name:'Java Developer',
					employer:'Gratex International, a.s.',
					duration:'February 2013 - March 2014',
					projects:'Insurance Software  - UPM',
					techs:'Java, Groovy, Spock MongoDB, Spring, AJAX/AJAJ, REST, Javascript',
					info:'I was a part of team responsible for development of business layer of insurance system for various companies. My tasks were to understand and develop business layer of system in Java, than design screens and communicate whole process with GUI team (data interchange, data processing and data saving to DB). I also participated on the development of backend of application (parts of framework) and occasionally created js or bash scripts for various purpose. I have worked with following technologies/technics: Java7, MongoDB, GIT, Groovy, Spring, AJAJ, REST, JavaScript, Bash.',
					show:false},
					{name:'Business Software Analyst',
					employer:'Gratex International AUST Pty Ltd',
					duration:'November 2012 - February 2013',
					projects:'Insurance Projects (Petsure, Protecsure)',
					techs:'UML2.0, BPMN, Enterprise Architect, MS Navision, MS Visio',
					info:'I was responsible to create a specification of new part of insurance project. I communicated with customer in English and also presented our progress. Main part of my work was to design various UML2 and BPMN diagrams in Enterprise Architect and explain this process to other team members. System was developed in MS Navision.',
					show:false},
					{name:'Software Analyst',
					employer:'Gratex International, a.s.',
					duration:'Novomber 2010 - October 2012',
					projects:'Goverment & Insurance Projects (RIMIS, UPM, UMPS)',
					techs:'UML2.0, BPMN, SQL, Enterprise Architect, MS Navision, MS Visio',
					info:'Placeholder',
					show:false},
					{name:'Web Developer (Internship)',
					employer:'IBM',
					employerUrl:'http://www.ibm.com/sk/sk/',
					duration:'July 2010 - October 2010',
					projects:'Smarter Planet',
					techs:'UML2.0, BPMN, SQL, Enterprise Architect, MS Navision, MS Visio',
					info:'I was a part of the team in Slovakia, which created and managed Smart Planet websites, develop the websites using the IBM content management system and communication with colleagues in English language',
					show:false}
					];
}