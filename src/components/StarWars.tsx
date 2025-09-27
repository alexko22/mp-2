import type {SW_Char} from "../interfaces/SW_Char.ts";
import styled from "styled-components";

const StarWarsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: beige;
    padding-bottom: 3%;
`;

const CharImage = styled.img`
    width: 40%;
    border: 5px solid darkblue;
`

const CharDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1%;
    padding-right: 1%;
`

const CharH1 = styled.h1`
    padding-top: 1%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Desc = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(5px + 1vw);
    text-align: center;
    padding-top: 1%;
    padding-bottom: 2%;
`

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