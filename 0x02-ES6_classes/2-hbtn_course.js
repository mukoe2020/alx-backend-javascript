export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = name;
      this._length = length;
      this._students = students;
  
      if (typeof this._name !== 'string') {
        throw new TypeError('Name must be a string');
      }
  
      if (typeof this._length !== 'number' || this._length <= 0) {
        throw new TypeError('Length must be a number');
      }
  
      if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
        throw new TypeError('students must be an Array of Strings');
      }
    }
  
    // getter
    get name() {
      return this._name;
    }
  
    // setter
    set name(str) {
      this._name = str;
      if (typeof str !== 'string') {
        throw new TypeError('Name must be a string');
      }
    }
  
    get length() {
      return this._length;
    }
  
    set length(num) {
      this._length = num;
      if (typeof num !== 'number') {
        throw new TypeError('Length must be a number');
      }
    }
  
    get students() {
      return this._students;
    }
  
    set students(students) {
      if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
        throw new TypeError('students must be an Array of Strings');
      }
      this._students = students;
    }
  }