class Todo {
    constructor(title, dueDate, priority) {
        this.title = title
        this.dueDate = dueDate
        this.isChecked = false;
        this.priority = priority
    }
    check() {
        this.isChecked = true;
    }
    uncheck() {
        this.isChecked = false;
    }
}

let toDOList = {
    personal: [],
    work: [],
    grocery: [],
}