import React from 'react'
import { OPENAI_API_KEY } from './constants'
import OpenAI from "openai"

console.log(OPENAI_API_KEY)

const openAI = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export default openAI