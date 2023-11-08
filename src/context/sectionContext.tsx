import { createContext } from "react";

type SectionContextType = {
    value: string;
    updateValue: (newValue: string) => void;
};

const SectionContext = createContext<SectionContextType | string>("");

export default SectionContext;