"use client"

import { useLayoutEffect } from "react"
import { useTextareaAutoResizeType } from "./type"

export const useTextareaAutoResize : useTextareaAutoResizeType = ({
    textareaRef,
    disable     = false,
    minHeight   = 80,
    borderWidth = 0
}, dependencies = []) => {
    useLayoutEffect(() => {
        const textarea = textareaRef.current
        if (!textarea) {
            return
        }

        if (disable) {
            return
        }

        textarea.style.height = 'inherit'

        let newHeight = textarea.scrollHeight + (borderWidth * 2)
        if (newHeight < minHeight) {
            newHeight = minHeight
        }

        textarea.style.height = `${newHeight}px`
    }, dependencies)
}