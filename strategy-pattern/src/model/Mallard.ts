import Duck from "./Duck";
import { QuackWithSyrinx } from "./common/ConcreteQuack";
import { FlyWithWings } from "./common/ConcreteFly";

export default class Mallard extends Duck {
    constructor() {
        super(new QuackWithSyrinx(), new FlyWithWings());
    }
}