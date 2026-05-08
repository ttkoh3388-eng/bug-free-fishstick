let tasks = [
    {
        "id": 1,
        "name": "Wash the car",
        "dateDue": "2026-05-05",
        "urgency": 3
    },
    {
        "id": 2,
        "name": "Clean the room",
        "dateDue": "2026-05-31",
        "urgency": 1
    },
    {
        "id": 3,
        "name": "Buy cat food",
        "dateDue": "2026-05-25",
        "urgency": 5
    }
]

function displayTasks(tasks){

    let i = 0;
    while (i < tasks.length) {
        let currentTask = tasks[i];
        console.log(`${currentTask.id}.${currentTask.name} is due on ${currentTask.dateDue} with urgency ${currentTask.urgency}`);
        i++;
    }
}

    // tasks is the first parameter to be array in the function to store newTask
function addTask(tasks, newName, newDateDue, newUrgency){
    let newTask = {
        id: Math.floor(Math.random() * 10000) + 1,
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency
    }
    tasks.push(newTask);
}
       
addTask(tasks, "Clean the bathroom", "2026-05-04", 5);
displayTasks(tasks);