var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function () {
        var searchText = this.refs.searchText.value;
        var showCompleted = this.refs.showCompleted.checked;
        this.props.onSearch(showCompleted, searchText);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" onChange={this.handleSearch} placeholder="Search tasks" />
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;