import react from "react";

export const ChildContext = react.createContext({
    id: "", setActiveName: (name:string) => {},
    createWorkLink: "",
});