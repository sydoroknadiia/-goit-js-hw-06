// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from './users.js';

const getSortedUniqueSkills = users => {
    const getSkills = users =>
    users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
    }, []);
    const skills = getSkills(users).sort().filter((first, second, skills) => skills.indexOf(first) === second);
    return skills;  
    };

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


  