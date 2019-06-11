class Entity {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    greet() {
        console.log(`Hi! I'm ${this.name} from middle earth and i am ${this.height} tall`);
    }
}

export default Entity;