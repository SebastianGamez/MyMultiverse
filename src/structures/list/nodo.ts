export default class Nodo<T>{

    // Properties
    info: T = null!;
    ref: Nodo<T> = null!;

    // Getters
    getInf = (): T => this.info;
    getRef = (): Nodo<T> => this.ref;

    // Setters
    setInf = (info: T): T => this.info = info;
    setRef = (ref: Nodo<T>): Nodo<T> => this.ref = ref;

}
