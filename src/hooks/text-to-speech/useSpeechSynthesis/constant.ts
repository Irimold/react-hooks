import { speechSynthesisErrorMsg } from "./type";

export const SpeechSynthesisErrorMsg : speechSynthesisErrorMsg = {
    'audio-busy'            : 'Could not access audio device',
    'audio-hardware'        : 'Could not detect audio device',
    'canceled'              : 'Cancelled',
    'interrupted'           : 'Interrupted',
    'invalid-argument'      : 'Invalid options',
    'language-unavailable'  : 'No appropriate voice for current language',
    'network'               : 'You are not connected to internet',
    'not-allowed'           : 'The browser blocked the operation',
    'synthesis-failed'      : 'Failed to synthesis the voice',
    'synthesis-unavailable' : 'No synthesis engine available',
    'text-too-long'         : 'The inputted text is too long',
    'voice-unavailable'     : 'The selected voice is not available',
}