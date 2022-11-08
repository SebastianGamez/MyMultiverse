import Nodo from './nodo';

export default class LinkedList<T> {

    // Declare the pointer
    private p: Nodo<T> = null!;

    public add = (inf: T): void => {

        // Add the information in a new nodo
        let newNodo: Nodo<T> = new Nodo();
        newNodo.setInf(inf);

        // Add the first list nodo like reference in the new nodo
        newNodo.setRef(this.p);

        // Change the pointer direction to the new nodo linked with the list
        this.p = newNodo;

    }

    public get(position: number): T{

        // Declare an auxiliary pointer to handle the list without lost information
        let aux: Nodo<T>  = this.p;

        // Find the right position in the list
        let i: number = 0;
        while(i < position){
            aux = aux.getRef();
            i++;
        }

        return aux != null? aux.getInf(): null!;

    }

    public push = (inf: T): void => {

        // Add the information in a new nodo
        let newNodo: Nodo<T>  = new Nodo();
        newNodo.setInf(inf);

        // Verify if the list is void
        if(this.p == null){
            // The pointer will have the reference to the new nodo if the list is void
            this.p = newNodo;
            // If the list was void, the method would finish here
            return;
        }

        // Declare an auxiliary pointer to handle the list without lost information
        let aux: Nodo<T> = this.p;

        // Find the last nodo in the list
        while(aux.getRef() != null){
            aux = aux.getRef();
        }

        // Change the reference of the last nodo to the new nodo reference
        aux.setRef(newNodo);

    }

    public pop = (): T => {

        let value: T;

        if(this.p == null){
            value = null!;
        }
        else if(this.p.getRef() == null){
            value = this.p.getInf();
            this.p = null!;
        }
        else{

            let befAux: Nodo<T>  = new Nodo<T>();
            let aux: Nodo<T>  = this.p;

            while (aux.getRef() != null){
                befAux = aux;
                aux = aux.getRef();
            }

            value = aux.getInf();

            befAux.setRef(null!);

        }

        return value;

    }

    public remove = (value: T): void  => {

        if(this.p == null){
            this.p = null!;
            return;
        }

        if(this.p.getRef() == null && this.p.getInf() === value){
            this.p = null!;
            return;
        }

        let aux: Nodo<T>  = this.p;
        let befAux: Nodo<T>  = this.p;

        while(aux.getInf() !== value && aux.getRef() != null){
            befAux = aux;
            aux = aux.getRef();
        }

        befAux.setRef(null!);

    }

    public delete = (): T  => {

        let aux: Nodo<T>  = this.p;

        if(aux == null){
            return null!;
        }

        if(aux.getRef() == null){
            this.p = null!;
            return aux.getInf();
        }

        let result: T  = aux.getInf();
        this.p  = aux.getRef();

        return result;
    }

    public clear = (): void => {
        this.p = null!;
    }

    public set = (position: number, value: T): void  => {

        // Declare an auxiliary pointer to handle the list without lost information
        let aux: Nodo<T>  = this.p;

        // Find the right position in the list
        for (let i: number = 0; i < position; ++i) aux = aux.getRef();

        aux.setInf(value);

    }

    public length = (): number => {

        let length: number = 0;

        let aux: Nodo<T> = this.p;
        if(aux == null){
            return length;
        }

        ++length;

        while (aux.getRef() != null){
            aux = aux.getRef();
            ++length;
        }

        return length;

    }

    public isEqual = (linkedList: LinkedList<T> ): boolean  => {

        let length: number = linkedList.length();

        if(length !== this.length()){
            return false;
        }

        let aux: Nodo<T>  = this.p;
        let isEqual: boolean  = true;
        for (let i: number = 0; i < length; ++i){

            if(aux.getInf() !== linkedList.get(i)){
                isEqual = false;
                break;
            }

            aux = aux.getRef();

        }

        return isEqual;

    }

    public indexOf = (value: T): number  => {

        let result: number = -1;

        let aux: Nodo<T> = this.p;
        if(aux == null){
            return result;
        }

        let found: boolean  = false;
        while (aux.getRef() != null){
            ++result;
            if(aux.getInf() === value) {
                found = true;
                break;
            }
            aux = aux.getRef();
        }

        if(aux.getRef() == null && aux.getInf() === value){
            return ++result;
        }

        return (found)? result : -1;

    }

    public toString = (): string => {

        // Verify if the list is void
        if(this.p == null){
            return "[]";
        }

        // Create a string tho show the information
        let list: string = "[";

        // Declare an auxiliary pointer to handle the list without lost information
        let aux: Nodo<T>  = this.p;
        while(aux.getRef() != null){
            list += aux.getInf() + ",";
            aux = aux.getRef();
        }
        list += aux.getInf() + "]";

        return list;

    }
}