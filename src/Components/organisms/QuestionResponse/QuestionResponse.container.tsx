import React from "react"
import { useSelector } from "react-redux"

import { Box, Heading, ImageWrapper } from "Components/atoms"
import { AudioResponse, CodeBlock } from "Components/molecules"
import { selectImage, selectResponses } from "Features/dialogue"

const QuestionResponseContainer: React.FC = () => {
  const image = useSelector(selectImage)
  const responses = useSelector(selectResponses)

  const latestResponse = responses.reverse()[0]

  return (
    <>
      <Box>
        <Heading as="h3" variant="heading.h3">
          The answer
        </Heading>
        {image && <ImageWrapper src={image.url} alt="User upload" />}
        <AudioResponse message={latestResponse.response} />
        <CodeBlock>{JSON.stringify(latestResponse, null, 2)}</CodeBlock>
      </Box>
    </>
  )
}

export default QuestionResponseContainer