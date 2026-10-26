
"use client"

import {
  TypingText as AnimateTypingText,
  TypingTextCursor,
} from "@animate-ui/react/primitives/texts/typing"

export default function TypingText({
  text = ["Design", "Build", "Ship"],
  className = "",
  cursorClassName = "",
  delay = 0,
  holdDelay = 1000,
  loop = true,
  cursor = true,
}) {
  return (
    <AnimateTypingText
      key={`${JSON.stringify(text)}-${delay}-${holdDelay}-${loop}`}
      text={text}
      delay={delay}
      holdDelay={holdDelay}
      loop={loop}
      className={className}
    >
      {cursor && (
        <TypingTextCursor
          className={`ml-1 inline-block h-[1em] w-[3px] rounded-full bg-current align-middle ${cursorClassName}`}
        />
      )}
    </AnimateTypingText>
  )
}
