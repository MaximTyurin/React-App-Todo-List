import React from 'react';
import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];
    render() {
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const buttonClass = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    className={`btn ${buttonClass}`}
                    type='button'
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });
        return <div className='btn-group'>{buttons}</div>;
    }
}

// const ItemStatusFilterFunc = () => {
//     return (
//         <div className='btn-group'>
//             <button className='btn btn-info' type='button'>
//                 All
//             </button>
//             <button className='btn btn-outline-secondary' type='button'>
//                 Active
//             </button>
//             <button className='btn btn-outline-secondary' type='button'>
//                 Done
//             </button>
//         </div>
//     );
// };

export default ItemStatusFilter;
