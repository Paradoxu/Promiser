/**
 * @author - Leo Letto
 * @description - A simple wrapper that can make your promises look way more pretty without callbacks!
 */
export class Promiser<T extends unknown>{
    private _promise: Promise<T>;
    private _resolver!: (v?: T | PromiseLike<T> | undefined) => void;
    private _reject!: (error?: any) => void;

    private _isResolved: boolean = false;

    constructor() {
        this._promise = new Promise<T>((res, rej) => {
            this._resolver = res;
            this._reject = rej;
        });
    }

    /**
     * Return the promise created for this instance
     */
    public get promise(): Promise<T> {
        return this._promise;
    }

    /**
     * Resolve the promise created for this instance and mark it as completed
     */
    public resolve = (value?: T | undefined): void => {
        this.checkSolved();

        this._isResolved = true;
        this._resolver(value);
    }

    /**
     * Reject the promise created for this instance and mark it as completed
     */
    public reject = (error?: any): void => {
        this.checkSolved();

        this._isResolved = true;
        this._reject(error);
    }

    /**
     * Check if the promise has already been solved, and throw and Error if it's solved
     */
    private checkSolved = () => {
        if (this._isResolved)
            throw new Error('Promise already solved');
    }

    /**
     * @returns true if the promise created for this instance has already been completed
     */
    public get isSolved(): boolean {
        return this._isResolved;
    }
}