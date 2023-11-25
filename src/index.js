// import "./styles.css";

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // 未完了リストに追加
    createIncompleteTodo(inputText);
}

const createIncompleteTodo = (todo) => {
    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    // button(完了)生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const moveTarget = completeButton.closest("li");

        // 削除ボタンと完了ボタンを削除
        completeButton.nextElementSibling.remove();
        completeButton.remove();

        // 戻すボタンを生成して追加
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            // TODOの内容を取得し、未完了リストに追加
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);

            // ボタンが所属しているliを削除
            // moveTarget.remove();
            backButton.closest("li").remove();

        });
        moveTarget.firstElementChild.appendChild(backButton);

        // 完了リストに追加（Elementはアドレスを参照しているので、消さずとも移動される）
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    // button(削除)生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除
        // MEMO: 素のJSだとHTMLのコードありきのJS処理になっているので、保守などが悪いのが特徴。
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    // 要素の設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 画面に追加する処理
    document.getElementById("incomplete-list").appendChild(li);

}

document.getElementById("add-button").addEventListener("click", onClickAdd);