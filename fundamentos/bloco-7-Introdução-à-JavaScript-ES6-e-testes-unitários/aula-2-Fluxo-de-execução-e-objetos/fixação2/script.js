const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', 
};

const devSkills = (object) => {
    const array = Object.keys(object);
    for (const index in array) {
        console.log(`${array[index]}, Level: ${object[array[index]]}`);
    }
}

devSkills(student1);
devSkills(student2);