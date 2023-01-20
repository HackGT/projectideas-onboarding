import { Heading, Button, Text } from '@chakra-ui/react'
import "../card.css"

interface Props {
    title: string,
    description: string
}

function ProjectCard({title, description}: Props) {
    return(
        <div className = "card">
            <Heading className = "card--heading">{title}</Heading>
            <Text className = "card--text">{description}</Text>
            <Button className = "card--button">Remove</Button>
        </div>
    )
}

export default ProjectCard;
// TODO: Create ProjectCard component with props

// TODO: Create card with Chakra UI styling and display content

// TODO: Create method to delete idea on button click
