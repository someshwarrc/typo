let test    =   $('#test');
let text    =   $('.text');
let time   =    $('.timer span');
let rstBtn  =   $('.timer button');
let newTextBtn  =   $('#txtBtn');
let timer   =   [0,0,0,0];
let interval;
let timerRunning  =  false;

let textArray = [
    "The Entombment is a 1559 oil-on-canvas painting by the Italian artist Titian, commissioned by Philip II of Spain. It depicts the burial of Jesus in a stone sarcophagus, which is decorated with depictions of Cain and Abel and the binding of Isaac. The figure holding Christ's body is Nicodemus, the Jewish elder that secretly visited Jesus at night to learn about his teachings; the figure of Nicodemus bears the traits of the artist himself. This could have been inspired by Michelangelos idea in his unfinished Deposition from 1550, depicting himself as Nicodemus, supporting the body of Christ, displayed in the cathedral in Florence. The painting exhibits a style under development by Titian at the time, characterized by the use of broad brushwork and brilliant colours. It is now in the permanent collection of the Museo del Prado, Madrid.",
    "A jailer led him down the long corridor while another walked behind him to the right, pressing a rifle muzzle up against his ribs. An identical gray metal door with an identical small opening fronted each cell, the only differences being the Arabic numbers above the doors and the faces looking out through the tiny openings. They were bloated, grotesquely enlarged, the faces of living ghosts. He shuddered. Every step was torture. Behind one of the windows a female convict giggled. Jailer, heres twenty cents, buy me some sanitary napkins, okay? The jailer responded with an angry curse: Slut! But when Gao Yang turned to see what the woman looked like, he felt a nudge from the rifle. Keep moving! ",
    "Dark clouds filled the sky on May 28 as Gao Yang drove his donkey; it was scrawnier than ever, after exhausting itself day after day lugging eighty bundles of wilting garlic to town so Gao Yang could try his luck again. Nine days since Fourth Uncle had met his tragic end, but it seemed like an eternity. During that period Gao Yang had made four trips to town, selling fifty bundles of garlic for a total of a hundred twenty yuan, minus eighteen yuan for the various fees and taxes, which left him a profit of one hundred and two. The eighty bundles he was hauling now should have been sold two days earlier at a purchasing station set up north of the tracks by the South Counties Supply and Marketing Cooperative, which was buying garlic at fifty fen a pound. But just as Gao Yang reached the scales with his load, a gang of men in gray uniforms and wide-brimmed hats showed up, led by Wang Tai.",
    "At dawn the condemned man finally rested his head against the wall and closed his eyes. He looked dead already. Gao Yang recalled hearing people talk when he was just a boy about the scary business of spending the night with a corpse. They said that late at night, when everyones asleep, the dead rise to haunt the living, chasing them round and round until cockcrow, when they finally lie down again. The night just past was pretty much like that, except that spending the night with a corpse could earn you a tidy sum, while all he get for watching his condemned cellmate was an extra bun at mealtime.",
    "Flaubert, who visited Istanbul a hundred and two years before my birth, was struck by the variety of life in its teeming streets; in one of his letters he predicted that in a centurys time it would be the capital of the world. The reverse came true: after the Ottoman Empire collapsed, the world almost forgot that Istanbul existed. The city into which I was born was poorer, shabbier, and more isolated than it had ever been it is two-thousand-year history. For me it has always been a city of ruins and of end-of-empire melancholy. I have spent my life either battling with this melancholy, or making it my own."
]


test.keypress(start) 
test.keyup(spellCheck);
rstBtn.click(reset);
newTextBtn.click(newText);

function start(){
    let textEnteredLength   =   test.val().length;
    console.log(textEnteredLength)
    if(textEnteredLength === 0 && !timerRunning){
        //start timer
        timerRunning    =   true;
        interval  =   setInterval(runTimer, 10);
    } 
}

function spellCheck(){
    let testEntered =   $('#test').val();
    let textMatch =   text.text().substring(0, testEntered.length);

    if(testEntered == text.text()){
        //when the whole text is matched
        test.css('border-color','#429890')
        clearInterval(interval)
    } else {
        if(testEntered == textMatch) {
            //checking part of the text to the text to type
            test.css('border-color','#65CCf3')
        } else {
            //if there is any error 
            test.css('border-color','#E95D0F')
        }
    }
}

function runTimer(){
    timer[3]++;
    let currentTime =  `${leadingZero(timer[0])}:${leadingZero(timer[1])}:${leadingZero(timer[2])}`;
    time.text(currentTime);

    timer[0] = Math.floor((timer[3]/100/60));
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000))
}
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    test.val("");
    time.text("00:00:00");
    test.css('border-color','#8882829d');
}
function leadingZero(t){
    if(t <= 9){
        t = `0${t}`;
    }
    return t;
}

var i = 0;

function newText(){
    text.text(textArray[i]);
    i = (i + 1) % 5; //1,2,3,4,0,1,2,3... 
}