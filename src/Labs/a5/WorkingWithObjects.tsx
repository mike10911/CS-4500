import React, { useState } from "react";
function WorkingWithObjects() {
    // in WorkingWithObjects.ts, create a module state variable to test editing the module object on the server. Create an input field where we can type the new module name, and a link that invokes the route that updates the name. Confirm that you can change the module's name. Create routes and a corresponding UI that can modify the score and completed properties of the assignment object. In the React application, create an input field of type number where you can type the new score and an input field of type checkbox where you can select the completed property. Create a link that updates the score and another link that updates the completed property. For the module, create routes and UI to edit the module's description.

    const [module, setModule] = useState({
        id: 1,
        name: "NodeJS",
        description: "NodeJS is a runtime environment",
        course : "CS1000"
    });

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment">Get Assignment</a>
            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title">Get Title</a>
            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input
                type="text"
                onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
                value={assignment.title}
            />
           
            <h4>Modifying Score</h4>
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input
                type="number"
                onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })
                }
                value={assignment.score}
            />
            <h4>Modifying Completed</h4>
            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <input
                type="checkbox"
                onChange={(e) =>
                    setAssignment({ ...assignment, completed: e.target.checked })
                }
                checked={assignment.completed}
            />
            <h4>Retrieving Module</h4>
            <a href="http://localhost:4000/a5/module">Get Module</a>
            <h4>Retrieveing Module Name</h4>
            <a href="http://localhost:4000/a5/module/name">Get Module Name</a>
            <h4>Modifying Module Name</h4>
            <a href={`http://localhost:4000/a5/module/name/${module.name}`}>
                Update Module Name
            </a>
            <input
                type="text"
                onChange={(e) =>
                    setModule({ ...module, name: e.target.value })
                }
                value={module.name}
            />
            <h4>Modifying Module Description</h4>
            <a href={`http://localhost:4000/a5/module/description/${module.description}`}>
                Update Module Description
            </a>
            <input
                type="text"
                onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                }
                value={module.description}
            />
    
        </div>

    );
}
export default WorkingWithObjects;
