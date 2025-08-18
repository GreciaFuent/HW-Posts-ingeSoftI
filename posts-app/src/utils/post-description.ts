export default class PostDescription {
    public value: string;

    constructor(value: string) {
        this.isValid(value)
        this.value = value
    }

    private isValid(value: string) {
        if (value.length  >=  35) {
            throw new Error("Invalid post format")
        }
    }
}