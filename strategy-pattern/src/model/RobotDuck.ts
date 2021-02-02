import Duck from "./Duck";
import { QuackWithSpeaker } from "./common/ConcreteQuack";
import { FlyWithTurbine } from "./common/ConcreteFly";

export default class RobotDuck extends Duck {
    constructor() {
        super(new QuackWithSpeaker(), new FlyWithTurbine());
    }
}