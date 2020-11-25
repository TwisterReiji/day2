let age15 = []
let age18Hn = []
class Student {
    name;
    classroom;
    age;
    villageE;
    village;
    constructor(name, classroom, age, village, villageE) {
        this.name = name
        this.classroom = classroom
        this.age = age
        this.village = village
        this.villageE = villageE
    }
}
class School {
    listStudent;
    constructor() {
        this.listStudent = []
    }

    addStudnet(student) {
        this.listStudent.push(student)

        if (student.age === 15) age15.push(student)
        // kiểm tra độ tuổi là 15 không?
        if (student.age === 18 && student.village.toLowerCase() === 'ha noi') age18Hn.push(student)
        // kiểm tra độ tuổi là 18 và ở hà nội không
    }
}

function show(a) {
    let b = document.querySelector('#show')
    b.innerHTML = ''
    if (a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            const c = a[i];
            b.innerHTML +=
                `
                    <div class='tp'>
                        <div>Họ và tên: ${c.name}</div>
                        <div>Tuổi: ${c.age}</div>
                        <div>Lớp: ${c.classroom}</div>
                        <div>Quê quán: ${c.villageE}</div>
                    </div>
        `
        }
    }
    else b.innerHTML = 'Không tìm thấy học sinh'
}

function addStudent() {
    let name = prompt('Nhập tên học sinh mới')
    let age = Number(prompt('Tuổi của học sinh'))
    let classroom = prompt('Tên lớp')
    let village = prompt('Quê quán không dấu')
    let villageE = prompt('Quê quán có dấu')
    const n = new Student(name, classroom, age, village, villageE)
    school.addStudnet(n)
    show(school.listStudent)
}
const school = new School()
const c1 = new Student('Phạm Lan Thanh', 'AT16A', 15, 'Vinh Phuc', 'Vĩnh Phúc')
const c2 = new Student('Nguyễn Thành Vinh', 'AT16B', 18, 'Ha Noi', "Hà Nội")
school.addStudnet(c1)
school.addStudnet(c2)
show(school.listStudent)

function ht() {
    show(school.listStudent)
}

function enterLogin(e, t) {
    if (e.key === 'Enter') tk();
}

function y() {
    show(age15)
}

function yHN() {
    show(age18Hn)
}

function tk() {
    show(sreach())
}

function sreach() {
    let s=[]
    let a = document.querySelector('#sreach').value.trim()
    for (let i = 0; i < school.listStudent.length; i++) {
        if (a.toLowerCase() === school.listStudent[i].name.toLowerCase()) {
            s.push(school.listStudent[i])
        }

    } return s
}
