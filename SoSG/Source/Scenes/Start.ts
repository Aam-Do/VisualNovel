namespace SakuraGlade {
  export async function Start(): ƒS.SceneReturn {
    console.log("Start Scene starting");

    let form: string = "<form> <label for='name'>Please input your name (max. 15 characters)</label> <input type='text' name='name' id='name' placeholder='Name' required maxlength='15'> <label for='name'>Please select your pronouns</label> <select name='pronouns' id='select'> <option value='diverse' selected>they/them</option> <option value='female'>she/her</option> <option value='male'> he/him</option> </select> <button type='button' name='start' id='start'>Start</button> </form>"
    ƒS.Text.addClass("input");
    await ƒS.Text.print(form);
    // dataForSave.nameProtagonist = 
    // characters.protagonist.name = dataForSave.nameProtagonist;
    // console.log(dataForSave.nameProtagonist);
    // await ƒS.Speech.tell(characters.nobu, "Hi " + dataForSave.nameProtagonist + "!");

    ƒS.update(1);

  }
}