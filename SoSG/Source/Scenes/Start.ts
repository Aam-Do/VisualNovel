namespace SakuraGlade {
  export async function Start(): ƒS.SceneReturn {
    console.log("Start Scene starting");
    let input: HTMLDialogElement = document.querySelector("dialog#start");
    input.showModal();
    await new Promise((_resolve) => {
      input.querySelector("button").addEventListener("click", _resolve)
    });
    let form: FormData = new FormData(document.forms[0]);
    do {
      form = new FormData(document.forms[0]);
      if (form.get("name") == "") {
        alert('You have to input a name!');
        await new Promise((_resolve) => {
          input.querySelector("button").addEventListener("click", _resolve)
        });
      }
      else {
        console.log(form.get("name"));
        dataForSave.nameProtagonist = (form.get("name") as string);
        dataForSave.genderProtagonist = (form.get("pronouns") as string);
        console.log(dataForSave.genderProtagonist);
        characters.protagonist.name = dataForSave.nameProtagonist;
        input.close();
      }
    } while (form.get("name") == "")

    // let form: string = ""
    // ƒS.Text.addClass("input");
    // await ƒS.Text.print(form);
    // dataForSave.nameProtagonist = 
    // characters.protagonist.name = dataForSave.nameProtagonist;
    // console.log(dataForSave.nameProtagonist);
    // await ƒS.Speech.tell(characters.nobu, "Hi " + dataForSave.nameProtagonist + "!");

    ƒS.update(1);

  }
}