import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector(
        (state: KanbasState) => state.modulesReducer.modules
    );
    const module = useSelector(
        (state: KanbasState) => state.modulesReducer.module
    );
    const dispatch = useDispatch();
    const addModuleFactory: any = (module: any) => {
        return dispatch(addModule(module));
    };
    const deleteModuleFactory: any = (moduleId: string) => {
        dispatch(deleteModule(moduleId));
    };
    const updateModuleFactory: any = (module: any) => {
        dispatch(updateModule(module));
    };
    const setModuleFactory: any = (module: any) => {
        dispatch(setModule(module));
    };

    return (
        <>
            {
                <>
                    <button className="button-general" type="button">
                        Collapse All
                    </button>
                    <button className="button-general" type="button">
                        View Progress
                    </button>
                    <label htmlFor="select-one-genre"></label>
                    <select className="dropdown" id="select-one-genre">
                        <option value="WEEK0">Week 0</option>
                        <option value="WEEK1">Week 1</option>
                        <option value="LEARNING OBJECTIVES" selected>
                            Publish All
                        </option>
                    </select>
                    <button className="button-general" type="button">Module</button>
                </>
            }
            <hr />
            <div className="btn-group">
            <button
                onClick={() => {
                    addModuleFactory({ ...module, course: courseId });
                }}
                className="button-add"
            >
                + Add
            </button>
            <button
                className="button-general"
                onClick={() => updateModuleFactory(module)}
            >
                Update
            </button>
            </div>
            <div className="form-group">
            <input
                value={module.name}
                onChange={(e) =>
                    setModuleFactory({
                        ...module,
                        name: e.target.value,
                    })
                }
                className="form-control"
            />
            <textarea
                value={module.description}
                onChange={(e) =>
                    setModuleFactory({
                        ...module,
                        description: e.target.value,
                    })
                }
                className="form-control"
            />
            </div>
            <ul className="list-group wd-modules">
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module) => (
                      <>
                      <div className="btn btn-group">
                      <button
                        className="button-general"
                        onClick={() => deleteModuleFactory(module._id)}
                      >
                        Delete
                      </button><button
                        onClick={(event) => {
                          setModuleFactory(module);
                        } }
                        className="button-general"
                      >
                          Edit
                        </button>
                      </div>
                        <li className="list-group-item">
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
                                name: string |
                                number |
                                boolean |
                                React.ReactElement<
                                  any, string |
                                  React.JSXElementConstructor<any>
                                > |
                                Iterable<React.ReactNode> |
                                React.ReactPortal |
                                null |
                                undefined;
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
                        </li></>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;
