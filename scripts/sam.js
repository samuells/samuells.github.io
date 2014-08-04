var module = angular.module('samuellsPortfolio', []);
module.directive('samJob', function(){
	// Runs during compile
	return {
		// name: '',
		priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'job.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {
			
		// }
	};
});
module.directive('samCercou', function(){
	// Runs during compile
	return {
		// name: '',
		priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'cercou.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {
			
		// }
	};
});
module.directive('samEdu', function(){
	// Runs during compile
	return {
		// name: '',
		priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'education.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {
			
		// }
	};
});

module.directive("sizing", function($window){
    return function(scope, element, attrs){
        angular.element($window).bind("scroll",function(){
            scope.size = (30-this.pageYOffset/10) >= 16 ? 30-this.pageYOffset/10 : scope.size;
            scope.offset=this.pageYOffset;
            scope.$apply();
        });
    };
});

module.directive("pinning", function($window){
    return function(scope, element, attrs){
        angular.element($window).bind("scroll",function(){
            if (this.pageYOffset >= 136) {
                 scope.pinned = true;
             } else {
                 scope.pinned = false;
                 
             }
            scope.$apply();
        });
    };
});

module.directive("samFilling", function($window){
    return{
    	scope:{lang:'=lang'},
    	link:function(scope, element, attrs){
    		scope.element=element;
    		// scope.elementOffsetTop=scope.element[0].offsetTop;
	        angular.element($window).bind("scroll",function(){
	   //      	console.log(scope.element.offsetTop);
	   //  		scope.height=$window.innerHeight;
				// scope.page=$window.pageYOffset;

				// console.log($window.innerHeight +'+'+ $window.pageYOffset +'-'+ scope.element[0].offsetTop);
				// console.log(scope.lang);
				// console.log(scope.circles);
				// console.log(scope.element[0].offsetTop);
				// console.log(scope.element[0].offsetTop +'-'+ $window.innerHeight +'-'+ $window.pageYOffset)
				// console.log(scope.element[0].offsetTop - $window.innerHeight - $window.pageYOffset)
				// console.log(scope.lang);
				if(!scope.lang && scope.element[0].offsetTop < ($window.innerHeight + $window.pageYOffset)){
					scope.lang=true;
					// console.log('changed');
				}
	            scope.$apply();
	        });
	    }
    } 
});


function dataController($window, $scope){
	$scope.circles={
		en:false,
		de:false,
		sk:false,
		cz:false
		}
	$scope.tlang=$window.navigator.userLanguage || $window.navigator.language;
	$scope.lang=/^de-?.?.?$/.exec($scope.tlang)===null ? ($scope.tlang!=='sk' ? 'en':'sk') : 'de';
	$scope.fakeDB={	
		labels:{
			readme:{
				en:'Read me',
				de:'Lesen Sie mich',
				sk:'Prečítaj si viac'
			},
			hideme:{
				en:'Hide me',
				de:'Versteck mich',
				sk:'Skry ma'
			},
			recpro:{
				en:'Recent Projects',
				de:'Neueste Projekte',
				sk:'Aktuálne Projekty'
			},
			techskills:{
				en:'Technical Skills',
				de:'Technische Fähigkeiten',
				sk:'Skily'
			},
			workexp:{
				en:'Work Experience',
				de:'Berufserfahrung',
				sk:'Skúsenosti'
			},
			lang:{
				en:'Languages',
				de:'Sprache',
				sk:'Jazyky',
				english:{
					en:'English',
					de:'Englisch',
					sk:'Angličtina'
				},
				german:{
					en:'German',
					de:'Deutsch',
					sk:'Nemčina'
				},
				slovak:{
					en:'Slovak',
					de:'Slovakisch',
					sk:'Slovenčina'
				},
				czech:{
					en:'Czech',
					de:'Tschechisch',
					sk:'Čeština'
				}
			},
			employer:{
				en:'Employer',
				de:'Unternehmer',
				sk:'Zamestnávateľ'
			},
			projects:{
				en:'Projects',
				de:'Projekte',
				sk:'Projekty'
			},
			techs:{	
				en:'Technologies',
				de:'Technologien',
				sk:'Technológie'
			},
			recommendation:{
				en:'Recommendation',
				de:'Arbeitszeugnis',
				sk:'Odporúčanie'
			},
			institution:{
				en:'Institution',
				de:'Institution',
				sk:'Inštitúcia'
			},
			skill:{
				en:'Skill',
				de:'Fähigkeit',
				sk:'Zručnosť'
			},
			authenticate:{
				en:'Authenticate',
				de:'Authentifizieren',
				sk:'Overiť'
			},
			education:{
				en:'Education',
				de:'Ausbildung',
				sk:'Vzdelanie'
			},
			cercou:{
				en:'Certificates / Courses',
				de:'Zertifikate / Kurse',
				sk:'Certifikáty / Kurzy'
			},
			contact:{
				en:'Contact',
				de:'Kontakt',
				sk:'Kontakt'
			}
		},
		jobs:[{	
			name:{	en:'Freelancer',
					de:'Freiberufer',
					sk:'Freelancer'
					},
			duration:{	en:'April 2014 - Present',
						de:'April 2014 - Heute',
						sk:'Arpíl 2014 - Súčanosť'},
			projects:[	
					{
						name:'AngularJS Pexeso',
						url:'https://samuells.github.io/pexeso'
					},
					{
						name:'Iteas website',
						url:'https://github.com/samuells/iteas-web'
					},
					{
						name:'This Portfolio',
						url:'#'
					}
				],
			techs:'JavaScript, AngularJS, HTML5, CSS3, Modernizr, jQuery, Google Maps API V3, RWD',
			info:{	en:'Last few months after I have moved in Germany, I spent learning German and techs of modern web. I read a lot of tutorial and books. I made a great progress in field of JavaScript, HTML5, CSS3, AngularJS and Sass. I had time to experiment with various technologies. Learn something about Design, Typograhy, Color Theory. I also tried Python. It was a fancy time, in which I developed myself.',
					de:'',
					sk:"Prvé mesiace v Nemecku som strávil intenzívnym kurzom nemčiny (5x4h týždenne) a prácov na diaľku pre Gratex. K marcu som sa rozhodol ukončiť moje dlhoročné pôsobenie v Gratexe (za čo som vďačný) a venovať sa naplno štúdiu nemčiny, webu a hľadaniu práce v Nemecku. Výrazne som sa zlepšil v HTML5, CSS3. Pokročil v JS a vyskúšal rôzne frameworky a začal učiť AngularJS. Popri tom som vytvoril svoj prvý responsive web a toto portfólio. Keďže ma baví vývoj s citom pre dizajn, tak som si začal študovať základy web dizajnu, typografii a teórie farieb. Neskôr som ešte pribral CSS3 preprocesor Sass a okúsil základy Pythonu. No už nastal ten pravý čas uplatniť vedomosti aj v praxi."},
			show:false},
			{name:{	en:'Java Developer',
					de:'Java Entwickler',
					sk:'Java Developer'},
			employer:'Gratex International, a.s.',
			employerUrl:'http://www.gratex.sk',
			duration:{	en:'February 2013 - March 2014',
						de:'Februar 2013 - März 2014',
						sk:'Február 2013 - Marec 2014'},
			projects:[	{
						name:'DeNovius CIB',
						url:'http://www.gratex.com/solutions/insurance/denovius'
						},
						{
						name:'DeNovius PetSure',
						url:'http://www.gratex.com/solutions/insurance/denovius'
						}
					],
			techs:'Java, MongoDB, GIT, Groovy, Javascript, Spock, Spring, AJAX/AJAJ, REST, Bash',
			recommendation:'files/recommendation.pdf',
			info:{	en:"In the february 2013 I returned from the Australia and continued work on the australian projects. But after few days back home everything changed. We wanted to develop new generation of insurance product and the developers with know-how were needed. I had enough know-how and java experience, so I chose to become a developer again. It was a nice new start. I learned and mastered lot of new skills (Java, MongoDB, GIT, Groovy, JavaScript ...) and in combination with my analysis skills it was pleasure to code. I participated on the whole development process, mainly on the business backend, but also wrote few lines of the framework code. And as the guy with know-how I designed lot of UI/UX features. But after lot of design meetings and first lines of JS code I understood, that I want to participate on creation of code more than on the analysis. I started learn JS and did few MongoDB courses. Finally I decided not to move to Australia, also because my girlfriend got a job in Germany. I started again learn german language and in December moved to Germany, to beautiful city of Freiburg. I remotely continued work for Gratex International till March.",
					de:'',
					sk:"Vo februári 2013 som sa vrátil z 3 mesačného pracovného pobytu v Austrálii. Na Slovensku som pokračoval v práci na austrálskych projektoch a zakrátko sa stal zo mňa znovu developer. Keďže sme začali pracovať na novej generácii poisťovacieho IS, tak sme potrebovali developer s know-how, jedným z nich som bol ja. A tak som znova objavil krásu zdrojového kódu, čo bola príjemná zmena po tonách špecifikácií. Oprášil som vedomosti OOP a Javy, zdokonalil som v ďalších technológiách ako GIT, MongoDB, Groovy, Spock a okúsil som JavaScript. Počas tohto obdobia som strávil väčšinu času na programovaní biznisových vrstiev IS a navrhovaní UI. Občas som však naprogramoval niečo v JS, MongooseJS, či Bash-i, prípadne pomohol s frameworkom. Časom som si však uvedomil, že by som chcel stráviť viac času na vývoji front-endu a samotnom dizajne. Kedže v tomto období si našla moja priateľka prácu v Nemecku, tak som sa rozhodol odmietnuť ponuku pracovať v Austrálii, a namiesto toho sa učiť nemčinu a JS, a pripraviť sa na sťahovanie do Nemecka."},
			show:false},
			{name:{	en:'Business Software Analyst',
					de:'Business Software Analytiker',
					sk:'IT Biznis Analitik'},
			employer:'Gratex International AUST Pty Ltd',
			employerUrl:'http://www.gratex.com.au',
			duration:{	en:'November 2012 - February 2013',
						de:'November 2012 - Februar 2013',
						sk:'November 2012 - Február 2013'},
			projects:[
					{
						name:'UPM2',
						url:'http://www.gtiinsurancesolutions.com/'
					}
				],
			techs:'UML2.0, BPMN, Enterprise Architect, MS Navision, MS Visio',
			info:{	en:"At the end of the october 2012 I got a offer to work for Gratex International AUST in Sydney, Australia. They needed help and I was the first choice in my current company. I couldn't say 'no'. I had to leave in two weeks, so the 5th of November I landed in Sydney. I had only few days to became a valid part of the team. Then I was responsible for new part of insurance system and I also had to teach new analyst.  I spent most of the time in the work (even didn't have a chance to see kangaroo) with editing of the analysis, communication with customers and developers and testing the app. I mainly worked with UML2.0, BPMN, MS Word and also did few presentations. At the end of this journey I got the offer for 2 years fulltime job.",
					de:'',
					sk:"Na konci októbra 2012 som dostal ponuku ísť pracovať na 3 mesiace na projekt do Sydney v Austrálii. Samozrejme na takúto ponuku sa nehovorí nie, aj keď som sa musel rozlúčiť s priateľkou a rodinou cez vianoce a silvester. Za dva týždne som už bol v Sydney, kde som mal zopár dní zapadnúť do tímu a pomocť s analýzou a návrhom novej časti poinstného IS. K tomu som ešte dostal jedného nováčika na zaučenie. Vačšinu môjho pobytu v AU som strávil prácou (dokonca ani klokana som nevidel). Zdokonalil som si angličtinu komunikáciou so zákaznikmi a vývojármi. Prácu tvorila hlavne úprava špecifikácie, ktorú som pripravoval na podpis, tvorba prezentácií a rôznych diagramov v UML2.0 a BPMN. Nakoniec som dostal ponuku vrátiť sa do AU na 2 a viac rokov."},
			show:false},
			{name:{	en:'Software Analyst',
					de:'Software Analytiker',
					sk:'Softvérový Analitik/Návrhár'},
			employer:'Gratex International, a.s.',
			employerUrl:'http://www.gratex.sk',
			duration:{	en:'Novomber 2010 - October 2012',
						de:'November 2010 - Oktober 2012',
						sk:'November 2010 - Október 2012'},
			projects:[
				{
					name:'GHOSEC',
					url:'http://www.gratex.com/solutions/public-sector/ghosec'
				},
				{
					name:'UPM Global Transport',
					url:'http://www.gratex.com.au/solutions/software-development/insurance-industry-solutions/upm/'
				},
				{
					name:'UPM PetSure',
					url:'http://www.gratex.com.au/solutions/software-development/insurance-industry-solutions/upm/'
				},
				{
					name:'RIMIS',
					url:'http://www.gratex.com/solutions/public-sector'
				}
			],
			techs:'UML2.0, BPMN, SQL, Enterprise Architect, MS Navision, MS Visio',
			info:{	en:'After the first step in IBM as web developer, I got a chance to work for Gratex International, big slovak IT company. I took this chance and became a software analyst. It was a change, but I had a good knowledge from the University and I wanted to taste the work of Analyst on my own. I spent two years on various international projects (EU, Australia). During this time I was designing workflows, db structure and architecture of the software systems. I mastered the UML2.0, BPMN and various own pseudo languages to described workflows or screens. I also designed UX of user interfaces and helped teammates with SQL. In this period I acquired the experiences with work in various teams from 5 to 40 teammates. For few months I had the chance to lead a small team of 5 people and create reverse analysis of insurance system. Then a job in australian office was offered me. So I had to go :)',
					de:'',
					sk:"Po lete strávenom na praktiku v IBM sa mi zažiadalo skúsiť ako chutí navrhovanie informačných systémov. Chcel som vyskúšať v praxi, čo nás učili na univerzite. Tak po 4 mesiacoch strávených IBM som menil firmu aj pozíciu. Prišiel som do Gratexu, kde som strávil väčšinu svojho mimoškolského času. Hneď som sa dostal k dizajnovaniu služieb, návrhom UI screenov. Prečítal hory špecifikácií. Počas nasledujúcich dvoch rokov som bol súčasťou viacerých tímov od 5 po 40 ľudí. Dokonca som jeden tím o 5 ľudí aj viedol. Výrazne som zlepšil svoje vedomosti anglického jazyka, keďže špecky a analýzy sme robili v angličtine. Úplne som si osvojil UML2.0, BPMN a rôzne psedo jazyky, ktoré sme navrhovali pre zrýchlenie vývoja. Nazbieral som kopu skúseností a nakoniec som dostal ponuku ísť pracovať pre Gratex do Austrálie."},
			show:false},
			{name:{	en:'Web Developer (Internship)',
					de:'Web Entwickler (Praktikum)',
					sk:'Web Developer (Praktikum)'},
			employer:'IBM',
			employerUrl:'http://www.ibm.com/sk/sk/',
			duration:{	en:'July 2010 - October 2010',
						de:'Juli 2010 - Oktober 2010',
						sk:'Júl 2010 - Október 2010'},
			projects:[{
				name:'Smarter Planer',
				url:'http://www.ibm.com/smarterplanet/'			
			}],
			techs:'HTML, CSS, Photoshop, CMS',
			info:{	en:"In the summer 2010, during the summer holiday, IBM gave me the first real opportunity to work in IT. Before this job I worked only on the side projects and study assignments. Here I had to communicate in english and solved the real tasks. I was a part of team which created and administered the websites of 'Smarter Planet for whole world. That's the story how I started to work.",
					de:'',
					sk:"V lete roku 2010 som sa prihlásil na praktikum do IBM. Na moje prekvapenie ma zobrali a tak sa naštartoval moju IT kariéru. V IBM som sa stretol s kopou super ľudí a anglicky hovoriacim šéfom. Značne som si zlepšil angličtinu, keďže emailová komuníkacia prebiehala s celým svetom. V rámci tímu som sa podielal na vytvorení stránok projektu 'Smarter Planet' a na jeho správe. Získal som more skúseností a prvý pohľad do biznis sveta. Až neskôr som si uvedomil, že to bol začiatok mojej IT kariéry."},
			show:false}
		],
		cercous:[
			{
				name:{
					en:'Intensive German Course B2',
					de:'Intensivkurs Deutsch B2',
					sk:'Intenzívny kurz nemčiny B2'
					},
				duration:{
					en:'March 2014 - May 2014',
					de:'März 2014 - Mai 2014',
					sk:'Marec 2014 - Máj 2014'
					},
				institution:'Euer Sprachzentrum',
				institutionUrl:'http://esz-freiburg.de/',
				skill:{
					en:'German B2',
					de:'Deutsch B2',
					sk:'Nemčina B2'
				},
				authenticate:'files/german_b2.pdf'
			},
			{
				name:{
					en:'Intensive German Course B1',
					de:'Intensivkurs Deutsch B1',
					sk:'Intenzívny kurz nemčiny B1'
					},
				duration:{
					en:'January 2014 - February 2014',
					de:'Januar 2014 - Februar 2014',
					sk:'Január 2014 - Február 2014'
					},
				institution:'Euer Sprachzentrum',
				institutionUrl:'http://esz-freiburg.de/',
				skill:{
					en:'German B1',
					de:'Deutsch B1',
					sk:'Nemčina B1'
				},
				authenticate:'files/germam_b1.pdf'
			},
			{
				name:{
					en:'MongoDB for DBAs',
					de:'MongoDB für DBAs',
					sk:'MongoDB for DBAs'
					},
				duration:{
					en:'September 2013',
					de:'September 2013',
					sk:'September 2013'
					},
				institution:'MongoDB, Inc',
				institutionUrl:'https://university.mongodb.com/',
				skill:{
					en:'MongoDB 2.4 Administrator',
					de:'MongoDB 2.4 Administrator',
					sk:'MongoDB 2.4 Administrátor'
				},
				authenticate:'http://education.mongodb.com/downloads/certificates/6bc98e6497f6442aadb17b8c425558a0/Certificate.pdf'
			},
			{
				name:{
					en:'MongoDB for Java Developers',
					de:'MongoDB für Java Entwickler',
					sk:'MongoDB for Java Developers'
					},
				duration:{
					en:'July 2013',
					de:'Juli 2013',
					sk:'Júl 2013'
					},
				institution:'10gen, The MongoDB Company',
				institutionUrl:'https://university.mongodb.com/',
				skill:{
					en:'MongoDB 2.4',
					de:'MongoDB 2.4',
					sk:'MongoDB 2.4'
				},
				authenticate:'http://education.10gen.com/downloads/certificates/ab4d68de07ae423b80e116146f0f035d/Certificate.pdf'
			}
		],
		educations:[
			{
				name:{
					en:'Master in Software Engineering',
					de:'Master in Software Engineering',
					sk:'Softvérové Inžinierstvo, Ing.'
				},
				duration:{
					en:'September 2010 - June 2012',
					de:'September 2010 - Juni 2012',
					sk:'September 2010 - Jún 2012'
				},
				uni:{
					en:'Slovak University of Technology in Bratislava',
					de:'Slowakischen Technischen Universität in Bratislava',
					sk:'Slovenská Technická Univerzita v Bratislave'
				},
				faculty:{
					en:'Faculty of Informatics and Information Technologies',
					de:'Fakultät für Informatik und Informationstechnologie',
					sk:'Fakulta Informatiky a Informačných Technológií'
				},
				program:{
					en:'Ing. Software Engineering',
					de:'Ing. Software Engineering',
					sk:'Softvérové Inžinierstvo'
				},
				acc:'CEng Academic Accreditation',
				accUrl:'files/m_conf.pdf',
				fgrade:'1.95'
			},
			{
				name:{
					en:'Bachelor in Informatics',
					de:'Bachelor in Informatik',
					sk:'Informatika, Bc.'
				},
				duration:{
					en:'September 2007 - June 2010',
					de:'September 2007 - Juni 2010',
					sk:'September 2007 - Jún 2010'
				},
				uni:{
					en:'Slovak University of Technology in Bratislava',
					de:'Slowakischen Technischen Universität in Bratislava',
					sk:'Slovenská Technická Univerzita v Bratislave'
				},
				uniUrl:'https://stuba.sk',
				faculty:{
					en:'Faculty of Informatics and Information Technologies',
					de:'Fakultät für Informatik und Informationstechnologie',
					sk:'Fakulta Informatiky a Informačných Technológií'
				},
				facultyUrl:'https://fiit.stuba.sk/en',
				program:{
					en:'Bc. Informatics',
					de:'Bc. Informatics',
					sk:'Informatika'
				},
				acc:'CEng Academic Accreditation',
				accUrl:'files/bc_conf.pdf',
				fgrade:'2.08'
			}
		]
	};
}