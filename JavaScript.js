let breadCrumbs = [],
    itsNotOver = true,
    storyElem = document.getElementById('mainText'),
    ChoiceElem = document.getElementById('actionList'),
    CrumbElem = document.getElementById('Trails');

const myStory = {
    intro: {
        mainText: `<h2>You take a seat at the clinic. You are terminally ill with a new disease. You're offered to go through this new procedure. What will you do?`,

        option: [
            ['Accept', 'wakeUp'],
            ['Decline', 'sickness'],
        ]
    },

	sickness: {
		mainText: `<h2>You decline the treatment. You later die to this disease called Bad Blood.</h2>`,
		option: []
	},

	wakeUp: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	woken: {
		mainText: `<h2>You have woken up in the same clinic, but something seems to be more erie. You can't find the doctor of the clinic and now are all alone. </h2>`,
		option: [
			['Wonder around','wonder'],
		]
	},
	wonder: {
		mainText: `<h2>You wonder around the clinic searching for any signs of life. You can't see anything from the glass windows that are high above you. You leave the examination room. You spot a small little lamp post in the middle of the hallway.</h2>`,
		option: [
			['Touch lamp post','lamp'],
		]
	},
	lamp: {
		mainText: `<h2>As you physically touch the lamp post, a dozen little frogs appear coming from the base. They croak at you as the lamp post lights up. As it gets brighter, you begin to fade away bit by bit. You appear in this different area that is all to unknown to you. You see a chapal and multiple gravestones.</h2>`,
		option: [
			['Go to chapal','chapal'],
			['Go to gravestone','gravestone']
		]
	},
	chapal: {
		mainText: `<h2>You walk up the chapal stone steps and open the door. You spot a man in a wheelchair. </h2>`,
		option: [
			['Approach him','approach'],
		]
	},
	approach: {
		mainText: `<h2>"You must be the newest victim of the doctor. Call me Greg, I am the eternal host of this realm. You must be quite curious, now then, ask me what is it that you ponder?" </h2>`,
		option: [
			['Where am I?','background'],
			['How do I leave?', 'leaving'],
		]
	},
	background: {
		mainText: `<h2>"You are trapped in the adventurer's realm. This is the dream of the adventuerer, a place for those to seek refuge, but unable to escape fully. The realm that you were once in however, that was the city of Yarn. The people there have changed, there are beasts that roam the city and kill those who wonder it. You must be careful when you return. </h2>`,
		option: [
			['How do I leave?','leaving'],
		]
	},
	leaving: {
		mainText: `<h2>"In order to leave this area and return back, you must retrieve Bob's brain and give it to me. Then, I shall transport you back to once you came." </h2>`,
		option: [
			['Bob`s Brain','Bob'],
		]
	},
	Bob: {
		mainText: `<h2>"Bob is the beast who sits upon the bridge of Yarn." </h2>`,
		option: [
			['How get the brain?','weapons'],
		]
	},
	weapons: {
		mainText: `<h2>"I see you really want to escape from here. Here let me get something from the chest." </h2>`,
		option: [
			['wait','weapons2'],
		]
	},
	weapons2: {
		mainText: `<h2>"Ah, thankfully I found some leftover gear. Be very careful when you go to into the city, danger lurks every corner adventuerer." You receive a blunderbust and a serrated sword . You exit the chapal and notice the gravestone now has frogs on it and a lit lamp. </h2>`,
		option: [
			['Go to gravestone','gravestoneOpen'],
		]
	},
	gravestone: {
		mainText: `<h2>It's just a gravestone </h2>`,
		option: [
			['Go to chapal','chapal'],
		]
	},
	gravestoneOpen: {
		mainText: `<h2>You walk to the gravestone and touch the lamp. As you touch the lamp you fade away again. </h2>`,
		option: [
			['Back to Yarn','intoYarn'],
		]
	},
	intoYarn: {
		mainText: `<h2>As you come back to the city of Yarn you form at the lamp post in the clinic. </h2>`,
		option: [
			['Walk out','outside'],
		]
	},
	outside: {
		mainText: `<h2>Walking through the empty halls of the clinic and out the door you go. You are now entering the city of Yarn. You see this light coming from a distance. You hear the sound of walking on this stone path. 3 humanoid figures emerge from the stone path and they notice you. You can see them muttering something with their torches and weapons in their hands." </h2>`,
		option: [
			['Walk to them','walk'],
			['Stay back','stay']
		]
	},
	walk: {
		mainText: `<h2>"You there, you contaminated this city with the Bad Blood didn't you! You plague ridden rat!" They charge at you </h2>`,
		option: [
			['Shoot with their blunderbust','blunderbust'],
			['Hit them with your sword', 'sword'],
		]
	},
	blunderbust: {
		mainText: `<h2>You shoot at the 3 and they all fall down. Dead. The body then starts to fade away into dust. </h2>`,
		option: [
			['','woken'],
			['']
		]
	},
	sword: {
		mainText: `<h2>When two of the three humanoids come close to you, you swing your blade. Cutting down both of them in one swoop. The smell of rotting flesh captures your nose and dissappears as they fade into dust. The final enemy is coming at you with their cleaver in hand coming to swing. </h2>`,
		option: [
			['Evade','evade'],
			['Ripose', 'riposte']
		]
	},
	evade: {
		mainText: `<h2>You roll out of the cleaver's swipe </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},
	sword2 : {
		mainText: `<h2>You put to rest the final enemy. They drop a small vile of blood. </h2>`,
		option: [
			['Take vile', 'vileObtain'],
		]
	},
	
	riposte: {
		mainText: `<h2>You try to riposte the attack. But, with no real training you are killed by the butcher. </h2>`,
		option: [
			['Respawn','respawn1'],
		]
	},	
	
	respawn1: {
		mainText: `<h2>You feel rejuvinated after your dying. It was like nothing had happened.  </h2>`,
		option: [
			['walk out the clinic','clinic2'],
		]
	},	
	clinic2: {
		mainText: `<h2>You walk out the clinic seeing the humanoid that killed you </h2>`,
		option: [
			['charge at them','lastOne'],
		]
	},	
	lastOne: {
		mainText: `<h2>You charged at the final humanoid, killing it. It drops this vile full of blood. </h2>`,
		option: [
			['Take vile','vileObtain'],
		]
	},	
	vileObtain: {
		mainText: `<h2>You obtained the blood </h2>`,
		option: [
			['Drink the blood','drink'],
			['Walk to the bridge', 'bridge'],
		]
	},	
	drink: {
		mainText: `<h2>You drank the blood from the small vile. You feel rejuvinated. </h2>`,
		option: [
			['walk to bridge','bridge'],
		]
	},	
	bridge: {
		mainText: `<h2> </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},	
	bridge: {
		mainText: `<h2>You roll out of the cleaver's swip </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},	
	evade: {
		mainText: `<h2>You roll out of the cleaver's swipe </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},	
	evade: {
		mainText: `<h2>You roll out of the cleaver's swipe </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},	
	evade: {
		mainText: `<h2>You roll out of the cleaver's swipe </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},	
	evade: {
		mainText: `<h2>You roll out of the cleaver's swipe </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},	
	evade: {
		mainText: `<h2>You roll out of the cleaver's swipe </h2>`,
		option: [
			['slash with sword','sword2'],
		]
	},	









}


function buildStory(){
	let story = ``;
	if (breadCrumbs.length < 1){
		return false;
	
} else {
	for (part of breadCrumbs) {
		story += `<p> ${myStory[part].mainText} </p>` ;
	}
	return story;
}

}

function buildoption(){
	let currentChapter = myStory[breadCrumbs[breadCrumbs.length - 1]],
			option = currentChapter.option;
			actionList = '';
	if (option.length > 0) {
		for(option of option){
				actionList += `<li data-dest='${option[1]}' onclick='storyLoop(this.dataset.dest)'>${option[0]}</li>`
		}
	} else {
		actionList = `The nightmare continues. <span class="restart" onclick="restart()">Reset?</span>`;
		itsNotOver = false;
	}
	return actionList;
}

	function buildBreadCrumbs(){
		let Crumbs = '';
		if(breadCrumbs.length > 0){
			for(crumb of breadCrumbs){
				Crumbs += `<li> ${crumb} </li>`;
			}
		} else {
			Crumbs = 'Invalid. please reload the page'
		}
		return Crumbs;
	}

	function storyLoop(option){
		
		if (!option) {
			return 'Error.'
		} else {
			breadCrumbs.push(option);
		}

		let story = buildStory(),
				crumbs = buildBreadCrumbs();
				option = buildoption();

		if (!story) {
			return 'Error loading.'
			
		} 
		storyElem.innerHTML = story;
		CrumbElem.innerHTML = crumbs;
		ChoiceElem.innerHTML = option;

		if (itsNotOver){
			return 'You are stuck in the Adventurer`s dream.'
		} else {
			return 'The story has Ended.'
		}
	}

function restart(){
	itsNotOver = true;
	breadCrumbs = [];
	storyLoop('intro');
	return 'Restart?'
}
