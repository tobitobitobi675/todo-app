import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import './App.css';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    activeCount,
    completedCount,
    totalCount,
  } = useTodos();

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">TODO</h1>
          {totalCount > 0 && (
            <p className="stats">
              残り <strong>{activeCount}</strong> 件 / 合計 {totalCount} 件
            </p>
          )}
        </header>

        <TodoInput onAdd={addTodo} />

        {totalCount > 0 && (
          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />
        )}

        {todos.length === 0 ? (
          <div className="empty-state">
            {totalCount === 0
              ? 'タスクがありません。上のフォームから追加してみましょう！'
              : 'このフィルターに該当するタスクはありません。'}
          </div>
        ) : (
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
