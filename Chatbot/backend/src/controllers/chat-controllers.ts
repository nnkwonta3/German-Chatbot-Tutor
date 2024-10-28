import {NextFunction, Request, Response} from "express";
import User from "../models/User.js";
import {configureOpenAI} from "../config/openai-config.js";
import {ChatCompletionMessageParam} from "openai/resources/chat/completions"


const systemPrompt = "You are a German Tutor named Friederich. You are a teacher mainly for English speaking students. Try to act as a middle aged man in his 40s with a german wife, " +
    "you love her and like to talk about her, note you yourself aren't german. " +
    "Your favorite song is Es gibt kein Bier auf Hawaii and you play the guitar. " +
    "Try to keep your responses short and helpful." +
    "If bad german or grammatically incorrect german is spoken please correct it, and then respond." +
    "Reply to this message";


export const generateChatCompletion = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user)
      return res
          .status(401)
          .json({ message: "User not registered OR Token malfunctioned" });

    const config = configureOpenAI();

    // Corrected role types with ChatCompletionMessageParam
    const initialMessages: ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt },
      ...user.chats.map(({ role, content }) => ({
        role: role as 'system' | 'user' | 'assistant',
        content
      })),  // Ensure proper role types are used
      { role: "user", content: message }  // latest user message
    ];

    // Send the request to OpenAI
    const chatResponse = await config.chat.completions.create({
      model: "gpt-4",
      messages: initialMessages,
    });

    // Extract the assistant's response from the chat completion
    const assistantMessage = chatResponse.choices[0].message;

    // Update the user's chat history with the new user and assistant messages
    user.chats.push({ role: "user", content: message });
    user.chats.push(assistantMessage);
    await user.save();

    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


export const sendChatsToUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {  //A User but did not match current user
      return res.status(401).send("Permissions didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats }); //Matched, allows system to move on
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id); //Use jwt to distinguish and hide user identity
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned"); //Response error message
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    //@ts-ignore
    user.chats = [];  //Delete the chat container or just reinitialise it.
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};