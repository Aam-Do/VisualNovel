namespace SakuraGlade {
    export async function WelcomeSakuraGlade(): ƒS.SceneReturn {
        console.log("Welcome to Sakura Glade starting");

        // await ƒS.Location.show(locations.sakuraGladeNight);
        // ƒS.update(2);

        // ƒS.Speech.show()
        // await ƒS.Speech.tell(characters.nobu, "… and here we are! Welcome to Sakura Glade.");

        await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.sakuraGladeNight);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(70, 100));
        ƒS.update(1);
        // await ƒS.Progress.delay(2);
        ƒS.Speech.show()
        // await ƒS.Progress.delay(1);
        await ƒS.Speech.tell(characters.nobu, "… and here we are! Welcome to Sakura Glade.");
    }
}