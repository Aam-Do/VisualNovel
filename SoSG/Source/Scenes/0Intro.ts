namespace SakuraGlade {
  export async function Intro(): ƒS.SceneReturn {
    console.log("Intro Scene starting");
    // currentCharacter = characters.nobu;
    Inventory.add(items.phone);
    dataForSave.inventory.push(items.phone);
    Inventory.add(items.idCard);
    dataForSave.inventory.push(items.idCard);

    // cpms = characters per millisecond
    ƒS.Speech.setTickerDelays(40, 5000);
    await ƒS.Progress.delay(1);
    ƒS.Sound.play(sound.forest, .5, true);
    await ƒS.Location.show(locations.forestHome);
    await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
    await ƒS.Progress.delay(2);
    ƒS.Speech.show()
    await ƒS.Progress.delay(1);
    await ƒS.Speech.tell(characters.protagonist, "<i>(Whew, what a day!)</i>");
    await ƒS.Speech.tell(characters.protagonist, "<i>(Three lectures of Advanced Biology and no breaks... And I've got the presentation coming up soon too...<br>Ugh, I still need a good topic. Guess I'll have to hit the books first when I get home.)</i>");
    await ƒS.Speech.tell(characters.protagonist, "<i>(Yeesh, I can't wait to go to bed!)</i>");
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);
    await ƒS.Speech.tell(characters.protagonist, "<i>(Ah... the cool spring air is so refreshing. Feels like I sat in stuffy lecture halls all day!<br>I used to hate having to walk home through the forest, but on a day like this it's almost a blessing.)</i>");
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);
    ƒS.Speech.setTickerDelays(100, 5000);
    await ƒS.Speech.tell(characters.protagonist, "<i>(... what's that?)</i>");
    ƒS.Speech.setTickerDelays(40, 5000);
    await ƒS.Speech.tell(characters.protagonist, "<i>(There's a faint light coming from the forest. Did someone get lost in the woods again?<br>I should go check it out.)</i>");
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);
    await ƒS.Speech.tell(characters.protagonist, "<i>(Hmm... no one to be seen.)</i>");
    await ƒS.Speech.tell(characters.protagonist, "<i>(Just this...<br>tree stump that appears to be glowing?)</i>");
    ƒS.Speech.hide();
    let dialogue = {
      inspect: "Inspect the stump",
      leave: "Leave"
    };
    let dialogueElement = await ƒS.Menu.getInput(dialogue, "choices");
    switch (dialogueElement) {
      case dialogue.inspect:
        // continue path here
        console.log(dialogue.inspect);
        await ƒS.Speech.tell(characters.protagonist, "<i>(I've never seen that before! Maybe I can use this in my presentation.<br>Let's take a closer look...)</i>");
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(It seems like little fluorescent mushrooms are growing on this part of the stump.<br>They smell sweet, almost floral...)</i>");
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(What's going on?<br>... everything's suddenly so blurry...)</i>");
        ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Location.show(locations.blackout);
        ƒS.update(1);
        await ƒS.Progress.delay(2);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
      case dialogue.leave:
        // continue path here
        console.log(dialogue.leave);
        await ƒS.Speech.tell(characters.protagonist, "<i>(No way I'm touching that. I better hurry back to the trail.)</i>");
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(What's that smell...? Everything's suddenly so blurry...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(... oh...)</i>");
        ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Location.show(locations.blackout);
        ƒS.update(1);
        await ƒS.Progress.delay(2);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        break;
    }
    ƒS.update(1);
  }
}