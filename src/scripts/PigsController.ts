import {Black, Grey, White, Chestnut} from "./Pigs";

interface PigsServices {
    add(pig: Black | Grey | White | Chestnut): void;
    getAll:() => (Black | Grey | White | Chestnut)[];
    delete(name: string): void;
}

export class PigsController implements PigsServices {
    pigs: (Black | Grey | White | Chestnut)[];

    constructor() {
        this.pigs = [];
    }

    add(pig: Black | Grey | White | Chestnut) {
        this.pigs.push(pig);
        localStorage.userArray = JSON.stringify(this.pigs);
    }

    getAll() {
        return JSON.parse(localStorage.userArray);
    }

    delete(name: string) {
        this.pigs = this.pigs.filter((pig) => {
            return pig.name !== name;
        })
        localStorage.userArray = JSON.stringify(this.pigs);
    }
}