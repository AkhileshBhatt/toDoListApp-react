import React from 'react';

class TaskList extends React.Component {
  render() {
    let list =
      this.props.tasks.length > 0
        ? this.props.tasks.map(task => {
            return (
              <a>
                <li
                  key={task.taskId}
                  style={
                    task.taskCompleted
                      ? { textDecoration: 'line-through' }
                      : { textDecoration: '' }
                  }
                  onClick={() => this.props.onClickOfTask(task)}
                >
                  {task.taskName}
                </li>
              </a>
            );
          })
        : '';

    return (
      <div
        style={{
          marginTop: 20,
          fontSize: 20,
          textDecoration: ''
        }}
      >
        <ul
          style={{
            listStyleType: 'none'
          }}
        >
          {list}
        </ul>
      </div>
    );
  }
}

export default TaskList;
