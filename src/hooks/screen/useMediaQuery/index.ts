import { useEffect, useState } from "react"

export const useMediaQuery = (query = "(min-width:1024px)") => {

    const [match, setMatch] = useState(false)

    useEffect(() => {

        if (!query) {
            return
        }

        const updateMatch = (event: MediaQueryListEvent) => {
            setMatch(event.matches)
        }

        const mediaQuery = window.matchMedia(query)
        mediaQuery.addEventListener('change', updateMatch)

        return () => mediaQuery.removeEventListener('change', updateMatch)

    }, [query])

    return match

}