const Buttons = (props) => {
  return (
    <div className="buttons">
      <button className="top" onClick={props.clear}>
        AC
      </button>
      <button className="top" onClick={props.MinusPlus}>
        +/-
      </button>
      <button className="top" onClick={props.GetPercentage}>
        %
      </button>
      <button value="/" className="cal" onClick={props.getOperation}>
        &#247;
      </button>
      <button value="7" className="num" onClick={props.getValue}>
        7
      </button>
      <button value="8" className="num" onClick={props.getValue}>
        8
      </button>
      <button value="9" className="num" onClick={props.getValue}>
        9
      </button>
      <button value="*" className="cal" onClick={props.getOperation}>
        x
      </button>
      <button value="4" className="num" onClick={props.getValue}>
        4
      </button>
      <button value="5" className="num" onClick={props.getValue}>
        5
      </button>
      <button value="6" className="num" onClick={props.getValue}>
        6
      </button>
      <button value="-" className="cal" onClick={props.getOperation}>
        -
      </button>
      <button value="1" className="num" onClick={props.getValue}>
        1
      </button>
      <button value="2" className="num" onClick={props.getValue}>
        2
      </button>
      <button value="3" className="num" onClick={props.getValue}>
        3
      </button>
      <button value="+" className="cal" onClick={props.getOperation}>
        +
      </button>
      <button value="0" className="zero" onClick={props.getValue}>
        0
      </button>
      <button value="." className="num" onClick={props.getValue}>
        .
      </button>
      <button value="=" className="cal" onClick={props.GetResult}>
        =
      </button>
    </div>
  );
};

export default Buttons;
