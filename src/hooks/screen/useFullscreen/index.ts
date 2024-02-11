import { useCallback, useEffect, useState } from "react"
import { useFullscreenType } from "./type"

export const useFullscreen : useFullscreenType = (navigationUI) => {

    const [isFullscreen, setIsFullscreen] = useState(false)

    const toggleFullscreen = useCallback(() => {

        const notFullscreen = !document.fullscreenElement
        if (notFullscreen) {
            document.body.requestFullscreen({ navigationUI: navigationUI || 'hide' })
        } else {
            document.exitFullscreen()
        }

    }, [navigationUI])

    useEffect(() => {

        const handleStateChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }

        document.addEventListener('fullscreenchange', handleStateChange)

        return () => document.removeEventListener('fullscreenchange', handleStateChange)

    }, [])

    return [ isFullscreen, toggleFullscreen ]

}