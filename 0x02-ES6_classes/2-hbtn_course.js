export default class HolbertonCourse {
  /**
   * Creates a new person.
   * @param {String} name - course name.
   * @param {Number} length - course length.
   * @param {Array} student - name of students.
   */
  constructor(name, length, student) {
    this._name = name;
    this._length = length;
    this._student = student;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get student() {
    return this._student;
  }

  set student(student) {
    this._student = student;
  }
}
