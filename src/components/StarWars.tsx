// Alex Olson | alexko@bu.edu | MP-2
// StarWars.tsx (adapted closely from the professor's demo)

// import statements...
import type {SW_Char} from "../interfaces/SW_Char.ts";
import styled from "styled-components";

// custom designed div component for everything to go in
const StarWarsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: beige;
    padding-bottom: 3%;
`;

// custom Image component with better styling
const CharImage = styled.img`
    width: 40%;
    border: 5px solid darkblue;
`

// custom designed div component for each individual character
const CharDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1%;
    padding-right: 1%;
`

// another custom styled header component
const CharH1 = styled.h1`
    padding-top: 1%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

// paragraph component custom styled for each character's description
const Desc = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(5px + 1vw);
    text-align: center;
    padding-top: 1%;
    padding-bottom: 2%;
`

// main file function followed closely from the demo example...
export default function StarWars(props : { data:SW_Char[] } ){
    return (
        <StarWarsDiv>
            {
                props.data.map((char: SW_Char) =>
                    <CharDiv key={char._id}>
                        <CharH1>{char.name}</CharH1>
                        <Desc>{char.description}</Desc>
                        <CharImage src={char.image} alt={`${char.name}`} />
                    </CharDiv>
                )
            }
        </StarWarsDiv>
    );
}