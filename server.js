import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: "where is nepal?",
    max_tokens: 700,
    temperature: 0,
  });

  console.log(completion.choices[0].text);
}
main();