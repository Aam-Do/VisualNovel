namespace SakuraGlade {
  export async function Intro(): ƒS.SceneReturn {
    console.log("Intro Scene starting");

    let text = {
      You: {
        T0000: "(<i>Whew, what a day!</i>)",
        T0001: "(<i>Three lectures of Advanced Biology and no breaks... And I’ve got the presentation coming up soon too...<br>Ugh, I still need a good topic. Guess I’ll have to hit the books first when I get home.</i>)",
        T0002: "(<i>Yeesh, I can’t wait to go to bed!</i>)",
        T0003: "(<i>Ah... the cool spring air is so refreshing. Feels like I sat in stuffy lecture halls all day!<br>I used to hate having to walk home through the forest, but on a day like this it’s almost a blessing.</i>)",
        T0004: "(<i>... what’s that?</i>)",
        T0005: "(<i>There’s a faint light coming from the forest. Did someone get lost in the woods again?<br>I should go check it out.</i>)",
        T0006: "(<i>Hmm... no one to be seen.</i>)",
        T0007: "(<i>Just this...<br>tree stump that appears to be glowing?</i>)",
        T0008: "(<i>I’ve never seen that before! Maybe I can use this in my presentation.<br>Let’s take a closer look...</i>)",
        T0009: "(<i>...</i>)",
        T0010: "(<i>It seems like little fluorescent mushrooms are growing on this part of the stump.<br>They smell sweet, almost floral...</i>)",
        T0011: "(<i>What’s going on?<br>... everything’s suddenly so blurry...</i>)",
        T0012: "(<i>No way I’m touching that. Best hurry back to the trail.</i>)",
        T0013: "(<i>What's that smell...? Everything’s suddenly so blurry...</i>)",
        T0014: "(<i>... oh...</i>)",
      },
      Nobu: {
        T0000: "Dieser Text ist über die text-Variable definiert. <p>Dies hingegen ist ein Paragraph.</p>",
        T0001: "",
        T0002: ""
      }
    };

    // cpms = characters per millisecond
    ƒS.Speech.setTickerDelays(40, 5000);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.forestHome);
    ƒS.update(1);
    await ƒS.Progress.delay(2);
    ƒS.Speech.show()
    await ƒS.Progress.delay(1);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0000);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0002);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0003);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);
    ƒS.Speech.setTickerDelays(100, 5000);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0004);
    ƒS.Speech.setTickerDelays(40, 5000);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0005);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.You.T0007);
    ƒS.Speech.hide();
    let dialogue = {
      inspect: "Inspect the stump",
      leave: "Leave"
    };
    let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass");
    switch (dialogueElement) {
      case dialogue.inspect:
        // continue path here
        console.log(dialogue.inspect);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0008);
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0009);
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0010);
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0009);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0011);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0009);
        await ƒS.Location.show(locations.blackout);
        await ƒS.Progress.delay(2);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        break;
      case dialogue.leave:
        // continue path here
        console.log(dialogue.leave);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0012);
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0009);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0013);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0009);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0014);
        await ƒS.Speech.tell(characters.protagonist, text.You.T0009);
        await ƒS.Location.show(locations.blackout);
        await ƒS.Progress.delay(2);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        break;
    }

    ƒS.update(1);
  }
}