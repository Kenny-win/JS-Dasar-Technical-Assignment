/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE

// 1.  Type Error
//         = The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
//     Reference Error
//         = a reference error is thrown when a code attempts to reference a non-existing variable
//     Range Error
//         = The RangeError object indicates an error when a value is not in the set or range of allowed values
//     Syntax Error
//         = An exception caused by the incorrect use of a pre-defined syntax. Syntax errors are detected while compiling or parsing source code


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE

// 1. ReferenceError: Cannot access 'salaryWithConst' before initialization

// 2. Reference Error

// 3.  console.log(salaryWithVar) will console undefined because it was declare after console.log(). At that time variable salaryWithVar is also not defined that is why the program console is undefined
//     console.log(salaryWithConst) will console Reference Error because cannot console const before declare / initialization first

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;