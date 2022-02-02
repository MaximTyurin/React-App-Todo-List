import React from 'react';
import './SearchPanel.css';

class SearchPanel extends React.Component {
    state = {
        term: '',
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };
    render() {
        return (
            <input
                className='form-control search-input'
                placeholder='Search'
                type='text'
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }
}

export default SearchPanel;
