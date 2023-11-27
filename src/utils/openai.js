import OpenAI from 'openai';

import { NETFLIX_GPT_OPENAI_API_KEY } from './constants';

const openai = new OpenAI({
  apiKey: NETFLIX_GPT_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
