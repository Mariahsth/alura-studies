import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Relogio from "./Relogio";
import './style.scss';

interface Props {
    selecionado:ITarefa | undefined
    finalizarTarefa: () => void;
}

export default function Cronometro ({selecionado, finalizarTarefa} : Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
        
    }, [selecionado])

    function regressiva(contador:number = 0){
        setTimeout( () => {
            if (contador>0){
                setTempo(contador-1);
                return regressiva(contador-1);
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className="cronometro">
            <p className="tituloCronometro">Escolha um card e inicie o cronometro</p>
            <div className="relogioWrapper"> 
                <Relogio tempo={tempo}/>

            </div>
            <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
        </div>
    )
}