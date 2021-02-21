const jsonDocument = `
{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`

   

const data = JSON.parse(jsonDocument)

console.log('exercise_5.2.2\n',data)