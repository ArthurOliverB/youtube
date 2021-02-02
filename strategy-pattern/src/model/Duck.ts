import { QuackStrategy, FlyStrategy } from "./common/Strategies";

export default class Duck {
    private quackBehaviour: QuackStrategy;
    private flyBehaviour: FlyStrategy;

    constructor(qs: QuackStrategy, fs: FlyStrategy) {
        this.quackBehaviour = qs;
        this.flyBehaviour = fs;
    }

    setFlyBehaviour(fs: FlyStrategy) {
        this.flyBehaviour = fs;
    }

    setQuackBehaviour(qs: QuackStrategy) {
        this.quackBehaviour = qs;
    }

    performFly() {
        this.quackBehaviour.quack();
    }

    performQuack() {
        this.flyBehaviour.fly();
    }
}