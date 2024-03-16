interface speakFunctionParam {
    text: string;
    options?: {
        rate: number;
        pitch: number;
        volume: number;
    };
    onEnd?: (event: SpeechSynthesisEvent) => any;
    onError?: (error: Error | unknown) => any;
}
interface useSpeechSynthesisParam {
    lang: string;
    onVoiceGet?: onVoiceGetFunction;
}
type onVoiceGetFunction = (voices: SpeechSynthesisVoice[]) => any;
export type speechSynthesisErrorMsg = {
    [key in SpeechSynthesisErrorCode]: string;
};
export type speakFunction = (params: speakFunctionParam) => void;
export type useSpeechSynthesisType = (params: useSpeechSynthesisParam) => {
    speak: speakFunction;
};
export {};
