//concat; indexOF; lastIndexOf; split; includes.


// let firstName = 'Rafiq'
// let surName = 'Aliyev'
// let dateOfBirth = '19.03.2002'
// let job = 'Financer'
// let salary = 1000
// console.log();


const user = {
    firstNama: 'Ibrahim',
    lastName: 'Abilov',
    age: 22,
    address: {
        city: 'Baku',
        country: 'Az',
        street: 'JeferKhandan',
        some:{
            b: '172',
            m: '49'
        
        }
    },
    uni: 'UNEC',
    isADmin: false,
    salary: null,
    position: undefined
}
console.log(user.age);
console.log(user.street);
console.log(user.address.some.b);
delete user.salary
user.position='cyber'
console.log(user);
user.time = 'watch like 9pm'
user.uni = 'code'






