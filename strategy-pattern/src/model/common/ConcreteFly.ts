import { FlyStrategy } from "./Strategies";

export class Grounded implements FlyStrategy {
    fly() {
        console.log("Failed miserably trying to fly");
    }
}

export class FlyWithWings implements FlyStrategy {
    fly() {
        console.log("Flapping my wings and flying away!");
    }
}

export class FlyWithTurbine implements FlyStrategy {
    fly() {
        console.log("Starting turbines... *woosh*");
    }
}