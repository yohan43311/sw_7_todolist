import { useState } from "react";
import { FiCheck, FiPlus } from "react-icons/fi";
import todoItemsDummy from "./assets/dummy/todoItems";

function App() {
  // ctrl + . , mac: cmd + .
  const [todoItems, setTodoItems] = useState(todoItemsDummy);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          padding: 20,
          height: "100%",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        {todoItems.map((item) => {
          return (
            <div key={item.id}>
              {!item.isDone && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{item.content}</div>
                  <div>
                    <FiCheck color="#666666" size={26} />
                  </div>
                </div>
              )}
              {item.isDone && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ textDecoration: "line-through", color: "#666666" }}
                  >
                    {item.content}
                  </div>
                  <div>
                    <FiCheck color="#CFFF48" size={26} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          width: 32,
          height: 32,
          borderRadius: 30,
          background: "#CFFF48",
          // text-align vs flex center
          // text-align: 인라인 요소, text를 정렬하는 속성
          // <div style={{ textAlign: 'center' }}> <div>텍스트</div> </div>
          // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <div>텍스트</div> </div>
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FiPlus color="#1E1E1E" size={24} />
      </div>
    </div>
  );
}

export default App;
