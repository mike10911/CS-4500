import React, { useState } from "react";

import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const [moduleList, setModuleList] = useState<any[]>(modules);
    const [module, setModule] = useState({
        _id : "1234",
        name: "New Module",
        description: "New Description",
        course: courseId,
        lessons: [
            { name: "New Lesson" },
            { name: "New Lesson" },
            { name: "New Lesson" },
        ],
    });
    const addModule = (module: any) => {
        const newModule = { ...module, _id: new Date().getTime().toString() };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };
    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId
        );
        setModuleList(newModuleList);
    };
    const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };

    return (
        <>
            {
                <>
                    <button type="button">Collapse All</button>
                    <button type="button">View Progress</button>
                    <label htmlFor="select-one-genre"></label>
                    <select id="select-one-genre">
                        <option value="WEEK0">Week 0</option>
                        <option value="WEEK1">Week 1</option>
                        <option value="LEARNING OBJECTIVES" selected>
                            Publish All
                        </option>
                    </select>
                    <button type="button">Module</button>
                </>
            }
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <button
                        onClick={() => {
                            addModule(module);
                        }}
                    >
                        Add
                    </button>
                    <button onClick={() => updateModule()}>
                        Update
                    </button>
                    <input
                        value={module.name}
                        onChange={(e) =>
                            setModule({
                                ...module,
                                name: e.target.value,
                            })
                        }
                    />
                    <textarea
                        value={module.description}
                        onChange={(e) =>
                            setModule({
                                ...module,
                                description: e.target.value,
                            })
                        }
                    />
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module) => (
                        <li className="list-group-item">
                            <button onClick={() => deleteModule(module._id)}>
                                Delete
                            </button>
                            <button
                                onClick={(event) => {
                                    setModule(module);
                                }}
                            >
                                Edit
                            </button>

                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>

                            <ul className="list-group">
                                {module.lessons?.map(
                                    (lesson: {
                                        name:
                                            | string
                                            | number
                                            | boolean
                                            | React.ReactElement<
                                                  any,
                                                  | string
                                                  | React.JSXElementConstructor<any>
                                              >
                                            | Iterable<React.ReactNode>
                                            | React.ReactPortal
                                            | null
                                            | undefined;
                                    }) => (
                                        <li className="list-group-item">
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;
