let trail = [],
    itsNotOver = true,
    storyElem = document.getElementById('main text'),
    choicesElem = document.getElementById('choices'),
    crumbElem = document.getElementById('so far');

const myStory = {
    intro: {
        text: `<h2>You take a seat at the clinic. You are terminally ill with a new disease. You're offered to go through this new procedure. What will you do?`,
        choices: [
            ['Accept', 'wake up'],
            ['Decline', 'sickness'],
        ]
    },











}


function buildStory(){
	let story = ``;
	if (trail.length < 1){
		return false;
	} else {
		for (part of trail){
			story += `<p> ${myStory[part].text} </p>`;
		}
		return story;
	}
	
}

function buildChoices(){
	let currentChapter = myStory[trail[trail.length - 1]],
			choices = currentChapter.choices;
			actionList = '';
	if (choices.length > 0) {
		for(choice of choices){
				actionList += `<li data-dest='${choice[1]}' onclick='storyLoop(this.dataset.dest)'>${choice[0]}</li>`
		}
	} else {
		actionList = `The nightmare continues. <span class="restart" onclick="restart()">Reset?</span>`;
		itsNotOver = false;
	}
	return actionList;
}

function buildtrail(){
	let crumbs = '';
	if(trail.length > 0){
		for(crumb of trail){
			crumbs += `<li> ${crumb} </li>`;
		}
	} else {
		crumbs = 'Invalid. please reload the page'
	}
	return crumbs;
}

function storyLoop(choice){
	
	if (!choice) {
		return 'Error.'
	} else {
		trail.push(choice);
	}

	let story = buildStory(),
			crumbs = buildtrail();
			choices = buildchoices();

	if (!story) {
		return 'Error loading.'
		
	} 
	storyElem.innerHTML = story;
	crumbElem.innerHTML = crumbs;
	choicesElem.innerHTML = choices;

	if (itsNotOver){
		return 'You are stuck in the Adventurer`s dream.'
	} else {
		return 'The story has Ended.'
	}
}

function restart(){
	itsNotOver = true;
	trail = [];
	storyLoop('intro');
	return 'Restart?'
}