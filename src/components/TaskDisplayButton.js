import React from 'react';

class TaskDisplayButton extends React.Component {
  render() {
    return (
      <div className="btn-group" style={{ marginTop: 20 }}>
        <button
          id="btnAllTasks"
          type="button"
          className="btn btn-primary"
          onClick={this.props.onClickAll}
        >
          All tasks
        </button>
        <button
          id="btnCompletedTasks"
          style={{ marginRight: 10, marginLeft: 10 }}
          type="button"
          className="btn btn-primary"
          onClick={this.props.onClickComplete}
        >
          Completed tasks
        </button>
        <button
          id="btnPendingTasks"
          type="button"
          className="btn btn-primary"
          onClick={this.props.onClickPending}
        >
          Pending task
        </button>
      </div>
    );
  }
}

export default TaskDisplayButton;
