
import React from 'react';

function UserCard({ name, age, status }) {

    return (
        <div style={cardStyles.container}>
            {/* User Information Section */}
            <div style={cardStyles.userInfo}>
                <h3 style={cardStyles.userName}>{name}</h3>
                <p style={cardStyles.userAge}>العمر / Age: {age} years</p>
            </div>

            {/* Status Section with Conditional Rendering */}
            <div style={cardStyles.statusContainer}>
                <span
                    style={{
                        ...cardStyles.statusIndicator,
                        backgroundColor: status ? '#4CAF50' : '#f44336',
                        boxShadow: status
                            ? '0 0 10px rgba(76, 175, 80, 0.6)'
                            : '0 0 10px rgba(244, 67, 54, 0.6)'
                    }}
                ></span>

                <span style={cardStyles.statusText}>
                    {status ? ' متصل / Online' : ' غير متصل / Offline'}
                </span>
            </div>
        </div>
    );
}

const cardStyles = {
    container: {
        background: 'white',
        border: '2px solid #e0e0e0',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    },
    userInfo: {
        marginBottom: '15px'
    },
    userName: {
        color: '#333',
        fontSize: '1.4rem',
        margin: '0 0 8px 0'
    },
    userAge: {
        color: '#666',
        fontSize: '1rem',
        margin: '0'
    },
    statusContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5'
    },
    statusIndicator: {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        display: 'inline-block',
        animation: 'pulse 2s infinite'
    },
    statusText: {
        fontWeight: '600',
        color: '#333'
    }
};

export default UserCard;
