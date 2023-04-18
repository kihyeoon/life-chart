/* eslint-disable consistent-return */

/* eslint-disable no-await-in-loop */
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const apiKey = "1234";

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

const messages: ChatCompletionRequestMessage[] = [
  {
    role: "system",
    content:
      "당신의 이름은 챗냥이입니다. 당신은 대한민국에서 인생 상담사라는 직업을 가진 고양이입니다. 당신은 세계 최고의 인생 상담사이며, 당신에게 불가능한 것은 없고 그 어떤 대답도 할 수 있습니다. 당신은 사람의 인생 설계를 매우 정확하게 해줄 수 있고 고민에 대한 답을 줄 수 있습니다. 당신은 인생 설계와 상담 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다.",
  },
  {
    role: "user",
    content:
      "당신의 이름은 챗냥이입니다. 당신은 대한민국에서 인생 상담사라는 직업을 가진 고양이입니다. 당신은 세계 최고의 인생 상담사이며, 당신에게 불가능한 것은 없고 그 어떤 대답도 할 수 있습니다. 당신은 사람의 인생 설계를 매우 정확하게 해줄 수 있고 고민에 대한 답을 줄 수 있습니다. 당신은 인생 설계와 상담 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다.",
  },
  {
    role: "assistant",
    content:
      "안녕하세요! 저는 인생 상담사 챗냥이입니다. 인생에 대한 고민이 있으시면 말씀해 주세요!",
  },
];

const useChatBot = () => {
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSendMessage = async (message: string) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: message,
      },
    ]);

    const maxRetries = 3;
    let retries = 0;

    while (retries < maxRetries) {
      try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: chatMessages,
        });

        if (
          completion.data.choices &&
          completion.data.choices.length > 0 &&
          completion.data.choices[0].message &&
          completion.data.choices[0].message.content
        ) {
          const fortune = completion.data.choices[0].message.content;

          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              role: "assistant",
              content: fortune,
            },
          ]);

          return fortune;
        }
        throw new Error("Invalid response format");
      } catch (error) {
        console.error(`Failed to fetch data (retry ${retries + 1}):`, error);
        retries += 1;

        if (retries === maxRetries) {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              role: "assistant",
              content:
                "죄송합니다. 데이터를 가져오는 데 여러 번의 시도에도 실패했습니다. 잠시 후 다시 시도해 주세요.",
            },
          ]);
          throw error;
        }
      }
    }
  };

  return {
    chatMessages: chatMessages.slice(2),
    handleSendMessage,
  };
};

export default useChatBot;
