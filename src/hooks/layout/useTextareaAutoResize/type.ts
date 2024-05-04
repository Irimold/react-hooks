import { MutableRefObject } from "react";

interface useTextareaAutoResizeParams {
    textareaRef : MutableRefObject<HTMLTextAreaElement | null>
    disable?    : boolean
    minHeight?  : number
    borderWidth?: number
}

export type useTextareaAutoResizeType = (params : useTextareaAutoResizeParams, dependencies? : any[]) => void