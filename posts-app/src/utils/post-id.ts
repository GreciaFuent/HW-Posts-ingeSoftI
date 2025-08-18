export default class PostId {
    public value: number;

    constructor(value: number) {
        this.isValid(value)
        this.value = value
    }

    private isValid(value: number) {
        if (typeof value === 'string') {
            throw new Error("Invalid post format")
        }
    }
}