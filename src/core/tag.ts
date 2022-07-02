import { ID } from "./definitions";

export class Tag {
    id: ID;
    label: string;
    nodeIds?: ID[];
    parentId: string;

    constructor(id : ID, label: string) {
        this.id = id;
        this.label = label;
    }
}