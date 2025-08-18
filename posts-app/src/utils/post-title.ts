export default class PostTitle {
    public value: string;

    constructor(value: string) {
        this.isValid(value)
        this.value = value
    }

    private isValid(value: string) {
        if (value.length  >=  15) {
            throw new Error("Invalid post format")
        }
    }
}