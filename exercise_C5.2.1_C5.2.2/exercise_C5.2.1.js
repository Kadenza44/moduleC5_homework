const parser = new DOMParser();

const xmlDocument = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;



const xmlDom = parser.parseFromString(xmlDocument, 'text/xml');

const listNode = xmlDom.querySelectorAll('list');
const studentNode = xmlDom.querySelectorAll('student');
const nameNode = xmlDom.querySelectorAll('name');
const firstNode = xmlDom.querySelectorAll('first');
const secondNode = xmlDom.querySelectorAll('second');
const ageNode = xmlDom.querySelectorAll('age');
const profNode = xmlDom.querySelectorAll('prof');


let langAttr = [];
nameNode.forEach(function(name){
    langAttr.push(name.getAttribute('lang'))
});


let studentArry = [];
for(i=0; i<studentNode.length; i++){
    let student = {
        name: firstNode[i].textContent + ' ' + secondNode[i].textContent,
        age: ageNode[i].textContent,
        prof: profNode[i].textContent,
        lang: langAttr[i]
    };
    studentArry.push(student);
};

const result = {
    list: studentArry
}


console.log('exercise_C5.2.1\n', result);