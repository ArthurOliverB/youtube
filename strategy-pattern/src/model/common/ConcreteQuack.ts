import { QuackStrategy } from "./Strategies";

export class QuackWithSyrinx implements QuackStrategy {
    quack() {
        console.log("Quack!");
    }
}

export class QuackWithSpeaker implements QuackStrategy {
    quack() {
        console.log("Quack!");
        console.log("Did you hear the sheer quality of that quack?");
    }
}