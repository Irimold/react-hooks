"use client"

import { useCallback, useEffect, useRef } from "react";
import { speakFunction, useSpeechSynthesisType } from "./type";
import { SpeechSynthesisErrorMsg } from "./constant";

export const useSpeechSynthesis : useSpeechSynthesisType = ({
    lang, 
    onVoiceGet
}) => {

    const voices    = useRef<SpeechSynthesisVoice[]>([])
    const synth     = useRef<SpeechSynthesis>()

    const speak = useCallback<speakFunction>(({
        text,
        options = {
            rate: .75,
            pitch: 1,
            volume: 1,
        },
        onEnd,
        onError,
    }) => {

        try {
            if (!text) {
                throw new Error('Invalid text')
            }
    
            if (!voices.current.length) {
                throw new Error('No voice available')
            }

            const utterance = new SpeechSynthesisUtterance(text)
            utterance.pitch     = options.pitch
            utterance.rate      = options.rate
            utterance.volume    = options.volume
            utterance.voice     = voices.current[0]

            utterance.addEventListener('error', handleSpeakError)
            
            if (typeof onEnd == 'function') {
                utterance.addEventListener('end', onEnd)
            }
            
        } catch (error) {
            console.error(error)

            if (typeof onError == 'function') {
                onError(error)
            }
        }

    }, [])

    const getVoices = useCallback(() => {

        if (!lang) {
            console.error('Lang is undefined')
            return
        }

        const filteredVoice = speechSynthesis.getVoices().filter((voice) => (
            voice.lang == lang && (
                voice.name.includes('Google') ||
                voice.name.includes('Natural')
            )
        ))

        voices.current = filteredVoice

        if (typeof onVoiceGet == 'function') {
            onVoiceGet(filteredVoice)
        }

    }, [])

    const handleSpeakError = useCallback((event : SpeechSynthesisErrorEvent) => {

        throw new Error(SpeechSynthesisErrorMsg[event.error])

    }, [])



    useEffect(() => {
        
        synth.current = speechSynthesis
        getVoices()

    }, [])


    return { speak }

}