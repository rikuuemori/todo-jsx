import "./styles.css";

export const Todo = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <p>TODOです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>TODOです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>
            <p>TODOでした</p>
            <button>戻す</button>
          </li>
          <li>
            <p>TODOでした</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
