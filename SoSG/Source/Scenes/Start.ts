namespace SakuraGlade {
  export async function Start(): ƒS.SceneReturn {
    console.log("Start Scene starting");
    ƒS.Speech.hide();
    let input: HTMLDialogElement = document.querySelector("dialog#start");
    input.showModal();
    await new Promise((_resolve) => {
      input.querySelector("button").addEventListener("click", _resolve)
    });
    let form: FormData = new FormData(document.forms[0]);
    while (form.get("name") == "") {
      alert('You have to input a name!');
      await new Promise((_resolve) => {
        input.querySelector("button").addEventListener("click", _resolve)
      });
      form = new FormData(document.forms[0]);
    }
    dataForSave.nameProtagonist = (form.get("name") as string);
    characters.protagonist.name = dataForSave.nameProtagonist;
    dataForSave.genderProtagonist = (form.get("pronouns") as string);
    input.close();
    ƒS.update(1);
  }
}