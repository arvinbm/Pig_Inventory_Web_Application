 export abstract class Pigs {
    name: string;
    breed: string;
    height: string;
    weight: string;
    distinct_personality: string;
    category: string;

    protected constructor(name: string, breed: string, height: string, 
        weight: string, distinct_personality: string, category: string) {
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.distinct_personality = distinct_personality;
        this.category = category
    }
}

 export class Grey extends Pigs {
    swimming_ability: number;

    constructor(name: string, breed: string, height: string, weight: string,
                distinct_personality: string, category: string, swimming_ability: number) {
        super(name, breed, height, weight, distinct_personality, category);
        this.swimming_ability = swimming_ability;
    }
}

export class Chestnut extends Pigs {
    language: string;

    constructor(name: string, breed: string, height: string, weight: string,
                distinct_personality: string, category: string, language: string) {
        super(name, breed, height, weight, distinct_personality, category);
        this.language = language;
    }
}

export class White extends Pigs {
    running_ability: number;

    constructor(name: string, breed: string, height: string, weight: string,
                distinct_personality: string, category: string, running_ability: number) {
        super(name, breed, height, weight, distinct_personality, category);
        this.running_ability = running_ability;
    }
}

export class Black extends Pigs {
    strength_ability: number;

    constructor(name: string, breed: string, height: string, weight: string,
                distinct_personality: string,category: string, strength_ability: number) {
        super(name, breed, height, weight, distinct_personality, category);
        this.strength_ability = strength_ability;
    }
}