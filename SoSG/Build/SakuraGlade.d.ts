declare namespace SakuraGlade {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        music: string;
        drop: string;
    };
    let locations: {
        ForestHome: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        nobu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let items: {
        phone: {
            name: string;
            description: string;
            image: string;
        };
        idCard: {
            name: string;
            description: string;
            image: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        nobuPoints: number;
        amayaPoints: number;
        kohanaPoints: number;
        fumikoPoints: number;
    };
}
declare namespace SakuraGlade {
    function Scene(): ƒS.SceneReturn;
}
