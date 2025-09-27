import type {SW_Char} from "../interfaces/SW_Char.ts";

export default function StarWars(props : { data:SW_Char[] } ){
    return (
        <div >
            {
                props.data.map((char: SW_Char) =>
                    <div key={char._id}>
                        <h1>{char.name}</h1>
                        <p>{char.description}</p>
                        <img src={char.image} alt={`${char.name}`} />
                    </div>
                )
            }
    </div>
    );
}