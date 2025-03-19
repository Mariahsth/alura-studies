import "./style.scss";
import Item from "./Item/index";
import { ITarefa } from "../../types/tarefa";

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {

  return (
    <aside className="listaTarefas">
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item) => {
          return <Item 
          {...item} 
          key={item.id} 
          selecionaTarefa={selecionaTarefa}
          />;
        })}
      </ul>
    </aside>
  );
}

export default Lista;
