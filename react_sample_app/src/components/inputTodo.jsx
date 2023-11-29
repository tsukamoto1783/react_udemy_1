const style = {
    backgroundColor: " #c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
};

export const InputTodo = (props) => {
    // NOTE: 関数を受け取るのかコンポーネント内で定義するかはケースバイケース
    // state変更を行う処理なら、関数を渡す方が良い場合が多いかも
    const { todoText, onChange, onClick, disabled } = props;

    return (
        // NOTE:最近だとtailwindとか使うのが主流なのであまりベタ書きはしない
        <div style={style}>
            <input
                type="text"
                placeholder="TODOを入力"
                onChange={onChange}
                value={todoText}
                disabled={disabled}
            />
            <button
                onClick={onClick}
                disabled={disabled}
            >
                追加
            </button>
        </div>
    );
};