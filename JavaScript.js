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
		mainText: `<h2>Bob is the beast who sits upon the bridge of Yarn. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
		]
	},
	Accept: {
		mainText: `<h2>You accept the treatment and signed a contract. You are now put into a coma because of the anesthetic. </h2>`,
		option: [
			['Wake up','woken'],
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
