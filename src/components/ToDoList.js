import React from 'react';
import TaskDisplayButton from './TaskDisplayButton';
import TaskList from './TaskList';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      tasks: [],
      allTasks: [],
      pendingTask: [],
      completedTask: [],
      count: null
    };
  }

  componentDidMount() {
    const allTasks = this.state.tasks.map(task => task);
    this.setState({
      allTasks
    });

    this.getStatusOfTasks();
  }

  getStatusOfTasks() {
    const allTasks = this.state.tasks.map(task => task);

    const completedTask = this.state.allTasks
      .filter(task => task.taskCompleted === true)
      .map(task => task);

    const pendingTask = this.state.allTasks
      .filter(task => task.taskCompleted !== true)
      .map(task => task);

    this.setState(
      {
        tasks:
          this.state.buttonSelected === 'allTaskBtn'
            ? allTasks
            : this.state.buttonSelected === 'completedTaskBtn'
            ? completedTask
            : pendingTask,
        pendingTask,
        completedTask
      },
      () => this.setState({ count: this.state.tasks.length })
    );
  }

  onInputChange = event => {
    if (event.target.value.length > 0) {
      document.getElementById('addTaskButton').disabled = false;
    }
    this.setState({
      input: event.target.value
    });
  };

  onClickAddTask = () => {
    let newTask = {};

    if (this.state.input) {
      newTask = {
        taskName: this.state.input,
        taskId: this.state.allTasks.length,
        taskCompleted: false
      };

      this.setState(
        {
          allTasks: [...this.state.allTasks, newTask],
          pendingTask: [...this.state.pendingTask, newTask]
        },
        () =>
          this.setState({
            tasks: [...this.state.tasks, newTask],
            count: this.state.allTasks.length
          })
      );
    } else alert('Please enter the task name!!');
    document.getElementById('inputTextBox').value = null;
    document.getElementById('addTaskButton').disabled = true;
    this.onClickAll(); // to redirect to all task by default on adding any task
  };

  onClickOfTask = task => {
    let yahanTask = this.state.tasks;
    yahanTask = yahanTask.map(taskMap => {
      if (taskMap.taskId === task.taskId) {
        taskMap.taskCompleted = !taskMap.taskCompleted;
      }
      return taskMap;
    });

    this.setState({
      tasks: yahanTask
    });
    this.getStatusOfTasks();
  };

  onClickAll = () => {
    document.getElementById('btnAllTasks').className = 'btn btn-primary active';

    this.setState({
      tasks: this.state.allTasks,
      count: this.state.allTasks.length,
      buttonSelected: 'allTaskBtn'
    });
  };
  onClickComplete = () => {
    document.getElementById('btnAllTasks').className = 'btn btn-primary';
    this.setState({
      tasks: this.state.completedTask,
      count: this.state.completedTask.length,
      buttonSelected: 'completedTaskBtn'
    });
  };

  onClickPending = () => {
    document.getElementById('btnAllTasks').className = 'btn btn-primary';
    this.setState({
      tasks: this.state.pendingTask,
      count: this.state.pendingTask.length,
      buttonSelected: 'pendingTaskBtn'
    });
  };

  render() {
    // console.log('tasks value in render: ', this.state.tasks);
    return (
      <div
        className="container"
        style={{ marginTop: 10, alignItems: 'center' }}
      >
        <input
          id="inputTextBox"
          type="text"
          className="form-control"
          placeholder="Type the task name to add..."
          onChange={this.onInputChange}
        />

        <br />
        <button
          id="addTaskButton"
          style={{ width: 500, fontSize: 20 }}
          type="button"
          className="btn btn-primary"
          disabled={this.state.input.length > 0 ? false : true}
          onClick={this.onClickAddTask}
        >
          Add task
        </button>

        <div
          style={{
            marginTop: 10,
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'black'
          }}
        >
          <TaskList
            tasks={this.state.tasks}
            onClickOfTask={this.onClickOfTask}
            buttonSelected={this.buttonSelected}
          />

          <TaskDisplayButton
            onClickAll={this.onClickAll}
            onClickComplete={this.onClickComplete}
            onClickPending={this.onClickPending}
            // buttonSelected={this.state.buttonSelected}
          />
          <div>
            <h4>Task Count: {this.state.count}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;

// Dummy task data
// {
//   taskName: 'ek kaam',
//   taskId: 0,
//   taskCompleted: false
// },
// {
//   taskName: 'dusra kaam',
//   taskId: 1,
//   taskCompleted: false
// },
// {
//   taskName: 'le ek aur kaam',
//   taskId: 2,
//   taskCompleted: false
// }
