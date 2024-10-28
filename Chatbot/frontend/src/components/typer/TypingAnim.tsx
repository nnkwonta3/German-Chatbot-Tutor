import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Learn German With OpenAI",
        1000,
        "Built With OpenAI",
        2000,
        "Your Own Customized German Tutor",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "#E1C16E",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
