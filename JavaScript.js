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
		mainText: `<h2>"You are trapped in the Adventurer's realm. This is the dream of the Adventurer, a place for those to seek refuge, but unable to escape fully. The realm that you were once in however, that was the city of Yarn. The people there have changed, there are beasts that roam the city and kill those who wonder it. You must be careful when you return. </h2>`,
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
		mainText: `<h2>"Ah, thankfully I found some leftover gear. Be very careful when you go to into the city, danger lurks every corner Adventurer." You receive a blunderbust and a serrated sword . You exit the chapal and notice the gravestone now has frogs on it and a lit lamp. </h2>`,
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
			['Walk to them','walk1'],
			['Stay back','stay1']
		]
	},
	stay1: {
		mainText: `<h2>You stay put and wait for them to pass. The figures pass you. </h2>`,
		option: [
			['Walk to bridge','bridge'],
		]
	},	
	walk1: {
		mainText: `<h2>"You there, you contaminated this city with the Bad Blood didn't you! You plague ridden rat!" They charge at you </h2>`,
		option: [
			['Shoot with their blunderbust','blunderbust'],
			['Hit them with your sword', 'sword'],
		]
	},
	blunderbust: {
		mainText: `<h2>You shoot at the 3 and they all fall down. Dead. The body then starts to fade away into dust. </h2>`,
		option: [
			['A small vile of blood was dropped','vileObtain'],
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
			['Walk to the bridge', 'bridge'],
		]
	},	
	bridge: {
		mainText: `<h2>As you walk onto the bridge you see this grand cathedral at the end of it.  </h2>`,
		option: [
			['Walk to the cathedral','cathedralLamp'],
		]
	},	
	cathedralLamp: {
		mainText: `<h2>You spot a small lamp post at the cathedral. </h2>`,
		option: [
			['light lamp and continue','cathedral'],
		]
	},	

	cathedral: {
		mainText: `<h2>As soon as you step off the bridge, a large dog-like creature jumps from the top of the cathedral. It roars at you causing you to stumble. It swipes at you, but </h2>`,
		option: [
			['Use the blunderbust','blunderbust2'],
			['Use the sword', 'sword3'],
			['Evade', 'evade2'],
		]
	},	
	blunderbust2: {
		mainText: `<h2>You shoot at the hands of the beast. It screeches in pain. </h2>`,
		option: [
			['Stab the beast','stab'],
			['Use your blunderbust','blunder']
		]
	},	
	//patch 0.02 added beast ending on bridge
	blunder: {
		mainText: `<h2>You try to use your blunderbust on the beast. But since you're in its grasps you're unable to pull the trigger. The beast holds you in one hand and drives it's long claw into you. You are losing too much blood. What will you do?</h2>`,
		option: [
			['Use the vile','transform'],
		]
	},	

	transform: {
		mainText: `<h2>As the beast crushes you, the vile of blood breaks and it seeps into your wounds. Causing your body to feel rejuvinated. Not so long after, you start to feel dizzy and soon before you know it, you have turned into a beast within the claws of the beast. </h2>`,
		option: [
			['Slash the beast','beast'],
		]
	},	

	beast: {
		mainText: `<h2>You slice the beast's arm off. Then finally slash it's neck off with your claws. You are now the beast that inhabits the bridge of Yarn. Opposing those who come for your brain. Those, who come to you to get out of the Adventurer's Nightmare. </h2>`,
		option: [
			[]
		]
	},	
	sword3: {
		mainText: `<h2>You try to stab the beast, but its no use because the strength of the beast is too great. You died. </h2>`,
		option: [
			['respawn','cathedralLamp2'],
		]
	},	

	evade2: {
		mainText: `<h2>You roll out of the beast's grasp in time. </h2>`,
		option: [
			['stab the beast from the side','sidestab'],
		]
	},	

	stab: {
		mainText: `<h2>You stab the beast in the chest. It bellows in pain. </h2>`,
		option: [
			['shoot with blunderbust','finalkill'],
		]
	},	
	
	cathedralLamp2: {
		mainText: `<h2>You reanimate from the lamp nearby. </h2>`,
		option: [
			['run back to the cathedral','cathedral2'],
		],
	},

	cathedral2: {
		mainText: `<h2>In front of the cathedral the beast hops down and screeches again. You stumble and it tries to grab you. </h2>`,
		option: [
			['Evade','evade2'],
			['Use the blunderbust','blunderbust2'],
		]
	},	

	sidestab: {
		mainText: `<h2>You stab the beast's side and it falls down. You can hear its raspy breath. </h2>`,
		option: [
			['Lay it to rest with sword','swordrest'],
		]
	},	
	finalkill: {
		mainText: `<h2>The beast turns into dust as your sword was inside of it's chest. It drops it's brain. </h2>`,
		option: [
			['grab the brain','brain'],
		]
	},	
	swordrest: {
		mainText: `<h2>You go to the nape of the beast to lay it to rest. As you deliever it, it fades away. It drops its brain. </h2>`,
		option: [
			['grab the brain','brain'],
		]
	},	
	brain: {
		mainText: `<h2>You pick up its brain. </h2>`,
		option: [
			['Return to the Adventurer`s Dream','return1'],
		]
	},	
	return1: {
		mainText: `<h2>You return into the Adventurer's Dream. </h2>`,
		option: [
			['Go to Greg','greg2'],
		]
	},	
	greg2: {
		mainText: `<h2>"You've done it dear Adventurer. Now, please hand me the brain and I shall free you from this nightmare." </h2>`,
		option: [
			['Hand over the brain','ending1'],
			['Don`t hand over the brain','ending2'],
		]
	},	
	ending1: {
		mainText: `<h2>"Very well... You were a good adventurer." You are killed by Greg in the Adventurer's Dream. You were now brought back into the city of Yarn, but there are no more lamps to be seen. You are now left to roam the streets of Yarn or die trying. </h2>`,
		option: []
	},	
	ending2: {
		mainText: `<h2>"Why is it that you want to be so different. Just hand it over." </h2>`,
		option: [
			['Hand over the brain','ending1'],
			['Refuse to hand over the brain','fight']
		]
	},	
	fight: {
		mainText: `<h2>"You left me with no choice." Greg stands up from his wheelchair, wielding his great sword. </h2>`,
		option: [
			['Charge','chargeGreg'],
			['Use your Blunderbust', 'shootGreg'],
			['Hold your ground', 'steadFast'],
		]
	},	
	chargeGreg: {
		mainText: `<h2>You charge at Greg. He riposts your attack and strikes you down. You fall onto your knees. </h2>`,
		option: [
			['Drink the bloodvile','bloodVile'],
		]
	},	
	shootGreg: {
		mainText: `<h2>You shoot at Greg and he stumbles onto the ground. He quickly gets back up, but you can tell he was clearly staggered from that shot. </h2>`,
		option: [
			['Strike','slashGreg'],
		]
	},	
	steadFast: {
		mainText: `<h2>You hold your ground and Greg charges at you with alarming speed.  </h2>`,
		option: [
			['dodge his attack','dodge'],
		]
	},	
	dodge: {
		mainText: `<h2>You roll away from Greg. You're now positioned behind him</h2>`,
		option: [
			['Use your blunderbust','critical'],
			['Backstab him','backStab'],
		]
	},	
	//patch 0.01 added backStab
	backStab: {
		mainText: `<h2>You grab your sword and shove it straight through Greg. He lets his final gasp out and dies. Then, an outer worldly beast comes and knocks you out</h2>`,
		option: [
			['Bounded','boundedEnding'],
		]
	},
	bloodVile: {
		mainText: `<h2>You drink the bloodvile. You feel rejuvinated and are transforming into a much larger creature. You became a beast. Greg's great sword becomes apart of your body.  </h2>`,
		option: [
			['slash at Greg','beastEnding'],
		]
	},	
	beastEnding: {
		mainText: `<h2>With Greg now dead and you a beast, You're trapped in the Adventurer's realm. Either staying in the Adventurer's dream or going back into the city of Yarn, you are trapped here for good. </h2>`,
		option: []
	},	

	slashGreg: {
		mainText: `<h2>Your sword goes straight through him. He has gone lifeless now. An outer worldly being comes from the shadows and knocks you unconcious. </h2>`,
		option: [
			['Bounded','boundedEnding'],
		]
	},	
	gregDeath: {
		mainText: `<h2>You slay Greg. He whispers, "You have freed me from this. I thank you." He then disappears. An outer worldly being comes from the shadows and knocks you unconcious. </h2>`,
		option: [
			['Wake up','boundedEnding'],
		]
	},	
	
	critical: {
		mainText: `<h2>You see Greg's body get propelled by your volley of bullets. It then disappears into thin air. A large being from the sky comes down to you and puts you into a coma.  </h2>`,
		option: [
			['Wake up','boundedEnding'],
		]
	},	
	backstab: {
		mainText: `<h2>You backstab Greg with your serrated sword. It goes clean through. You can see his body, once full of life, become limp. An outer worldly being comes from the shadows and knocks you unconcious</h2>`,
		option: [
			['Wake up','boundedEnding'],
		]
	},	
	boundedEnding: {
		mainText: `<h2>You are now in the wheelchair that Greg used. Stuck in the Adventurer's Dream assuming Greg's position to guide adventurers. You are confided to this realm. </h2>`,
		option:[]
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
