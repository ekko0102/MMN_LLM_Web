export let assistantId = "asst_H4JiVadUvQzVI77CrgsdOk62"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
