let taskTable = [];
let memoryTable = [];

const resetData = () => {
  taskTable = [
    {
      size: 2710,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 6580,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3610,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 5760,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 2030,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 7540,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 9140,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 420,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 5950,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 1380,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 6890,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 760,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3290,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 4190,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 8390,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3210,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3820,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 3930,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 9350,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 6990,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 8940,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 2550,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 740,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 7540,
      status: "En Espera",
      isFinished: false,
    },
    {
      size: 220,
      status: "En Espera",
      isFinished: false,
    },
  ];

  memoryTable = [
    {
      maxSize: 7600,
      currentSize: 7600,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 5000,
      currentSize: 5000,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 2100,
      currentSize: 2100,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 4700,
      currentSize: 4700,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 3250,
      currentSize: 3250,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 9400,
      currentSize: 9400,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 950,
      currentSize: 950,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 8300,
      currentSize: 8300,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 1600,
      currentSize: 1600,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
    {
      maxSize: 400,
      currentSize: 400,
      currentProcess: "Sin Uso",
      isWorking: false,
      numProcess: undefined,
    },
  ];
};

resetData();

//------------------Selectores----------------
const taskTableDom = document.getElementById("taskTable");
const memoryTableDom = document.getElementById("memoryTable");
const listItem = document.createElement("li");
const nextBtn = document.querySelector("#nextBtn");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

//------------------Funciones ---------
const clearTables = () => {
  while (taskTableDom.firstChild) {
    taskTableDom.removeChild(taskTableDom.firstChild);
  }
  while (memoryTableDom.firstChild) {
    memoryTableDom.removeChild(memoryTableDom.firstChild);
  }
};
const resetTables = () => {
  for (const task of taskTable) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(` ${taskTable.indexOf(task) + 1}.- ${task.size} - ${task.status}`)
    );

    if (task.status === "En Espera") {
      taskTableDom.appendChild(listItem).classList.add("list-group-item", "list-group-item-danger");
    } else if (task.status === "En Proceso") {
      taskTableDom.appendChild(listItem).classList.add("list-group-item", "list-group-item-warning");
    } else if (task.status === "Terminado") {
      taskTableDom.appendChild(listItem).classList.add("list-group-item", "list-group-item-success");
    }
  }
  for (const memory of memoryTable) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(` [${memoryTable.indexOf(memory) + 1}. ${memory.currentSize} de ${memory.maxSize} dips.] - ${memory.currentProcess}`
      )
    );
    if (memory.isWorking) {
      memoryTableDom.appendChild(listItem).classList.add("list-group-item", "list-group-item-warning");
    } else {
      memoryTableDom.appendChild(listItem).classList.add("list-group-item", "list-group-item-success");
    }
  }
};

const firstIteration = (task, memory) => {
  for (var taskTracker = 0; taskTracker < task; taskTracker++) {
    for (var memoryTracker = 0; memoryTracker < memory; memoryTracker++) {
 
      if (taskTable[taskTracker].size <= memoryTable[memoryTracker].maxSize &&!memoryTable[memoryTracker].isWorking) {
        memoryTable[memoryTracker].currentSize -= taskTable[taskTracker].size;
        memoryTable[memoryTracker].currentProcess = `Process No.${taskTable.indexOf(taskTable[taskTracker]) + 1} (${taskTable[taskTracker].size})`;
        memoryTable[memoryTracker].numProcess = taskTracker;
        taskTable[taskTracker].status = "En Proceso";
        memoryTable[memoryTracker].isWorking =!memoryTable[memoryTracker].isWorking;
        break;
      }
    }
  }

  clearTables();
  resetTables();
};

let stepTracker = 0
const nextIteration = () => {
if(stepTracker===10) stepTracker = 0;

  for (let i = stepTracker; i < stepTracker+1; i++) {
    
    if (memoryTable[i].isWorking) {
      memoryTable[i].isWorking = false;
      memoryTable[i].currentSize = memoryTable[i].maxSize;
      memoryTable[i].currentProcess = "Sin Uso";
      taskTable[memoryTable[i].numProcess].isFinished = true;
      taskTable[memoryTable[i].numProcess].status = "Terminado";
    }

    for (let j = 0; j < 25; j++) {
      if (!taskTable[j].isFinished &&taskTable[j].size <= memoryTable[i].maxSize &&!memoryTable[i].isWorking &&taskTable[j].status !== "En Proceso") {
        memoryTable[i].currentSize -= taskTable[j].size;
        memoryTable[i].currentProcess = `Process No.${taskTable.indexOf(taskTable[j]) + 1} (${taskTable[j].size})`;
        memoryTable[i].numProcess = j;
        taskTable[j].status = "En Proceso";
        memoryTable[i].isWorking = true;
      }
    }
  }
  stepTracker++
  clearTables();
  resetTables();

};

//----Para que aparezcan las tablas---
resetTables();

// Logic - Buttons

resetBtn.hidden = true;
nextBtn.hidden = true;

//start
startBtn.addEventListener("click", () => {
  firstIteration(25, 10);
  startBtn.hidden = true;
  resetBtn.hidden = false;
  nextBtn.hidden = false;
});
//next
nextBtn.addEventListener("click", () => {

  nextIteration();
});
//reset
resetBtn.addEventListener("click", () => {
  resetData();
  clearTables();
  resetTables();

  resetBtn.hidden = true;
  nextBtn.hidden = true;
  startBtn.hidden = false;
  stepTracker = 0
});
