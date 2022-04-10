const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function (btn){

    btn.addEventListener('click',function(e){
        const styles=e.currentTarget.classList;
        const key = e.key;
        var sound;
        if(styles.contains('a')){
            sound = new Audio("images/a.mp3");
            sound.play();
            document.getElementById("value").innerHTML="The pressed key was: a";
        
        }
        else if(styles.contains('b')){
            sound = new Audio("images/b.mp3");
            sound.play();
            document.getElementById("value").innerHTML="The pressed key was: b";
        }
        else if(styles.contains('c')){
            sound = new Audio("images/c.mp3");
            sound.play();
            document.getElementById("value").innerHTML="The pressed key was: c";

        }
        else if(styles.contains('d')){
            sound = new Audio("images/d.mp3");
            sound.play();
            document.getElementById("value").innerHTML="The pressed key was: d";

        }
        else if(styles.contains('e')){
            sound = new Audio("images/e.mp3");
            sound.play();
            document.getElementById("value").innerHTML="The pressed key was: e";

        }
        else if(styles.contains('f')){
            sound = new Audio("images/f.mp3");
            sound.play();
            document.getElementById("value").innerHTML="The pressed key was: f";

        }
    })

    console.log(btn);
});