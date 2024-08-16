//script giving all the keypresses and mouse clicks on these buttons a sound function.


document.getElementById(`boomSound`).addEventListener(`click`, (event) => {
    let audio = document.getElementById(`boom`);
    audio.play()
    console.log(event)
    });

 document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`boom`);
        if (event.code === `KeyA`) {
        audio.play()};
        });

 document.getElementById(`clapSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`clap`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`clap`);
        if (event.code === `KeyS`) {
        audio.play()};
        });

 document.getElementById(`hihatSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`hihat`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`hihat`);
        if (event.code === `KeyD`) {
        audio.play()};
        });
 
 document.getElementById(`kickSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`kick`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`kick`);
        if (event.code === `KeyF`) {
        audio.play()};
        });

 document.getElementById(`openhatSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`openhat`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`openhat`);
        if (event.code === `KeyG`) {
        audio.play()};
        });

 document.getElementById(`rideSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`ride`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`ride`);
        if (event.code === `KeyH`) {
        audio.play()};
        });

 document.getElementById(`snareSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`snare`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`snare`);
        if (event.code === `KeyJ`) {
        audio.play()};
        });

 document.getElementById(`tinkSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`tink`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`tink`);
        if (event.code === `KeyK`) {
        audio.play()};
        });

 document.getElementById(`tomSound`).addEventListener(`click`,() => {
    let audio = document.getElementById(`tom`);
    audio.play()})

    document.addEventListener('keydown',(event) => {
        let audio = document.getElementById(`tom`);
        if (event.code === `KeyL`) {
        audio.play()};
        });
