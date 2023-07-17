namespace SakuraGlade {
  export async function Start(): ƒS.SceneReturn {
    console.log("Start Scene starting");
    document.onkeypress = stopReloadKey;
    function stopReloadKey(_e: KeyboardEvent) {
      if (_e.keyCode == 13) {
        return false;
      }
      return true;
    }
    // ^ ???
    ƒS.Speech.hide();
    let input: HTMLDialogElement = document.querySelector("dialog#start");
    input.showModal();
    await new Promise((_resolve) => {
      input.querySelector("button").addEventListener("click", _resolve)
    });
    let form: FormData = new FormData(document.forms[0]);
    while (!document.forms[0].checkValidity() || form.get("name") == "") {
      if(form.get("name") == "") {
        alert('You have to input a name!');
      }
      if(!document.forms[0].checkValidity()) {
      alert('Your name may not contain special characters!');
      }
      await new Promise((_resolve) => {
        input.querySelector("button").addEventListener("click", _resolve)
      });
      form = new FormData(document.forms[0]);
    }
    dataForSave.nameProtagonist = (form.get("name") as string);
    dataForSave.genderProtagonist = (form.get("pronouns") as string);
    input.close();
    ƒS.update(1);

    // for testing
    ƒS.Inventory.add(items.phone);
    ƒS.Inventory.add(items.idCard);
  }
}